import React, { useState, useCallback } from 'react';
import { isValidIsraeliID, validatePhoneNumber, validateName, validateIPAddress } from './validator'
import { addUser } from '../service/base_service.js';


const AddUserForm = (props) => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [ip, setIP] = useState('');
    const [phone, setPhone] = useState('');

    const [isValidName, setIsValidName] = useState(false);
    const [isValidId, setIsValidId] = useState(false);
    const [isValidIp, setIsValidIP] = useState(false);
    const [isValidPhone, setIsValidPhone] = useState(false);

    const [errorValidName, setErrorValidName] = useState('')
    const [errorValidId, setErrorValidId] = useState('')
    const [errorValidIp, setErrorValIp] = useState('')
    const [errorValidPhone, setErrorValidPhone] = useState('')


    const handleChange = useCallback((event) => {
        const setterMap = {
            name: setName,
            id: setId,
            ip: setIP,
            phone: setPhone,
        };
        const { name, value } = event.target;
        const setter = setterMap[name];
        setter(value);
    }, []);


    const onSubmit = () => {
        const validMap = {
            name: validateName(name),
            id: isValidIsraeliID(id, props.data),
            ip: validateIPAddress(ip),
            phone: validatePhoneNumber(phone),
        };

        const setterMap = {
            name: name,
            id: id,
            ip: ip,
            phone: phone,
        };

        const setterError = {
            name: setErrorValidName,
            id: setErrorValidId,
            ip: setErrorValIp,
            phone: setErrorValidPhone,
        };

        const setterValid = {
            name: setIsValidName,
            id: setIsValidId,
            ip: setIsValidIP,
            phone: setIsValidPhone,
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
            Object.entries(validMap).forEach(([key, value]) => {
                const setterErrors = setterError[key];
                if (setterMap[key].length > 0) {
                    if (typeof(value) === 'string') {
                        setterErrors(value)
                        value = false
                    }
                    else {
                        setterErrors(`${setterMap[key]} is invalid ${key}`);
                    }
                }
                else {
                    setterErrors(`Entar an ${key}`);
                }
                const setter = setterValid[key];
                setter(!value);
            });

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
                                placeholder="Enter name"
                                onChange={handleChange}
                                value={name}
                            />
                            {isValidName && <div className="warning">{errorValidName}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td >
                            <input
                                type="number"
                                id="id"
                                name="id"
                                placeholder="Enter id"
                                onChange={handleChange}
                                value={id}
                            />
                            {isValidId && <div className="warning">{errorValidId}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td>IP</td>
                        <td>
                            <input
                                type="text"
                                id="ip"
                                name="ip"
                                placeholder="Enter ip"
                                onChange={handleChange}
                                value={ip}
                            />
                            {isValidIp && <div className="warning">{errorValidIp}</div>}
                        </td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone"
                                onChange={handleChange}
                                value={phone}
                            />
                            {isValidPhone && <div className="warning">{errorValidPhone}</div>}
                        </td>
                    </tr>
                </table>
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