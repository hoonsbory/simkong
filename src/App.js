import React from "react"
import { Link,  BrowserRouter as Router } from "react-router-dom"

export default function App() {
  return (
    <Router>
      <h1>메인페이지</h1>
      <header>
        <Link to="/personalColor">
          <button>퍼스널컬러 측정</button>
        </Link> <br></br>
        <a href="/personalColor">
          <button>퍼스널컬러 측정2</button>
        </a>
      </header>
      <hr />
    </Router>
  )
}