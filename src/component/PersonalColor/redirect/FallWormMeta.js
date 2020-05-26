import React, { Component } from 'react'
import Meta from '../../Meta'
export default class FallWormMeta extends Component {
    componentDidMount(){
        //리다이렉트 페이지에 접속하면 리다이렉트를 시켜야하는데, 리액트 스냅의 원리가
        //리액트 스냅에서 렌더링한 html파일로 리다이렉트 시키는 것이라서, 우선순위가 리액트 스냅이라 리다이렉트 코드를 쓰면
        //빌드가 안된다. 그래서 reactsnap의 리다이렉트 봇의 userAgent를 특정해서 빌드를 통과시킴.
        if(navigator.userAgent == "ReactSnap"){

        }else{

            window.location.href = "http://jaehoon-dayoff.ml.s3-website.ap-northeast-2.amazonaws.com/personalColor"
        }
           
    }
    render() {
        const metaData = {
            title: "퍼스널 컬러 진단하기!",
            description : "나의 퍼스널 컬러는 뭘까??",
            image : "/images/personalColor/fallTitle.png",
            canonical : "fallWormMeta",
            canonical2 : "fallWormMeta",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
            </div>
        )
    }
}
