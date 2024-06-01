import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MyForm = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
      nom: '',
      prenom: '',
      email: '',
      address: '',
      category: 'car',
      nb_place: '',
      permis: '',
      car_id: '',
      marque: '',
      type: '',
      energie: '',
      model: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://127.0.0.1:3000/approve-user/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API response:', data);
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            address: '',
            category: 'car',
            nb_place: '',
            permis: '',
            car_id: '',
            marque: '',
            type: '',
            energie: '',
            model: ''
        });
    } catch (error) {
        console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-md grid grid-cols-2 gap-4">
        <h2 className="text-2xl font-semibold mb-4 col-span-2">Form</h2>
        <form onSubmit={handleSubmit} className="col-span-2 grid grid-cols-2 gap-4">
            <div className="mb-4">
                <label htmlFor="id" className="block font-semibold">ID</label>
                <input type="text" id="id" name="id" value={id} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" disabled />
            </div>
            <div className="mb-4">
                <label htmlFor="nom" className="block font-semibold">Nom</label>
                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="prenom" className="block font-semibold">Prénom</label>
                <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block font-semibold">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block font-semibold">Category</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2">
                    <option value="1">car</option>
                    <option value="2">truck</option>
                    <option value="3">moto</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="nb_place" className="block font-semibold">Number of Places</label>
                <input type="number" id="nb_place" name="nb_place" value={formData.nb_place} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="permis" className="block font-semibold">Permis</label>
                <input type="text" id="permis" name="permis" value={formData.permis} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="car_id" className="block font-semibold">Car ID</label>
                <input type="text" id="car_id" name="car_id" value={formData.car_id} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="marque" className="block font-semibold">Marque</label>
                <input type="text" id="marque" name="marque" value={formData.marque} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="type" className="block font-semibold">Type</label>
                <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="energie" className="block font-semibold">Energie</label>
                <input type="text" id="energie" name="energie" value={formData.energie} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="model" className="block font-semibold">Model</label>
                <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <button type="submit" className="col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
    </div>
  );
};

export default MyForm;
