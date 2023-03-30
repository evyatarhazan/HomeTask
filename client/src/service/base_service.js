import axios from 'axios';


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_HTTP}${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_API}`)
        const data = await response.data
        return data
    } catch (error) {
        console.error(error)
    }
}


export const deleteUser = async (id) => {
    try {
        const respons = await axios.delete(`${process.env.REACT_APP_HTTP}${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_API}/${id}`)
        return respons.data.message
    } catch (error) {
        console.error(error)
    }
}

export const addUser = async (user) => {
    try {
        const respons = await axios.post(`${process.env.REACT_APP_HTTP}${process.env.REACT_APP_LOCALHOST}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_API}`, user)
        return respons
    } catch (error) {
        console.error(error)
    }
}

export const getIpInfo = async (IP) => {
    try {
        const response = await axios.get(`http://ip-api.com/json/${IP}`);
        const data = await response.data;
        return data;

    } catch (error) {
        console.error("Error:", error);
    }
};
