import React from "react"
import { Link,  BrowserRouter as Router, Route } from "react-router-dom"
import SpringWorm from "./component/PersonalColor/SpringWorm"
import header from "./component/header"
import SpringWormMeta from "./component/PersonalColor/redirect/SpringWormMeta";
import SummerCool from "./component/PersonalColor/SummerCool";
import FallWorm from "./component/PersonalColor/FallWorm";
import WinterCool from "./component/PersonalColor/winterCool";
import SummerCoolMeta from "./component/PersonalColor/redirect/SummerCoolMeta";
import FallWormMeta from "./component/PersonalColor/redirect/FallWormMeta";
import WinterCoolMeta from "./component/PersonalColor/redirect/WinterCoolMeta";

export default function App() {
  window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');
      
  return (
    <Router>
      <Route path="/" component={header}></Route>
      <header>
        <Link to="/springWorm">봄 웜톤</Link>
        <Link to="/summerCool">여름 쿨톤</Link>
        <Link to="/fallWorm">가을 웜톤</Link>
        <Link to="/winterCool">겨울 쿨톤</Link>
        <Link to="/winterCoolMeta"></Link>
        <Link to="/summerCoolMeta"></Link>
        <Link to="/springWormMeta"></Link>
        <Link to="/fallWormMeta"></Link>
        {/* <a href="/personalColor">
          <button>퍼스널컬러 측정</button>

        </a> */}
      </header>
      <hr />
      {/* <Route path="/pcMainDiv/:check" component={pcMainDiv}></Route> */}
      <Route exact path="/springWorm" component={SpringWorm}></Route>
      <Route exact path="/summerCool" component={SummerCool}></Route>
      <Route exact path="/fallWorm" component={FallWorm}></Route>
      <Route exact path="/winterCool" component={WinterCool}></Route>
      <Route exact path="/springWormMeta" component={SpringWormMeta}></Route>
      <Route exact path="/summerCoolMeta" component={SummerCoolMeta}></Route>
      <Route exact path="/fallWormMeta" component={FallWormMeta}></Route>
      <Route exact path="/winterCoolMeta" component={WinterCoolMeta}></Route>
    </Router>
  )
}