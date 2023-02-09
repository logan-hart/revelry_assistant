import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import LoginModal from "../LoginModal"
import UserModal from "../UserModal"
import './navBar.css'


function NavBar() {
    const sessionUser = useSelector(state => state.session.user)
    let account = sessionUser ? sessionUser.username : 'My account'
    const[loginModalOpen, setLoginModalOpen] = useState(false)
    const[userModalOpen, setUserModalOpen] = useState(false)
    
    return (
        <div id="nav-layout">

            <div className="nav-container container">
                <div id="left-nav">
                    <button id="icon"><i className="fa-brands fa-ravelry"></i><i className="fa-brands fa-asymmetrik"></i></button>
                    <NavLink className="link nav-link" to="/events">Events</NavLink>
                    <button id="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div id="right-nav">
                    <button id="profile" className="nav-link" onClick={() => sessionUser ? setUserModalOpen(true) : setLoginModalOpen(true)}><i className="fa-regular fa-user"> </i> {account}</button>
                    <LoginModal open={loginModalOpen} onClose={()=> setLoginModalOpen(false)}></LoginModal>
                    <UserModal open={userModalOpen} onClose={()=> setUserModalOpen(false)}></UserModal>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

        </div>
    )
}

export default NavBar