import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
    const dispatch = useDispatch();
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);


    const routeChange = () => {
        let path = '/api/login';
        history.push(path)
    }
    
    const toggleShowPassword= (e) => {
        e.preventDefault()
        setShowPassword(showPassword ? false : true);
    };

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
        .catch(async (res) => {
            let data;
            try {
            data = await res.clone().json();
            } catch {
            data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <h1>Login to your account</h1>
                <label className="form-label"> Username or email
                        <input
                        className='form-input'
                        type="text"
                        value={credential}
                        onChange={(e) => {
                            console.log(credential)
                            setCredential(e.target.value)}
                        }
                        required
                    />
                </label>
                <br/>
                <label className="form-label">
                    Password
                    <input
                        className="form-input"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                            console.log(password)
                            setPassword(e.target.value)}
                        }
                        required
                    />
                </label>
                <br/>
                <button id="show-button" onClick={(e) => toggleShowPassword(e)}>Show <i className="fa-regular fa-eye"></i></button>
                <br/>
                <button className="button" id="login-button" type="Submit">Login</button>
                <br/>
                <button onClick={routeChange}>Forgot your password?</button>
            </form>
            <br/>
            <div className='vl'></div>
            <h1>New to RA? Sign up</h1>
            <button className="button black-button">Register</button>
        </>
            
    );
}

export default LoginForm;