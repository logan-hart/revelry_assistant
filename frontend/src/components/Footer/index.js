import whitelogo from './whitelogo.png'
import './Footer.css'

function Footer() {
    const emailAddress = 'loganchart@gmail.com';
    const emailSubject = 'I checked out Revelry Assistant!'

    function handleSubmit() {
        window.location.href = `mailto:${emailAddress}?subject=${emailSubject}`;
      }

    return (
        <div className="footer-layout">
            <div className="container footer-container white-text">
                <div className="footer-fifth first">
                    <img className="footer-logo" src={whitelogo}/>
                </div>
                <div className="footer-fifth footer-divider" >
                    <div>
                        <div className="form-label dark-text">Developer info</div>
                        <div className="footer-row medium-text white-text">
                            <a href="https://www.linkedin.com/in/logan-hartman4104/" className="link left-footer-link" target="_blank" rel="noopener noreferrer">Linkedin</a><span> / </span>
                            <a href="https://github.com/logan-hart" className="link footer-link" target="_blank" rel="noopener noreferrer">Github</a><span> / </span>
                            <a href="https://logan-hart.github.io/portfolio/" className="link footer-link" target="_blank" rel="noopener noreferrer">Portfolio</a><span> / </span>
                            <a href="https://docs.google.com/document/d/1mQGqwyVjrPUB5H7WHjbHwxLrvxNObw820-n7WodVMsk/edit?usp=sharing" className="link footer-link"  target="_blank" rel="noopener noreferrer">Resume </a>
                        </div>
                    </div>
                    <div>
                        <div className="form-label dark-text">More by this developer</div>
                        <div className="footer-row medium-text">
                            <a href="https://puppy-play-dates.herokuapp.com/" className="link left-footer-link" target="_blank" rel="noopener noreferrer">Puppy Play Dates</a><span> / </span>
                            <a href="https://logan-hart.github.io/pathfinder/" className="link footer-link" target="_blank" rel="noopener noreferrer">Pathfinder</a>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-fifth">
                    <div className="medium-text dark-text footer-promoter">Are you a recruiter?</div>
                    <button onClick={handleSubmit} className="button black-button ">Contact me</button>
                </div>
                <div className="footer-fifth footer-divider fourth">
                    <div className="footer-row form-label">
                    <img id="event-show-small-flag-icon" src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"/> <div className="footer-details-spacer"> New York </div>
                        <div className="grey-text footer-details-spacer" > Language <span>English</span></div>
                    </div>
                    <div className="footer-row form-label">
                        <div className="footer-details-spacer">Privacy</div>
                        <div className="footer-details-spacer">Terms</div>
                        <div className="footer-details-spacer">Cookies</div>
                        <div className="footer-details-spacer">Sitemap</div>
                    </div>
                </div>
                <div className="footer-fifth footer-divider fifth">
                    <div>
                        <div className="form-label dark-text"> Clone of Resident Advisor Ltd. 2023 by Logan Hart. All rights reserved.</div>
                    </div>
                    <div className=" form-label footer-row dark-text">
                        <div></div>
                        <div>Built Using: Javascript / React / Ruby on Rails / PostgreSQL</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer