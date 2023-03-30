import data from './SampleData.js'
import { addUser } from '../service/base_service.js'

const getAllMocServer = () => {
    for (let user of data) {
        addUser(user)
    }
}

export default getAllMocServer