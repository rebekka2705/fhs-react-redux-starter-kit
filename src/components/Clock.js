import React, { useState, useEffect} from 'react'
import Button from './Button'


const Clock = () => {

  const [time, setTime] = useState((new Date()).toLocaleTimeString());


  //set Intervall for every second update time
  useEffect(() => { 
    const intervallId = setInterval( () => { 
      setTime((new Date()).toLocaleTimeString())},
       1000) 
      
      //damit setIntervall nicht unendlich weiterläuft
      return () => clearInterval(intervallId)
    }, [])
  
  return (

    <div>{time}</div>
  )
}

export default Clock
