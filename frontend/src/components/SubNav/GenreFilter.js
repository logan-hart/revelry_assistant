import reactDom from "react-dom"
import "./SubNav.css"

export default function GenreFilter({open, onClose, genre, setGenre }) {
    const genres=['Acid', 'Afrobeat', 'Baile Funk', 'Bass', 'Breakcore', 'Club', 'Dancehall', 'Deep House', 'Dembow', 'Disco', 'Drum & Bass', 'Dub', 'Electro', 'Experimental', 'Funk/Soul', 'Hip-Hop', 'House', 'Italo Disco', 'Jungle', 'Latin Bass', 'Minimal', 'Neo Perreo', 'Pop', 'Progressive House', 'Reggaeton', 'R&B', 'Tech House', 'Techno', 'Trance']

    if(!open) return null
    return reactDom.createPortal(
        <>
            <div onClick={onClose} className="genre-overlay"></div>
            <div className="genre-modal">
                <button onClick={onClose}className="genre-close">&times;</button>
                <div>
                    <div className="dark-text genre-div">Select a genre</div>
                    <div className="genre-list-div">
                        {genres.map((genreOption, i) => {
                            if (genreOption !== genre ){
                            return <button className="genre-button small-text" key={i} value={genreOption} onClick={(e) => {setGenre(e.target.value)
                                onClose()
                            }}>{genreOption}</button>
                            } else{
                                return (
                                    <div className="selected-genre">
                                        <button className="genre-button small-text" key={genreOption} value={genreOption} onClick={(e) => {setGenre(e.target.value)
                                            onClose()
                                        }}>{genreOption}</button>
                                        <button className="button genre-cancel-button" onClick={() => {onClose()
                                            setGenre('')
                                        }}>Remove</button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    )
}
