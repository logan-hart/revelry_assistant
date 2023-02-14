import './Footer.css'

function Footer() {
    return (
        <div className="footer-layout">
            <div className="container footer-container white-text">
                <div className="footer-fifth first">
                    <div>(Large White icon)</div>
                </div>
                <div className="footer-fifth footer-divider " >
                    <div>
                        <div className="form-label dark-text">Discover</div>
                        <div className="footer-row medium-text">
                            <div >About /</div>
                            <div className="footer-details-spacer"> Tickets /</div>
                            <div className="footer-details-spacer"> Resale /</div>
                            <div className="footer-details-spacer"> Advertise /</div>
                            <div className="footer-details-spacer"> Jobs</div>
                        </div>
                    </div>
                    <div>
                        <div className="form-label dark-text">Get RA apps</div>
                        <div className="footer-row medium-text">
                            <div>RA Guide / </div>
                            <div className="footer-details-spacer"> RA Scanner</div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-fifth">
                    <div className="medium-text dark-text footer-promoter">Are you a recruiter?</div>
                    <button className="button black-button ">Contact me</button>
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
                    <div className="footer-row">
                        <div></div>
                        <div>Link icon</div>
                        <div>Link icon</div>
                        <div>Link icon</div>
                        <div>Link icon</div>
                        <div>Link icon</div>
                        <div>Link icon</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer