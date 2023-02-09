import React, { useState } from 'react';
import ReactDom from 'react-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginModal.css'

function LoginModal({open, onClose}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const toggleShowPassword= (e) => {
        e.preventDefault()
        setShowPassword(showPassword ? false : true);
    };

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
        // .catch(async (res) => {
        //     let data;
        //     try {
        //     data = await res.clone().json();
        //     } catch {
        //     data = await res.text();
        //     }
        //     if (data?.errors) setErrors(data.errors);
        //     else if (data) setErrors([data]);
        //     else setErrors([res.statusText]);
        // });
    }

    const demoLogin = (e) =>{
        let credential = 'demo@user.com'
        let password = 'password'
        return dispatch(sessionActions.login({credential, password }))
    }
    
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div id="modal-overlay"></div>
            <button onClick={onClose} id="close-modal">&times;</button>
            <div id="login-modal">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <h1 className='white-text'>Login to your account</h1>
                    <label className="form-label white-text"> Username or email
                            <input
                            className='form-input'
                            type="text"
                            value={credential}
                            onChange={(e) => {
                                setCredential(e.target.value)}
                            }
                            required
                        />
                    </label>
                    <br/>
                    <div>  
                        <label className="form-label white-text"> Password</label>
                            <button id="show-button" onClick={toggleShowPassword} >Show <i className="fa-regular fa-eye" style={{color: 'rgb(255, 72, 72)'}}></i></button>
                            </div>  
                            <input
                                className="form-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)}
                                }
                                required
                            />
                    <br/>
                    <button className="button red-button" id="login" type="Submit">Login</button>
                    <Link to="/" onClick={onClose}><button id="forgot-password">Forgot your password?</button></Link>
                </form>
                <br/>
                <div className='vl'></div>
                <div id="login-right">
                    <h1 className='white-text'>New to RA? Sign up</h1>
                    <br/>
                    <Link className="link" to='/signup'><button className="button black-button" onClick ={onClose}>Register</button></Link>
                    <br/>
                    <button className="button red-button" id="demo-login" onClick={demoLogin}>Demo Login</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default LoginModal;