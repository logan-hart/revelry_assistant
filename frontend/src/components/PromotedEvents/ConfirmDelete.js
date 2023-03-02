import React from 'react'
import reactDom from 'react-dom'
import './PromotedEvents.css'

export default function ConfirmDelete({open, onClose, handleDelete}) {

    if(!open) return null
    return reactDom.createPortal(
        <>
            <div className="delete-overlay"></div>
            <div className="confirm-delete-modal">

                    <button className="delete-close" onClick={onClose}>&times;</button>
                    <div className="white-text delete-warning">Are you sure you want to cancel this event?</div>
                    <div className="delete-buttons-div">
                        <button className="button delete-button black-button" onClick={handleDelete}>Yes</button>
                        <button className="button delete-button red-button" onClick={onClose}>No</button>

                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}
