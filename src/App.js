import React from "react"
import { Link,  BrowserRouter as Router, Route } from "react-router-dom"
import SpringWorm from "./component/SpringWorm"
import header from "./component/header"

export default function App() {
  window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');

  return (
    <Router>
      <Route path="/" component={header}></Route>
      <header>
          <div className="addthis_inline_share_toolbox"></div>
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