import React, { useState } from 'react';
import { isValidIsraeliID, validatePhoneNumber, validateName, validateIPAddress } from './validator'
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
        const validMap = {
            name: validateName(name),
            id: isValidIsraeliID(id),
            ip: validateIPAddress(ip),
            phone: validatePhoneNumber(phone),
        };

        const setterMap = {
            name: name,
            id: id,
            ip: ip,
            phone: phone,
        };
        
        const falseKeys = Object.entries(validMap)
            .filter(([key, value]) => value !== true)
            .map(([key, value]) => key);
            

        if (falseKeys.length === 0) {
            const newUser = (async (user) => {
                await addUser(user)
                props.addUser(user)
                props.setAdd(false)
            })
            newUser(setterMap)
        }
        else {
            if (setterMap[falseKeys[0]].length > 0) {
                setErrorValid(`${setterMap[falseKeys[0]]} is invalid ${falseKeys[0]}`) 
            }
            else {
                setErrorValid(`The ${falseKeys[0]} field must be full`) 
            }
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