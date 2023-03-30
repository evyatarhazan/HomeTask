import * as React from "react";

const Modal = (props) => {
    const show = props.show ? props.show: false;
    if (!show) {
        return null
    }
    return (
        <div id="Modal" className="Rmodal">
            {props.children}
        </div>
    )
}
export default Modal
