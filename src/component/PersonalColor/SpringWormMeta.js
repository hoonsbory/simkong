import React, { Component } from 'react'
import Meta from '../Meta'
import { Link } from "react-router-dom"
export default class SpringWormMeta extends Component {
    componentDidMount(){
        document.getElementById("link").click()
           
    }
    render() {
        const metaData = {
            title: "봄 웜톤",
            description : "봄웜톤 페이지입니다",
            image : "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            canonical : "springWormMeta",
            canonical2 : "springWormMeta",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
                <Link id="link" to="/springWorm?redirect=true"></Link>
            </div>
        )
    }
}
