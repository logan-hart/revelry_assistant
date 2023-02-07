import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"



function NavBar() {
    const sessionUser = useSelector(state => state.session.user)
    
    const clickMe = () => {
        console.log(sessionUser)
    }

    let account = sessionUser ? sessionUser.username : 'My account'


    return (
        <>
            <div>
                <button><i className="fa-brands fa-ravelry"></i><i className="fa-brands fa-asymmetrik"></i></button>
                <Link to="/events">Events</Link>
                <button id="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div>
                <button onClick={clickMe}><i className="fa-regular fa-user"></i>{account}</button>
                <button className="menu"><i className="fa-solid fa-bars"></i></button>
            </div>
        </>
    )
}

export default NavBar