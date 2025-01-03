
import React, { useState } from 'react';
import { createCompany } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../../styles/forms.css' 

function AddCompany() {
  const [newCompany, setNewCompany] = useState({
     name: '',
     location: '',
     linkedinProfile: '',
     emails :[''],
     phoneNumbers:[''],
     comments:'',
     communicationPeriodicity:''
    });
  const navigate = useNavigate(); 

  const handleAddCompany = async () => {
    try {
      const response = await createCompany(newCompany);
      if(response){
        console.log(response.status);
      }
      navigate('/companies'); 
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
<>
    {
      <div className='f-container'>
          <div class="center">
            <h1>Add Company</h1>
            <form onSubmit={handleAddCompany}>
              <div className='input-flex'>
                  <div className="inputbox">
                  <input 
                  required="required"
                  type="text" 
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  /><span>Username</span>
                  </div>

                <div class="inputbox">
                  <input type="text" 
                  required="required"
                  value={newCompany.location}
                  onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
                />
                  <span>location</span>
                </div>

              </div>
              <div className='input-flex'>

                <div class="inputbox">
                  <input type="text" 
                  required="required"
                  value={newCompany.linkedinProfile}
                  onChange={(e) => setNewCompany({ ...newCompany, linkedinProfile: e.target.value })}
                />
                  <span>linkedinProfile</span>
                </div>

                <div class="inputbox">
                  <input type="text" 
                  required="required"
                  value={newCompany.emails}
                  onChange={(e) => setNewCompany({ ...newCompany, emails: e.target.value })}
                />
                  <span>Email</span>
                </div>
              </div>
              <div className='input-flex'>

                  <div class="inputbox">
                    <input type="text" 
                    required="required"
                    value={newCompany.phoneNumbers}
                    onChange={(e) => setNewCompany({ ...newCompany, phoneNumbers: e.target.value })}
                  />
                    <span>Phone Number</span>
                  </div>

                  <div class="inputbox">
                    <input type="text" 
                    required="required"
                    value={newCompany.comments}
                    onChange={(e) => setNewCompany({ ...newCompany, comments: e.target.value })}
                  />
                    <span>comments</span>
                  </div>
                </div>
              <div className='input-flex'>
                <div class="inputbox">
                  <input type="text" 
                  required="required"
                  value={newCompany.communicationPeriodicity}
                  onChange={(e) => setNewCompany({ ...newCompany, communicationPeriodicity: e.target.value })}
                />
                  <span>Communication Periodicity</span>
                </div>

                <div class="inputbox">
                  <input type="submit" />
                </div>
              </div>
                
            </form>
          </div>
        </div>
    }
    </>
  );
}

export default AddCompany;