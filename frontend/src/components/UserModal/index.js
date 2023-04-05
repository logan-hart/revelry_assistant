import React, { useState, useEffect } from 'react';

import ReactDom from 'react-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserModal.css'

function UserModal({open, onClose}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    
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

    const logout = () => {

        return dispatch(sessionActions.logout())
    }
    
    if (!open) return null
    return ReactDom.createPortal (
        <>
            <div id="user-modal-overlay"></div>
            <button onClick={onClose} id="close-modal">&times;</button>

            <div>
                <div id="user-modal">
                    <div className='white-text'>{sessionUser.username}</div>
                    <Link className="link" onClick={() => {onClose()}} to={`/users/${sessionUser.id}/events`}>Promoted events</Link>
                    <Link className="link" onClick={() => {onClose()}} to={`/users/${sessionUser.id}/tickets`}>My tickets</Link>
                    <Link className="link" onClick={() => {onClose()}} to="/events">Following</Link>
                    <Link className="link" onClick={() => {onClose()}} to={`/signup/${sessionUser.id}`}>Edit account</Link>
                    <Link className="link" onClick={() => {
                        onClose() 
                        logout()}} to='/events'>Logout</Link>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default UserModal