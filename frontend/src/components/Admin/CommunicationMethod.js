import React, { useState, useEffect } from 'react';
import { fetchMethods } from '../../services/api';
import '../../styles/methods.css'
function CommunicationMethodList() {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    const getMethods = async () => {
      try {
        const response = await fetchMethods();
        setMethods(response.data);
      } catch (error) {
        console.error('Error fetching methods:', error);
      }
    };
    getMethods();
  }, []);

  return (
    <div className="method-container">
      {methods.map((method, index) => (
        <div key={index} className="method-card">
          <div className="method-sequence">#{method.sequenceOrder}</div>
          <h2 className="method-name">
            {method.name}
            {method.mandatory && <span className="mandatory-flag">Mandatory</span>}
          </h2>
          <p className="method-description">{method.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CommunicationMethodList;