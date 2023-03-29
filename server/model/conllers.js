import type from './type.js';

export const findAll = (props) => {
    return type.findAll(props);
}

export const deleteById = (id) => {
    return type.destroy({ where: { id: id } });
}

export const create = (user) => {
    console.log('user', user)
    let newUser = new type(user);
    return newUser.save();
}