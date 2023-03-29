
import { INTEGER, Sequelize, STRING } from 'sequelize';
import { db } from '../dbConnect.js';

const Users = db.define('Users', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    ip: {
        type: STRING,
        allowNull: false
    },
    phone: {
        type: STRING,
        allowNull: false
    }
});


export default Users;
