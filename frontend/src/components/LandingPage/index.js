import './LandingPage.css'
import { useEffect } from 'react'

function LandingPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    
    return (
        <>
            <div className="full-page-image">
                <img className="image-1" src="https://media.istockphoto.com/id/890774964/photo/feeling-the-music.jpg?s=612x612&w=0&k=20&c=sxU1FTqhv4vbRo5KTtXA60WKDVpnanBb2qWfytk4rdA="/>
                <img className="image-2" src="https://media.istockphoto.com/id/1259192924/photo/happy-people-dance-in-nightclub-party-concert.jpg?b=1&s=170667a&w=0&k=20&c=SU-tVzZq3zbCd7XNSNSVLysE0aiCPhREEvXUPhRaGsM="/>
                <img className="image-3" src="https://media.istockphoto.com/id/611607148/photo/dj-console-desk-at-nightclub.jpg?s=612x612&w=0&k=20&c=2mlEWzTzaXj7hll3aYQdiyMLWizwFnBsZE3gIHoh3dQ="/>
                <img className="image-4" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg"/>
                {/* <img className="image-5" src="https://imgproxy.ra.co/_/quality:66/w:768/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2lwcy9mZWF0LXBvbGl0aWNzLmpwZw=="/> */}
            </div>
        </>
    )
}

export default LandingPage