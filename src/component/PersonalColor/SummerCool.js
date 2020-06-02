import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'
import ReTry from '../ReTry';
import AdMove from '../AdMove';
import CoupangAds from '../coupangAds';

export default class SummerCool extends Component {
    // componentDidMount(){

    //     var d = document, s = d.createElement('script');
    //     s.src = 'https://personalcolor.disqus.com/embed.js';
    //     s.setAttribute('data-timestamp', +new Date());
    //     (d.head || d.body).appendChild(s);
    // }
    componentDidMount() {
       AdMove()
      }
    render() {
        const metaData = {
            title: "퍼스널 컬러 진단하기!",
            description : "나의 퍼스널 컬러는 뭘까??",
            image : "https://mycolor.kr/images/personalColor/summerMeta.png",
            canonical : "summerCool",
            canonical2 : "summerCoolMeta"
        }
        const coupangAds = {
            season : "여름 쿨톤",
            url : "https://coupa.ng/bDxW6x"
        }
        return (

            <div className="pcMainDiv">
                <Meta data={metaData}/>
                <img alt="WarmTitle" className="pcTitle" src="/images/personalColor/summerTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="WarmMain" className="pcMainImg" src="/images/personalColor/summerMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{background : "rgb(254,236,224)"}}></span>
                                <span className="ml-2" style={{background : "rgb(255,227,213)"}}></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{background : "rgb(255,222,203)"}}></span>
                                <span className="ml-2" style={{background : "rgb(250,208,184)"}}></span>
                            </div>
                        </div>
                        <div className="pcTopText">
                        <p>#맑은</p>
                        <p>#페미닌한</p>
                        <p>#시원한</p>
                        <p>#깨끗한</p>
                        <p>#우아한</p>
                        <p>#세련된</p>
                        <p>#청량한</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color : "white" }}># 여름 쿨톤의 특징</p>
                    <p className="mt-3">여름 쿨톤인 사람은 대체적으로 깨끗한 이미지를 가지고 있습니다. 또한 여름 타입은 자연스럽고 산뜻한 이미지로, 화사하며 부드럽고 여성스러운 스타일이 주로 많습니다. </p>
                    <p className="mt-3">여름 타입은 흰색과 파랑을 지닌 차가운 유형으로 부드러움(soft)과 밝은(light) 톤, 밝은 잿빛(light grayish) 톤의 시원스럽고 화려함을 느끼게 합니다.</p>
                    <p className="mt-3">핑크빛과 붉은빛이 감도는 혈색 좋은 피부 톤을 가지고 있으며, 피부가 얇아 예민합니다. 차분하고 깊은 부드러운 갈색의 눈동자, 회갈색을 띠는 건조하고 얇으며 부스스한 머리카락, 지적이고 세련되며 우아한 인상이 여름 타입의 특징입니다.</p>
                </div>
                
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color : "white" }}># 여름 쿨톤 컬러 팔레트</p>
                    <p className="mt-3">흰색과 파란색을 머금고 있는 여름 컬러들은 소프트하고 밝은 컬러, 그레이 시한 컬러들로 이루어져 있어 시원하고 화려한 인상을 줍니다. 여름 쿨톤의 컬러들은 블루 베이스로 이루어져 있고 난색이어도 차가운 느낌을 가집니다.</p>
                    <p className="mt-3">여름 타입에게 잘 어울리는 컬러는 화이트, 그레이, 네이비 등 차가운 느낌의 컬러를 기본색으로 그레이쉬한 파스텔톤과 함께 사용할 수 있는데, 대표적인 컬러는 딸기 우유 핑크, 루비 레드, 민트 그린, 라벤더의 연보라, 시원한 파스텔블루 등 안개가 낀 듯 뿌옇고 부드럽게 보이는 게 특징입니다. 여름의 컬러는 시원함과 시크함, 세련된 느낌의 이미지를 보여줍니다.</p>
                    <img alt="WarmSpectrum" className="specLip" src="/images/personalColor/summerSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color : "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 실버 / 화이트골드 / 다이아몬드 / 백진주</p>
                    <p>[블러셔] 푸른빛이 도는 핑크 / 라벤더 계열</p>
                    <p>[립스틱] 베이비핑크 / 로즈핑크 / 푸시아 / 라즈베리</p>
                    <img alt="WarmLip" className="specLip" src="/images/personalColor/summerLip.png"></img>
                </div>
                <CoupangAds data={coupangAds}></CoupangAds>
                <ReTry></ReTry>
                <KakaoShare  data={metaData}></KakaoShare>
            </div>
        )
    }
}
