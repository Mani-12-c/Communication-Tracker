import React, { useState } from 'react';
import { createMethod } from '../../services/api'; 
import { useNavigate } from 'react-router-dom'; 
import '../../styles/forms.css' 

function CommunicationMethodForm() {
  const [newMethod, setNewMethod] = useState({
    name: '',
    description: '',
    sequenceOrder: 1,
    mandatory: false,
  });
  const navigate = useNavigate(); 

  const handleAddMethod = async (e) => {
    e.preventDefault();
    try {
      const response = await createMethod(newMethod);
      if(response)
      navigate('/methods');
      setNewMethod({
        name: '',
        description: '',
        sequenceOrder: 1,
        mandatory: false,
      });
    } catch (error) {
      console.error('Error creating method:', error);
    }
  };

  return (

    <><div className='f-container'>
    <div class="center">
      <h1>Add Method</h1>
      <form onSubmit={handleAddMethod}>
        <div class="inputbox">
          <input type="text" 
          required="required" 
          value={newMethod.name}
            onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
          />
          <span>Method Name</span>
        </div>
        <div className='inputbox'>
        <textarea
            value={newMethod.description}
            onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
          />
          <span>Description</span>
        </div>
        <div class="inputbox">
          <input type="number" 
          required="required"
          value={newMethod.sequenceOrder}
            onChange={(e) => setNewMethod({ ...newMethod, sequenceOrder: Number(e.target.value) })} 
          />
          <span>sequenceOrder</span>
        </div>
        <div class="inputbox">
        <input type="submit" />
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default CommunicationMethodForm;