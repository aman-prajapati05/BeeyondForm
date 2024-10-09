import React from 'react'

const Section_8 = ({ formState, handleChange, convertToBase64 }) => {
  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
    <h3>Section 8</h3>
    <label className='block'>
      <span className='text-gray-700'>Section 8 Title</span>
      <input
        type="text"
        aria-label="section8Title"
        
        name='section8Title'
        value={formState.section8Title}
        onChange={handleChange}
        className='mt-1 p-2 border border-gray-300 rounded-md w-full'
      />
    </label>
    <label className='block'>
      <span className='text-gray-700'>Section 8 Text</span>
      <input
        type="text"
        aria-label="section8Text"
        
        name='section8Text'
        value={formState.section8Text}
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

export default Section_8