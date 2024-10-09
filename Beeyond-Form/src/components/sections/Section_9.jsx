import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

const Section_9 = ({ section9, setSection9 }) => {
  const [images, setImages] = useState([]);
  const [useFileInput1, setUseFileInput1] = useState(true);
  const [useFileInput2, setUseFileInput2] = useState(true);

  const toggleInputType1 = () => {
    setUseFileInput1(!useFileInput1);
  };

  const toggleInputType2 = () => {
    setUseFileInput2(!useFileInput2);
  };

  const handleURLChange = (e, index) => {
    const url = e.target.value;
    if (index === 0) {
      setSection9({ ...section9, section9Img1: url });
    } else if (index === 1) {
      setSection9({ ...section9, section9Img2: url });
    }
  };

  const onChange = (imageList) => {
    // Update local state with imageList
    setImages(imageList);

    // Update section9 state with image URLs
    setSection9({
      ...section9,
      section9Img1: imageList.length > 0 ? imageList[0].data_url : '',
      section9Img2: imageList.length > 1 ? imageList[1].data_url : '',
    });
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Section 9</h3>
      <div className="mt-4">
        <label className='block pb-2'>
          <span className='text-gray-700'>Image 1</span>
          {useFileInput1 ? (
            <>
              <input
                accept='image/*'
                type="file"
                onChange={(e) => onChange([{ data_url: URL.createObjectURL(e.target.files[0]) }, ...images.slice(1)])}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
              <button
                type="button"
                onClick={toggleInputType1}
                className='mt-2 p-2 bg-blue-500 text-white rounded-md'
              >
                Switch to URL Input
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={section9.section9Img1 || ''}
                onChange={(e) => handleURLChange(e, 0)}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
              <button
                type="button"
                onClick={toggleInputType1}
                className='mt-2 p-2 bg-blue-500 text-white rounded-md'
              >
                Switch to File Input
              </button>
            </>
          )}
        </label>
        <label className='block pb-2'>
          <span className='text-gray-700'>Image 2</span>
          {useFileInput2 ? (
            <>
              <input
                accept='image/*'
                type="file"
                onChange={(e) => onChange([images[0], { data_url: URL.createObjectURL(e.target.files[0]) }])}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
              <button
                type="button"
                onClick={toggleInputType2}
                className='mt-2 p-2 bg-blue-500 text-white rounded-md'
              >
                Switch to URL Input
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={section9.section9Img2 || ''}
                onChange={(e) => handleURLChange(e, 1)}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
              />
              <button
                type="button"
                onClick={toggleInputType2}
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
            value={section9.color}
            onChange={(e) =>
              setSection9((prevState) => ({
                ...prevState,
                color: e.target.value,
              }))
            }
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </label>
      </div>
    </div>
  );
};

export default Section_9;
