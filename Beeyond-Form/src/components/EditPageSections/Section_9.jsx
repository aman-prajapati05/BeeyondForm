import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useEffect } from 'react';

const Section_9 = ({ section9, setSection9 }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialImages = [];
    if (section9.section9Img1) {
      initialImages.push({ data_url: section9.section9Img1 });
    }
    if (section9.section9Img2) {
      initialImages.push({ data_url: section9.sectionI9mg2 });
    }
  }, [section9]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);

    const updatedSection9 = {
      ...section9,
      section9Img1: imageList.length > 0 ? imageList[0].data_url : '',
      section9Img2: imageList.length > 1 ? imageList[1].data_url : '',
    };

    setSection9(updatedSection9);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3 bg-[#f6f9fe]'>
      <h3 className="font-sans">Section 9</h3>
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
              Click or Drop 2 Images here
            </button>
            &nbsp;
            <button type='button' onClick={onImageRemoveAll} className="h-10 ml-2 border border-3">Remove all images</button>
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
      <label className='block'>
        <span className='text-gray-700'>Background Color</span>
        <input
          type="text"
          aria-label="color"
          name='color'
          value={section9.color}
          onChange={(e) => setSection9({ ...section9, color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
    </div>
  );
};

export default Section_9;
