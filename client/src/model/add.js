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
        const setterMap = {
          name: setName,
          id: setId,
          ip: setIP,
          phone: setPhone,
        };
        const { name, value } = event.target;
        const setter = setterMap[name];
        setter(value);
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
                await addUser(user)
                props.addUser(user)
                props.setAdd(false)
            })
            newUser(user)
        }
    }

    return (
        <div id="MenusEdit" className="Rmodal">
            <div className="modal-content">
                <h2>add User</h2>
                <table >
                    <tr>
                        <td>Name</td>
                        <td>
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
                        <td>ID</td>
                        <td >
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
                        <td>IP</td>
                        <td>
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
                        <td>Phone</td>
                        <td>
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
                    <div className="icons">
                        <button className="close" onClick={() => onSubmit()}>Add</button>
                        <button className="close" onClick={() => props.setAdd(false)}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddUserForm