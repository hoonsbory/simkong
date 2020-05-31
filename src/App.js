import React from "react"
import { Link,  BrowserRouter as Router, Route } from "react-router-dom"
import SpringWarm from "./component/PersonalColor/SpringWarm"
import SpringWarmMeta from "./component/PersonalColor/redirect/SpringWarmMeta";
import SummerCool from "./component/PersonalColor/SummerCool";
import FallWarm from "./component/PersonalColor/FallWarm";
import WinterCool from "./component/PersonalColor/winterCool";
import SummerCoolMeta from "./component/PersonalColor/redirect/SummerCoolMeta";
import FallWarmMeta from "./component/PersonalColor/redirect/FallWarmMeta";
import WinterCoolMeta from "./component/PersonalColor/redirect/WinterCoolMeta";
import Footer from "./component/Footer";

export default function App() {
  window.scrollTo(0,0)
  window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');
  return (
    <Router>
        
        <Link to="/winterCoolMeta"></Link>
        <Link to="/summerCoolMeta"></Link>
        <Link to="/springWarmMeta"></Link>
        <Link to="/fallWarmMeta"></Link>
        <Link to="/winterCool"></Link>
        <Link to="/summerCool"></Link>
        <Link to="/springWarm"></Link>
        <Link to="/fallWarm"></Link>
        {/* <a href="/personalColor">
          <button>퍼스널컬러 측정</button>

        </a> */}
      {/* <Route path="/pcMainDiv/:check" component={pcMainDiv}></Route> */}
      <Route exact path="/springWarm" component={SpringWarm}></Route>
      <Route exact path="/summerCool" component={SummerCool}></Route>
      <Route exact path="/fallWarm" component={FallWarm}></Route>
      <Route exact path="/winterCool" component={WinterCool}></Route>
      <Route exact path="/springWarmMeta" component={SpringWarmMeta}></Route>
      <Route exact path="/summerCoolMeta" component={SummerCoolMeta}></Route>
      <Route exact path="/fallWarmMeta" component={FallWarmMeta}></Route>
      <Route exact path="/winterCoolMeta" component={WinterCoolMeta}></Route>
      
      <Footer></Footer>
    </Router>
  )
}