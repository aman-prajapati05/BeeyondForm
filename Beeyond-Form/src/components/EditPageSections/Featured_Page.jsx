import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

const Featured_Page = ({ featuredPage, setFeaturedPage }) => {
  const [images, setImages] = useState([]);
  const [useFileInput, setUseFileInput] = useState(true);

  // Initialize images state with existing images from featuredPage
  useEffect(() => {
    const initialImages = [];
    if (featuredPage.featuredPageImage) {
      initialImages.push({ data_url: featuredPage.featuredPageImage });
    }
    if (featuredPage.featuredPageImage2) {
      initialImages.push({ data_url: featuredPage.featuredPageImage2 });
    }
    if (featuredPage.featuredPageImage3) {
      initialImages.push({ data_url: featuredPage.featuredPageImage3 });
    }
    if (featuredPage.featuredPageImage4) {
      initialImages.push({ data_url: featuredPage.featuredPageImage4 });
    }
    setImages(initialImages);
  }, [featuredPage]);

  const onChange = (imageList) => {
    setImages(imageList);

    const updatedFeaturedPage = {
      ...featuredPage,
      featuredPageImage: imageList.length > 0 ? imageList[0].data_url : '',
      featuredPageImage2: imageList.length > 1 ? imageList[1].data_url : '',
      featuredPageImage3: imageList.length > 2 ? imageList[2].data_url : '',
      featuredPageImage4: imageList.length > 3 ? imageList[3].data_url : '',
    };

    setFeaturedPage(updatedFeaturedPage);
  };

  const toggleInputType = () => {
    setUseFileInput(!useFileInput);
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Featured Page</h3>
      <label className='block'>
        <span className='text-gray-700'>Featured Page Title</span>
        <input
          type="text"
          aria-label="featuredPageTitle"
          name='featuredPageTitle'
          value={featuredPage.featuredPageTitle}
          onChange={(e) => setFeaturedPage({ ...featuredPage, featuredPageTitle: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block'>
        <span className='text-gray-700'>Featured Page Images</span>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={4}
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
      </label>
      <label className='block'>
        <span className='text-gray-700'>Background Color</span>
        <input
          type="text"
          aria-label="color"
          name='color'
          value={featuredPage.color}
          onChange={(e) => setFeaturedPage({ ...featuredPage, color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      <label className='block'>
        <span className='text-gray-700'>Text Color</span>
        <input
          type="text"
          aria-label="text_color"
          name='text_color'
          value={featuredPage.text_color}
          onChange={(e) => setFeaturedPage({ ...featuredPage, text_color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
    </div>
  );
}

export default Featured_Page;
