import React from 'react'

export default function Step1({name, setName, venue, setVenue}) {
  return (
    <div>
      <div>
                <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / BASIC</div>
                    <div>
                        <div className='form-label '>Event name<span className="red-text">*</span></div>
                        <input className='form-input full-input' value={name}onChange={(e) => setName(e.target.value)}></input>
                        <div className='form-label errors'>possible errors {name}</div>
                    </div>
                    
                    <div className='step-divider'>
                        <div className="half-input">
                            <div className='form-label'>Event starts <span className="red-text">*</span></div>
                            <input className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                        <div className="half-input">
                            <div className='form-label'>Start time <span className="red-text">*</span></div>
                            <input className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                    </div>
                    
                    <div className='step-divider'>
                        <div className="half-input">
                            <div className='form-label'>Event end <span className="red-text">*</span></div>
                            <input className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                        <div className="half-input">
                            <div className='form-label'>End time <span className="red-text">*</span></div>
                            <input className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                    </div>
                </div>
                    <div>
                        <div className="red-text medium-text create-subheader"> / VENUE</div>
                            <div>
                                <div>
                                    <div className='form-label'>Venue <span className="red-text">*</span></div>
                                    <input className='form-input full-input' value={venue} onChange={(e) => setVenue(e.target.value)}></input>
                                    <div className='form-label errors'>possible errors {venue}</div>
                                </div>
                            </div>
                        <div>
                    </div>

                </div>
            </div>
    </div>
  )
}