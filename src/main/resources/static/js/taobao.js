window.onload=function ()
{
var oDiv=document.getElementById('div1');
var oShow=oDiv.getElementsByTagName('div')[0];
var oSpan=oDiv.getElementsByTagName('span')[0];
var oImg=document.getElementById('img1');
oShow.onmouseover=function()
{
oSpan.style.display='block';
oImg.parentNode.style.display='block';
};
oShow.onmouseout=function()
{
oSpan.style.display='none';
oImg.parentNode.style.display='none';
};
oShow.onmousemove=function(ev)
{
var oEvent=ev||event;
var x=oEvent.clientX-oDiv.offsetLeft-oSpan.offsetWidth/2;
var y=oEvent.clientY-oDiv.offsetTop-oSpan.offsetHeight/2;
//获得具体坐标
if(x<0)
{
x=0;
}
else if(x>oShow.offsetWidth-oSpan.offsetWidth)
{
x=oShow.offsetWidth-oSpan.offsetWidth;
}
if(y<0)
{
y=0;
}
else if(y>oShow.offsetHeight-oSpan.offsetHeight)
{
y=oShow.offsetHeight-oSpan.offsetHeight
}
oSpan.style.left=x+'px';
oSpan.style.top=y+'px';
var percentX=x/(oShow.offsetWidth-oSpan.offsetWidth);
var percentY=y/(oShow.offsetHeight-oSpan.offsetHeight);
var oImgparent=oImg.parentNode;
oImg.style.left=-percentX*(oImg.offsetWidth-oImgparent.offsetWidth)+'px';
oImg.style.top=-percentY*(oImg.offsetHeight-oImgparent.offsetHeight)+'px';
};
};