import { findAll, deleteById, create } from './conllers.js';
import {validateName, isValidIsraeliID, validateIPAddress, validatePhoneNumber} from './validator.js'

export const postDataUsers = (req, res) => {
    let validName = validateName(req.body.name)
    let validID = isValidIsraeliID(req.body.id)
    let validIP = validateIPAddress(req.body.ip)
    let validPhone = validatePhoneNumber(req.body.phone)


    if (validName !== true) {
        res.send(validName)
    }
    else if (validID !== true) {
        res.send(validID)
    }
    else if (validIP !== true) {
        res.send(validIP)
    }
    else if (validPhone !== true) {
        res.send(validPhone)
    }
    else {
        create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
}

export const getAllUsers = (req, res) => {
    findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error(error);
            res.send(error);
        });
}

export const deleteByIdUsers = (req, res) => {
    deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Users deleted successfully",
                users: data
            })
        })
        .catch((error) => {
            console.error(error);
        });
}