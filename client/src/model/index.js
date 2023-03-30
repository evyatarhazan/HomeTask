import { useEffect, useState } from "react";
import { getAllUsers, deleteUser, getIpInfo } from '../service/base_service';
import IpInfo from "./ipInfo";
import Modal from './modal';
import Navbar from "./navbar";


const Index = () => {

    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [isReady, setIsReady] = useState(false)

    const [user, setUser] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [showIpInfo, setShowIpInfo] = useState(false);
    const [ipAddress, setIpAddress] = useState('')

    const [dataIP, setDataIP] = useState([])
    const [isReadyIp, setIsReadyIp] = useState(false)

    const userDelete = (props) => {
        deleteUser(props)
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
        setUsers(users)
    }

    useEffect(() => {
        const ipData = (async (ipAddress) => {
            const response = await getIpInfo(ipAddress)
            setDataIP(response);
            setIsReadyIp(true);
            return response
        })
        ipData(ipAddress)
    }, [ipAddress])


    useEffect(() => {
        const newData = (async () => {
            const response = await getAllUsers()
            setData(response);
            setUsers(response);
            setIsReady(true);
        })
        newData()

    }, [])


    return (
        <div>
            <Navbar addUser={addUser} data={data} filterUsers={filterUsers} />
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
                                <td className="miniNavbarButton" onClick={() => [setIpAddress(user.ip), setShowIpInfo(true)]}>
                                    {user.ip}
                                </td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={() => modalDelete(user)}>
                                        <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" alt=""/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <Modal show={showDelete}>
                <div id="MenusDelete" className="Rmodal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete {user.name}?</p>
                        <div className="icons">
                            <button className="close" onClick={() => setShowDelete(false)}>cancel</button>
                            <button className="close" onClick={() => userDelete(user.id)}>delete</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal show={showIpInfo}>
                <IpInfo isReadyIp={isReadyIp} dataIP={dataIP} setShowIpInfo={setShowIpInfo}/>
            </Modal>
        </div>
    )
}

export default Index;