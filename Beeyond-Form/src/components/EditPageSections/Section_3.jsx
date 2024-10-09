import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

const Section_3 = ({ section3, setSection3 }) => {
  const [images, setImages] = useState([]);
  const [useFileInput1, setUseFileInput1] = useState(true);
  const [useFileInput2, setUseFileInput2] = useState(true);

  useEffect(() => {
    const initialImages = [];
    if (section3.section3Img1) {
      initialImages.push({ data_url: section3.section3Img1 });
    }
    if (section3.section3Img2) {
      initialImages.push({ data_url: section3.section3Img2 });
    }
    setImages(initialImages);
  }, [section3]);

  const onChange = (imageList) => {
    setImages(imageList);

    setSection3({
      ...section3,
      section3Img1: imageList.length > 0 ? imageList[0].data_url : '',
      section3Img2: imageList.length > 1 ? imageList[1].data_url : '',
    });
  };

  const handleURLChange = (e, index) => {
    const url = e.target.value;
    const updatedImages = [...images];
    if (index < updatedImages.length) {
      updatedImages[index] = { data_url: url };
    } else {
      updatedImages.push({ data_url: url });
    }
    setImages(updatedImages);
    setSection3({
      ...section3,
      section3Img1: updatedImages.length > 0 ? updatedImages[0].data_url : '',
      section3Img2: updatedImages.length > 1 ? updatedImages[1].data_url : '',
    });
  };

  const toggleInputType1 = () => {
    setUseFileInput1(!useFileInput1);
  };

  const toggleInputType2 = () => {
    setUseFileInput2(!useFileInput2);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Section 3</h3>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={2}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="flex flex-col px-4">
            <button
              type='button'
              className={`h-10 border border-3 ${isDragging ? 'text-red-500' : ''}`}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop Images here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} type='button' className="h-10 ml-2 border border-3">Remove all images</button>
            <div className="border border-dashed border-gray-400 p-4 mt-4 overflow-y-auto" {...dragProps}>
              {isDragging ? "Drop here please" : "Upload space"}
              <div className="flex flex-wrap mt-4">
                {imageList.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img src={image.data_url} alt={`img${index + 1}`} className="w-24 h-24 object-cover" />
                    <div className="flex flex-col m-10 space-y-2">
                      <button type="button" onClick={() => onImageUpdate(index)} className="h-10 mb-2">Update</button>
                      <button type="button" onClick={() => onImageRemove(index)} className="h-10">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </ImageUploading>
      <div className="mt-4">
        <label className='block pb-2'>
          <span className='text-gray-700'>Image 1</span>
          {section3.section3Img1 && (
            <>
              <img src={section3.section3Img1} alt="Image 1" className="mt-2 mb-2 border border-gray-300 rounded-md" style={{ maxWidth: '100%' }} />
              <button
                type="button"
                onClick={toggleInputType1}
                className='mt-2 p-2 bg-blue-500 text-white rounded-md'
              >
                {useFileInput1 ? 'Switch to URL Input' : 'Switch to File Input'}
              </button>
            </>
          )}
          {!section3.section3Img1 && (
            <>
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
                    value={section3.section3Img1 || ''}
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
            </>
          )}
        </label>
        <label className='block pb-2'>
          <span className='text-gray-700'>Image 2</span>
          {section3.section3Img2 && (
            <>
              <img src={section3.section3Img2} alt="Image 2" className="mt-2 mb-2 border border-gray-300 rounded-md" style={{ maxWidth: '100%' }} />
              <button
                type="button"
                onClick={toggleInputType2}
                className='mt-2 p-2 bg-blue-500 text-white rounded-md'
              >
                {useFileInput2 ? 'Switch to URL Input' : 'Switch to File Input'}
              </button>
            </>
          )}
          {!section3.section3Img2 && (
            <>
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
                    value={section3.section3Img2 || ''}
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
            </>
          )}
        </label>
        <label className='block'>
          <span className='text-gray-700'>Background Color</span>
          <input
            type="text"
            aria-label="color"
            name='color'
            value={section3.color}
            onChange={(e) =>
              setSection3((prevState) => ({
                ...prevState,
                color: e.target.value,
              }))
            }
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </label>
        <label className='block'>
          <span className='text-gray-700'>Text Color</span>
          <input
            type="text"
            aria-label="text_color"
            name='text_color'
            value={section3.text_color}
            onChange={(e) =>
              setSection3((prevState) => ({
                ...prevState,
                text_color: e.target.value,
              }))
            }
            className='mt-1 p-2 border border-gray-300 rounded-md w-full'
          />
        </label>
      </div>
    </div>
  );
};

export default Section_3;
