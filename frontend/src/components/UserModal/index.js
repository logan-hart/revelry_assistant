import React, { useState } from 'react';
import ReactDom from 'react-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserModal.css'

function UserModal({open, onClose}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const logout = (e) => {
        return dispatch(sessionActions.logout())
    }
    
    if (!open) return null
    return ReactDom.createPortal (
        <>
            <div id="modal-overlay"></div>
            <button onClick={onClose} id="close-modal">&times;</button>
            
            <div>
                <div id="user-modal">
                <div className='vl'></div>
                    <div className='white-text'>{sessionUser.username}</div>
                    <Link className="link" to="">My tickets</Link>
                    <Link className="link" to="">Following</Link>
                    <Link className="link" to="">Edit Account</Link>
                    <Link className="link" onClick={logout} to='/'>Logout</Link>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default UserModal