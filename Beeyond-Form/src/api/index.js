import axios from "axios";

export const addData = async (formData) => {
    console.log(formData);
    try {
        const response = await axios.post('http://localhost:5000/website/home', formData );
        console.log(response)
        return response;
    } catch (error) {
        console.error('Error adding data:', error);
        throw error;
    }
};