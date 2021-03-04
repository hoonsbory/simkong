
export default class faceBoardColor{
    colorRgb1 = [
        'rgb(137,81,105)',
        'rgb(235,163,175)',
        'rgb(208,136,156)',
        'rgb(232,202,116)',
        'rgb(195,79,98)',
        'rgb(158,200,126)',
        'rgb(223,204,161)',
        'rgb(63,168,127)',
        'rgb(220,129,180)',
        'rgb(219,86,117)',
        'rgb(217,131,140)',
        'rgb(208,101,96)',
        'rgb(215,119,71)',
        'rgb(212,36,71)',
        'rgb(49,160,183)',
        'rgb(215,193,143)',
        'rgb(187,195,73)',
        'rgb(225,44,115)',
        'rgb(53,169,184)',
        'rgb(230,96,107)',
    ]
    colorRgb2 = [
        'rgb(206,196,205)',
        'rgb(229,187,189)',
        'rgb(131,146,185)',
        'rgb(183,98,121)',
        'rgb(168,183,180)',
        'rgb(190,221,213)',
        'rgb(121,163,185)',
        'rgb(196,211,208)',
        'rgb(119,181,206)',
        'rgb(184,161,155)',
        'rgb(205,177,176)',
        'rgb(201,141,177)',
        'rgb(173,108,140)',
        'rgb(108,140,153)',
        'rgb(152,185,178)',
        'rgb(200,179,198)',
        'rgb(176,153,182)',
        'rgb(147,150,157)',
        'rgb(112,178,176)',
        'rgb(180,171,164)',
    ]
    colorRgb3 = [
        'rgb(114,54,64)',
        'rgb(103,87,90)',
        'rgb(180,89,106)',
        'rgb(82,89,105)',
        'rgb(189,119,109)',
        'rgb(175,152,120)',
        'rgb(91,78,98)',
        'rgb(111,78,125)',
        'rgb(161,120,150)',
        'rgb(41,89,112)',
        'rgb(47,111,173)',
        'rgb(78,40,91)',
        'rgb(182,76,54)',
        'rgb(129,25,58)',
        'rgb(112,67,42)',
        'rgb(97,32,36)',
        'rgb(57,41,42)',
        'rgb(138,149,83)',
        'rgb(82,120,73)',
        'rgb(114,77,61)',
    ]
    colorRgb4 = [
        'rgb(131,56,87)',
        'rgb(150,171,190)',
        'rgb(89,85,84)',
        'rgb(82,89,105)',
        'rgb(195,196,69)',
        'rgb(106,96,113)',
        'rgb(151,154,169)',
        'rgb(35,67,52)',
        'rgb(186,182,183)',
        'rgb(89,32,104)',
        'rgb(152,141,171)',
        'rgb(155,37,97)',
        'rgb(172,138,162)',
        'rgb(94,84,95)',
        'rgb(20,20,22)',
        'rgb(47,35,117)',
        'rgb(168,179,173)',
        'rgb(47,46,54)',
        'rgb(38,60,71)',
        'rgb(129,76,144)',
    ]
    
    
    constructor(targetNode){
        this.targetNode = targetNode
        this.addBtnGroup()
    }
    addBtnGroup(){
        document.getElementById("progressContainer").style.display = "none"
        document.getElementById("cropNotice").innerText = '※ 붉은 기, 노란 기가 적고 얼굴이 환해지는 필터를 선택해주세요'
        var tag = `<div class="file-upload-content" id="noCamDiv">
                    <div style="margin-top : 2vh;">
                        <div class="btnGroup clicked" id="filter1"><span>필터 1</span></div>
                        <div class="btnGroup" id="filter2"><span>필터 2</span></div>
                        <div class="btnGroup" id="filter3"><span style="padding-left: 0px">필터 3</span></div>
                        <div class="btnGroup" id="filter4"><span style="padding-left: 0px">필터 4</span></div>
                        </div>
                        <div class="arrowBtn" id="goResult">결과 확인</div>
                </div>`
        $(`#${this.targetNode}`).append(tag)
    }
}