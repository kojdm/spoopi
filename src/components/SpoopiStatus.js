import React from "react"
import "./SpoopiStatus.css"

function SpoopiStatus({ spoopiPlaylist }) {
  const getSpoopiStatus = (item) => {
    const key = item[0]
    const val = item[1]
    switch(key) {
      case "categories":
        return ["categories", val.map(c => c.replace("_", " ")).join(", ")]
      case "duration":
        let m = val / 60
        const h = Math.floor(m / 60)
        m = m - h * 60

        return ["duration", h + "h " + m + "m"]
      case "track_count":
        return ["# of songs", val]
      case "name":
        return ["name", val]
      case "spotify_url":
        return [
          "spotify link",
          <a href={val} target="_blank" rel="noopener noreferrer">click to open in spotify</a>
        ]
      default:
        return null
    }
  }

  return(
    <div className="SpoopiStatus">
      <table>
        { Object.entries(spoopiPlaylist).map((item) => {
          if (!item[1]) { return null }

          const [key, val] = getSpoopiStatus(item)
          return <tr>
            <td className="t-key">{key}</td>
            <td className="t-val">{val}</td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default SpoopiStatus
