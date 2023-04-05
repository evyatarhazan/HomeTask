import { useState } from "react";
import AddUserForm from "./add";
import Modal from "./modal";
import Search from "./search";


const Navbar = (props) => {
    const [Add, setAdd] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('name')
    const [isExist, setIsExist] = useState(false)


    const handleChange = (event) => {
        setFilter(event.target.value)
        const attributes = {
            data: props.data,
            filterUsers: props.filterUsers,
            searchTerm: searchTerm,
            filter: event.target.value,
            setIsExist: setIsExist,
        }
        Search(attributes)
    }

    const setSearch = (event) => {
        setSearchTerm(event.target.value)
        const attributes = {
            data: props.data,
            filterUsers: props.filterUsers,
            searchTerm: event.target.value,
            filter: filter,
            setIsExist: setIsExist,
        }
        Search(attributes)
    }

    return (
        <>
            <div className="mini">
                <div className="miniNavbarRight">
                </div>
                <div className="miniNavbarLeft">
                    <div className="miniNavbarButton">
                        <div className="miniNavbarflex">
                        <trNav>
                            <tdNav>
                                <select className="form-control" aria-label="Default select example" onChange={handleChange} name="category">
                                    <option value="name">Name</option>
                                    <option value="id">ID</option>
                                    <option value="ip">IP</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </tdNav>
                            <tdNav>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(event) => setSearch(event)}
                                    placeholder="Search"
                                />
                            </tdNav>
                                {isExist && <div className="warning">No value matched your search</div>}
                        </trNav>
                        <trNav>
                            <tdNav>
                                <button onClick={() => setAdd(true)}>
                                    <img src="https://img.icons8.com/ios-filled/25/ab5e2a/add-user-male.png" alt="" />
                                </button>
                            </tdNav>
                        </trNav>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={Add}>
                <div id="MenusAdd" className="Rmodal">
                    <div className="modal-content">
                        <AddUserForm setAdd={setAdd} addUser={props.addUser} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
