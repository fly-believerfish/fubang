var currentSize = 17;
var maxSize = 30;
var minSize = 0;
var step = 1;
var tamMap = new BMap.Map("tamMap"); //创建地图实例
var point = new BMap.Point(114.02985, 23.056099); //创建坐标点
var marker = new BMap.Marker(point);  // 创建标注
var opts = {
	width: 300,  //信息窗口宽度
	height: 50,  //信息窗口高度
	title: "东莞富邦粉末涂料有限公司",  //信息窗口标题
	enableMessage: true  //设置允许信息窗口发送短信
};
var label = new BMap.Label(" 东莞富邦粉末涂料有限公司 ");
label.setStyle({
                 color: "#000",
                 border: "1px solid black",
                 padding: "0",
                 display: "none",
                 background: "#fff",
                 fontSize: "12px",
                 height: "20px",
                 lineHeight: "20px",
                 fontFamily: "微软雅黑"
                });
marker.setLabel(label);
tamMap.addOverlay(marker);              // 将标注添加到地图中
marker.addEventListener("click",onMarkerClick);
marker.addEventListener("mouseover",titleShow);                    
marker.addEventListener("mouseout",titleHide);
                   
//往地图中添加控件
tamMap.addControl(new BMap.NavigationControl()); //地图平移缩放控件PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方。
tamMap.addControl(new BMap.OverviewMapControl()); //添加缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图。
tamMap.addControl(new BMap.ScaleControl()); //比例尺控件，默认位于地图左下方，显示地图的比例关系。
tamMap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP,BMAP_HYBRID_MAP ]}));tamMap.addControl(new BMap.GeolocationControl()); //定位控件，针对移动端开发，默认位于地图左下方。
tamMap.addControl(new BMap.CopyrightControl()); //版权控件，默认位于地图左下方。
tamMap.centerAndZoom(point, currentSize); //第二个参数越小表示缩小，越大则表示地图放大显示
//地图放大
tamMap.enableScrollWheelZoom(); //启用地图滚轮放大缩小
function zoomOut() {
    currentSize = currentSize + step > maxSize ? currentSize : currentSize + step;
    tamMap.centerAndZoom(point, currentSize);
    // alert(currentSize);
}
//地图缩小
function zoomIn() {
    currentSize = currentSize - step < minSize ? currentSize : currentSize - step;
    tamMap.centerAndZoom(point, currentSize);
    // alert(currentSize);
}
//设置鼠标滑轮滚动事件
function mScroll() {
    if (event.wheelDelta == 120) {
        currentSize = currentSize + step > maxSize ? currentSize : currentSize + step;
        tamMap.centerAndZoom(point, currentSize);
    } else if (event.wheelDelta == -120) {
        currentSize = currentSize - step < minSize ? currentSize : currentSize - step;
        tamMap.centerAndZoom(point, currentSize);
    }
    // document.getElementById("wheelData").innerHTML = event.wheelDelta;
    // alert("鼠标滑轮滚动.."+event.wheelDelta);
}
/*marker点击事件处理*/
function onMarkerClick(e) {
	var p =e.target;

	var text = "地址：东莞市企石镇东山村永盛工业园东部快速干线旁\n电话：0769-82280696/82218792";
	console.log(text);

	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(text, opts);  //创建信息窗口对象
	tamMap.openInfoWindow(infoWindow, point);  //开启信息窗口
}
function titleShow(e) {
	var label = this.getLabel(); 
    label.setStyle({display:"block"});
}
function titleHide(e) {
	var label = this.getLabel(); 
    label.setStyle({display:"none"});
}