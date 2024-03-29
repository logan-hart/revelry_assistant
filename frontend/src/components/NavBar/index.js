import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import LoginModal from "../LoginModal"
import UserModal from "../UserModal"
import DeveloperModal from "../DeveloperModal/DeveloperModal"
import './navBar.css'

function NavBar() {
    const sessionUser = useSelector(state => state.session.user)
    let account = sessionUser ? sessionUser.username : 'My account'
    const[loginModalOpen, setLoginModalOpen] = useState(false)
    const[userModalOpen, setUserModalOpen] = useState(false)
    const[developerModalOpen, setDeveloperModalOpen] = useState(false)
    
    return (
        <div id="nav-layout">

            <div className="nav-container container">
                <div id="left-nav">
                    <NavLink id="icon-link" className="link nav-link" to="/welcome"><img id="icon" src="https://www.seekpng.com/png/full/309-3093587_ra-logo-png-logo-ra.png"/></NavLink>
                    <NavLink id="event-link" className="link nav-link" to="/events">All events</NavLink>
                    <NavLink id="event-link" className="link nav-link" to='/users/:userId/tickets'>My tickets</NavLink>
                    <NavLink id="event-link" className="link nav-link" to='/users/:userId/events'>Promoted events</NavLink>
                    <NavLink id="event-link" className="link nav-link" to="/events"><i id="Search" className="fa-solid fa-magnifying-glass"></i></NavLink>
                </div>
                <div id="right-nav">
                    <button id="profile" className="nav-link link" onClick={() => sessionUser ? setUserModalOpen(true) : setLoginModalOpen(true)}><i className="fa-regular fa-user"> </i> {account}</button>
                    <LoginModal open={loginModalOpen} onClose={()=> setLoginModalOpen(false)}></LoginModal>
                    <UserModal open={userModalOpen} onClose={()=> setUserModalOpen(false)}></UserModal>
                    <button id="profile" className="nav-link link" onClick={() => setDeveloperModalOpen(true)}><i id="menu-bars" className="fa-solid fa-bars"></i></button>
                    <DeveloperModal open={developerModalOpen} onClose={()=> setDeveloperModalOpen(false)}></DeveloperModal>
                    <NavLink to="/events"></NavLink>
                </div>
            </div>

        </div>
    )
}

export default NavBar