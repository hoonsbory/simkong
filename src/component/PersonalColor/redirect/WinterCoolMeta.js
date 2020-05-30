import React, { Component } from 'react'
import Meta from '../../Meta'
export default class WinterCoolMeta extends Component {
    componentDidMount(){
        if(navigator.userAgent == "ReactSnap"){

        }else{

            window.location.href = "https://mycolor.kr"
        }
           
    }
    render() {
        const metaData = {
            title: "퍼스널 컬러 진단하기!",
            description : "나의 퍼스널 컬러는 뭘까??",
            image : "/images/personalColor/winterMeta.png",
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
