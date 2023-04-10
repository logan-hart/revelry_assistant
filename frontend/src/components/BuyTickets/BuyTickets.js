import React from 'react'
import { useEffect } from 'react';

export default function BuyTickets(props) {
  const { ticketNum, event } = props.location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    })

  return (
    <div>
      <div>{ticketNum}</div>
      <div>{event}</div>
      
    </div>
  )
}
