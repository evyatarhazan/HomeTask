import { useEffect, useState } from "react";
import getAll from '../service/base_service';
import Modal from './modal'
import Navbar from "./navbar";


const Index = () => {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [isReady, setIsReady] = useState(false)

    const [user, setUser] = useState([])
    const [showDelete, setShowDelete] = useState(false);

    const userDelete = (props) => {
        //TODO server delete
        let newData = users.filter(user => user.id !== props)
        setUsers(newData);
        setShowDelete(false)
    }

    const modalDelete = (user) => {
        setUser(user)
        setShowDelete(true)
    }

    const addUser = (user) => {
        setUsers([...users, user])
    }

    const filterUsers = (users) => {
        console.log('sdsdsdadada')
        setUsers(users)
    }


    useEffect(() => {
        let data_ = getAll()
        console.log(data_)
        setData(data_)
        setUsers(data_)
        setIsReady(true)
    }, [])
    return (
        <div>
            <Navbar addUser={addUser} data={data} filterUsers={filterUsers}/>
            <table style={{ tableLayout: "auto" }}>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>IP</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                {isReady &&
                    users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.id}</td>
                                <td>{user.ip}</td>
                                <td>{user.phone}</td>
                                <td>
                                    {/* <button>update</button> */}
                                    <button onClick={() => modalDelete(user)}>
                                        <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Modal show={showDelete}>
                <div id="MenusDelete" class="Rmodal">

                    <div class="modal-content">
                        <h2></h2>
                        <p>Are you sure you want to delete {user.name}?</p>
                        <div class="icons">
                            <button class="close" onClick={() => setShowDelete(false)}>cancel</button>
                            <button class="close" onClick={() => userDelete(user.id)}>delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Index;