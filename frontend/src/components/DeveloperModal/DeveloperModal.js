import { useEffect } from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import "./DeveloperModal.css"
import logan from '../../images/Logan.png'

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
      <div onClick={onClose} id="modal-overlay"></div>
      <button onClick={onClose} id="close-modal">&times;</button>
      <div id="login-modal" className="developer-modal">
        <div>
          <img className='headshot' src={logan}/>
        </div>
        <div className='white-text developer-links'>
        <div className='white-text'>Developer info</div>
          <a href="https://www.linkedin.com/in/logan-hartman4104/" className="link" target="_blank" rel="noopener noreferrer"> Linkedin</a>
          <a href="https://github.com/logan-hart" className="link" target="_blank" rel="noopener noreferrer"> Github</a>
          <a href="https://logan-hart.github.io/portfolio/" className="link" target="_blank" rel="noopener noreferrer"> Portfolio</a>
          <a href="https://docs.google.com/document/d/1mQGqwyVjrPUB5H7WHjbHwxLrvxNObw820-n7WodVMsk/edit?usp=sharing" className="link"  target="_blank" rel="noopener noreferrer"> Resume</a>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
