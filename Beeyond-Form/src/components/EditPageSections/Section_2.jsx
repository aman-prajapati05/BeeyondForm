import React from 'react';
import { useState } from 'react';

const Section_2 = ({ formState, handleChange, convertToBase64 }) => {

  const [useFileInput, setUseFileInput] = useState(true);

  const toggleInputType = () => {
    setUseFileInput(!useFileInput);
  };

  return (
  <div className='border-4 border-gray-800 rounded-lg p-3'>
    <h3>Section 2</h3>
    <label className='block'>
      <span className='text-gray-700'>Logo Image</span>
      {formState.logo_image && (
        <div className="mt-2">
          <img
            src={formState.logo_image}
            alt="Current Logo Image"
            className="w-full h-auto max-h-60 object-cover"
          />
        </div>
      )}
      {useFileInput ? (
      <input
        accept='image/webp, image/*'
        type="file"
        name='logo_image'
        onChange={(e) => convertToBase64(e, handleChange, 'logo_image')}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
      ) : (
      <input
        type="text"
        aria-label="logo_image"
        name='logo_image'
        value={formState.logo_image}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />)}
      <button
          type="button"
          onClick={toggleInputType}
          className='mt-2 p-2 bg-blue-500 text-white rounded-md'
        >
          {useFileInput ? 'Switch to URL Input' : 'Switch to File Input'}
        </button>
    </label>
    <label className='block'>
      <span className='text-gray-700'>Project Description (long)</span>
      <input
        type="text"
        aria-label="long_description"
        name='long_description'
        value={formState.long_description}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
    </label>
    <label className='block'>
      <span className='text-gray-700'>Service1</span>
      <input
        type="text"
        aria-label="service1"
        name='service1'
        value={formState.service1}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
    </label>
    <label className='block'>
      <span className='text-gray-700'>Service2</span>
      <input
        type="text"
        aria-label="service2"
        name='service2'
        value={formState.service2}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
    </label>
    <label className='block'>
      <span className='text-gray-700'>Service3</span>
      <input
        type="text"
        aria-label="service3"
        name='service3'
        value={formState.service3}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
    </label>
    <label className='block'>
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
        <label className='block'>
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
)};

export default Section_2;
