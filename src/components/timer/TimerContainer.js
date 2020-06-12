import React, { useState, useEffect } from "react"
import "./TimerContainer.css"

import TimerInput from "./TimerInput"
import NextButton from "../NextButton"

function TimerContainer({ duration, handleDuration, pageTraversal }) {
  // NOTE: keeping this here in case i want to use it again
  // const createPlaceholder = () => {
  //   const max_hours = 12
  //   const min_minutes = 15

  //   let hours = Math.floor(Math.random() * max_hours + 1)
  //   let minutes = 0
  //   if (hours >= 12) {
  //     minutes = 0
  //   }
  //   else if (hours <= 0) {
  //     minutes = min_minutes
  //   }
  //   else {
  //     minutes = Math.floor(Math.random() * 60)
  //   }

  //   return [hours, minutes]
  // }

  const calculateInitDuration = () => {
    let init_mins = duration / 60
    const init_hours = Math.floor(init_mins / 60)
    init_mins = init_mins - init_hours * 60 

    return [init_hours, init_mins]
  }

  const initDuration = calculateInitDuration()
  const [hours, setHours] = useState(initDuration[0])
  const [mins, setMins] = useState(initDuration[1])

  const handleSetTime = (key, val) => {
    val = parseInt(val || 0)
    if (key === "h") {
      setHours(val || null)
      if (val >= 12) setMins("00")
      if (val <= 0 && mins < 15) setMins(15)
    }
    else {
      if (parseInt(hours || 0) >= 12) val = 0
      setMins(val || null)
    }
  }

  useEffect(() => {
    handleDuration(hours, mins)
  })

  const nextButtonContent = () => {
    let arr = []
    if (hours <= 0 && mins >= 1) {
      arr = [mins, "min"]
    }
    else if (mins <= 0 && hours >= 1) {
      arr = [hours, "hour"]
    }
    else if (hours >= 1 && mins >= 1) {
      arr = [hours, "hour", mins, "min"]
    }
    const formatted_time = arr.join(" ")

    if (arr.length <= 0) return "Enter a duration for your playlist"

    return "Create a " + formatted_time + " playlist"
  }

  return(
    <div className="TimerContainer">
      <TimerInput symbol="h" placeholder={"00"} setTime={handleSetTime} value={hours}/>
      <TimerInput symbol="m" placeholder={"00"} setTime={handleSetTime} value={mins} readonly={hours >= 12} hours={hours}/>
      <NextButton content={nextButtonContent()} nextable={hours !== 0 || mins !== 0} nextPage={pageTraversal}/>
    </div>
  )
}

export default TimerContainer
