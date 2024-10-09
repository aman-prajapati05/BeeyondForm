import React from 'react'

const Contact_Us = ({ formState, handleChange, convertToBase64 }) => {
  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
        <h3>Section 10</h3>
        <label className='block'>
          <span className='text-gray-700'>Contact Us Title</span>
          <input
            type="text"
            aria-label="contactUsTitle"
            name='contactUsTitle'
            value={formState.contactUsTitle}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </label>
        <label className='block'>
          <span className='text-gray-700'>Contact Us Text</span>
          <input
            type="text"
            aria-label="contactUsText"
            name='contactUsText'
            value={formState.contactUsText}
            onChange={handleChange}
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </label>
        <label className='block'>
          <span className='text-gray-700'>Contact Us SubText</span>
          <input
            type="text"
            aria-label="contactUsSubText"
            name='contactUsSubText'
            value={formState.contactUsSubText}
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
  )
}

export default Contact_Us