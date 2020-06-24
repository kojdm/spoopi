import React from "react"
import "./TimerInput.css"

function TimerInput({ symbol, placeholder, setTime, value, readonly, hours }) {
  const handleChange = (e) => {
    const max_length = 2
    e.target.value = e.target.value.slice(0, max_length)

    const val = parseInt(e.target.value)
    if (symbol === "h" && val > 12) {
      e.target.value = 12
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
    if (hours <= 0 && val < 15) {
      setTime(symbol, 15)
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