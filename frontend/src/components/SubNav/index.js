import { Link } from 'react-router-dom'

import './SubNav.css'

function SubNav() {

    return (
        <>
            <div className="left-sub-nav">
                <Link className="sub-nav-link white-text" to="/Events">Overview</Link>
                <Link className="sub-nav-link white-text" to="/Events">Events</Link>
                <Link className="sub-nav-link white-text" to="/Events">For you</Link>
                <Link className="sub-nav-link white-text" to="/Events">Just announced</Link>


            </div>
            <div className="right-sub-nav">
                <span className="red-text" id="filter-icon"><i className="fa-solid fa-sliders"></i></span>
                <span className="white-text" id="filter">Filter by:</span>
                <button className="button black-button sub-nav-button">Genre</button>
                <button className="button black-button sub-nav-button">Date</button>
                <button className="button black-button sub-nav-button"><img id="button-flag" src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"/><span>New York</span></button>
            </div>
        </>
    )
}

export default SubNav