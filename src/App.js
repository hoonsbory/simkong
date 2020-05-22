import React from "react"
import { Link,  BrowserRouter as Router, Route } from "react-router-dom"
import SpringWorm from "./component/SpringWorm"
import header from "./component/header"

export default function App() {
  return (
    <Router>
      <Route path="/" component={header}></Route>
      <header>
        <Link to="/springWorm">봄 웜톤</Link>
        <a href="/personalColor">
          <button>퍼스널컬러 측정</button>
          {/* Link로는 안됨.  */}
        </a>
      </header>
      <hr />
      <Route path="/springWorm" component={SpringWorm}></Route>
    </Router>
  )
}