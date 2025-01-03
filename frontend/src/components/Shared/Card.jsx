import React from "react";
import "../../styles/card.css";

const Card = ({ company }) => {
  return (
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
    </div>
  );
};

export default Card;
