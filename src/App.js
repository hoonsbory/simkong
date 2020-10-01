import React from 'react'
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import SpringWarm from "component/PersonalColor/SpringWarm"
import SpringWarmMeta from "component/PersonalColor/redirect/SpringWarmMeta";
import SummerCool from "component/PersonalColor/SummerCool";
import FallWarm from "component/PersonalColor/FallWarm";
import WinterCool from "component/PersonalColor/WinterCool";
import SummerCoolMeta from "component/PersonalColor/redirect/SummerCoolMeta";
import FallWarmMeta from "component/PersonalColor/redirect/FallWarmMeta";
import WinterCoolMeta from "component/PersonalColor/redirect/WinterCoolMeta";
import Footer from "component/Footer";
import ReTry from "component/ReTry.js"
import AdSense from 'react-adsense'


const App = () => {
  window.scrollTo(0, 0)
  window.Kakao.init('7e83cda1ddcc964d3fb6c99c8fd47645');


  const retry = {
    background: "rgb(206,222,247)",
    borderRadius: "100px",
    color: "white",
    fontSize: "1.2rem",
    display: "inline",
    cursor: "pointer",
  }

  return (
    <div>
      <Router>
        <ul id="navBar">
          {/* 리액트 스냅으로 렌더링을 해야하는데, Link를 쓰면 기존의 스크립트방식의 렌더를 사용해서 seo최적화를 할 수가 없음. 그래서 a태그로 바꿈 */}
          <a href="/springWarm" style={{ background: "rgb(230,187,163)" }}>봄 웜톤</a>
          <a href="/fallWarm" style={{ background: "rgb(226,186,139)" }}>가을 웜톤</a>
          <a href="/summerCool" style={{ background: "rgb(168,189,247)" }}>여름 쿨톤</a>
          <a href="/winterCool" style={{ background: "rgb(168,233,239)" }}>겨울 쿨톤</a>
        </ul>
        <div style={{ width: "100%", textAlign: "center" }}>
          <div onClick={() => window.location.href = "https://mycolor.kr"} className="px-5 pt-2" style={retry}>
            피부 테스트하러 가기
          </div>
        </div>
        <Link to="/winterCoolMeta"></Link>
        <Link to="/summerCoolMeta"></Link>
        <Link to="/springWarmMeta"></Link>
        <Link to="/fallWarmMeta"></Link>
        {/* <Link to="/winterCool"></Link>
        <Link to="/summerCool"></Link>
        <Link to="/springWarm"></Link>
        <Link to="/fallWarm"></Link> */}
        <Route exact path="/springWarm" component={SpringWarm}></Route>
        <Route exact path="/summerCool" component={SummerCool}></Route>
        <Route exact path="/fallWarm" component={FallWarm}></Route>
        <Route exact path="/winterCool" component={WinterCool}></Route>
        <Route exact path="/springWarmMeta" component={SpringWarmMeta}></Route>
        <Route exact path="/summerCoolMeta" component={SummerCoolMeta}></Route>
        <Route exact path="/fallWarmMeta" component={FallWarmMeta}></Route>
        <Route exact path="/winterCoolMeta" component={WinterCoolMeta}></Route>
        {/* <AdSense.Google
                client="ca-pub-9106671749645972"
                slot="4086317268"
                style={{ display: 'block', textAlign: "center" }}
                format="auto"
                responsive='true'
            /> */}
        <ins className="kakao_ad_area ads" style={{ display: "none" }} data-ad-unit="DAN-qhq4nydjh6b5" data-ad-width="320"
          data-ad-height="100"></ins>
        <ins class="kakao_ad_area" style={{display:"none"}}
          data-ad-unit="DAN-u87wjanwcvg8"
          data-ad-width="320"
          data-ad-height="50"></ins>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App


