import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

const Section_4 = ({ section4, setSection4 }) => {
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
      setSection4({ ...section4, stackImg1: url });
    } else if (index === 1) {
      setSection4({ ...section4, stackImg2: url });
    }
  };

  const onChange = (imageList) => {
    // Update local state with imageList
    setImages(imageList);

    // Update section4 state with image URLs
    setSection4({
      ...section4,
      stackImg1: imageList.length > 0 ? imageList[0].data_url : '',
      stackImg2: imageList.length > 1 ? imageList[1].data_url : '',
    });
  };

  return (
    <div className='border-4 border-gray-800 rounded-lg p-3'>
      <h3>Section 4</h3>
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
                value={section4.stackImg1 || ''}
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
                value={section4.stackImg2 || ''}
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

        <label className="block mt-4">
         <span className="text-gray-700">Stack Image Text</span>
         <input
          type="text"
          aria-label="stackImageText"
          name="stackImageText"
          value={section4.stackImageText}
          onChange={(e) =>
            setSection4((prevState) => ({
              ...prevState,
              stackImageText: e.target.value,
            }))
          }
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </label>
      <label className='block'>
      <span className='text-gray-700'>Background Color</span>
      <input
        type="text"
        aria-label="color"
        name='color'
        value={section4.color}
        onChange={(e) =>
          setSection4((prevState) => ({
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
          value={section4.text_color}
          onChange={(e) => setSection4({ ...section4, text_color: e.target.value })}
          className='mt-1 p-2 border border-gray-300 rounded-md w-full'
        />
      </label>
      </div>
    </div>
  );
};

export default Section_4;

// import React, { useState } from 'react';
// import ImageUploading from 'react-images-uploading';

// const Section4 = ({ section4, setSection4 }) => {
//   const [images, setImages] = useState([]);

//   const onChange = (imageList) => {
//     // Update local state with imageList
//     setImages(imageList);

//     // Update section4 state with image URLs
//     setSection4({
//       ...section4,
//       stackImg1: imageList.length > 0 ? imageList[0].data_url : '',
//       stackImg2: imageList.length > 1 ? imageList[1].data_url : '',
//     });
//   };

//   return (
//     <div className="border-4 border-gray-800 rounded-lg p-3 bg-[#f6f9fe] min-h-screen overflow-y-auto">
//       <h3 className="font-sans">Section 4</h3>
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={2} // Max number of images allowed
//         dataURLKey="data_url" // Key to access image URL in data object
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           <div className="flex flex-col px-4">
//             <button
//               type='button'
//               className={`h-10 border border-3 ${isDragging ? 'text-red-500' : ''}`}
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               Click or Drop 2 images here
//             </button>
//             &nbsp;
//             <button type='button' onClick={onImageRemoveAll} className="h-10 border border-3">Remove all images</button>
//             <div className="border border-dashed border-gray-400 p-4 mt-4"  {...dragProps}>
//               {isDragging ? "Drop here please" : "Upload space"}
//               <div className="flex flex-wrap mt-4">
//                 {imageList.map((image, index) => (
//                   <div key={index} className="flex flex-col">
//                     <img src={image.data_url} alt="img1" className="w-24 h-24 object-cover" />
//                     <div className="flex flex-col m-10 space-y-2">
//                       <button type="button" className="border border-3" onClick={() => onImageUpdate(index)}>Update</button>
//                       <button type="button" className="border border-3" onClick={() => onImageRemove(index)}>Remove</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </ImageUploading>
//       <label className="block mt-4">
//         <span className="text-gray-700">Stack Image Text</span>
//         <input
//           type="text"
//           aria-label="stackImageText"
//           name="stackImageText"
//           value={section4.stackImageText}
//           onChange={(e) =>
//             setSection4((prevState) => ({
//               ...prevState,
//               stackImageText: e.target.value,
//             }))
//           }
//           className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//         />
//       </label>
//       <label className='block'>
//       <span className='text-gray-700'>Background Color</span>
//       <input
//         type="text"
//         aria-label="color"
//         name='color'
//         value={section4.color}
//         onChange={(e) =>
//           setSection4((prevState) => ({
//             ...prevState,
//             color: e.target.value,
//           }))
//         }
//         className='mt-1 p-2 border border-gray-300 rounded-md w-full'
//       />
//     </label>
//     </div>
//   );
// };

// export default Section4;
