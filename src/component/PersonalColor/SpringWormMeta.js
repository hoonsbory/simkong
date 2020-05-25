import React, { Component } from 'react'
import Meta from '../Meta'

export default class SpringWormMeta extends Component {
    render() {
        const metaData = {
            title: "봄 웜톤",
            description : "봄웜톤 페이지입니다",
            image : "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            canonical : "springWorm/redirect",
            canonical2 : "springWorm/redirect",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
            </div>
        )
    }
}
