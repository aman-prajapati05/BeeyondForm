import React, { useState } from 'react';

const Section_7 = ({ formState, handleChange, convertToBase64 }) => {
  const [useFileInput, setUseFileInput] = useState(true);

  const toggleInputType = () => {
    setUseFileInput(!useFileInput);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      handleChange({ target: { name: 'section7Img', value: imageUrl } });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Section 7</h3>
      <label className='block pb-2'>
        <span className='text-gray-700'>Section 7 Image</span>
        {useFileInput ? (
          <>
            <input
              accept='image/*'
              type="file"
              onChange={handleFileChange}
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
              aria-label="section7Img"
              name='section7Img'
              value={formState.section7Img}
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
    </div>
  );
};

export default Section_7;
