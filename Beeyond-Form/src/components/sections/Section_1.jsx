import React, { useState } from 'react';

const Section_1 = ({ formState, handleChange, convertToBase64 }) => {
  const [useFileInput, setUseFileInput] = useState(true);

  const toggleInputType = () => {
    setUseFileInput(!useFileInput);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3 className='py-2 text-center'>Section 1</h3>
      <label className='block pb-2'>
        <span className='text-gray-700'>Project Name</span>
        <input
          type="text"
          aria-label="cname"
          name='cname'
          value={formState.cname}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Project Description (short)</span>
        <input
          type="text"
          aria-label="brand_text"
          name='brand_text'
          value={formState.brand_text}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Category</span>
        <input
          type="text"
          aria-label="category"
          name='category'
          value={formState.category}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Background Image 1</span>
        {useFileInput ? (
          <input
            accept='image/*'
            type="file"
            name='home_image'
            onChange={(e) => convertToBase64(e, handleChange, 'home_image')}
            className='mt-1 p-2 border border-gray-300 rounded-md h-full w-full'
          />
        ) : (
          <input
            type="text"
            aria-label="home_image"
            name='home_image'
            value={formState.home_image}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        )}
        <button
          type="button"
          onClick={toggleInputType}
          className='mt-2 p-2 bg-blue-500 text-white rounded-md'
        >
          {useFileInput ? 'Switch to URL Input' : 'Switch to File Input'}
        </button>
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Project Link</span>
        <input
          type="text"
          aria-label="portfolio_link"
          name='portfolio_link'
          value={formState.portfolio_link}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Services</span>
        <input
          type="text"
          aria-label="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Year</span>
        <input 
          type="number" 
          min="1900"
          max="2100" 
          name="date" 
          onChange={handleChange} 
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Background Color</span>
        <input
          type="text"
          aria-label="color"
          name='color'
          value={formState.color}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Text Color</span>
        <input
          type="text"
          aria-label="text_color"
          name='text_color'
          value={formState.text_color}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
    </div>
  );
};

export default Section_1;
