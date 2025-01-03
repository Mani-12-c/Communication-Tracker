import React, { useState, useEffect } from 'react';
import { fetchCompanies, deleteCompany, updateCompany } from '../../services/api';
import '../../styles/card.css';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await fetchCompanies();
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    getCompanies();
  }, []);

  const handleDeleteCompany = async (id) => {
    try {
      await deleteCompany(id);
      setCompanies(companies.filter((company) => company._id !== id));
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  const handleEditClick = (company) => {
    setSelectedCompany(company);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCompany({ ...selectedCompany, [name]: value });
  };

  const handleSaveClick = async () => {
    try {
      await updateCompany(selectedCompany._id, selectedCompany);
      setCompanies((prevCompanies) =>
        prevCompanies.map((company) =>
          company._id === selectedCompany._id ? selectedCompany : company
        )
      );
      setShowEditModal(false);
      setSelectedCompany(null);
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };

  return (
    <>
      <h3>Companies List</h3>
      <div className="separator"></div>
      <div className="company-list">
        {companies.map((company) => (
          <div className="company-card" key={company._id}>
            <h2 className="company-name">{company.name}</h2>
            <p className="company-location">{company.location}</p>
            <a
              href={company.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn Profile
            </a>
            <div className="contact-info">
              <p>
                <strong>Emails:</strong>
              </p>
              <ul>
                {company.emails.map((email, index) => (
                  <li key={index}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Phone Numbers:</strong>
              </p>
              <ul>
                {company.phoneNumbers.map((phone, index) => (
                  <li key={index}>{phone}</li>
                ))}
              </ul>
            </div>
            <p className="comments">
              <strong>Comments:</strong> {company.comments}
            </p>
            <p className="communication-periodicity">
              <strong>Communication Periodicity:</strong> {company.communicationPeriodicity}
            </p>
            <div className="card-footer">
              <button onClick={() => handleDeleteCompany(company._id)}>Delete</button>
              <button onClick={() => handleEditClick(company)}>Edit</button>
            </div>
          </div>
        ))}
      </div>

      {showEditModal && selectedCompany && (
        <div className="modal">
          <h3>Edit Company</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={selectedCompany.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={selectedCompany.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="linkedinProfile"
            placeholder="LinkedIn Profile"
            value={selectedCompany.linkedinProfile}
            onChange={handleInputChange}
          />
          <textarea
            name="comments"
            placeholder="Comments"
            value={selectedCompany.comments}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="communicationPeriodicity"
            placeholder="Communication Periodicity"
            value={selectedCompany.communicationPeriodicity}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick} className="save-button">
            Save
          </button>
          <button onClick={() => setShowEditModal(false)} className="cancel-button">
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

export default CompanyList;
