import React from "react"
import { Link,  BrowserRouter as Router, Route } from "react-router-dom"
import SpringWorm from "./component/PersonalColor/SpringWorm"
import header from "./component/header"
import SpringWormMeta from "./component/PersonalColor/SpringWormMeta";

export default function App() {
  window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');

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
      {/* <Route path="/pcMainDiv/:check" component={pcMainDiv}></Route> */}
      <Route exact path="/springWorm" component={SpringWorm}></Route>
      <Route exact path="/springWorm/redirect" component={SpringWormMeta}></Route>
    </Router>
  )
}