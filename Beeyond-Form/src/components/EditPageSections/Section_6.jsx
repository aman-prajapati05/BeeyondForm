import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useEffect } from 'react';

const Section_6 = ({ section6, setSection6 }) => {
  console.log(section6)
  const [images, setImages] = useState([]);

  // Initialize images state with existing images from section3
  useEffect(() => {
    const initialImages = [];
    if (section6.section6Img1) {
      initialImages.push({ data_url: section6.section6Img1 });
    }
    if (section6.section6Img2) {
      initialImages.push({ data_url: section6.sectionI6mg2 });
    }
    if (section6.section6Img3) {
        initialImages.push({ data_url: section6.sectionI6mg3 });
      }
    setImages(initialImages);
  }, [section6]);


  const onChange = (imageList) => {
    setImages(imageList);

    const updatedSection6 = {
      ...section6,
      section6Img1: imageList.length > 0 ? imageList[0].data_url : '',
      section6Img2: imageList.length > 1 ? imageList[1].data_url : '',
      section6Img3: imageList.length > 2 ? imageList[2].data_url : '',
    };

    setSection6(updatedSection6);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3 bg-[#f6f9fe]'>
      <h3 className="font-sans">Section 6</h3>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={3}
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
              Click or Drop 3 Images here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} type='button' className="h-10 ml-2 border border-3">Remove all images</button>
            <div className="border border-dashed border-gray-400 p-4 mt-4 overflow-y-auto"  {...dragProps}>
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
          value={section6.color}
          onChange={(e) => setSection6({ ...section6, color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block'>
        <span className='text-gray-700'>Text Color</span>
        <input
          type="text"
          aria-label="text_color"
          name='text_color'
          value={section6.text_color}
          onChange={(e) => setSection6({ ...section6, text_color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
    </div>
  );
}

export default Section_6;
