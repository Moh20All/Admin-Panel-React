import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/get-demandes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Directly set the requests state with the received data
        setRequests(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching requests:', error);
      });
  }, []);

  const handleValidate = (id) => {
    // Handle validation logic here if needed
  };
  return (
    <div className='flex items-center justify-center'>
  <div className='w-4/5'>
    <h1 className='font-bold text-4xl py-5 m-6'>Requests</h1>
    <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              N-request
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id} className="odd:bg-white even:bg-gray-50 border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {request.ass_id}
              </td>
              <td className="px-6 py-4">
              {request.nom_ass} {request.prenom_ass}
              </td>
              <td className="px-6 py-4">
              {request.id_demande}
              </td>
              <td className="px-6 py-4">
              {new Date(request.date_demande).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 items-center flex">
                <div className={`w-2 h-2 ${request.etat == 0 ? 'bg-yellow-500' : request.etat == 1 ? 'bg-green-500' : 'bg-red-500'} rounded-full mx-1`}></div>
                {request.etat == 0 ? 'Pending' : request.etat == 1 ? 'Approved' : 'Rejected'}
              </td>
              <td className="px-6 py-4 text-white text-xs font-bold">
                <Link
                  to={`/insert/${request.ass_id}`}
                  className="font-medium py-2 px-3 bg-green-500 rounded-md mx-1"
                >
                  Validate
                </Link>
                <Link to={`/refuse/${request.id_demande}`}
                className="font-medium py-2 px-3 bg-red-500 rounded-md mx-1" >
                  Refuse
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


  );
}

export default Requests;
