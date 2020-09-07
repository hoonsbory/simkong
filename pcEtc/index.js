
//rgb값을 xyz로 변환 후 lab로 최종 변환
function rgbToXyz(hex) {
    const [r, g, b] = hex.map(_ => _ / 255).map(sRGBtoLinearRGB)
    const X = 0.4124 * r + 0.3576 * g + 0.1805 * b
    const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b
    const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b
    // For some reason, X, Y and Z are multiplied by 100.
    return [X, Y, Z].map(_ => _ * 100)
}

/**
 * Undoes gamma-correction from an RGB-encoded color.
 * https://en.wikipedia.org/wiki/SRGB#Specification_of_the_transformation
 * https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
 * @param  {number}
 * @return {number}
 */
function sRGBtoLinearRGB(color) {
    // Send this function a decimal sRGB gamma encoded color value
    // between 0.0 and 1.0, and it returns a linearized value.
    if (color <= 0.04045) {
        return color / 12.92
    } else {
        return Math.pow((color + 0.055) / 1.055, 2.4)
    }
}

/**
 * Converts hex color to RGB.
 * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 * @param  {string} hex
 * @return {number[]} [rgb]
 */
function hexToRgb(hex) {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (match) {
        match.shift()
        return match.map(_ => parseInt(_, 16))
    }
}
/**
 * Converts CIE 1931 XYZ colors to CIE L*a*b*.
 * The conversion formula comes from <http://www.easyrgb.com/en/math.php>.
 * https://github.com/cangoektas/xyz-to-lab/blob/master/src/index.js
 * @param   {number[]} color The CIE 1931 XYZ color to convert which refers to
 *                           the D65/2° standard illuminant.
 * @returns {number[]}       The color in the CIE L*a*b* color space.
 */
// X, Y, Z of a "D65" light source.
// "D65" is a standard 6500K Daylight light source.
// https://en.wikipedia.org/wiki/Illuminant_D65
const D65 = [95.047, 100, 108.883]
function xyzToLab([x, y, z]) {
    [x, y, z] = [x, y, z].map((v, i) => {
        v = v / D65[i]
        return v > 0.008856 ? Math.pow(v, 1 / 3) : v * 7.787 + 16 / 116
    })
    const l = 116 * y - 16
    const a = 500 * (x - y)
    const b = 200 * (y - z)
    return [l, a, b]
}





//뒤로가기고 페이지에 진입하면 새로고침되게
//엣지는 뒤로가기해도 캐시가없이 스크립트가 실행되었고, 크롬 일부버전은 persisted값이 false로만 나오는 버그가 있다고 한다. 그래서 window.performance조건을 추가해줌
if (document.addEventListener) {
    window.addEventListener('pageshow', function (event) {
        if (event.persisted || window.performance &&
            window.performance.navigation.type == 2) {
            location.reload();
        }
    },
        false);
}


let appleCheck = false;
let ua = navigator.userAgent || navigator.vendor || window.opera;
if ((navigator.appName == 'Netscape' && ua.search('Trident') != -1) || (ua.indexOf("msie") != -1)) { // IE 일 경우
    document.documentElement.classList.add('fonts-loaded');
    alert("지원하지않는 브라우저입니다. 크롬,엣지,사파리 등의 브라우저를 이용해주세요");
}

//애플 기기의 ios버전을 체크하기 위함.
let osInfo;
let realOs;
let floatOs = 0;
if ((ua.indexOf("iPhone") > -1) || (ua.indexOf("iPad") > -1) || (ua.indexOf("iPod") > -1) || (ua.indexOf("Mac") > -1)) {
    appleCheck = true;
    //인스타그램, 페이스북, 카카오 전부 OS라는 문자옆에 버전이 적혀있는데 페이스북 메신저는 OS가 없고 다른 곳에 버전이 적혀있어서 따로 구현함.
    if (ua.indexOf("FBSV") > -1) {
        osInfo = ua.split("FBSV")[1];
        realOs = osInfo.substring(1, 3) + "." + osInfo.substring(4, 5);
        floatOs = parseFloat(realOs)
    } else {
        osInfo = ua.split("OS")[1]
        realOs = osInfo.substring(1, 3) + "." + osInfo.substring(4, 5);

        //ios버전 추출해서 실수형으로.
        floatOs = parseFloat(realOs)
    }
}
function isFacebookApp() {
    return (ua.indexOf("Android") > -1 && ((ua.indexOf("FBAN") > -1) || (ua.indexOf("Instagram") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf("FBSV") > -1) || (ua.indexOf("FBSS") > -1) || (ua.indexOf("FBCR") > -1) || (ua.indexOf("FBID") > -1) || (ua.indexOf("FBCL") > -1) || (ua.indexOf("FBMD") > -1) || (ua.indexOf("FBDV") > -1) || (ua.indexOf("FBSN") > -1)));
};
//안드로이드 페이스북메신저에서 파일 업로드가 안된다. accept속성을 지우면 된다는 얘기가 많은데 시도해봐도 되지를 않아서 외부 브라우저를 키도록 유도함.
if (isFacebookApp()) {
    document.getElementById("popup").style.display = "block";
}

if (ua.indexOf("Mobile") > -1) {
    document.getElementById("subInfo").style.position = "relative"
    document.getElementById("subInfo").style.top = "1vh"
}


var video = document.getElementById('video');

//비디오 에러 캐치
function camErr() {
    document.getElementById("noCamDiv").style.display = "block"
    document.getElementById("fileInput").click();
    document.getElementById("openVideoBtn").style.display = "block"
    document.getElementById("videoSource").src = "https://s3.ap-northeast-2.amazonaws.com/jaehoon-dayoff.ml/video/퍼스널컬러홍보영상2.mp4"
}


//상황에따라 다른 팝업창 구분
function popupConfirm(div) {
    if (document.getElementById("checkSuccess").style.display == "block") {
        moveRight("");
        uploadCheck = true;
    }
    document.getElementById(div).style.display = "none";
}



//캠화면 캡쳐 및 주요컬러 도출
function camCheck() {
    var camCanvas = document.getElementById('canvas');
    camCanvas.width = video.clientWidth;
    camCanvas.height = video.clientHeight;
    var context = camCanvas.getContext('2d');
    context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
    color(camCanvas)
}

//폰트가 로드되기전까지 투명도를 줘서 안보이게 했다가 3초이내에 로딩되면 보이게함.
//3초가 지나면 기본폰트로
setTimeout(function () {
    document.body.style.opacity = 1
}, 3000)
var font = new FontFaceObserver('HSThin');
font.load(null, 3000).then(function () {
    document.documentElement.classList.add('fonts-loaded');
});

function openVideo() {
    if (window.innerWidth < 768) {
        if (window.innerWidth >= window.innerHeight) {
            document.getElementById("guideVideo").style.height = "100%"
            document.getElementById("guideVideo").style.width = "unset"
        } else {
            document.getElementById("guideVideo").style.width = "100%"
            document.getElementById("guideVideo").style.height = "unset"
        }
    } else {
        document.getElementById("guideVideo").style.height = "unset"
        document.getElementById("guideVideo").style.width = "500px"
    }
    document.getElementById("guideVideo").load()
    document.getElementById("guideDiv").style.display = "block"
    document.getElementById("guideVideo").play()
    document.getElementById("close").style.display = "block"
}


function closeVideo() {
    document.getElementById("guideDiv").style.display = "none"
    document.getElementById("guideVideo").pause()
    document.getElementById("close").style.display = "none"
}


//페이스북 인앱 브라우저에서 accept속성때문에 업로드가 안되는 버그가 있어서 대응

//크롭없이 회전후 크롭할 경우  크롭을 하는 것은, 원본이미지를 캔버스에 옮겨오는 것으로 시작하는데, 크롭버튼을 누르지않고 회전부터 할 경우, 나중에 크롭할때 회전도가 달라 문제가 생긴다.
//그래서 크롭을 시작하기전에 회전을 할 경우에만 한해서 캔버스에 그리고 시작한다. 사진을 올리자마자 캔버스에 그리는 게 편하지만, 편집을 원하지 않는 경우엔 불필요한 로딩을 하는 것이라 
//따로 크롭 버튼을 넣은 것이다.
var rotateCrop = false;
//크롭버튼 클릭 유무. 크롭을 한적이 없다면 회전시 자동크롭
var editCheck = false;

//lab값
var labColor;
//자르기버튼 비활성화를 위한 체크.
var cropCheck = true;

//첫 크롭여부 확인 후 처음인 경우만 드래그 안내
var firstCrop = true;

//steram 지원 유무 
var stream = false;
//업로드여부 체크해
var uploadCheck = false;
//슬라이드 위치체크
var slideCheck = 0;
//로딩
var loading = document.getElementById("loading");
//회전율
var rotateRate = 0;
//첫 비교 결과값을 담을 변수
var firstResult = [];
//비교 후 결과값을 담을 변수
var calResult = [];


var warmColor = [
    //봄
    { L: 93.24308501707372, A: 1.8831653918775504, B: 20.718646292445865 },
    { L: 90.52289128383626, A: 3.233666015118153, B: 28.307937546766237 },
    { L: 87.86424337552954, A: 5.039781815103062, B: 35.51057954854002 },
    { L: 84.02555434458635, A: 7.303593750393079, B: 32.35239498551059 },
    //가을
    { L: 88.01422576423417, A: 0.44469105936484343, B: 22.066594327876565 },
    { L: 85.40709355772393, A: 2.6280755544423884, B: 28.39518318891747 },
    { L: 79.77375484413481, A: 7.765231163705922, B: 31.730027579476207 },
    { L: 75.76154718068078, A: 7.23321668208865, B: 40.38007858135049 }

]
var coolColor = [
    //여름
    { L: 94.50167496851937, A: 4.139834223156058, B: 7.996009480649668 },
    { L: 92.13269969033836, A: 7.406843133354157, B: 10.332405216677664 },
    { L: 90.69511899883976, A: 8.506748645930816, B: 13.506314388479757 },
    { L: 86.45273910781171, A: 11.28147997114498, B: 17.43590092164615 },
    //겨울
    { L: 92.35725352107004, A: 3.850753074886304, B: 9.013026210042252 },
    { L: 91.2734226421461, A: 5.028273762088087, B: 11.6465909405429 },
    { L: 88.21365467347522, A: 6.757624702209474, B: 15.649915754155597 },
    { L: 84.31331292028791, A: 6.67861946731424, B: 17.951879223826882 }
]


//맨처음 색상분석을 위한 색상리스트
var colorList = [
    warmColor[0],
    warmColor[1],
    warmColor[2],
    warmColor[3],
    warmColor[4],
    warmColor[5],
    warmColor[6],
    warmColor[7],
    coolColor[0],
    coolColor[1],
    coolColor[2],
    coolColor[3],
    coolColor[4],
    coolColor[5],
    coolColor[6],
    coolColor[7],

    { L: 54.94213801213769, A: -53.07384198363935, B: 34.43417705537093 },
    { L: 62.18763178824342, A: -8.479405327875222, B: -46.28902249513915 },
    { L: 20.217290355298722, A: 36.06355989320672, B: -57.05422997619636 },
    { L: 50.41376744611719, A: 43.73719859707093, B: -77.79677741706573 },
    { L: 99.65492223276894, A: 0.005244850979191362, B: -0.010377222171187306 },
    { L: 0.27417592423966397, A: 0.00003730131757639921, B: -0.00007380574454374234 }
    //여기까지 톤색깔
    // [0, 152, 68],//초록
    // [0, 159, 232],//하늘색
    // [29, 32, 135],//파랑
    // [95, 100, 255],//보라
    // [254, 254, 254],//하양
    // [0, 0, 0]//검정
]
var warm = 0;
var cool = 0;
var imgRed;
var imgGreen;
var imgBlue;

//답변 갯수를 종합해줄 스택
var answerStack = [];

//크롭을 위한 좌표값
var x;
var y;
var w;
var h;
let jcropApi = null;
var resizeCheck;

var slideCount = $('#slider ul li').length;
var slideWidth = $('#slider ul li').width();
var slideHeight = $('#slider ul li').height();
var sliderUlWidth = slideCount * slideWidth;


$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

$('#slider ul li:last-child').prependTo('#slider ul');

//리사이징이벤트
window.addEventListener("resize", function () {
    if (window.innerWidth < 768 && resizeCheck != "mob") {
        resizeCheck = "mob";
        if (jcropApi) {
            jcropApi.destroy();
            jcropApi = null;
            resize();
        }
    }
    else if ((window.innerWidth < 1024 && window.innerWidth > 767) && resizeCheck != "tab") {
        resizeCheck = "tab";
        if (jcropApi) {
            jcropApi.destroy();
            jcropApi = null;
            resize();
        }
    } else if (window.innerWidth > 1023 && resizeCheck != "pc") {
        resizeCheck = "pc";
        if (jcropApi) {
            jcropApi.destroy();
            jcropApi = null;
            resize();
        }
    }

});
function div() {
    document.getElementsByClassName("jcrop-holder")[0].lastElementChild.id = "jcropImg";
    document.getElementsByClassName("jcrop-holder")[0].lastElementChild.style.opacity = 0.6;
    if (firstCrop == false) {

        document.getElementsByClassName("jcrop-holder")[0].className = "jcrop-holder aft";
        document.getElementsByClassName("jcrop-holder")[0].lastElementChild.style.opacity = 1;
    } else {
        firstCrop = false;
    }

}

//뒤로가기
function moveLeft() {
    document.getElementById("mainbody").scrollIntoView();

    slideCheck--;
    if (slideCheck == 0) {
        document.getElementById("cropNotice").style.display = "block"
        document.getElementById("stepNum").innerHTML = "1";
        document.getElementById("subInfo").innerHTML = "피부\u00A0사진\u00A0촬영"
    }
    answerStack.pop();
    var slideWidth = $('#slider ul li').width();
    $('#slider ul').animate({

        left: + slideWidth
    }, 400, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
    });

};
//다음 단계로
function moveRight(tone) {
    document.getElementById("mainbody").scrollIntoView();

    slideCheck++;
    if (slideCheck > 0) {
        document.getElementById("cropNotice").style.display = "none"
        document.getElementById("stepNum").innerHTML = "2";
        document.getElementById("subInfo").innerHTML = "질문\u00A05단계"
    }
    if (tone == "warm") {
        answerStack.push("warm");
    } else if (tone == "cool") {
        answerStack.push("cool");
    }
    if (slideCheck == 6) {

        for (var i = 0; i < answerStack.length; i++) {
            if (answerStack[i] == "warm") {
                warm++;
            } else {
                cool++;
            }
        }
        // if (warm < cool) {
        //     season(coolColor, "cool");
        //     return
        // } else {
        //     season(warmColor, "warm");
        //     return
        // }
        season();
        return;

    }

    var slideWidth = $('#slider ul li').width();
    $('#slider ul').animate({
        left: - slideWidth
    }, 400, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
    });

};

//이미지에서 색상추출
function color(src) {
    firstResult = [];
    var checkSuccess = document.getElementById("checkSuccess");
    var checkFail = document.getElementById("checkFail");
    var checkResult = document.getElementById("checkResult")

    loading.style.display = "block"
    var colorThief = new ColorThief();

    var sourceImage = src
    try {


        // imgRed = colorThief.getColor(sourceImage)[0];
        // imgGreen = colorThief.getColor(sourceImage)[1];
        // imgBlue = colorThief.getColor(sourceImage)[2];

        var colorArray = xyzToLab(rgbToXyz(colorThief.getColor(sourceImage)));

        labColor = { L: colorArray[0], A: colorArray[1], B: colorArray[2] };

        for (var i = 0; i < colorList.length; i++) {

            //절대값을 구할때는 Math.ads로 구하면된다..
            // var color = "color" + i;
            // var red = (imgRed - colorList[i][0]);
            // red = red < 0 ? -(red) : red;
            // var green = (imgGreen - colorList[i][1]);
            // green = green < 0 ? -(green) : green;
            // var blue = (imgBlue - colorList[i][2]);
            // blue = blue < 0 ? -(blue) : blue;

            firstResult.push([window.module1(labColor, colorList[i]), i]);
        }
        firstResult.sort(function (a, b) { // 오름차순 
            return a[0] - b[0];
        });
        var colorNum = firstResult[0][1];
        setTimeout(function () {

            loading.style.display = "none"
            if (colorNum < 16 && firstResult[0][0] <= 30) {
                checkSuccess.style.display = "block"
                checkFail.style.display = "none"

                checkResult.style.display = "block"

                return;
            }
            else {
                checkFail.firstElementChild.nextElementSibling.innerHTML = "사각형에 피부가 꽉차게 편집해주세요!"
                if (stream && colorNum == 21) {
                    checkFail.firstElementChild.nextElementSibling.innerHTML = "혹시 주변이 어두우시다면 피부가 화면에 <br>꽉 찬 상태에서 시도해보세요!"
                } else if (stream && colorNum != 21) {
                    checkFail.firstElementChild.nextElementSibling.innerHTML = "피부가 화면에 꽉 찬 상태에서 시도해보세요!"
                }
                checkSuccess.style.display = "none"
                checkFail.style.display = "block"
                checkResult.style.display = "block"
            }
        }, 1500);

    } catch (error) {
        checkFail.firstElementChild.nextElementSibling.innerHTML = "사진을 잘못 올리신 거 같아요! <br>다시 시도해주세요"
        checkSuccess.style.display = "none"
        checkFail.style.display = "block"
        checkResult.style.display = "block"
        loading.style.display = "none"
    }

}



$('a.control_prev').click(function () {
    moveLeft();
});

$('a.control_next').click(function () {
    moveRight("aa");
});



//다음 버튼 눌렀을때 색상추출전이면 추출하고 아니면 다음단계로
function next() {
    if (uploadCheck) {
        moveRight("");
    } else {
        color(document.getElementById("realImage"));
    }

}
function removeValue() {
    $("#fileInput").val("");
}


//자르기
function crop() {
    try {


        if (cropCheck) {
            return;
        }
        cropCheck = true;
        uploadCheck = false;
        document.getElementById("refreshBtn").disabled = false;
        //로드된 이미지를 캔버스에 출력
        //복사용 캔버스에 복사함. 하나의 캔버스에서 자기 자신을 불러와 크롭해서 리드로우가 불가능하기 때문.
        let canvas = document.getElementById("myCanvas");

        let canvasContext = canvas.getContext("2d");



        // @breif 캔버스 크기를 이미지 크기와 동일하게 지정

        var imgWidth = document.getElementById("copyCanvas").width;
        var imgHeight = document.getElementById("copyCanvas").height;
        //캔버스와 비율을 맞추기 위해 메인 이미지의 크기로 나눈다. jcrop이 원본이미지 크기를 줄이기때문에, jcrop의 자식의 크기를 가져온다
        var xRate = imgWidth / document.getElementById("jcropImg").width;
        var yRate = imgHeight / document.getElementById("jcropImg").height;
        canvas.width = w * xRate;

        canvas.height = h * yRate;
        if (canvas.width == 0 || canvas.height == 0) {
            alert("더 이상 확대할 수 없습니다.")
            cropCheck = false;
            return;
        }
        canvasContext.drawImage(

            document.getElementById("copyCanvas")

            , x * xRate        // 자르기를 시작할 x좌표

            , y * yRate       // 자르기를 시작할 y좌표

            , w * xRate   // 잘라낸 이미지의 넓이

            , h * yRate    // 잘라낸 이미지의 높이

            , 0                                         // 캔버스에 이미지를 배치할 x좌표

            , 0                                         // 캔버스에 이미지를 배치할 y좌표

            , w * xRate  // 사용할 이미지의 넓이(이미지 스트레칭 또는 축소)

            , h * yRate  // 사용할 이미지의 높이(이미지 스트레칭 또는 축소)

        );

        // console.log(canvas.getContext('2d').getImageData(50,50, 1, 1).data);
        // getImageData로 특정 좌표의 컬러 값을 가져올 수 있다.

        // 로드된 이미지를 캔버스에 출력
        let canvas2 = document.getElementById("copyCanvas");

        let canvasContext2 = canvas2.getContext("2d");



        // @breif 캔버스 크기를 이미지 크기와 동일하게 지정

        canvas2.width = document.getElementById("myCanvas").width;

        canvas2.height = document.getElementById("myCanvas").height;

        canvasContext2.drawImage(

            document.getElementById("myCanvas"), 0, 0


        );



        if (jcropApi) {
            jcropApi.destroy();
            jcropApi = null;
        }
        // let canvas2 = document.getElementById("copyCanvas");

        // let canvasContext2 = canvas2.getContext("2d");
        // var image = new Image();
        // image.src = document.getElementById("realImage").src;
        // image.onload = function () {

        //     canvasContext2.drawImage(image, 0, 0, 200, 200);
        // }
        $(".file-upload-image").attr("src", getBase64Image());

        document.getElementById("realImage").style.transform = "none";
        rotateRate = 0;
        $("#realImage").Jcrop({
            onSelect: showCoords,
        }, function () {
            jcropApi = this;
            div();
        });




        // @details JCROP을 종료한다.

    } catch (error) {
    }


};
//이미지 경로 설정


// function readURL(input) {
//     if (input.files && input.files[0]) {

//         if (jcropApi) {
//             jcropApi.destroy();

//             jcropApi = null;
//         }
//         var files = input.files;
//         var fileType = files[0].type;
//         loadImage(files[0], function (img, data) {
//             img.toBlob(function (blob) {
//                 var rotateFile = new File([blob], files[0].name, {
//                     type: fileType
//                 });
//                 sel_file = rotateFile;
//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     $('.image-upload-wrap').hide();
//                     $('.file-upload-image').removeAttr("style");
//                     $('.file-upload-image').attr('src', e.target.result);
//                     $('.file-upload-image').css("display", "none");
//                     $('#realImage').attr('src', document.getElementById("ToneImage").getAttribute("src"));
//                     $('.file-upload-content').show();

//                     $('.image-title').html(input.files[0].name);
//                     $("#realImage").Jcrop({
//                         onSelect: showCoords
//                     }, function () {
//                         jcropApi = this;
//                     });
//                 }
//                 reader.readAsDataURL(rotateFile);
//             }, fileType)
//         }, {
//             orientation: true
//         });//end loadImage



//     } else {
//         removeUpload();
//     }
// }  블롭을 통해 자동으로 로테이트하는 함수, 그러나 지원하지 않는 브라우저가 많아서 포기.


//브라우저 리사이징시 크롭 새롭게 불러와서 크기 맞게 적용.
function resize() {
    $("#realImage").Jcrop({
        onSelect: showCoords,
    }, function () {
        jcropApi = this;
        div2();
    });
    function div2() {
        document.getElementsByClassName("jcrop-holder")[0].lastElementChild.id = "jcropImg";
        document.getElementsByClassName("file-upload-image")[1].style.transform = "rotate( " + rotateRate + "deg )";
        document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate( " + rotateRate + "deg )";
        if (firstCrop == false) {

            document.getElementsByClassName("jcrop-holder")[0].className = "jcrop-holder aft";
            document.getElementsByClassName("jcrop-holder")[0].lastElementChild.style.opacity = 1;
        } else {
            firstCrop = false;
        }
    }
}
//업로드된 이미지를 jcrop라이브러리로 변환하고 이미지를 캔버스에 그려놓는다.
function editImg(callback, plusMinus) {
    editCheck = true;
    if (plusMinus) {

    } else {
        document.getElementById('editBtn').style.pointerEvents = 'none';
        if (rotateCrop) {
            document.getElementsByClassName("jcrop-holder aft")[0].className = "jcrop-holder";
            document.getElementsByClassName("jcrop-holder")[0].lastElementChild.id = "jcropImg";
            document.getElementsByClassName("jcrop-holder")[0].lastElementChild.style.opacity = 0.6;
            rotateCrop = false;
            return;
        }
    }
    document.getElementById("editBtn").style.animation = "fade 0.5s"
    setTimeout(function () {
        document.getElementById("editBtn").style.animation = "unset"
    }, 500);
    let canvas = document.getElementById("copyCanvas");

    let canvasContext = canvas.getContext("2d");

    // @breif 캔버스의 이미지

    var image = new Image();
    image.src = document.getElementById("originalImg").src;
    image.onload = function () {

        canvas.width = this.width;

        canvas.height = this.height;
        $("#realImage").Jcrop({
            onSelect: showCoords,
        }, function () {
            jcropApi = this;
            div();
        });


        //안드로이드인 내 폰에서는 방향에 맞게 자동으로 회전되어 등록되지만 애플은 그렇지 않다. 애플은 정방향에서 90도회전된 정보가 사진에 들어가 있다.
        //예를 들면 정방향에서 찍었으면 회전값이 1이어야 하는데 애플은 8이 나온다. 그래서 애플 디바이스를 위한 회전 로직을 따로 짜야했다.
        //그리고 데스크탑 같은 경우, 크롬은 자동으로 정방향으로 나오지만 엣지는 회전되어 나온다. 기기 별 대응이 너무 많아지기 떄문에, 자체적으로 회전 로직을 추가했다.
        //크롭을 하기위해선 캔버스가 필요한데, 애플 기기에서 업로드시 img태그에는 정방향으로 나오지만 캔버스에는 회전이 적용되어 나오기 때문에, 피부를 특정해서 crop해야 하는
        //이 앱에서는 자동회전이 불가피하게 되어 넣게 됐다.iPhone|iPad|iPod|Mac

        //망할놈의 캔버스. 아이폰6+페북, 아이패드+페북 에서는 정확히 잘됨. 그러나 아이폰xs+페북에서는 안드로이드처럼 정방향으로 잘나온다...
        //아이폰 xs에서만 이렇게 되면 예외처리를 해두면 되겠지만, 분명 다른 버전에서도 문제가 일어날 것이 뻔하다.. 대체 왜이러는걸까.
        //아이폰xs ios업데이트를 했더니 알아서 정방향으로 잘나온다. 이전에 했던 로직이 안먹힘. 하... 일단 ios 13.4버전 기준으로 자동회전을 시켜놨다.
        //아이패드에서도 실험해봤는데 13.5버전 또한 안드로이드처럼 정방향으로 잘나온다. 확실히 ios문제인거 같다. 정확히 이 패치가 몇 버전에서 이루어졌는지 알아내야한다.
        if (appleCheck) {
            if (floatOs >= 13.4) {
                canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                if (plusMinus) callback(plusMinus);
                return
            }
            // console.log("애플기기입니다.");
            var fileInfo = document.getElementById("fileInput").files[0];
            EXIF.getData(fileInfo, function () {
                const orientation = EXIF.getTag(fileInfo, "Orientation");
                // console.log("회전도는 " + orientation);
                switch (orientation) {

                    // @details 이미지 회전값이 0인경우 ( 정방향 )
                    case undefined:
                        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                        if (plusMinus) callback(plusMinus);
                        break;
                    case 1:


                        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                        if (plusMinus) callback(plusMinus);
                        break;

                    case 3:


                        canvasContext.translate(canvas.width / 2, canvas.height / 2);
                        canvasContext.rotate(Math.PI);
                        canvasContext.translate(-canvas.width / 2, -canvas.height / 2);



                        // @details 이미지가 180° 회전 했을 경우 x, y축의 값을 업로드 이미지의 넓이와 높이를 음수로 변경한다.

                        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                        if (plusMinus) callback(plusMinus);
                        break;

                    // @details 이미지 회전값이 270 기운 경우 ( 왼쪽으로 90 기운 경우 )
                    case 6:
                        if (canvas.width < canvas.height) {
                            canvas.width = canvas.height;
                        } else {
                            canvas.height = canvas.width;
                        }

                        canvasContext.translate(canvas.width / 2, canvas.height / 2);
                        canvasContext.rotate(Math.PI * 0.5);
                        canvasContext.translate(-canvas.width / 2, -canvas.height / 2);
                        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                        if (plusMinus) callback(plusMinus);


                        // @details 이미지가 270° 회전 했을 경우 x축의 값을 업로드 이미지의 넓이를 음수로 변경한다.


                        break;

                    // @details 이미지 회전값이 90 기운 경우
                    case 8:
                        if (canvas.width < canvas.height) {
                            canvas.width = canvas.height;
                        } else {
                            canvas.height = canvas.width;
                        }

                        canvasContext.translate(canvas.width / 2, canvas.height / 2);
                        canvasContext.rotate(Math.PI * 1.5);
                        canvasContext.translate(-canvas.width / 2, -canvas.height / 2);
                        canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                        if (plusMinus) callback(plusMinus);
                        //회전하기전에 정사각형을 만들어주자.
                        break;
                }

            })
        } else {
            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
            if (plusMinus) callback(plusMinus);
        }


        // 사진편집을 누르면 편집 테두리가 전체를 감싸도록 설정
        $('.file-upload-content').show();
        // firstCrop = true;
    }

}

function streamTrue() {
    document.getElementById("mainCam").style.display = "block"
    document.getElementById("cropNotice").innerHTML = "※ 손목 안쪽이 잘보이는 상태에서 측정 버튼을 눌러주세요"
    document.getElementById("openVideoBtn").style.display = "block";
    modeChange();
    stream = true;
}
function cameraCheck() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {

        //사파리는 해상도가 자동으로 조절되기때문에 해상도를 설정해주면 에러가난다. 그래서 사파리는 설정을 안해줘야하는데,
        //기기 정보를 받아올때 크롬에는 사파리 크롬이 다 적혀있고, 사파리에는 사파리만 적혀있으므로 사파리를 특정하기 위해서는 
        //사파리 문자를 포함하고 크롬 문자를 포함하지않는 조건을 충족시켜줘야한다
        if (ua.indexOf('Safari') != -1 && ua.indexOf('Chrome') == -1) {
            navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { exact: "environment" }
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
                    width: { min: 1024, ideal: 1280, max: 1920 },
                    height: { min: 776, ideal: 720, max: 1080 }, facingMode: { exact: "environment" }
                }
            }).then(function (stream) {
                //video.src = window.URL.createObjectURL(stream);
                streamTrue();
                video.srcObject = stream;
                video.play();
            }).catch(function (err) {
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
                height: { min: 776, ideal: 720, max: 1080 }, facingMode: { exact: "environment" }
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
function modeChange() {
    document.getElementById("mainbody").scrollIntoView();
    document.getElementById("subTitle").style.display = "none";
    document.getElementById("mainTitle").style.display = "none";
    document.getElementById("stepInfo").style.display = "inline-block";
    document.getElementById("cropNotice").style.display = "inline-block";
    document.getElementById("notice").style.display = "none";
    document.getElementById("notice2").style.display = "none";
    document.getElementById('editBtn').style.pointerEvents = 'auto';
    $('.image-upload-wrap').hide();
    $('.file-upload-image').removeAttr("style");
    $('#slider').show();
}
//인풋창 파일 업로드 시 
function readURL(input) {

    if ((input.files && input.files[0])) {
        loading.style.display = "block"

        // $('#originalImg').attr('src', tempImage.src);


        // $('.file-upload-image').css("display", "none");
        // $('#realImage').attr('src', e.target.result);
        uploadCheck = false;

        editCheck = false;
        if (jcropApi) {
            jcropApi.destroy();

            jcropApi = null;
        }
        firstCrop = true;
        const fileInfo = input.files[0];
        var reader = new FileReader();
        let tempImage = new Image();
        reader.onload = function (e) {

            document.getElementById("originalImg").src = e.target.result;
            $('.file-upload-image').attr('src', e.target.result);
            modeChange();



            //회전값이 있는 사진을 정방향으로 돌리는 로직을 짜려했지만, 디바이스마다 회전값을 처리하는 기준이 달라서(특히 애플) 결국 포기하고 
            //있는 그대로의 사진을 올리고 유저가 회전시킬 수 있게 바꾸었다...


            // canvasContext.drawImage(tempImage, 0, 0, canvas.width, canvas.height);

            //     await EXIF.getData(fileInfo, async () => {
            //         // if (navigator.userAgent.indexOf('Mobile') != -1) {
            //         //     canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
            //         //     // console.log("모바일기기입니다.")
            //         //     return
            //         // }
            //         fileInfo.exifdata = null;
            //         console.log(EXIF.getAllTags(fileInfo));
            //         const orientation = EXIF.getTag(fileInfo, "Orientation");
            //         console.log("회전도는 "+orientation);

            //         switch (orientation) {

            //             // @details 이미지 회전값이 0인경우 ( 정방향 )
            //             case undefined:

            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
            //                 $('.image-upload-wrap').hide();
            // $('.file-upload-image').removeAttr("style");
            // $('.file-upload-image').attr('src', getBase64Image());

            //  $('#originalImg').attr('src', getBase64Image());
            //   $("#realImage").Jcrop({
            //     onSelect: showCoords,
            // }, function () {
            //     jcropApi = this;
            // });

            // // $('.file-upload-image').css("display", "none");
            // // $('#realImage').attr('src', e.target.result);
            // $('.file-upload-content').show();
            // $('.image-title').html(input.files[0].name);
            //             //    callback(canvas);

            //                 break;
            //             case 1:

            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
            //                 break;
            //             case 0:

            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
            //                 break;
            //             // @details 이미지 회전값이 180 기운 경우
            //             case 3:
            //                 // document.getElementById("realImage").style.transform = "rotate( 180deg )";
            //                 // document.getElementById("originalImg").style.transform = "rotate( 180deg )";
            //                 // document.getElementsByClassName("file-upload-image")[1].style.transform = "rotate( 180deg )";
            //                 // document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(180deg)";





            //                 // canvasContext.rotate((180) * Math.PI / 180);

            //                 canvasContext.translate(canvas.width / 2, canvas.height / 2);
            //                 canvasContext.rotate(Math.PI);
            //                 canvasContext.translate(-canvas.width / 2, -canvas.height / 2);




            //                 // @details 이미지가 180° 회전 했을 경우 x, y축의 값을 업로드 이미지의 넓이와 높이를 음수로 변경한다.

            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);

            //                 break;

            //             // @details 이미지 회전값이 270 기운 경우 ( 왼쪽으로 90 기운 경우 )
            //             case 6:
            //                 if (canvas.width < canvas.height) {
            //                     canvas.width = canvas.height;
            //                 } else {
            //                     canvas.height = canvas.width;
            //                 }
            //                 // document.getElementById("realImage").style.transform = "rotate( 90deg )";
            //                 // document.getElementById("originalImg").style.transform = "rotate( 90deg )";
            //                 // document.getElementsByClassName("file-upload-image")[1].style.transform = "rotate( 90deg )";
            //                 // document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(90deg)";
            //                 // @details 270° 회전의 경우 이미지의 높이와 넓이를 서로 바꿔준다.


            //                 // tempImage.src = document.getElementById("ToneImage").getAttribute("src");
            //                 // canvasContext.save();
            //                 // canvasContext.translate(tempImage.width / 2, tempImage.height / 2);
            //                 // canvasContext.rotate(Math.PI * 0.5);

            //                 // canvasContext.drawImage(this, -1490,-0);

            //                 // canvasContext.restore();
            //                 console.log("ㅅㅂ");
            //                 canvasContext.translate(canvas.width / 2, canvas.height / 2);
            //                 canvasContext.rotate(Math.PI * 0.5);
            //                 canvasContext.translate(-canvas.width / 2, -canvas.height / 2);
            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);



            //                 // @details 이미지가 270° 회전 했을 경우 x축의 값을 업로드 이미지의 넓이를 음수로 변경한다.


            //                 break;

            //             // @details 이미지 회전값이 90 기운 경우
            //             case 8:
            //                 //회전하기전에 정사각형을 만들어주자.
            //                 if (canvas.width < canvas.height) {
            //                     canvas.width = canvas.height;
            //                 } else {
            //                     canvas.height = canvas.width;
            //                 }
            //                 // document.getElementById("realImage").style.transform = "rotate( 270deg )";
            //                 // document.getElementById("originalImg").style.transform = "rotate( 270deg )";
            //                 // document.getElementsByClassName("file-upload-image")[1].style.transform = "rotate( 270deg )";
            //                 // document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(270deg)";
            //                 // @details 90° 회전의 경우 이미지의 높이와 넓이를 서로 바꿔준다.




            //                 // canvasContext.rotate((90) * Math.PI / 180);

            //                 //캔버스의 중심점 설정.
            //                 canvasContext.translate(canvas.width / 2, canvas.height / 2);
            //                 canvasContext.rotate(Math.PI * 1.5);
            //                 //회전시킨 후 다시 중심점 0,0으로 설정.
            //                 canvasContext.translate(-canvas.width / 2, -canvas.height / 2);


            //                 // @details 이미지가 90° 회전 했을 경우 y축의 값을 업로드 이미지의 높이를 음수로 변경한다.
            //                 canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
            //                 break;
            //         }
            //     });
            // let dataURI = canvas.toDataURL("image/jpeg");

            // document.querySelector("#ToneImage").src = dataURI;



        }

        reader.readAsDataURL(fileInfo);
        loading.style.display = "none"

    }
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
//이미지 회전.
function rotateImg(plusMinus) {
    document.getElementById("rotateBtn").style.animation = "fade 0.5s"
    setTimeout(function () {
        document.getElementById("rotateBtn").style.animation = "unset"
    }, 500);
    if (plusMinus == "right") {
        rotateRate += 90;
    } else {
        rotateRate -= 90;
    }

    if (rotateRate == 360 || rotateRate == -360) {
        rotateRate = 0;
    }

    if (!editCheck) {
        firstCrop = false;
        rotateCrop = true;
        //캔버스에 그림이 그려진 후 회전을 시켜야해서 콜백함수로 순서를 맞춤.
        editImg(rotateCall, plusMinus);

    } else {
        rotateCall(plusMinus);
    }

}
function rotateCall(plusMinus) {
    let canvas = document.getElementById("copyCanvas");

    let canvasContext = canvas.getContext("2d");

    let rotateCanvas = document.getElementById("myCanvas");
    let rtx = rotateCanvas.getContext("2d");
    document.getElementById("realImage").style.transform = "rotate( " + rotateRate + "deg )";
    document.getElementById("originalImg").style.transform = "rotate( " + rotateRate + "deg )";
    if (document.getElementsByClassName("jcrop-holder")[0]) {
        document.getElementsByClassName("file-upload-image")[1].style.transform = "rotate( " + rotateRate + "deg )";
        document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate( " + rotateRate + "deg )";

    }
    rotateCanvas.width = canvas.width;
    rotateCanvas.height = canvas.height;

    if (rotateCanvas.width < rotateCanvas.height) {
        rotateCanvas.width = rotateCanvas.height;
    } else {
        rotateCanvas.height = rotateCanvas.width;
    }

    // 캔버스의 중심점 설정.
    rtx.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
    if (plusMinus == "right") {
        rtx.rotate(Math.PI * 0.5);
    } else {
        rtx.rotate(Math.PI * -0.5);

    }
    rtx.translate(-rotateCanvas.width / 2, -rotateCanvas.height / 2);
    rtx.drawImage(canvas, 0, 0, rotateCanvas.width, rotateCanvas.height);



    //회전용 캔버스의 내용을 다시 메인 캔버스에 복사해준다. 이미지를 회전시켜 캔버스에 그리면 편하나, 원래 이미지를 회전시킨건 단순 css를 통한 회전이다
    //캔버스에는 회전이 적용되지않은 원래의 이미지가 그려지기 때문에 메인캔버스의 그림을 불러와 서브캔버스에 회전한 상태를 그린 후, 다시 서브에서 메인으로 옮겨 그린다.
    canvas.width = rotateCanvas.width;
    canvas.height = rotateCanvas.height;

    canvasContext.drawImage(rotateCanvas, 0, 0, rotateCanvas.width, rotateCanvas.height);
}

//크롭 영역 지정 이벤트 함수
var showCoords = function (c) {
    cropCheck = false;
    if (document.getElementsByClassName("jcrop-holder")[0]) {
        document.getElementsByClassName("jcrop-holder")[0].className = "jcrop-holder aft";
    }

    x = c.x;
    y = c.y;
    w = c.w;
    h = c.h;
};

//캔버스의 이미지를 base64로 변환
function getBase64Image() {

    var canvas = document.getElementById("copyCanvas");

    var dataURL = canvas.toDataURL("image/png");

    return dataURL; // dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

}


//사진 원상복구. 숨겨놓앗던 오리지널 이미지태그를 불러와 캔버스에 다시그림
function refresh() {
    document.getElementById("refreshBtn").style.animation = "fade 0.5s"
    setTimeout(function () {
        document.getElementById("refreshBtn").style.animation = "unset"
    }, 500);
    uploadCheck = false;
    cropCheck = true;
    rotateRate = 0;
    document.getElementById("refreshBtn").disabled = true;
    document.getElementById("originalImg").style.transform = "none";
    var image = new Image();
    image.src = document.getElementById("originalImg").src;
    document.getElementById("realImage").src = image.src;
    document.getElementsByClassName("file-upload-image")[1].src = image.src;
    document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.src = image.src;
    document.getElementsByClassName("file-upload-image")[1].style.transform = "none";
    document.getElementsByClassName("jcrop-holder")[0].firstElementChild.firstElementChild.firstElementChild.style.transform = "none";

    var canvas = document.getElementById("copyCanvas");
    var canvasContext = canvas.getContext("2d");



    // canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
    try {


        image.onload = function () {
            canvas.width = this.width;
            canvas.height = this.height;
            if (appleCheck) {
                if (floatOs >= 13.4) {
                    canvasContext.drawImage(this, 0, 0, canvas.width, canvas.height);
                    if (plusMinus) callback(plusMinus);
                    return
                }
                var fileInfo = document.getElementById("fileInput").files[0];
                EXIF.getData(fileInfo, function () {
                    const orientation = EXIF.getTag(fileInfo, "Orientation");
                    // console.log("회전도는 " + orientation);
                    switch (orientation) {

                        // @details 이미지 회전값이 0인경우 ( 정방향 )

                        case 1:


                            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                            break;
                        case undefined:


                            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);
                            break;

                        case 3:


                            canvasContext.translate(canvas.width / 2, canvas.height / 2);
                            canvasContext.rotate(Math.PI);
                            canvasContext.translate(-canvas.width / 2, -canvas.height / 2);



                            // @details 이미지가 180° 회전 했을 경우 x, y축의 값을 업로드 이미지의 넓이와 높이를 음수로 변경한다.

                            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);

                            break;

                        // @details 이미지 회전값이 270 기운 경우 ( 왼쪽으로 90 기운 경우 )
                        case 6:
                            if (canvas.width < canvas.height) {
                                canvas.width = canvas.height;
                            } else {
                                canvas.height = canvas.width;
                            }

                            canvasContext.translate(canvas.width / 2, canvas.height / 2);
                            canvasContext.rotate(Math.PI * 0.5);
                            canvasContext.translate(-canvas.width / 2, -canvas.height / 2);
                            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);



                            // @details 이미지가 270° 회전 했을 경우 x축의 값을 업로드 이미지의 넓이를 음수로 변경한다.


                            break;

                        // @details 이미지 회전값이 90 기운 경우
                        case 8:
                            if (canvas.width < canvas.height) {
                                canvas.width = canvas.height;
                            } else {
                                canvas.height = canvas.width;
                            }

                            canvasContext.translate(canvas.width / 2, canvas.height / 2);
                            canvasContext.rotate(Math.PI * 1.5);
                            canvasContext.translate(-canvas.width / 2, -canvas.height / 2);
                            canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);

                            //회전하기전에 정사각형을 만들어주자.x
                            break;
                    }


                })
            } else {
                canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);



            }
        }
    } catch (error) {
        console.log(error);
    }
}


//색상과 질문 총 결과값을 종합하여 결과 도출
//아래 주석처리된 부분이 원래로직. 단순하게 rgb값들의 오차를 절대값으로 더해서 가장 숫자가 적은, 즉 오차가 가장 적은 컬러가 가까운 컬러로 뽑히게 짰다.
//그러나 rgb값으로는 색의 오차를 수치로 판단하기가 힘들다. 예를들어 50,50,50을 비교하면, 100,100,100과는 총 150의 차이, 50,50,199와는 총 149의 차이로 후자가 더 비슷한 컬러로 결과가 나오지만,
//실제 인간이 봤을 때 비슷한 색은 100,100,100이다. 후자는 blue값이 149의 차이가 나기때문에 색이 완전히 다른 색이 되어버린다. 이처럼 세 영역의 벨런스를 잡아줄 수가 없어서 구글링을 해봤는데,
//CIE(국제조명위원회)가 LAB값을 활용한 공식을 발표했고(delta-e), 그걸 js로 만들어놓은 사람이 있어서 가져와서 모듈화해서 사용했다.
function season() {
    loading.style.display = "block"
    var length = firstResult.length
    // for (var i = 0; i < length; i++) {
    //     // var red = (imgRed - colorGroup[i][0]);
    //     // red = red < 0 ? -(red) : red;
    //     // var green = (imgGreen - colorGroup[i][1]);
    //     // green = green < 0 ? -(green) : green;
    //     // var blue = (imgBlue - colorGroup[i][2]);
    //     // blue = blue < 0 ? -(blue) : blue;

    //     firstResult.push([window.module1(labColor, colorGroup[i]), i]);
    //     // calResult.push([red + green + blue, i]);

    // }
    // var length2 = firstResult.length
    var season1 = [];
    var season2 = [];
    // var colorNum;
    // calResult.sort(function (a, b) { // 오름차순 
    //     return a[0] - b[0];
    // });


    for (var i = 0; i < length; i++) {
        if (firstResult[i][1] < 8 && !season1[0]) {
            season1.push(firstResult[i][0])
            season1.push(firstResult[i][1])
        }
        if ((firstResult[i][1] >= 8 && firstResult[i][1] < 16) && !season2[0]) {
            season2.push(firstResult[i][0])
            season2.push(firstResult[i][1])
        }
        if (season1[0] && season2[0]) break;
    }
    //delta-e에서 리턴받은 값을 점수화해서 질문결과와 합침.
    //대부분 필터 같은 것들이 껴있어서 밝은 부분이 많아 쿨톤이 점수가 높게 나오기 때문에 웜톤을 상향 조정했다.
    if (stream) {
        season1[0] = 50 - (49 / (100 / season1[0]));
        season2[0] = 50 - (50 / (100 / season2[0]));
    }
    else {
        season1[0] = 50 - (42 / (100 / season1[0]));
        season2[0] = 50 - (50 / (100 / season2[0]));
    }
    season1[0] += (warm / 2.5)
    season2[0] += (cool / 2.5)

    if (season1[0] > season2[0]) {
        toneColor = "warm"
    } else {
        toneColor = "cool"
    }

    //스트림 방식은 아무래도 카메라로 바로 측정하기 때문에 그늘지기도 하고 크롭으로 특정 부위를 자를수도 없어 좀 더 어둡기 때문에 인위적으로 벨런스를 조절해줌.
    season1 = [];
    season2 = [];
    if (toneColor == "warm") {
        for (var i = 0; i < length; i++) {
            if (firstResult[i][1] <= 3 && !season1[0]) {
                season1.push(firstResult[i][0])
                season1.push(firstResult[i][1])
            }
            if ((firstResult[i][1] >= 4 && firstResult[i][1] <= 7) && !season2[0]) {
                season2.push(firstResult[i][0])
                season2.push(firstResult[i][1])
            }
            if (season2[0] && season1[0]) {
                break;
            }
        }
        //웜톤은 가뜩이나 필터때문에 잘나오지 못하는데, 그나마 웜톤이 나왔을때는 사진이 다소 어두울 때라, 가을 웜톤에 결과가 치우친다.
        //그래서 봄웜톤 살짝 상향 조정.
        if (!stream) {
            if (season2[0] <= 12) season1[0] -= season2[0] * 0.2
            else if (season2[0] <= 24) season1[0] -= season2[0] * 0.15
        }
        else {
            if (season2[0] <= 12) season1[0] -= season2[0] * 0.14
            else if (season2[0] <= 24) season1[0] -= season2[0] * 0.125
        }
    } else {
        for (var i = 0; i < length; i++) {
            if ((firstResult[i][1] >= 8 && firstResult[i][1] <= 11) && !season1[0]) {
                season1.push(firstResult[i][0])
                season1.push(firstResult[i][1])
            }
            if ((firstResult[i][1] >= 12 && firstResult[i][1] <= 15) && !season2[0]) {
                season2.push(firstResult[i][0])
                season2.push(firstResult[i][1])
            }
            if (season2[0] && season1[0]) {
                break;
            }
        }
        if (stream) {
            if (season2[0] <= 12) season1[0] -= season2[0] * 0.135
            else if (season2[0] <= 24) season1[0] -= season2[0] * 0.12
        }
    }
    // if (toneColor == "warm") {
    //     season1 -= season1 / 5
    // } else {

    //     season1 -= season1 / 7.3
    // }

    // if (season2[0] < 200 || season1[0] < 200) {

    // }
    colorNum = season1[0] == season2[0] ? firstResult[0][1] : season1[0] < season2[0] ? season1[1] : season2[1];
    //100점 기준으로 점수 변환
    if (season1[0] > season2[0]) {
        //겨울쿨톤에 가까울 때
        var percentage = (season1[0] - season2[0]) * 12;
        if (percentage > 50) percentage = 50;
        season2[0] = Math.round(50 + percentage);
        season1[0] = Math.round(50 - percentage);
    } else {
        //여름쿨톤에 가까울 때
        var percentage = (season2[0] - season1[0]) * 23;
        if (percentage > 50) percentage = 50;
        season1[0] = Math.round(50 + percentage);
        season2[0] = Math.round(50 - percentage);
    }

    setTimeout(function () {
        if (colorNum <= 3) {
            window.location.href = "https://mycolor.kr/springWarm/?spring=" + season1[0] + "&fall=" + season2[0]
        } else if (colorNum <= 7) {
            window.location.href = "https://mycolor.kr/fallWarm/?spring=" + season1[0] + "&fall=" + season2[0]
        } else if (colorNum <= 11) {
            window.location.href = "https://mycolor.kr/summerCool/?summer=" + season1[0] + "&winter=" + season2[0]
        } else if (colorNum <= 15) {
            window.location.href = "https://mycolor.kr/winterCool/?summer=" + season1[0] + "&winter=" + season2[0]
        }
        
    }, 1500);

    calResult = [];
}


(function () { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://personalcolor.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();