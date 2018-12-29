var speed1=30 //
aaa2.innerHTML=aaa1.innerHTML
function Marquee(){
    if(aaa2.offsetWidth-aaa.scrollLeft<=0)
        aaa.scrollLeft-=aaa.offsetWidth
    else{
        aaa.scrollLeft++
    }
}
var MyMrr=setInterval(Marquee,speed1)
aaa.onmouseover=function() {clearInterval(MyMrr)}
aaa.onmouseout=function() {MyMrr=setInterval(Marquee,speed1)}
