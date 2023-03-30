import React, { useState } from 'react';
import {isValidIsraeliID, validatePhoneNumber, validateName, validateIPAddress} from './validator'
import { addUser } from '../service/base_service.js';


const AddUserForm = (props) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [ip, setIP] = useState('');
    const [phone, setPhone] = useState('');
    const [errorValid, setErrorValid] = useState('')

    const handleChange = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value);
        }
        if (event.target.name === "id") {
            setId(event.target.value);
        }
        if (event.target.name === "ip") {
            setIP(event.target.value);
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value);
        }
    };

    const onSubmit = () => {
        let validName = validateName(name)
        let validID = isValidIsraeliID(id)
        let validIP = validateIPAddress(ip)
        let validPhone = validatePhoneNumber(phone)

        if (validName !== true) {
            setErrorValid(validName)
        }
        else if (validID !== true) {
            setErrorValid(validID)
        }
        else if (validIP !== true) {
            setErrorValid(validIP)
        }
        else if (validPhone !== true) {
            setErrorValid(validPhone)
        }
        else {
            let user = {
                'name': name, 'id': id, 'ip': ip, 'phone': phone
            }

            const newUser = (async (user) => {
                const response = await addUser(user)
                props.addUser(user)
                props.setAdd(false)
            })
            newUser(user)
        }
    }

    return (
        <div id="MenusEdit" class="Rmodal">
            <div class="modal-content">
                <h2>add User</h2>
                <table >
                    <tr>
                        <td class="td">Name</td>
                        <td class="td">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChange}
                                value={name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td class="td">ID</td>
                        <td class="td" >
                            <input
                                type="number"
                                id="id"
                                name="id"
                                onChange={handleChange}
                                value={id}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td class="td">IP</td>
                        <td class="td">
                            <input
                                type="text"
                                id="ip"
                                name="ip"
                                onChange={handleChange}
                                value={ip}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td class="td">Phone</td>
                        <td class="td">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                onChange={handleChange}
                                value={phone}
                            />
                        </td>
                    </tr>
                </table>
                <h2>{errorValid}</h2>
                <div>
                    <div class="icons">
                        <button class="close" onClick={() => onSubmit()}>Add</button>
                        <button class="close" onClick={() => props.setAdd(false)}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddUserForm