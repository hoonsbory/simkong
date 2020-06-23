import React, { Component } from 'react'
import Meta from '../../Meta'
export default class FallWarmMeta extends Component {
    componentDidMount(){
        //리다이렉트 페이지에 접속하면 리다이렉트를 시켜야하는데, 리액트 스냅의 원리가
        //리액트 스냅에서 렌더링한 html파일로 리다이렉트 시키는 것이라서, 우선순위가 리액트 스냅이라 리다이렉트 코드를 쓰면
        //빌드가 안된다. 그래서 reactsnap의 리다이렉트 봇의 userAgent를 특정해서 빌드를 통과시킴.
        if(navigator.userAgent == "ReactSnap"){

        }else{

            window.location.href = "https://mycolor.kr"
        }
           
    }
    render() {
        const metaData = {
            title: "퍼스널 컬러 자가진단 테스트하기!",
            description : "인공지능을 통해 퍼스널컬러를 진단받아보세요!",
            image : "/images/personalColor/fallMeta.png",
            canonical : "fallWarmMeta",
            canonical2 : "fallWarmMeta",
            addUrl : "personalColor"
        }
        return (
            <div>
                <Meta data={metaData}/>
            </div>
        )
    }
}
