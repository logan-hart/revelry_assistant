import { useState } from "react"
import { Link } from "react-router-dom"


const LoginForm = () => {

    const [credential, setCredential ] = useState ('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    
    const toggleShowPassword= (e) => {
        e.prevent.default()
        setShowPassword(showPassword ? false : true);
    };

    const handleSubmit = (e) => {
        e.prevent.default()
        console.log(e)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login to your account</h1>
        <label>Username or email
            <input 
                type="text"
                value={credential}
                onChange={(e) => {
                    console.log(credential)
                    setCredential(e.target.value)}
                }
            />
        </label>
        <br/>
        <label>Password
            <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                    console.log(password)
                    setPassword(e.target.value)}
                }
            />
        </label>
        <br/>
        <button onClick={(e) => toggleShowPassword(e)}>Show</button>
        <br/>
        <button type="Submit">Login</button>
        <br/>
        <Link to="/">Forgot your password?</Link>

        </form>
    )
}

export default LoginForm