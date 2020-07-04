import React, { Component } from "react"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import SpringWarm from "./component/PersonalColor/SpringWarm"
import SpringWarmMeta from "./component/PersonalColor/redirect/SpringWarmMeta";
import SummerCool from "./component/PersonalColor/SummerCool";
import FallWarm from "./component/PersonalColor/FallWarm";
import WinterCool from "./component/PersonalColor/WinterCool";
import SummerCoolMeta from "./component/PersonalColor/redirect/SummerCoolMeta";
import FallWarmMeta from "./component/PersonalColor/redirect/FallWarmMeta";
import WinterCoolMeta from "./component/PersonalColor/redirect/WinterCoolMeta";
import Footer from "./component/Footer";


export default class App extends Component {

  render() {
    window.scrollTo(0, 0)
    window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');

    var d = document, s = d.createElement('script');
    s.src = 'https://personalcolor.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    return (
      <div>
        <Router>

          <Link to="/WinterCoolMeta"></Link>
          <Link to="/summerCoolMeta"></Link>
          <Link to="/springWarmMeta"></Link>
          <Link to="/fallWarmMeta"></Link>
          <Link to="/WinterCool"></Link>
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
          <Route exact path="/WinterCool" component={WinterCool}></Route>
          <Route exact path="/springWarmMeta" component={SpringWarmMeta}></Route>
          <Route exact path="/summerCoolMeta" component={SummerCoolMeta}></Route>
          <Route exact path="/fallWarmMeta" component={FallWarmMeta}></Route>
          <Route exact path="/WinterCoolMeta" component={WinterCoolMeta}></Route>
          <ins class="kakao_ad_area ads" style={{ display: "none" }} data-ad-unit="DAN-qhq4nydjh6b5" data-ad-width="320"
            data-ad-height="100"></ins>
          
          <div id="disqus_thread" />

          <Footer></Footer>
        </Router>
      </div>
    )
  }
}


