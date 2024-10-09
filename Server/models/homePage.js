import mongoose from "mongoose";

const section1Schema = new mongoose.Schema({
    home_image: { type: String, required: false },
    service: { type: String, required: false },
    date: { type: Number, required: false },
    cname: { type: String, required: false },
    brand_text: { type: String, required: false },
    category: { type: String, required: false },
    portfolio_link: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section2Schema = new mongoose.Schema({
    logo_image: { type: String, required: false },
    service1: { type: String, required: false }, 
    service2: { type: String, required: false }, 
    service3: { type: String, required: false }, 
    long_description: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section3Schema = new mongoose.Schema({
    section3Img1: { type: String, required: false },
    section3Img2: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section4Schema = new mongoose.Schema({
    stackImg1: { type: String, required: false },
    stackImg2: { type: String, required: false },
    stackImageText: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section5Schema = new mongoose.Schema({
    section5Title: { type: String, required: false },
    section5Text: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section6Schema = new mongoose.Schema({
    section6Img1: { type: String, required: false },
    section6Img2: { type: String, required: false },
    section6Img3: { type: String, required: false },
    tagline: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section7Schema = new mongoose.Schema({
    section7Img: { type: String, required: false },
    section7Img2: { type: String, required: false },
    color: { type: String, required: false }
});

const section8Schema = new mongoose.Schema({
    section8Title: { type: String, required: false },
    section8Text: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const section9Schema = new mongoose.Schema({
    section9Img1: { type: String, required: false },
    section9Img2: { type: String, required: false },
    color: { type: String, required: false }
});

const contactUsSchema = new mongoose.Schema({
    contactUsTitle: { type: String, required: false },
    contactUsText: { type: String, required: false },
    contactUsSubText: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
});

const featuredPageSchema = new mongoose.Schema({
    featuredPageTitle: { type: String, required: false },
    featuredPageImage: { type: String, required: false },
    color: { type: String, required: false },
    text_color: { type: String, required: false },
    featuredPageImage2: { type: String, required: false },
    featuredPageImage3: { type: String, required: false },
    featuredPageImage4: { type: String, required: false },
});

const homeSchema = new mongoose.Schema({
    section1: section1Schema,
    section2: section2Schema,
    section3: section3Schema,
    section4: section4Schema,
    section5: section5Schema,
    section6: section6Schema,
    section7: section7Schema,
    section8: section8Schema,
    section9: section9Schema,
    contactUs: contactUsSchema,
    featuredPage: featuredPageSchema,
});

export default mongoose.model("Home", homeSchema);