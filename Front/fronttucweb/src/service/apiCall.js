import axios from "axios";

export const register = async (user) => {
    console.log( user );
    const response = await axios.post("http://localhost:8000/users/signup", user);
    return response.data; 
}

export const login = async (user) => {
    const response = await axios.post("http://localhost:8000/users/signin", user);
    return response.data;
}