import React, { Component } from 'react'
import Meta from '../../Meta'
export default class WinterCoolMeta extends Component {
    componentDidMount(){
        window.location.href = "http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor"
           
    }
    render() {
        const metaData = {
            title: "퍼스널 컬러 진단하기!",
            description : "나의 퍼스널 컬러는 뭘까??",
            image : "/images/personalColor/winterTitle.png",
            canonical : "winterCoolMeta",
            canonical2 : "winterCoolMeta",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
            </div>
        )
    }
}
