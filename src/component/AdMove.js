import React from 'react'

export default function AdMove() {
                  //애드핏 광고가 들어가질 않아서(프리렌더링때문) 전역으로 광고넣고 페이지 진입 시 적절한 위치에 삽입.
                  var daumAd1 = document.getElementById("root").nextElementSibling;
                  var daumAd2 = daumAd1.nextElementSibling;
                //   var daumAd3 = daumAd2.nextElementSibling;
                  daumAd2.setAttribute("class",daumAd2.getAttribute("class")+" ads")
                  daumAd1.setAttribute("class",daumAd1.getAttribute("class")+" ads")
                //   document.getElementsByClassName("specLip")[0].parentNode.insertBefore(daumAd1, document.getElementsByClassName("specLip")[0].previousSibling)
                  document.getElementById("root").firstChild.insertBefore(daumAd1, document.getElementById("disqus_thread"))
                  document.getElementById("root").firstChild.insertBefore(daumAd2, document.getElementById("footer"))
                  // document.getElementsByClassName("pcTopDiv")[0].parentNode.insertBefore(daumAd3, document.getElementsByClassName("pcTopDiv")[0].nextSibling)
                
                
        
    return (
        <div>
            
        </div>
    )
}
