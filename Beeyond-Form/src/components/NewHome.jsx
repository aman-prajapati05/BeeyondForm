import React, { useState } from 'react';
import { addData } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import Section1 from './sections/Section_1';
import Section2 from './sections/Section_2';
import Section3 from './sections/Section_3';
import Section4 from './sections/Section_4';
import Section5 from './sections/Section_5';
import Section6 from './sections/Section_6';
import Section7 from './sections/Section_7';
import Section8 from './sections/Section_8';
import Section9 from './sections/Section_9';
import ContactUs from './sections/Contact_Us';
import FeaturedPage from './sections/Featured_Page';
import {
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
} from './convertToBase64/addImage';

const Home = () => {

  const [formSuccess, setFormSuccess] = useState(false);

  const [section1, setSection1] = useState({
    cname: '',
    brand_text: '',
    home_image: '',
    portfolio_link: '',
    category: '',
    service: '',
    date: '',
    color: '',
    text_color: '',
  });

  const [section2, setSection2] = useState({
    logo_image: '',
    long_description: '',
    service1: '',
    service2: '',
    service3: '',
    color: '',
    text_color: '',
  });

  const [section3, setSection3] = useState({
    section3Img1: '',
    section3Img2: '',
    color: '',
    text_color: '',
  });

  const [section4, setSection4] = useState({
    stackImg1: '',
    stackImg2: '',
    stackImageText: '',
    color: '',
    text_color: '',
  });

  const [section5, setSection5] = useState({
    section5Title: '',
    section5Text: '',
    color: '',
    text_color: '',
  });

  const [section6, setSection6] = useState({
    section6Img1: '',
    section6Img2: '',
    section6Img3: '',
    tagline: '',
    color: '',
    text_color: '',
  });

  const [section7, setSection7] = useState({
    section7Img: '',
    color: '',
  });

  const [section8, setSection8] = useState({
    section8Title: '',
    section8Text: '',
    color: '',
    text_color: '',
  });

  const [section9, setSection9] = useState({
    section9Img1: '',
    section9Img2: '',
    color: '',
  });

  const [contactUs, setContactUs] = useState({
    contactUsTitle: '',
    contactUsText: '',
    contactUsSubText: '',
    color: '',
    text_color: '',
  });

  const [featuredPage, setFeaturedPage] = useState({
    featuredPageTitle: '',
    featuredPageImage: '',
    color: '',
    text_color: '',
  });

  // handleChange functions for each section
  const handleSection1Change = (event) => {
    const { name, value } = event.target;
    setSection1((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection2Change = (event) => {
    const { name, value } = event.target;
    setSection2((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection3Change = (event) => {
    const { name, value } = event.target;
    setSection3((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection4Change = (event) => {
    const { name, value } = event.target;
    setSection4((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection5Change = (event) => {
    const { name, value } = event.target;
    setSection5((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection6Change = (event) => {
    const { name, value } = event.target;
    setSection6((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection7Change = (event) => {
    const { name, value } = event.target;
    setSection7((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection8Change = (event) => {
    const { name, value } = event.target;
    setSection8((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSection9Change = (event) => {
    const { name, value } = event.target;
    setSection9((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleContactUsChange = (event) => {
    const { name, value } = event.target;
    setContactUs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFeaturedPageChange = (event) => {
    const { name, value } = event.target;
    setFeaturedPage((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
      section7,
      section8,
      section9,
      contactUs,
      featuredPage,
    };
    const response = addData(formData);
    console.log(response);
    toast("Data added successfully!", { style: { backgroundColor: '#C6F6B2' } });
    if(response.status==201)
    {
      setFormSuccess(true);
    }

    // Reset all sections
    setSection1({
      cname: '',
      brand_text: '',
      home_image: '',
      portfolio_link: '',
      service: '',
      date: '',
      color: ''
    });

    setSection2({
      logo_image: '',
      long_description: '',
      service1: '',
      service2: '',
      service3: '',
      color: ''
    });

    setSection3({
      section3Img1: '',
      section3Img2: '',
      color: ''
    });

    setSection4({
      stackImg1: '',
      stackImg2: '',
      stackImageText: '',
      color: ''
    });

    setSection5({
      section5Title: '',
      section5Text: '',
      color: ''
    });

    setSection6({
      section6Img1: '',
      section6Img2: '',
      section6Img3: '',
      tagline: '',
      color: ''
    });

    setSection7({
      section7Img: '',
      color: ''
    });

    setSection8({
      section8Title: '',
      section8Text: '',
      color: ''
    });

    setSection9({
      section9Img1: '',
      section9Img2: '',
      color: ''
    });

    setContactUs({
      contactUsTitle: '',
      contactUsText: '',
      contactUsSubText: '',
      color: ''
    });

    setFeaturedPage({
      featuredPageTitle: '',
      featuredPageImage: '',
      color: ''
    });
  };

  return (
    <div className='flex justify-center bg-slate-400 p-4'>
      <form className='flex flex-col space-y-3 bg-white p-6 border-2 rounded-lg shadow-md' onSubmit={handleSubmit}>
        <Section1 formState={section1} handleChange={handleSection1Change} convertToBase64={(event) => convertToBase64Section1(event, setSection1, 'home_image')} />
        <Section2 formState={section2} handleChange={handleSection2Change} convertToBase64={(event) => convertToBase64Section2(event, setSection2, 'logo_image')} />
        <Section3 section3={section3} setSection3={setSection3}/>
        <Section4 section4={section4} setSection4={setSection4} />
        <Section5 formState={section5} handleChange={handleSection5Change} convertToBase64={(event) => convertToBase64Section5(event, setSection5, 'section5Img')} />
        <Section6 section6={section6} setSection6={setSection6} />
        <Section7 formState={section7} handleChange={handleSection7Change} convertToBase64={(event) => convertToBase64Section7(event, setSection7, 'section7Img')} />
        <Section8 formState={section8} handleChange={handleSection8Change} convertToBase64={(event) => convertToBase64Section8(event, setSection8, 'section8Img')} />
        <Section9 section9={section9} setSection9={setSection9} />
        <ContactUs formState={contactUs} handleChange={handleContactUsChange} convertToBase64={(event) => convertToBase64ContactUs(event, setContactUs, 'contactUsImg')} />
        <FeaturedPage formState={featuredPage} handleChange={handleFeaturedPageChange} convertToBase64={(event) => convertToBase64FeaturedPage(event, setFeaturedPage, 'featuredPageImage')} />


        <button type="submit" className='p-2 max-w-64 max-h-16 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Submit</button>
      </form>
      {formSuccess && <ToastContainer />}
    </div>
  );
};

export default Home;

