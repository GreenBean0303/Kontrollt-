import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button"; 
import "../../index.css"

const Modal = ({ open, onClose, children }) => {
    const dialog = useRef();
  
    useEffect(() => {
        const dialogEl = dialog.current;
        console.log("Modal open state:", open); // Debugging
        console.log("Dialog element:", dialogEl); // Debugging
      
        if (open) {
          dialogEl?.showModal();
        } else {
          dialogEl?.close();
        }
      
        return () => {
          if (dialogEl?.open) {
            dialogEl.close();
          }
        };
      }, [open]);
      
    return createPortal(
      <dialog
        className="modal"
        ref={dialog}
        style={{ zIndex: 10000000 }} // Ensure modal is on top
      >
        {children}
        <div className="modal-actions"
        style={{ display: 'block', position: 'initial' }}>
          <Button onClick={onClose}>Close</Button>
        </div>
      </dialog>,
      document.getElementById("modal-root") || document.body 
    );
  };
  
  export default Modal;