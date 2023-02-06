import { useState } from "react"

const LoginForm = () => {

    const [credential, setCredential ] = useState ('')
    const [password, setPassword] = useState('')

    return (
        <form>
            <h1>Login to your account</h1>
            <label>Username or email
                {/* <input 
                type="text"
                /> */}

            </label>
        </form>
    )
}

export default LoginForm