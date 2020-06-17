import React, { useState, useEffect } from "react"
import "./AddToSpotifyButton.css"

function AddToSpotifyButton({ content, nextable, name, setName }) {
  const [showSpoopiName, setShowSpoopiName] = useState(false)
  const [placeholderWords, setPlaceholderWords] = useState([])

  useEffect(() => {
    // TODO: find out how to put url in env
    const base_url = "https://random-word-api.herokuapp.com/word?swear=0&"
    const word_count = "number=" + 2

    fetch(base_url + word_count)
      .then(res => res.json())
      .then((result) => { setPlaceholderWords(result) })
  }, [])

  const placeholder = () => {
    return placeholderWords.map(word => (
      word.charAt(0).toUpperCase() + word.slice(1)
    )).join(" ")
  }

  const handleClick = () => {
    if (!showSpoopiName) return setShowSpoopiName(true)

    if (name.length <= 0) {
      setName(placeholder())
    }

    // TODO: env this link
    const url = "http://localhost:9292/authenticate_user"
    window.open(url, "_blank", "titlebar=no, status=no");
  }

  const handleChange = (e) => {
    const max_length = 30
    e.target.value = e.target.value.slice(0, max_length)

    setName(e.target.value)
  }

  return(
    <div className="AddToSpotifyButton-container">
      { showSpoopiName &&
          <div className="spoopi-name">
            Give your playlist a name:
            <input
              type="text"
              onChange={handleChange}
              placeholder={placeholder()}
            />
          </div>
      }
          <div className={"AddToSpotifyButton" + (nextable ? " nextable" : "")} onClick={handleClick}>
            <div className="addtospotify-button-content">
              Add to Spotify
              { nextable && <span className="next-arrow">&#187;</span> }
            </div>
          </div>
    </div>
  )
}

export default AddToSpotifyButton
