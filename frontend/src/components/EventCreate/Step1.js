import React from 'react'
import DatePicker from './DatePicker'

export default function Step1({name, setName, venue, setVenue, startTime, endTime, setStartTime, setEndTime, startDate, setStartDate, endDate, setEndDate }) {

    const timeOptions = ['00:00','00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00', '07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','23:59']



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
                            {DatePicker}
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                        <div className="half-input">
                            <div className='form-label'>Start time <span className="red-text">*</span></div>
                            <select id="start-time-dropdown" value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                                <option value=""></option>
                                {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
                            </select>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                    </div>
                    
                    <div className='step-divider'>
                        <div className="half-input">
                            <div className='form-label'>Event end <span className="red-text">*</span></div>
                            <input value={endDate} onChange={(e) => setEndDate(e.target.value)} className='form-input full-input'></input>
                            <div className='form-label errors'>possible errors</div>
                        </div>
                        <div className="half-input">
                            <div className='form-label'>End time <span className="red-text">*</span></div>
                            <select id="end-time-dropdown" value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                                <option value=""></option>
                                {timeOptions.map((time) => <option key={time} value={time}>{time}</option>)}
                            </select>
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