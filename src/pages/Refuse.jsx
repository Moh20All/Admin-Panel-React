import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router

const Refuse = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  
  // Extract id_demande from URL parameters
  const { id } = useParams();
console.log(id)
  const handleRefuse = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/refuse/${id}`, {
        method: 'PUT', // Using PUT method for updating data
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optional: You can trigger the handleRefuse function on component mount
    // handleRefuse();
  }, []);

  return (
    <div>
      <button onClick={handleRefuse} disabled={loading}>
        {loading ? 'Processing...' : 'Refuse Request'}
      </button>
      {error && <p>Error: {error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Refuse;
