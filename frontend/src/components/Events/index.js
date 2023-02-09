import SubNav from '../SubNav'
import Header from '../Header'
import './Events.css'

function Events(){


    return(
        <>
            <div id='layout-1'>
                <div className='container header-container'>
                    <Header />
                </div>
            </div>
                
            <div id='layout-2' >
                <div className='container sub-nav-container'>
                    <SubNav />
                </div>
            </div>
            
            <div id='layout-3'>
                <div className='container'>

                </div>
            </div>       
        </>

    )
}

export default Events