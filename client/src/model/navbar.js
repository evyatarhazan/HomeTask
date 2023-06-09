import { useState, useCallback } from "react";
import AddUserForm from "./add";
import Modal from "./modal";
import Search from "./search";


const Navbar = (props) => {
    const [Add, setAdd] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('name')
    const [isExist, setIsExist] = useState(false)


    const handleSearchChange = useCallback((event) => {
        setFilter(event.target.value)
        const attributes = {
            data: props.data,
            filterUsers: props.filterUsers,
            searchTerm: searchTerm,
            filter: event.target.value,
            setIsExist: setIsExist,
        }
        Search(attributes)
    }, [props.data, props.filterUsers, searchTerm]);


    const handleSetSearch = useCallback((event) => {
        setSearchTerm(event.target.value)
        const attributes = {
            data: props.data,
            filterUsers: props.filterUsers,
            searchTerm: event.target.value,
            filter: filter,
            setIsExist: setIsExist,
        }
        Search(attributes)
    }, [props.data, props.filterUsers, filter]);
    

    return (
        <>
            <div className="mini">
                <div className="miniNavbarRight">
                </div>
                <div className="miniNavbarLeft">
                    <div className="miniNavbarButton">
                        <div className="miniNavbarflex">
                        <trnav>
                            <tdnav>
                                <select className="form-control" aria-label="Default select example" onChange={handleSearchChange} name="category">
                                    <option value="name">Name</option>
                                    <option value="id">ID</option>
                                    <option value="ip">IP</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </tdnav>
                            <tdnav>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(event) => handleSetSearch(event)}
                                    placeholder="Search"
                                />
                            </tdnav>
                                {isExist && <div className="warning">No value matched your search</div>}
                        </trnav>
                        <trnav>
                            <tdnav>
                                <button onClick={() => setAdd(true)}>
                                    <img src="https://img.icons8.com/ios-filled/25/ab5e2a/add-user-male.png" alt="" />
                                </button>
                            </tdnav>
                        </trnav>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={Add}>
                <div id="MenusAdd" className="Rmodal">
                    <div className="modal-content">
                        <AddUserForm setAdd={setAdd} addUser={props.addUser} data={props.data} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
