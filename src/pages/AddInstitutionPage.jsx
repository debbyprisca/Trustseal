

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ContractAddress,sepoliaAddress} from './TrustSealConfig'
import {TrustSealABI1} from './trustsealconfig1'


import {ethers} from "ethers";
import { WebSocketProvider } from 'ethers';
import { newABI, newAddress } from './NewConfigsIDnAddress';

const AddInstitutionPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description:'',
    location: '',
    website: '',
    img: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Provider = new ethers.BrowserProvider(window.ethereum)
    const Signer = await Provider.getSigner()

    const addInstitution = new ethers.Contract(newAddress,newABI,Signer)
    const tx = await addInstitution.registerInstitution(form.name,form.description,form.category,form.location,form.website,form.img)
    const receipt =  await tx.wait();
    const Hash = receipt.hash


    // Submit logic here (e.g. call API or save to state/store)
    console.log('Institution added:', form);
    navigate('/institutions'); // Redirect after submission
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Add a New Institution</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input w-full"
        />
      
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <input
          type="url"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          className="input w-full"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="input w-full"
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          required
          className="input w-full"
        />
  
        <input
          type="text"
          name="img"
          placeholder="Img"
          value={form.img}
          onChange={handleChange}
          // required
          className="input w-full"
        />
      
        <button onClick={handleSubmit} type="submit" className="btn bg-primary-600 text-white hover:bg-primary-700 w-full">
          Submit Institution

        </button>
      </form>
    </div>
  );
};

export default AddInstitutionPage;
