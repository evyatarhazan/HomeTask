import axios from 'axios';

const HTTP = `http://`
const LOCALHOST = `127.0.0.1`
const API = `/api/v1/users`
const PORT = 5000


export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${HTTP}${LOCALHOST}:${PORT}${API}`)
        const data = await response.data
        console.log(`info >> get user list successfully`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser = async (id) => {
    try {
        const respons = await axios.delete(`${HTTP}${LOCALHOST}:${PORT}${API}/${id}`)
        console.log(`info >> delete user successfully ${respons.data.message}`)
        return respons.data.message
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (user) => {
    try {
        const respons = await axios.post(`${HTTP}${LOCALHOST}:${PORT}${API}`, user)
        console.log(`info >> add user successfully ${respons.data}`)
        return respons
    } catch (error) {
        console.log(error)
    }
}

export const getIpInfo = async (IP) => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${IP}`);
      const data = await response.data;
      console.log(`info >> get ip info successfully ${data}`)
      return data;

    } catch (error) {
      console.error("Error:", error);
    }
  };
