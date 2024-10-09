import React, { useState, useEffect } from 'react';
import useBrandStore from '../store/brandStore';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section_1 from './EditPageSections/Section_1';
import Section_2 from './EditPageSections/Section_2';
import Section_3 from './EditPageSections/Section_3';
import Section_4 from './EditPageSections/Section_4';
import Section_5 from './EditPageSections/Section_5';
import Section_6 from './EditPageSections/Section_6';
import Section_7 from './EditPageSections/Section_7';
import Section_8 from './EditPageSections/Section_8';
import Section_9 from './EditPageSections/Section_9';
import Contact_Us from './EditPageSections/Contact_Us';
import Featured_Page from './EditPageSections/Featured_Page';
import { convertToBase64Section1, convertToBase64FeaturedPage, convertToBase64Section7 } from './convertToBase64/addImage';

const EditHome = () => {
  const { cname, setCname } = useBrandStore();

  const [section1, setSection1] = useState({
    cname: '',
    brand_text: '',
    home_image: '',
    portfolio_link: '',
    service: '',
    date: '',
    color: '',
  });

  const [section2, setSection2] = useState({
    logo_image: '',
    long_description: '',
    service1: '',
    service2: '',
    service3: '',
    color: '',
  });

  const [section3, setSection3] = useState({
    section3Img1: '',
    section3Img2: '',
    color: '',
  });

  const [section4, setSection4] = useState({
    stackImg1: '',
    stackImg2: '',
    stackImageText: '',
    color: '',
  });

  const [section5, setSection5] = useState({
    section5Title: '',
    section5Text: '',
    color: '',
  });

  const [section6, setSection6] = useState({
    section6Img1: '',
    section6Img2: '',
    section6Img3: '',
    tagline: '',
    color: '',
  });

  const [section7, setSection7] = useState({
    section7Img: '',
    section7Img2: '',
    color: '',
  });

  const [section8, setSection8] = useState({
    section8Title: '',
    section8Text: '',
    color: '',
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
  });

  const [featuredPage, setFeaturedPage] = useState({
    featuredPageTitle: '',
    featuredPageImage: '',
    featuredPageImage2: '',
    featuredPageImage3: '',
    featuredPageImage4: '',
    color: '',
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
  
  // const [editing, setEditing] = useState(false); 

  useEffect(() => {
    if (cname) {
      fetchBrandData();
    }
  }, [cname]);

  const fetchBrandData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/website/${cname}`);
      const data = response.data;
      console.log(data);

        setSection1(data.section1);
        setSection2(data.section2);
        setSection3(data.section3);
        setSection4(data.section4);
        setSection5(data.section5);
        setSection6(data.section6);
        setSection7(data.section7);
        setSection8(data.section8);
        setSection9(data.section9);
        setContactUs(data.contactUs);
        setFeaturedPage(data.featuredPage);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

  // const handleEditPage = () => {
  //   fetchBrandData(); // Trigger fetch data function
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    try {
      await axios.put(`http://localhost:5000/website/update/${cname}`, formData);
      console.log('Data updated successfully:', formData);
      toast("Component updated successfully!");
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className='flex justify-center items-center bg-slate-400'>
      <div className='text-center bg-slate-100 border border-cyan-800 p-6 rounded-lg shadow-md'>
        {/* <p className='text-lg font-semibold'>{editing ? 'Editing existing page' : 'Make new website'}</p> */}
        <form onSubmit={handleSubmit} className='mt-4 flex flex-col'>
        <Section_1 formState={section1} handleChange={handleSection1Change} convertToBase64={(event) => convertToBase64Section1(event, setSection1, 'home_image')} />
        <Section_2 formState={section2} handleChange={handleSection2Change} convertToBase64={(event) => convertToBase64Section2(event, setSection2, 'logo_image')} />
        <Section_3 section3={section3} setSection3={setSection3}/>
        <Section_4 section4={section4} setSection4={setSection4} />
        <Section_5 formState={section5} handleChange={handleSection5Change} convertToBase64={(event) => convertToBase64Section5(event, setSection5, 'section5Img')} />
        <Section_6 section6={section6} setSection6={setSection6} />
        <Section_7 section7={section7} setSection7={setSection7}/>
        <Section_8 formState={section8} handleChange={handleSection8Change} convertToBase64={(event) => convertToBase64Section8(event, setSection8, 'section8Img')} />
        <Section_9 section9={section9} setSection9={setSection9} />
        <Contact_Us formState={contactUs} handleChange={handleContactUsChange} convertToBase64={(event) => convertToBase64ContactUs(event, setContactUs, 'contactUsImg')} />
        <Featured_Page featuredPage={featuredPage} setFeaturedPage={setFeaturedPage} />
          <button
            type='submit'
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Save Changes
          </button>
        </form>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
{/* Same as */}
<ToastContainer />
        {/* {editing && (
          <button
            className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
            onClick={() => setEditing(false)}
          >
            Cancel Edit
          </button>
        )} */}
      </div>
    </div>
  );
};

export default EditHome;
