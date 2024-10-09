import React from 'react'
import { useNavigate } from 'react-router-dom'
import useBrandStore from '../store/brandStore';

const Landing = () => {

    const navigate = useNavigate();
    const { cname, setCname } = useBrandStore();

    const handleEditPage = () => {
        navigate('/edit-home');
      };
    
      const handleNewWebsite = () => {
        navigate('/home'); 
      };
    
      return (
        <div className='flex justify-center items-center bg-slate-400 h-screen w-screen'>
          <div className='text-center bg-slate-100 border border-cyan-800 p-6 rounded-lg shadow-md'>
            <p className='text-lg font-semibold'>Editing existing page?</p>
            <input type='text' name='cname' placeholder="Brand name" value={cname} required onChange={(e) => setCname(e.target.value)}
                className='mt-2 p-2 border border-gray-300 rounded-md w-full'></input>
            <button 
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
              onClick={handleEditPage}
            >
              Edit Page
            </button>
            <br />
            <p className='mt-6 text-lg font-semibold'>Make new website</p>
            <button 
              className='mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
              onClick={handleNewWebsite}
            >
              New Website
            </button>
          </div>
        </div>
      );
    };
    
    export default Landing;