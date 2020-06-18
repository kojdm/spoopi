import React, { useReducer } from 'react';
import './App.css';

import SpoopiNav from "./components/SpoopiNav"
import SpoopiContainer from "./components/SpoopiContainer"

const initialPageState = {
  current_page: "categories",
}

const pages = ["categories", "timer", "tracks", "playlist"]
const pageReducer = (state, action) => {
  switch(action) {
    case "next":
      const next_page_index = pages.indexOf(state.current_page) + 1
      return { current_page: pages[next_page_index] }
    case "back":
      const previous_page_index = pages.indexOf(state.current_page) - 1
      return { current_page: pages[previous_page_index] }
    case "reload":
      return window.location.reload()
    default:
      throw new Error()
  }
}

function App() {
  const [pageState, pageTraversal] = useReducer(pageReducer, initialPageState)

  return(
    <div className="App">
      <div className="column left">
        <SpoopiContainer current_page={pageState.current_page} pageTraversal={pageTraversal}/>
      </div>
      <div className="column right">
        <SpoopiNav current_page={pageState.current_page}/>
      </div>
    </div>
  )
}

export default App;
