import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

const SignupForm = () => {
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [birthDay, setBirthDay] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [subscribed, setSubscribed] = useState(true)
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const genderOptions = ['Female', 'Male', 'Dont want to say', 'Agender', 'Androgynous', 'Bigender', 'FTM', 'Female to male', 'Gender fluid', 'Gender nonconforming', 'Gender questioning', 'Gender variant', 'Genderqueer', 'Intersex female', 'Intersex male', 'Intersex man', 'Intersex person', 'Intersex woman', 'Inersex/Inter', 'MTF', 'Male to female', 'Neither', 'Neutrois', 'Non-binary', 'Other', 'Pangender', 'Trans', 'Trans female', 'Trans male', 'Trans person', 'Trans woman', 'Trans*', 'Trans* female', 'Trans* male', 'Trans* man', 'Trans* person', 'Trans*woman', 'Transfeminine', 'Transgender', 'Transgender female', 'Transgender male', 'Transgender man', 'Transgender person', 'Transgender Woman', 'Transmasculine', 'Transsexual', 'Transsexual female', 'Transsexual male', 'Transsexual man', 'Transexual person', 'Transsexual woman', 'Two-spirit' ]

    const toggleShowPassword= (e) => {
        e.preventDefault()
        setShowPassword(showPassword ? false : true);
    };

    function getAge() {
        let today = new Date();
        let birthDate = new Date(birthYear, birthMonth-1, birthDay);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let age = getAge()

        if (email === confirmEmail) {
          setErrors([]);
          return dispatch(sessionActions.signup({ firstname, surname, gender, email, username, password, age, subscribed}))
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
        return setErrors(['Email addresses must match']);
      };

    return (
        <>
            <h1>Register</h1>
            <h2>/ Your Details</h2>
            <div><span>*</span>required</div>
            <br/>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <div>
                    <h3>About You</h3>
                        <label>Firstname<span>*</span></label>
                        <br/>
                        <input
                            className="form-input"
                            type="text"
                            value= {firstname}
                            onChange={(e) => setFirstname(e.target.value)}   
                        />
                        <br/>
                        <label>Surname<span>*</span></label>
                            <br/>
                            <input
                                className="form-input"
                                type="text"
                                value= {surname}
                                onChange={(e) => setSurname(e.target.value)}   
                            />
                            <br/>
                        <label> Gender</label>
                            <br/>
                            <select onChange={(e) => setGender(e.target.value)}>
                                <option value={gender}></option>
                                    {genderOptions.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
                            </select>
                    
                </div>
                <br/>
                <div>
                    <h3>Login information</h3>
                        <label>Email address<span>*</span></label>
                            <br/>
                            <input
                                className="form-input"
                                type="text"
                                value= {email}
                                onChange={(e) => setEmail(e.target.value)}   
                            />
                        <br/>
                        <label>Confirm email address<span>*</span></label>
                            <br/>
                            <input
                                className="form-input"
                                type="text"
                                value= {confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}   
                            />
                        <br/>
                        <label>Username<span>*</span></label>
                            <br/>
                            <input
                                className="form-input"
                                type="text"
                                value= {username}
                                onChange={(e) => setUsername(e.target.value)}   
                            />
                        <br/>
                        <label>Password<span>*</span></label>
                        <br/>
                            <input
                                className="form-input"
                                type={showPassword ? "text" : "password"}
                                value= {password}
                                onChange={(e) => setPassword(e.target.value)}   
                            />
                        <br/>
                        <button id="show-button" onClick={(e) => toggleShowPassword(e)}>Show <i className="fa-regular fa-eye"></i></button>
                </div>
                <br/>
                <div>
                    <h3>Birthday</h3>
                        <label>Day</label>
                            <br/>
                            <input 
                                className="form-input"
                                type='text'
                                value={birthDay}
                                onChange={(e) => setBirthDay(e.target.value)}
                            />
                            <br/>
                        <label>Month</label>
                            <br/>
                            <input 
                                className="form-input"
                                type='text'
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                            /> 
                            <br/>
                        <label>Year</label>
                            <br/>
                            <input 
                                className="form-input"
                                type='text'
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                            />
                            <br/>
                </div>
                <br/>

                <h3>Join the RA community</h3>
                <div>
                    <p> Subscribe to the weekly RA Newsletter to receive updates on the latest news and events.</p>
                    <input onClick={(e) => setSubscribed(!subscribed)} type='checkbox' value="subscribed" defaultChecked/>
                    <label htmlFor='subscribed'>Subscribe</label>
                </div>
                <br/>
                <button className="button red-button" id="submit-button" type="Submit">Submit</button>
                <p>By registering, you are indicating that you have read and agree to the Terms of Use and Privacy Policy</p>
            </form>
            <div>
                <h2>Already have an Account?</h2>
                <button className="button white-button">Login</button>

            </div>
        </>

    )
}

export default SignupForm