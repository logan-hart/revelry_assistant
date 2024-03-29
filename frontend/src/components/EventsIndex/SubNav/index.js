import { useState } from 'react'
import { Link } from 'react-router-dom'
import GenreFilter from './GenreFilter'
import DateFilter from './DateFilter'
import './SubNav.css'

function SubNav({genre, setGenre}) {
    const [genreFilterOpen, setGenreFilterOpen] = useState(false)
    const [date, setDate] = useState('')
    const [dateFilterOpen, setDateFilterOpen] = useState(false)

    genre ||= "Genre"

    return (
        <>
            <div className="left-sub-nav">
                <span className="sub-nav-link white-text" to="/Events">Overview</span>
                <span  className="sub-nav-link white-text" to="/Events">Events</span>
                <span className="sub-nav-link white-text" to="/Events">For you</span>
                <span className="sub-nav-link white-text" to="/Events">Just announced</span>
            </div>
            <div className="right-sub-nav">
                <span className="red-text" id="filter-icon"><i className="fa-solid fa-sliders"></i></span>
                <span className="white-text filter" id="filter">Filter by:</span>
                <button onClick={() => setGenreFilterOpen(true)} className="button black-button sub-nav-button">{genre}</button>
                    <GenreFilter open={genreFilterOpen} setGenre={setGenre} onClose={() => setGenreFilterOpen(false)} genre={genre}></GenreFilter>
                {/* <button onClick={() => setDateFilterOpen(true)} className="button black-button sub-nav-button">Date</button>
                    <DateFilter open={dateFilterOpen} setDate={setDate} onClose={()=> setGenreFilterOpen(false)}></DateFilter>
                <button className="button black-button sub-nav-button"><img id="button-flag" src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"/><span>New York</span></button> */}
            </div>
        </>
    )
}

export default SubNav