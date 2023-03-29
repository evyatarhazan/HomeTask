import axios from 'axios';



export const getAllUsers = async () => {
    try {
    const response = await axios.get('http://127.0.0.1:5000/api/v1/users')
    const data = await response.data
    return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id) => {
    try {
        const respons = await axios.delete(`http://127.0.0.1:5000/api/v1/users/${id}`)
        console.log(respons.data)
        } catch (error) {
            console.log(error)
        } 
}

export const addUser = async (user) => {
    try {
        const respons = await axios.post(`http://127.0.0.1:5000/api/v1/users/`, user)
        console.log(respons.data)
        } catch (error) {
            console.log(error)
        } 
}
