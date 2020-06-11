import React, { useState } from "react"
import "./TimerContainer.css"

import TimerInput from "./TimerInput"
import NextButton from "../NextButton"

function TimerContainer() {
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

  const [hours, setHours] = useState(null)
  const [mins, setMins] = useState(null)

  const handleSetTime = (key, val) => {
    val = parseInt(val || 0)
    if (key === "h") {
      setHours(val || null)
      if (val >= 12) setMins("00")
      if (val <= 0 && mins < 15) setMins(15)
    }
    else {
      if (parseInt(hours || 0) >= 12) val = 0
      if (parseInt(hours || 0) <= 0 && val < 15) val = 15
      setMins(val || null)
    }
  }

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

    if (arr.length <= 0) return "Choose a duration for your playlist"

    return "Create a " + formatted_time + " playlist"
  }

  return(
    <div className="TimerContainer">
      <TimerInput symbol="h" placeholder={"00"} setTime={handleSetTime}/>
      <TimerInput symbol="m" placeholder={"00"} setTime={handleSetTime} value={mins} readonly={hours >= 12}/>
      <NextButton content={nextButtonContent()} nextable={hours !== null || mins !== null}/>
    </div>
  )
}

export default TimerContainer
