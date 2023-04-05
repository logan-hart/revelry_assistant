import { useEffect } from "react";
import reactDom from "react-dom";
import "./DeveloperModal.css"

export default function DeveloperModal({open, onClose}) {
  
  useEffect(() => {
    function handleKeyDown(event) {
        if (event.key === 'Escape') {
        onClose();
        }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [onClose]);


  if (!open) return null

  return reactDom.createPortal(
    <>
      <div id="modal-overlay"></div>
      <button onClick={onClose} id="close-modal">&times;</button>
      <div id="login-modal">
        <div><h1 className='white-text'>Developer info</h1></div>
        <div>
          <img src="../../../images/Logan.png"/>
        </div>
        <div className='white-text'>
          <div>Linkedin</div>
          <div>Resume</div>
          <div>Portfolio</div>
          <div>Contact</div>
        </div>



      </div>
    </>,
    document.getElementById('portal')
  )
}
