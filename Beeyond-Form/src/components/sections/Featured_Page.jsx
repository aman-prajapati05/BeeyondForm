import React, { useState } from 'react';

const Featured_Page = ({ formState, handleChange, convertToBase64 }) => {
  const [useFileInput, setUseFileInput] = useState(true);

  const toggleInputType = () => {
    setUseFileInput(!useFileInput);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Section 11</h3>
      <label className='block'>
        <span className='text-gray-700'>Featured Page Title</span>
        <input
          type="text"
          aria-label="featuredPageTitle"
          name='featuredPageTitle'
          value={formState.featuredPageTitle}
          onChange={handleChange}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block pb-2'>
        <span className='text-gray-700'>Featured Page Image</span>
        {useFileInput ? (
          <>
            <input
              accept='image/*'
              type="file"
              onChange={(e) => convertToBase64(e, handleChange, 'featuredPageImage')}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
            <button
              type="button"
              onClick={toggleInputType}
              className='mt-2 p-2 bg-blue-500 text-white rounded-md'
            >
              Switch to URL Input
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              aria-label="featuredPageImage"
              name='featuredPageImage'
              value={formState.featuredPageImage}
              onChange={handleChange}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
            <button
              type="button"
              onClick={toggleInputType}
              className='mt-2 p-2 bg-blue-500 text-white rounded-md'
            >
              Switch to File Input
            </button>
          </>
        )}
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
  );
};

export default Featured_Page;
