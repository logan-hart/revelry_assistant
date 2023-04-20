import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import * as userActions from "../../store/user"
import './SignupForm.css'

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory()
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
    const sessionUser = useSelector(state => state.session.user);
    const user = useSelector(state => state.user);

    let type
    sessionUser ? type = 'Edit account' : type ='Register'

    const genderOptions = ['Female', 'Male', 'Dont want to say', 'Agender', 'Androgynous', 'Bigender', 'FTM', 'Female to male', 'Gender fluid', 'Gender nonconforming', 'Gender questioning', 'Gender variant', 'Genderqueer', 'Intersex female', 'Intersex male', 'Intersex man', 'Intersex person', 'Intersex woman', 'Inersex/Inter', 'MTF', 'Male to female', 'Neither', 'Neutrois', 'Non-binary', 'Other', 'Pangender', 'Trans', 'Trans female', 'Trans male', 'Trans person', 'Trans woman', 'Trans*', 'Trans* female', 'Trans* male', 'Trans* man', 'Trans* person', 'Trans*woman', 'Transfeminine', 'Transgender', 'Transgender female', 'Transgender male', 'Transgender man', 'Transgender person', 'Transgender Woman', 'Transmasculine', 'Transsexual', 'Transsexual female', 'Transsexual male', 'Transsexual man', 'Transexual person', 'Transsexual woman', 'Two-spirit' ]

    useEffect(() => {
        if (sessionUser) {
            setFirstname(sessionUser.firstname)
            setSurname(sessionUser.surname)
            setGender(sessionUser.gender)
            setEmail(sessionUser.email)
            setConfirmEmail(sessionUser.email)
            setUsername(sessionUser.username)
            setSubscribed(sessionUser.subscribed)
        }
    }, [])

    const toggleShowPassword= (e) => {
        e.preventDefault()
        setShowPassword(showPassword ? false : true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
        let age = getAge();
      
        if (email === confirmEmail) {
          setErrors([]);
          if (type === 'Register') {
            dispatch(sessionActions.signup({ firstname, surname, gender, email, username, password, age, subscribed }))
              .then(() => dispatch(sessionActions.login({ email, password })))
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
          } else if (type === 'Edit account') {
            let userId = sessionUser.id
            let age = sessionUser.age
            dispatch(userActions.updateUser({ userId, firstname, surname, gender, email, username, password, age, subscribed }))
                .then(() => {
                history.push(`/events`)
            })
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
        } else {
          setErrors(['Email addresses must match']);
        }
      };

    //   if (sessionUser) return <Redirect to="/events" />;

    const errorsDisplay = () => {
        if (!errors) {
            return <></>
        } else {
            return <div>{errors}</div>
        }
    }  

    return (
        <>
            <div id='register-layout-1'>
                <div id='signup-header' className='container'>
                    <h1 className="grey-text big-text">{type}</h1>
                </div>
            </div>
            <div id='register-layout-2' >
                <div className='container ' id='signup-content-container'>
                    <div id="signup-details">
                        <h2 className="red-text" id="your-details">/ YOUR DETAILS</h2>
                        <span className="form-label"><span className="red-text">*</span>required</span>
                    </div>
                    <div id="columns">
                        <div id="register-column-1">
                            <form onSubmit={handleSubmit} id='register-form'>
                                <ul>
                                    {errors.map(error => <li key={error}>{error}</li>)}
                                </ul>
                                <div className="signup-section aboutyou-section">
                                    <h3>About You</h3>
                                    <div className="column">
                                        <div className="stack">
                                            <label className="form-label">Firstname<span className="red-text">*</span></label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                value= {firstname}
                                                onChange={e => setFirstname(e.target.value)}   
                                            />
                                            <div className="errors">First name is required</div>
                                        </div>
                                        <div className="stack">
                                            <label className="form-label">Surname<span className="red-text">*</span></label>
                                            <input
                                                className="form-input"
                                                type="text"
                                                value= {surname}
                                                onChange={(e) => setSurname(e.target.value)}   
                                            />
                                        </div>
                                        <div className="stack">
                                                <label className="form-label"> Gender</label>
                                                <select id="gender-dropdown" value={gender} onChange={(e) => setGender(e.target.value)}>
                                                <option value="" className='dropdown'>Select a gender</option>
                                                    {genderOptions.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
                                                </select>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Login information</h3>
                                            <div className="signup-section login-section">
                                                <div className="stack">
                                                    <label className="form-label ">Email address<span className="red-text">*</span></label>
                                                        <input
                                                            className="form-input"
                                                            type="text"
                                                            value= {email}
                                                            onChange={(e) => setEmail(e.target.value)}   
                                                        />
                                                </div>
                                                <div className="stack">
                                                    <label className="form-label">Confirm email address<span className="red-text">*</span></label>
                                                        <input
                                                            className="form-input"
                                                            type="text"
                                                            value= {confirmEmail}
                                                            onChange={(e) => setConfirmEmail(e.target.value)}   
                                                        />
                                                </div>
                                                <div className="stack">
                                                    <label className="form-label">Username<span className="red-text">*</span></label>
                                                        <input
                                                            className="form-input"
                                                            type="text"
                                                            value= {username}
                                                            onChange={(e) => setUsername(e.target.value)}   
                                                        />
                                                </div>
                                                {type ==='Register' ? ( 
                                                <div className="stack">
                                                    <div>
                                                        <label className="form-label ">Password<span className="red-text">*</span></label>
                                                        <button id="show-button" tabIndex="-1" onClick={(e) => toggleShowPassword(e)}>Show <i className="fa-regular fa-eye red" ></i></button>
                                                    </div>
                                                        <input
                                                            className="form-input"
                                                            type={showPassword ? "text" : "password"}
                                                            value= {password}
                                                            onChange={(e) => setPassword(e.target.value)}   
                                                        />
                                                </div>
                                                ) : null}
                                            </div>
                                    </div>
                                </div>
                                    {type === 'Register' ? (
                                        <>
                                            <div>
                                                <div className="signup-section birthday-section">
                                                    <h3>Birthday</h3>
                                                        <div className="birthday-options">
                                                            <div className="stack">
                                                                <label className="form-label">Day</label>
                                                                    <input 
                                                                        className="form-input"
                                                                        type='text'
                                                                        value={birthDay}
                                                                        onChange={(e) => setBirthDay(e.target.value)}
                                                                    />
                                                            </div>
                                                            <div className='stack'>
                                                                <label className="form-label">Month</label>
                                        
                                                                    <input 
                                                                        className="form-input"
                                                                        type='text'
                                                                        value={birthMonth}
                                                                        onChange={(e) => setBirthMonth(e.target.value)}
                                                                    /> 
                                                            </div>  
                                                            <div className="stack">
                                                                <label className="form-label">Year</label>
                                        
                                                                    <input 
                                                                        className="form-input"
                                                                        type='text'
                                                                        value={birthYear}
                                                                        onChange={(e) => setBirthYear(e.target.value)}
                                                                    />
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3>Join the RA community</h3>
                                            <div>
                                                <p id="tandcs"> Subscribe to the weekly RA Newsletter to receive updates on the latest news and events.</p>
                                                <input onClick={(e) => setSubscribed(!subscribed)} type='checkbox' value="subscribed" className="checkbox" defaultChecked/>
                                                <label htmlFor='subscribed' className="form-label">Subscribe</label>
                                            </div>
                                        </>
                                ) : null}
                                <button className="button red-button" id="signup-submit" type="Submit">{type === 'Register' ? 'Submit' : 'Update'}</button>
                                {type === 'Register' ?
                                
                                <p id="tandcs">By registering, you are indicating that you have read and agree to the Terms of Use and Privacy Policy</p>
                            : null }
                            </form>
                        </div>
                        <div id="register-column-2">
                            <div id="register-column-21"></div>
                            <div id="register-column-22">
                                {type === 'Register' ? (<>
                                    <h2>Already have an Account?</h2>
                                    <Link className="link" to="/login"><button className="button white-button">Login</button></Link>
                                </>
                                ) : null}
                                </div>
                            </div>
                        </div>
                </div>
            </div>   
        </>

    )
}

export default SignupForm