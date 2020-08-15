import React, { useEffect } from 'react'
import 'component/PersonalColor/css/PersonalColor.scss'
import KakaoShare from 'component/KakaoShare'
import Meta from 'component/Meta'
import ReTry from 'component/ReTry';
import CoupangAds from 'component/CoupangAds';
import queryString from 'query-string'
import AdSense from 'react-adsense'


const WinterCool = ({ location }) => {
    const query = queryString.parse(location.search);
    useEffect(() => {
        if (Object.keys(query).length == 2) {
            document.getElementsByClassName("resultBar")[0].style.display = "block";
        }
    })
    const metaData = {
        title: "퍼스널 컬러 자가진단 테스트하기!",
        description: "인공지능을 통해 퍼스널컬러를 진단받아보세요!",
        image: "https://mycolor.kr/images/personalColor/winterMeta.png",
        canonical: "winterCool",
        canonical2: "winterCoolMeta"
    }
    const coupangAds = {
        season: "겨울 쿨톤",
        url: "https://coupa.ng/bDxXzm",
        url2: "https://coupa.ng/bDCyMo"
    }
    const span1 = {
        width: (query.summer < 10 ? 10 : query.summer >90 ? 90 : query.summer) + "%",
        background: "rgb(168,189,247)",
        borderTopRightRadius: "unset",
        borderBottomRightRadius: "unset"
    }
    const span2 = {
        width: (query.winter < 10 ? 10 : query.winter >90 ? 90 : query.winter) + "%",
        background: "rgb(168,233,239)",
        borderTopLeftRadius: "unset",
        borderBottomLeftRadius: "unset"
    }
    return (
        <section className="pcMainDiv">

            <Meta data={metaData} />
            <header>
                <img alt="당신은 겨울 쿨톤입니다" className="pcTitle" src="/images/personalColor/winterTitle.png"></img>
                <div className="pcTopDiv">
                    <img alt="겨울 쿨톤 이미지" className="pcMainImg" src="/images/personalColor/winterMain.png"></img>
                    <div className="mainRight">
                        <div className="squareGroup">
                            <div className="d-flex mb-2">
                                <span style={{ background: "rgb(248,230,216)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(249,226,208)" }}></span>
                            </div>
                            <div className="d-flex mb-4">
                                <span style={{ background: "rgb(246,216,192)" }}></span>
                                <span className="ml-2" style={{ background: "rgb(236,205,177)" }}></span>
                            </div>
                        </div>
                        <div className="pcTopText">
                            <p>#도도한</p>
                            <p>#차가운</p>
                            <p>#카리스마</p>
                            <p>#섹시한</p>
                            <p>#개성있는</p>
                            <p>#시크한</p>
                            <p>#화려한</p>
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
                slot="7753265380"
                style={{ display: 'block', textAlign: "center", width : "100%", height : "100px"}}
                format="horizontal"
            />
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,233,239)", display: "inline", color: "white" }}># 겨울 쿨톤의 특징</p>
                    <p className="mt-3">겨울 쿨톤인 사람은 차갑고 강렬하며 이지적인 느낌을 지니고 있으며 깔끔하고 세련된 이미지를 지니는 사람이 많습니다. 전형적인 모던한 스타일로 선명하고 액티브한 이미지를 지니고 있어 존재감이 있으며 도시적인 감각을 지닌 유형입니다. </p>

                    {/* <ins className="kakao_ad_area ads" style={{ display: "none", position: "relative", left: "-10px" }} data-ad-unit="DAN-1h7rg7uqgmjw2" data-ad-width="250"
                        data-ad-height="250"></ins> */}
                        
                    <p className="mt-3">겨울 타입은 파랑과 흰색, 검정을 지닌 차가운 유형으로 선명(vivid) 하고 엷은(pale) 톤, 어두운(dark) 톤의 모던하며 도시적인 강렬함을 느끼게 합니다.</p>
                    <img src="/images/personalColor/winterColor.png" alt="겨울 쿨톤의 색상 특징" style={{ width: "100%", paddingLeft: "10%", paddingRight: "10%" }}></img>
                    <p className="mt-3">겨울 타입은 핏기가 없어 보일 정도의 창백하고 투명한 피부 톤을 가집니다. 눈동자는 푸른빛, 갈색빛으로 강렬하고 개성 있으며 카리스마가 있다. 푸른빛이 감도는 갈색 머리, 혹은 아주 까만 머리를 가지고 있습니다.</p>
                </div>
                <div className="mt-3">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,233,239)", display: "inline", color: "white" }}># 겨울 쿨톤 컬러 팔레트</p>
                    <p className="mt-3">겨울 컬러들은 파란색, 흰색, 검정을 내포하고 있는 차갑고 강렬한 컬러들의 그룹입니다. 선명하고 강하거나, 혹은 아주 여린 아이 시한 컬러들이 이 그룹에 속합니다. 모던하고 도회적인 이미지를 가지고 있는 팔레트입니다.</p>
                    <AdSense.Google
                client="ca-pub-9106671749645972"
                slot="4086317268"
                style={{ display: 'block', textAlign: "center" }}
                format="auto"
                responsive='true'
            />
                    {/* <div style={{ width: "100%", textAlign: "center" }}>
                        <ins className="kakao_ad_area" style={{ display: "none" }} data-ad-unit="DAN-t842nwjwbg34" data-ad-width="250"
                            data-ad-height="250"></ins></div> */}
                    <p className="mt-3">겨울 타입에게 잘 어울리는 컬러는 화이트, 블랙과 같은 모노톤과 시리도록 차갑고 선명한 색과 아이스 컬러를 사용할 수 있는데, 대표적인 컬러는 아이스 블루, 아이스핑크, 쇼킹 핑크, 와인레드, 레몬옐로우, 크리스마스트리 그린, 사파이어 등 인공적이면서 얼음처럼 차갑고 강한 컬러들입니다. 겨울의 컬러는 차가움과 모던함, 카리스마 있는 이미지를 줍니다.</p>
                    <img alt="겨울 쿨톤이 어울리는 색상" className="specLip" src="/images/personalColor/winterSpectrum.png"></img>
                </div>
                <div className="mt-4">
                    <p className="px-1 pt-1" style={{ background: "rgb(168,233,239)", display: "inline", color: "white" }}># 메이크업 / 스타일링 팁</p>
                    <p className="mt-3">[주얼리] 실버 / 화이트골드 / 다이아몬드 / 백진주</p>
                    <p>[블러셔] 푸른빛이 강한 핑크 계열</p>
                    <p>[립스틱] 버건디 / 퍼플 / 딥로즈 / 플럼 / 체리 계열</p>
                    <img alt="겨울 쿨톤이 어울리는 립, 틴트색" className="specLip" src="/images/personalColor/winterLip.png"></img>
                </div>
                <CoupangAds data={coupangAds}></CoupangAds>
                <ReTry></ReTry>
                <KakaoShare data={metaData}></KakaoShare>
                <AdSense.Google
            client="ca-pub-9106671749645972"
            slot="8539007090"
            style={{ display: 'block', textAlign: "center" }}
            format="auto"
            responsive='true'
        />
            </article>
        </section>
    )
}

export default WinterCool
