import { useState } from "react";
import AddUserForm from "./add";
import Modal from "./modal";
import Search from "./search";


const Navbar = (props) => {
    const [Add, setAdd] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('name')
    const [errorSearch, setErrorSearch] = useState('')

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <button onClick={() => setAdd(true)}>add user</button>
                </div>
                <div class="miniNavbarLeft">
                    <div class="miniNavbarButton">
                        <select class="form-control" aria-label="Default select example" onChange={handleChange} name="category">
                            <option value="name">Name</option>
                            <option value="id">ID</option>
                            <option value="ip">IP</option>
                            <option value="phone">Phone</option>
                        </select>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            // onChange={(e) => [setSearchTerm(e.target.value), Search(props.data, props.filterUsers, searchTerm, filter, setErrorSearch)]}
                        />
                        <button onClick={() => Search(props.data, props.filterUsers, searchTerm, filter, setErrorSearch)}>Search</button>
                        {errorSearch}
                    </div>
                </div>
            </div>
            <Modal show={Add}>
                <div id="MenusAdd" class="Rmodal">
                    <div class="modal-content">
                        <AddUserForm setAdd={setAdd} addUser={props.addUser} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
