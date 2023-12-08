import axios from "axios";
import url from "../../utils/base_url"; 


const registrationService = async(registerdata)=>{
    try {
        const response = await axios.post(`${url}auth/register`, registerdata);
        console.log("Server Response:", response);
        return response.data;
    } catch (error) {
        return error.response.data
    }
}

const contactService = async(contactData)=>{
    try {
        const response = await axios.post(`${url}auth/contact`,contactData)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

const authSerivces = {
    registrationService,
    contactService
}

export default authSerivces