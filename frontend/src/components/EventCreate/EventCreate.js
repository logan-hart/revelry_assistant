import { useEffect } from "react"
import CreateBody from "./CreateBody"
import CreateHeader from "./CreateHeader"
import './EventCreate.css'

import React from 'react'

export default function EventCreate() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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