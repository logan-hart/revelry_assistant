import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import './navBar.css'
import LoginForm from "../LoginForm"


function NavBar() {
    const sessionUser = useSelector(state => state.session.user)
    let account = sessionUser ? sessionUser.username : 'My account'
    const[isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="navContainer">
            <div id="leftNav">
                <button id="icon"><i className="fa-brands fa-ravelry"></i><i className="fa-brands fa-asymmetrik"></i></button>
                <NavLink to="/events">Events</NavLink>
                <button id="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div id="rightnav">
                <button id="profile" onClick={() => setIsOpen(true)}><i className="fa-regular fa-user"></i>{account}</button>
                <LoginForm open={isOpen} onClose={()=> setIsOpen(false)}></LoginForm>
                <button className="menu"><i className="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}

export default NavBar