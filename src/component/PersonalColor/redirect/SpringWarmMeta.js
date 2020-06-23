import React, { Component } from 'react'
import Meta from '../../Meta'
export default class SpringWarmMeta extends Component {
    componentDidMount(){
        if(navigator.userAgent == "ReactSnap"){

        }else{

            window.location.href = "https://mycolor.kr"
        }
           
    }
    render() {
        const metaData = {
            title: "퍼스널 컬러 자가진단 테스트하기!",
            description : "인공지능을 통해 퍼스널컬러를 진단받아보세요!",
            image : "/images/personalColor/springMeta.png",
            canonical : "springWarmMeta",
            canonical2 : "springWarmMeta",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
            </div>
        )
    }
}
