import React from "react"
import "./TimerInput.css"

const MAX_HOURS = parseInt(process.env.REACT_APP_MAX_DURATION_HOURS)
const MIN_MINS = parseInt(process.env.REACT_APP_MIN_DURATION_MINS)

function TimerInput({ symbol, placeholder, setTime, value, readonly, hours }) {
  const handleChange = (e) => {
    const max_length = 2
    e.target.value = e.target.value.slice(0, max_length)

    const val = parseInt(e.target.value)
    if (symbol === "h" && val > MAX_HOURS) {
      e.target.value = MAX_HOURS
    }
    else if (symbol === "m") {
      if (val > 59) {
        e.target.value = 59
      }
    }

    if (val < 0) e.target.value = 0

    setTime(symbol, e.target.value)
  }

  const handleBlur = (e) => {
    if (symbol !== "m") return

    const val = parseInt(e.target.value || 0)
    hours = parseInt(hours || 0)
    if (hours <= 0 && val < MIN_MINS) {
      setTime(symbol, MIN_MINS)
    }
  }


  return(
    <div className="TimerInput">
      <input
        type="number"
        onChange={handleChange}
        placeholder={placeholder}
        value={value === 0 ? "" : value}
        readOnly={readonly}
        onBlur={handleBlur}
      />
      <div className="input-symbol">{symbol}</div>
    </div>
  )
}

export default TimerInput
