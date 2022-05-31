import { Button } from "../Button/Button"

import './Modal.css'


export const Modal = ({id='modal', message="Aviso", onClose= () =>{}}) => {
    
    const handleClick = () => {
        onClose(false);
    }
    const handleOutsideClick = (e) => {
        if (e.target.id === id) handleClick();
    }

    let modalResponse = <div className="modal" id={id} onClick={handleOutsideClick}>
            <div className = "container">
                <h2>Alert:</h2>
                <p>{message}</p>
                <Button onClick={(handleClick)} text={"Got it"}/>
            </div>
        </div>

    return (
        <>{modalResponse}</>
    )
    
    
}