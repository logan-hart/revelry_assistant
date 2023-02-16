import CreateBody from "./CreateBody"
import CreateHeader from "./CreateHeader"
import './EventCreate.css'

import React from 'react'

export default function EventCreate() {
  return (
    <div>
        <div>
            <CreateHeader/>
        </div>
        <div>
            <CreateBody/>
        </div>
    </div>
  )
}