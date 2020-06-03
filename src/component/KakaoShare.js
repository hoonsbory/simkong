import React, { Component } from 'react'
import "./share.scss"

export default class KakaoShare extends Component {
    state = {
        mainUrl: "https://mycolor.kr/",
        subUrl: ""
    }
    componentDidMount() {
        const data = this.props.data
        this.setState({
            //카카오가 아닌 타 sns에 공유할때 og:image는 결과의 이미지를 쓰고 url은 테스트페이지로 쓰고 싶지만 그럴 방도가 없어 따로 redirect용 페이지를 만들어서 메타태그만 이용한다. 
            //카카오는 따로 이미지를 지정할 수 있기 때문에 따로 redirect를 안해도된다..
            subUrl: this.state.mainUrl + data.canonical2,
            mainUrl: data.addUrl ? this.state.mainUrl + data.addUrl : this.state.mainUrl
        })

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
                    mobileWebUrl: this.state.mainUrl,
                    webUrl: this.state.mainUrl
                }
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: this.state.mainUrl,
                        webUrl: this.state.mainUrl
                    }
                }
            ]
        });
    }
    render() {
        const url = this.state.subUrl
        const app_id = "2473764549612950"
        var popupWidth = 500;
        var popupHeight = 500;

        var popupX = (window.screen.width / 2) - (popupWidth / 2);

        var popupY = (window.screen.height / 2) - (popupHeight / 2);
        var size = 'status=no, height=' + popupHeight + ', width=' + popupWidth + ', left=' + popupX + ', top=' + popupY;
        function facebook() {
            window.open('http://www.facebook.com/sharer/sharer.php?u=' + url, "name", size)
        }
        function kakaoStory() {
            window.open('https://story.kakao.com/share?url=' + url, "name", size)
        }
        function twitter() {
            window.open('http://twitter.com/intent/tweet?text=' + url, "name", size)
        }
        function naver() {
            window.open('http://share.naver.com/web/shareView.nhn?url=' + url + "&title=퍼스널컬러", "name", size)
        }
        function line() {
            window.open('https://social-plugins.line.me/lineit/share?url=' + url, "name", size)
        }
        function band() {
            window.open('https://band.us/plugin/share?body=' + url, "name", size)
        }
        function fbmessage() {
            //모바일기기
            if (navigator.userAgent.indexOf('Mobile') !== -1) {
                window.open('fb-messenger://share?link=' + encodeURIComponent(url) + '&app_id=' + encodeURIComponent(app_id));
            }else{
            window.open('http://www.facebook.com/dialog/send?app_id=' + app_id + '&link=' + url + '&redirect_uri=' + url, "name", 'status=no, height=' + 600 + ', width=' + 900 + ', left=' + popupX + ', top=' + popupY)
            }
        }
        return (
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
        )
    }
}
