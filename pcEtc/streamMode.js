
export default function streamMode(ua,streamTrue,camErr,video) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {    
        //사파리는 해상도가 자동으로 조절되기때문에 해상도를 설정해주면 에러가난다. 그래서 사파리는 설정을 안해줘야하는데,
        //기기 정보를 받아올때 크롬에는 사파리 크롬이 다 적혀있고, 사파리에는 사파리만 적혀있으므로 사파리를 특정하기 위해서는 
        //사파리 문자를 포함하고 크롬 문자를 포함하지않는 조건을 충족시켜줘야한다
        if (ua.indexOf('Safari') != -1 && ua.indexOf('Chrome') == -1) {
            navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { exact: "user" }
                }
            }).then(function (stream) { 
                //video.src = window.URL.createObjectURL(stream);
                streamTrue();
                video.srcObject = stream;
                video.play();
            }).catch(function (err) {
                //err은 문자열이 아니기 때문에 문자열로 만들어줘야 indexOf가 가능
                err = err + "";
                if (err.indexOf("NotAllowedError") > -1) {
                    window.location.reload();
                }
                camErr()
            });
        } else {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({
                video: {
                    width: { min: 0, ideal: 1280, max: 1920 },
                    height: { min: 0, ideal: 720, max: 1080 },
                    facingMode: { exact: "user" }
                }
            }).then(function (stream) {
                streamTrue();
                video.srcObject = stream;
                // camErr()
                //video.src = window.URL.createObjectURL(stream);
            }).catch(function (err) {
                console.log(err)
                camErr()
            });
        }
    }
    else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia({
            video: {
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 776, ideal: 720, max: 1080 }, facingMode: { exact: "user" }
            }
        }, function (stream) {
            streamTrue();
            video.src = stream;
            video.play();
        }, camErr());
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia({
            video: {
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 776, ideal: 720, max: 1080 }, facingMode: { exact: "user" }
            }
        }, function (stream) {
            streamTrue();
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, camErr());
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia({
            video: {
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 776, ideal: 720, max: 1080 }, facingMode: { exact: "user" }
            }
        }, function (stream) {
            streamTrue();
            video.srcObject = stream;
            video.play();
        }, camErr());
    } else {
        camErr();
    }
}
