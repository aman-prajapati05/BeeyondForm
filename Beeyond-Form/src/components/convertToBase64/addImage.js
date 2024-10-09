const convertToBase64Section1 = (event, setSection1, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setSection1((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64Section2 = (event, setSection2, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setSection2((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64Section3 = (event, setSection3, fieldName, imageIndex) => {
    event.preventDefault();
    const file = event.target.files[0];
  
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = () => {
        setSection3((prevState) => ({
          ...prevState,
          [fieldName]: {
            ...prevState[fieldName],
            [`image${imageIndex}`]: reader.result,
          },
        }));
      };
    reader.readAsDataURL(file);

}
  
const convertToBase64Section4 = (event, setSection4, fieldName) => {
    event.preventDefault();
    const file = event.target.files[0];
  
    if (!file) return;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      setSection4((prevState) => ({
        ...prevState,
        [fieldName]: reader.result,
      }));
    };
  
    reader.onerror = (error) => {
      console.error('Error converting to base64:', error);
    };
}
  
  const convertToBase64Section5 = (event, setSection5, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setSection5((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64Section6 = (event, setSection6, fieldName, imageIndex) => {
    event.preventDefault();
    const file = event.target.files[0];
  
    if (!file) return;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      setSection6((prevState) => ({
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          [`image${imageIndex}`]: reader.result,
        },
      }));
    };
}
  
  const convertToBase64Section7 = (event, setSection7, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setSection7((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64Section8 = (event, setSection8, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setSection8((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64Section9 = (event, setSection9, fieldName, imageIndex) => {
    event.preventDefault();
    const file = event.target.files[0];
  
    if (!file) return;
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = () => {
      setSection9((prevState) => ({
        ...prevState,
        [fieldName]: {
          ...prevState[fieldName],
          [`image${imageIndex}`]: reader.result,
        },
      }));
    };
  }
  
  const convertToBase64ContactUs = (event, setContactUs, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setContactUs((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  const convertToBase64FeaturedPage = (event, setFeaturedPage, fieldName) => {
    event.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setFeaturedPage((prevState) => ({ ...prevState, [fieldName]: reader.result }));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  
  export {
    convertToBase64Section1,
    convertToBase64Section2,
    convertToBase64Section3,
    convertToBase64Section4,
    convertToBase64Section5,
    convertToBase64Section6,
    convertToBase64Section7,
    convertToBase64Section8,
    convertToBase64Section9,
    convertToBase64ContactUs,
    convertToBase64FeaturedPage,
  };
  