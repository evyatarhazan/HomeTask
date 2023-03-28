import {useState } from "react";
import AddUserForm from "./add";
import addUser from "./add";
import Modal from "./modal";


const Navbar = (props) => {
    const [Add, setAdd] = useState(false);

    return (
        <>
            <div class="mini">
                <div class="miniNavbarRight">
                    <button onClick={() => setAdd(true)}>add user</button>
                </div>
                <div class="miniNavbarLeft">
                    <div class="miniNavbarButton">serch</div>
                </div>
            </div>
            <Modal show={Add}>
                <div id="MenusAdd" class="Rmodal">
                    <div class="modal-content">
                        <AddUserForm setAdd={setAdd} addUser={props.addUser}/>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
