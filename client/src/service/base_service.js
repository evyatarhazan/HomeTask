import axios from 'axios';

const HTTP = `http://127.0.0.1:5000/api/v1/users`


export const getAllUsers = async () => {
    try {
        const response = await axios.get(HTTP)
        const data = await response.data
        console.log(`info >> get user list successfully ${data}`)
        return data
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser = async (id) => {
    try {
        const respons = await axios.delete(`${HTTP}/${id}`)
        console.log(`info >> delete user successfully ${respons.data.message}`)
        return respons.data.message
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (user) => {
    try {
        const respons = await axios.post(HTTP, user)
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
