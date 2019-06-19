
var x=3
var nums = eval('{{num}}')
var filename = '{{filename}}'
var flag=eval('{{flag}}')
var cur_id=0
var myImage
var ctx
var img
if(flag==0){
    document.write('<p>this file does not have any nodules it means you are healthy.<span id="sp"></span>s 后跳转</p>')
    setInterval(go, 1000)
}else{
    window.onload=function(){
        myImage=document.getElementById('myCanvas')
        ctx=myImage.getContext('2d')
        img=new Image()
        img.src="http://localhost:5000/static/result_" + filename +'_0.png'
        img.onload=function(){
            ctx.drawImage(img,myImage.width/2-img.width/2,myImage.height/2-img.height/2)
        }
    }
    //document.getElementById('img').src="http://localhost:5000/static/result_" + filename +'_0.png'
//        document.getElementById('img1').src="http://localhost:5000/static/result_" + filename +'_0.png'
}
function next(){
    cur_id++
    cur_id%=nums
    document.getElementById('img').src="http://localhost:5000/static/result_" + filename +'_'+String(cur_id)+'.png'
}
function prev(){
    if(cur_id==0){
        cur_id=0
        document.getElementById('img').src="http://localhost:5000/static/result_" + filename +'_'+String(cur_id)+'.png'
    }
    cur_id--
    cur_id%=nums
    document.getElementById('img').src="http://localhost:5000/static/result_" + filename +'_'+String(cur_id)+'.png'
}
function upsample(){
    scaleInput=2
    ctx.clearRect(0, 0, myImage.width, myImage.height);
    ctx.save();
    ctx.translate(myImage.width / 2 - img.width / 2 * scaleInput, myImage.height / 2 - img.height / 2 * scaleInput);
    ctx.scale(scaleInput, scaleInput);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
}
function downsample() {
    scaleInput=0.5
    ctx.clearRect(0, 0, myImage.width, myImage.height);
    ctx.save();
    ctx.translate(myImage.width / 2 - img.width / 2 * scaleInput, myImage.height / 2 - img.height / 2 * scaleInput);
    ctx.scale(scaleInput, scaleInput);
    ctx.drawImage(img, 0, 0);
    ctx.restore();
}
function go(){
    x--;
        if(x>0){
        document.getElementById("sp").innerHTML=x;  //每次设置的x的值都不一样了。
        }else{
        location.href='http://localhost:5000/index';
        }
}