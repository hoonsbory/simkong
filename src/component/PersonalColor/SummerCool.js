import React, { Component } from 'react'
import './css/PersonalColor.scss'
import KakaoShare from '../KakaoShare'
import Meta from '../Meta'


export default class SummerCool extends Component {
    
    render() {
        const metaData = {
            title: "여름 쿨톤",
            description : "여름 쿨톤 페이지입니다",
            image : "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
            canonical : "springWorm",
            canonical2 : "summerCoolMeta",
            addUrl : "personalColor"
        }
        return (

            <div className="pcMainDiv">
                <Meta data={metaData}/>
                <KakaoShare  data={metaData}></KakaoShare>
                <img alt="wormTitle" className="w-100 h-10" src="/images/personalColor/summerTitle.png"></img>
                <div>
                    <img alt="wormMain" className="float-left w-50" src="/images/personalColor/summerMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span></span>
                                <span className="ml-2" ></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span></span>
                                <span className="ml-2"></span>
                            </div>
                        </div>
                        <p>#맑은</p>
                        <p>#페미닌한</p>
                        <p>#시원한</p>
                        <p>#깨끗한</p>
                        <p>#우아한</p>
                        <p>#세련된</p>
                        <p>#청량한</p>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 여름 쿨톤의 특징</p>
                    <p className="mt-3">여름 쿨톤인 사람은 대체적으로 깨끗한 이미지를 가지고 있습니다. 또한 여름타입은 자연스럽고 산뜻한 이미지로, 화사하며 부드럽고 여성스러운 스타일이 주로 많습니다. </p>
                    <p className="mt-3">여름타입은 흰색과 파랑을 지닌 차가운 유형으로 부드러움(soft)과 밝은(light)톤, 밝은 잿빛(light grayish)톤의 시원스럽고 화려함을 느끼게 합니다. </p>
                    <p className="mt-3">핑크빛과 붉은 빛이 감도는 혈색 좋은 피부톤을 가지고 있으며, 피부가 얇아 예민합니다. 차분하고 깊은 부드러운 갈색의 눈동자, 회갈색을 띠는 건조하고 얇으며 부시시한 머리카락, 지적이고 세련되며 우아한 인상이 여름타입의 특징입니다.</p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 여름 쿨톤 컬러파레트</p>
                    <p className="mt-3">흰색과 파란색을 머금고 있는 여름 컬러들은 소프트하고 밝은 컬러, 그레이시한 컬러들로 이루어져 있어 시원하고 화려한 인상을 줍니다. 여름쿨톤의  컬러들은 블루베이스로 이루어져 있고 난색이어도 차가운 느낌을 가집니다. </p>
                    <p className="mt-3">여름타입에게 잘 어울리는 컬러는 화이트, 그레이, 네이비 등 차가운 느낌의 컬러를 기본색으로 그레이쉬한 파스텔톤과 함께 사용할 수 있는데, 대표적인 컬러는 딸기우유 핑크, 루비 레드, 민트 그린, 라벤더의 연보라, 시원한 파스텔 블루 등 안개가 낀 듯 뿌옇고 부드럽게 보이는게 특징입니다. 여름의 컬러는 시원함과 시크함, 세련된 느낌의 이미지를 보여줍니다.</p>
                    <img alt="wormSpectrum" className="mt-3 w-100" src="/images/personalColor/summerSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "yellow", display: "inline" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 실버 / 화이트골드 / 다이아몬드 / 백진주</p>
                    <p>[블러셔] 푸른빛이 도는 핑크 / 라벤더 계열</p>
                    <p>[립스틱] 베이비핑크 / 로즈핑크 / 푸시아 / 라즈베리</p>
                    <img alt="wormLip" className="mt-3 w-100" src="/images/personalColor/summerLip.png"></img>
                </div>
                
            </div>
        )
    }
}
