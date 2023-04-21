import { useState } from 'react';
import { useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const toggleShowPassword= (e) => {
        e.preventDefault()
        setShowPassword(showPassword ? false : true);
    };

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

    const errorsDisplay = () => {
        if (!errors) {
            return <></>
        } else {
            return <div>{errors}</div>
        }
    }  

    const demoLogin = () =>{
        let credential = 'demo@user.com'
        let password = 'password'
        return dispatch(sessionActions.login({credential, password }))
    }
    
    
    return (
        <>
            <div className='login-layout-1'>
                <div className='container login-header-container'>
                <div className="big-text white-text login-header">Login</div>
                </div>
            </div>

            <div className='login-layout-2' >
            <div className='container login-content'>
                <div>
                <form onSubmit={handleSubmit}>
                    <div><h1 className='red-text'>/Your Details</h1></div>
                    <label className="form-label login-page-label"> Username or email
                            <input
                            className='form-input login-page-input'
                            type="text"
                            value={credential}
                            onChange={(e) => {
                                setCredential(e.target.value)}
                            }
                        />
                    </label>
                    <br/>
                    <div>  
                        <label className="form-label login-page-label"> Password</label>
                            <button id="login-page-show-button" onClick={toggleShowPassword} >Show <i className="fa-regular fa-eye" style={{color: 'rgb(255, 72, 72)'}}></i></button>
                            </div>  
                            <input
                                className="form-input login-page-input"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)}
                                }
                            />
                    <br/>
                    <button className="button red-button" id="login" type="Submit">Login</button>
                    <Link to="/" ><button id="login-page-forgot-password">Forgot your password?</button></Link>
                    <div className="login-errors red-text">{errorsDisplay()}</div>
                </form>
                </div>
                <br/>

                    <div id="login-page-right">
                        <div><h1>New to RA? Sign up</h1></div>
                        <br/>
                        <Link className="link" to='/signup'><button className="button white-button">Register</button></Link>
                        <br/>
                        <button className="button red-button" id="demo-login" onClick={() => {demoLogin()}}>Demo Login</button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default LoginPage
