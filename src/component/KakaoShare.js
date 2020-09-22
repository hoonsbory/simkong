import React, { useEffect,useState } from 'react'
import "component/share.scss"

const KakaoShare = ({data}) => {
    const [mainUrl,setMainUrl] = useState("https://mycolor.kr/")
    const [subUrl, setSubUrl] = useState("")

    useEffect(()=>{
        //공유할 때 썸네일에 결과만 공유하고 접속은 테스트하는 페이지로 넘기기 위해서(동적으로 썸네일이 안바뀌기 때문에), subUrl에 리다이렉트 함수를 넣어둔 페이지의 url을 넣어준다.
        setSubUrl(mainUrl + data.canonical2)
        setMainUrl(data.addUrl ? mainUrl + data.addUrl : mainUrl)

        // 카카오톡 공유
        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: data.title,
                description: data.description,
                imageUrl: data.image,
                imageWidth : 800,
                imageHeight : 400,
                link: {
                    mobileWebUrl: mainUrl,
                    webUrl: mainUrl
                }
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: mainUrl,
                        webUrl: mainUrl
                    }
                }
            ]
        });
    })
        const app_id = "2473764549612950"
        var popupWidth = 500;
        var popupHeight = 500;

        var popupX = (window.screen.width / 2) - (popupWidth / 2);

        var popupY = (window.screen.height / 2) - (popupHeight / 2);
        var size = 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY;
        function facebook() {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + subUrl, "name", size)
        }
        function kakaoStory() {
            window.open('https://story.kakao.com/share?url=' + subUrl, "name", size)
        }
        function twitter() {
            //이상하게 트위터에서는 리다이렉트용 페이지의 썸네일이 나오지않는다. 그래서 리다이렉트페이지를 포기하고 실제 결과페이지로 바꿈.
            window.open('http://twitter.com/intent/tweet?text=' + mainUrl + data.canonical, "name", size)
        }
        function naver() {
            window.open('http://share.naver.com/web/shareView.nhn?url=' + subUrl + "&title=퍼스널컬러", "name", size)
        }
        function line() {
            window.open('https://social-plugins.line.me/lineit/share?url=' + subUrl, "name", size)
        }
        function band() {
            window.open('https://band.us/plugin/share?body=' + subUrl, "name", size)
        }
        function fbmessage() {
            //모바일기기
            if (navigator.userAgent.indexOf('Mobile') !== -1) {
                window.open('fb-messenger://share?link=' + encodeURIComponent(subUrl) + '&app_id=' + encodeURIComponent(app_id));
            }else{
            window.open('http://www.facebook.com/dialog/send?app_id=' + app_id + '&link=' + subUrl + '&redirect_uri=' + subUrl, "name", 'status=no, height=' + 600 + ', width=' + 900 + ', left=' + popupX + ', top=' + popupY)
            }
        }
    return (
        <div>
        <div id="shareButton" style={{width : "100%", textAlign : "center", marginBottom : ".5rem", marginTop : "2rem"}}>
                <p style={{fontSize : "1.3rem"}}>▼ 결과 공유하기 ▼</p>
                <span id="kakao-link-btn" >
                    <img className="shareIcon" alt="Share" src="/images/snsIcon/kakaoTalk.png" />
                </span>
                <img className="shareIcon"  onClick={() => facebook()} alt="Share" src="/images/snsIcon/facebook.png" />
                <img className="shareIcon" onClick={() => kakaoStory()} alt="Share" src="/images/snsIcon/kakaoStory.png" />
                <img className="shareIcon" onClick={() => twitter()} alt="Share" src="/images/snsIcon/twitter.png" />
                <img className="shareIcon" onClick={() => naver()} alt="Share" src="/images/snsIcon/naver.png" />
                <img className="shareIcon" onClick={() => line()} alt="Share" src="/images/snsIcon/line.png" />
                <img className="shareIcon" onClick={() => band()} alt="Share" src="/images/snsIcon/band.png" />
                <img className="shareIcon" onClick={() => fbmessage()} alt="Share" src="/images/snsIcon/messenger.png"/>
            </div>
                
                </div>
    )
}

export default KakaoShare

