import React, { useEffect } from 'react'
import 'component/PersonalColor/css/PersonalColor.scss'
import KakaoShare from 'component/KakaoShare'
import Meta from 'component/Meta'
import ReTry from 'component/ReTry';
import CoupangAds from 'component/CoupangAds';
import queryString from 'query-string'
import AdSense from 'react-adsense'


const SummerCool = ({ location }) => {
    const query = queryString.parse(location.search);
    useEffect(() => {
        if (Object.keys(query).length == 2) {
            document.getElementsByClassName("resultBar")[0].style.display = "block";
        }
    })
    const metaData = {
        title: "퍼스널 컬러 자가진단 테스트하기!",
        description: "인공지능을 통해 퍼스널컬러를 진단받아보세요!",
        image: "https://mycolor.kr/images/personalColor/summerMeta.png",
        canonical: "summerCool",
        canonical2: "summerCoolMeta"
    }
    const coupangAds = {
        season: "여름 쿨톤",
        url: "https://coupa.ng/bDxZMH",
        url2: "https://coupa.ng/bDCyMo"
    }
    const span1 = {
        width: (query.summer < 10 ? 10 : query.summer > 90 ? 90 : query.summer) + "%",
        background: "rgb(168,189,247)",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "unset"
    }
    const span2 = {
        width: (query.winter < 10 ? 10 : query.winter > 90 ? 90 : query.winter) + "%",
        background: "rgb(168,233,239)",
        borderTopLeftRadius: "unset",
        borderBottomLeftRadius: "unset"
    }
    return (
        <section className="pcMainDiv">
            <Meta data={metaData} />
            <header>
                <img alt="당신은 여름 쿨톤입니다." className="pcTitle" src="/images/personalColor/summerTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="여름 쿨톤 이미지" className="pcMainImg" src="/images/personalColor/summerMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{ background: "rgb(254,236,224)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(255,227,213)" }}></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{ background: "rgb(255,222,203)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(250,208,184)" }}></span>
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
            </header>
            <article>
                <div className="resultBar">
                    <span style={{ color: "rgb(168,189,247)" }}>여름
                        <div>
                            <span className="barSpan" style={span1}>{query.summer}%</span>
                            <span className="barSpan" style={span2}>{query.winter}%</span>
                        </div>
                    </span>
                    <span style={{ color: "rgb(168,233,239)" }}>겨울</span>
                </div>
                <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="3648153743"
                        style={{ display: 'block', textAlign: "center", width : "100%", height : "100px"}}
                        format="horizontal"
                    />
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color: "white" }}># 여름 쿨톤의 특징</p>
                    <p className="mt-3">여름 쿨톤인 사람은 대체적으로 깨끗한 이미지를 가지고 있습니다. 또한 여름 타입은 자연스럽고 산뜻한 이미지로, 화사하며 부드럽고 여성스러운 스타일이 주로 많습니다. </p>

                    {/* <ins className="kakao_ad_area ads" style={{ display: "none", position: "relative", left: "-10px" }} data-ad-unit="DAN-1h7rg7uqgmjw2" data-ad-width="250"
                        data-ad-height="250"></ins> */}
                    <AdSense.Google
                        client="ca-pub-9106671749645972"
                        slot="2983623548"
                        style={{ display: 'block', textAlign: "center" }}
                        format="auto"
                        responsive='true'
                    />

                    <p className="mt-3">여름 타입은 흰색과 파랑을 지닌 차가운 유형으로 부드러움(soft)과 연한(light) 톤, 밝은 잿빛(light greyish) 톤의 시원스럽고 화려함을 느끼게 합니다.</p>
                    <img src="/images/personalColor/summerColor.png" alt="여름 쿨톤의 색상 특징" style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}></img>
                    <p className="mt-3">핑크빛과 붉은빛이 감도는 혈색 좋은 피부 톤을 가지고 있으며, 피부가 얇아 예민합니다. 차분하고 깊은 부드러운 갈색의 눈동자, 회갈색을 띠는 건조하고 얇으며 부스스한 머리카락, 지적이고 세련되며 우아한 인상이 여름 타입의 특징입니다.</p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color: "white" }}># 여름 쿨톤 컬러 팔레트</p>
                    <p className="mt-3">흰색과 파란색을 머금고 있는 여름 컬러들은 소프트하고 밝은 컬러, 그레이 시한 컬러들로 이루어져 있어 시원하고 화려한 인상을 줍니다. 여름 쿨톤의 컬러들은 블루 베이스로 이루어져 있고 난색이어도 차가운 느낌을 가집니다.</p>
                    
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <ins className="kakao_ad_area" style={{ display: "none" }} data-ad-unit="DAN-t842nwjwbg34" data-ad-width="250"
                            data-ad-height="250"></ins></div>
                    <p className="mt-3">여름 타입에게 잘 어울리는 컬러는 화이트, 그레이, 네이비 등 차가운 느낌의 컬러를 기본색으로 그레이쉬한 파스텔톤과 함께 사용할 수 있는데, 대표적인 컬러는 딸기 우유 핑크, 루비 레드, 민트 그린, 라벤더의 연보라, 시원한 파스텔블루 등 안개가 낀 듯 뿌옇고 부드럽게 보이는 게 특징입니다. 여름의 컬러는 시원함과 시크함, 세련된 느낌의 이미지를 보여줍니다.</p>
                    <img alt="여름 쿨톤이 어울리는 색상" className="specLip" src="/images/personalColor/summerSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,189,247)", display: "inline", color: "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 실버 / 화이트골드 / 다이아몬드 / 백진주</p>
                    <p>[블러셔] 푸른빛이 도는 핑크 / 라벤더 계열</p>
                    <p>[립스틱] 베이비핑크 / 로즈핑크 / 푸시아 / 라즈베리</p>
                    <img alt="여름쿨톤이 어울리는 립, 틴트색" className="specLip" src="/images/personalColor/summerLip.png"></img>
                </div>
                <CoupangAds data={coupangAds}></CoupangAds>
                <ReTry></ReTry>
                <KakaoShare data={metaData}></KakaoShare>
                <AdSense.Google
                    client="ca-pub-9106671749645972"
                    slot="9199863324"
                    style={{ display: 'block', textAlign: "center" }}
                    format="auto"
                    responsive='true'
                />
            </article>
        </section>
    )
}

export default SummerCool
