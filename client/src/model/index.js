import { useEffect, useState, useCallback } from "react";
import { getAllUsers, deleteUser, getIpInfo } from '../service/base_service';
import IpInfo from "./ipInfo";
import Modal from './modal';
import Navbar from "./navbar";
import TableUsers from "./tableUsers";


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


    const userDelete = useCallback((props) => {
        deleteUser(props)
        const newData = users.filter(user => user.id !== props)
        const deleteUserRec = (async () => {
            const response = await deleteUser(props)   
            console.log(response)
            setData(newData)
            setUsers(data);
            setShowDelete(false)
        })
        deleteUserRec()
    }, [users, data]);
   

    const modalDelete = useCallback((user) => {
        setUser(user)
        setShowDelete(true)
    }, []);
   

    const addUser = useCallback((user) => {
        setData([...data, user])
        setUsers([...data, user])
    }, [data]);
   

    const filterUsers = useCallback((users) => {
        setUsers(users)
    }, []);
   


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
            <TableUsers show={isReady} users={users} setIpAddress={setIpAddress} setShowIpInfo={setShowIpInfo} modalDelete={modalDelete}/>
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
                <IpInfo isReadyIp={isReadyIp} dataIP={dataIP} setShowIpInfo={setShowIpInfo} />
            </Modal>
        </div>
    )
}

export default Index;