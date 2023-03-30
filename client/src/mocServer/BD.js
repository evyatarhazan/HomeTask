import data from './SampleData.js'
import { addUser } from '../service/base_service.js'

const getAllMocServer = () => {
    // console.log(data)
    for (let user of data) {
        addUser(user)
    }
}

export default getAllMocServer