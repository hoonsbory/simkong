import React from "react"
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Hello from "./hello"
import About from "./About"

export default function App() {
  return (
    <Router>
      <header>
        <a href="/test">
          <button>Hello</button>
        </a>
        <Link to="/about">
          <button>About</button>
        </Link>
      </header>
      <hr />
        <Route exact path="/" component={Hello} />
        <Route path="/about" component={About} />
    </Router>
  )
}