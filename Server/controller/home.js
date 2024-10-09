import Home from '../models/homePage.js';

export const dataAdd = async (req, res) => {
  const {
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
  } = req.body;
  console.log(req);
  console.log("hey")

  try {
    // Create a new document using Mongoose model
    const result = await Home.create({
      section1: {
        home_image: section1.home_image,
        service: section1.service,
        date: section1.date,
        cname: section1.cname,
        brand_text: section1.brand_text,
        category: section1.category,
        portfolio_link: section1.portfolio_link,
        color: section1.color,
        text_color: section1.text_color
      },
      section2: {
        logo_image: section2.logo_image,
        long_description: section2.long_description,
        service1: section2.service1,
        service2: section2.service2,
        service3: section2.service3,
        color: section2.color,
        text_color: section2.text_color
      },
      section3: {
        section3Img1: section3.section3Img1,
        section3Img2: section3.section3Img2,
        color: section3.color,
        text_color: section3.text_color
      },
      section4: {
        stackImg1: section4.stackImg1,
        stackImg2: section4.stackImg2,
        stackImageText: section4.stackImageText,
        color: section4.color,
        text_color: section4.text_color
      },
      section5: {
        section5Title: section5.section5Title,
        section5Text: section5.section5Text,
        color: section5.color,
        text_color: section5.text_color
      },
      section6: {
        section6Img1: section6.section6Img1,
        section6Img2: section6.section6Img2,
        section6Img3: section6.section6Img3,
        tagline: section6.tagline,
        color: section6.color,
        text_color: section6.text_color
      },
      section7: {
        section7Img: section7.section7Img,
        section7Img2: section7.section7Img2,
        color: section7.color,
      },
      section8: {
        section8Title: section8.section8Title,
        section8Text: section8.section8Text,
        color: section8.color,
        text_color: section8.text_color
      },
      section9: {
        section9Img1: section9.section9Img1,
        section9Img2: section9.section9Img2,
        color: section9.color
      },
      contactUs: {
        contactUsTitle: contactUs.contactUsTitle,
        contactUsText: contactUs.contactUsText,
        contactUsSubText: contactUs.contactUsSubText,
        color: contactUs.color,
        text_color: contactUs.text_color
      },
      featuredPage: {
        featuredPageTitle: featuredPage.featuredPageTitle,
        featuredPageImage: featuredPage.featuredPageImage,
        color: featuredPage.color,
        text_color: featuredPage.text_color,
        featuredPageImage2: featuredPage.featuredPageImage2,
        featuredPageImage3: featuredPage.featuredPageImage3,
        featuredPageImage4: featuredPage.featuredPageImage4,

      },
    });

    // Respond with the created document
    res.status(201).json({ result });

    console.log(res);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};


export const getCdata = async (req, res) => {
  const { cname } = req.params; 
  try {
    const company = await Home.findOne({ 'section1.cname': cname }); 
    if (!company) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.status(200).json(company); 
  } catch (error) {
    console.error('Error finding brand by cname:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateCdata = async (req, res) => {
  const { cname } = req.params; 
  const {
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
  } = req.body;

  try {
    const updatedPage = await Home.findOneAndUpdate({ 'section1.cname': cname }, // Find the document based on cname
    {
      $set: {
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
      },
    },
    { new: true, runValidators: true }
  ); 

  if (!updatedPage) {
    return res.status(404).json({ error: 'Brand not found' });
  }

  res.status(200).json(updatedPage);
  } catch (error) {
    console.error('Error finding company by cname:', error);
    res.status(500).json({ message: 'Server error' });
  }
};