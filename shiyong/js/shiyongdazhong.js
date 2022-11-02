
var jiazai=document.getElementsByClassName('jiazai')[0];//数据加载中
var dianji=document.getElementsByClassName('dianji')[0];//点击加载
var body=document.getElementsByTagName('body')[0];//body
var ul=document.getElementsByClassName('se-t1-ul')[0];//ul

window.onload=function(){
    getData();
}
var dataList=[];
function getData(){
    var ajax_=new XMLHttpRequest()||new ActiveXObject('Micrsoft.XMLHTTP');
    ajax_.open('get',"http://127.0.0.1:3000/useing/public");
    ajax_send();
    ajax_.onreadystatechange=function(){
        if(ajax_.readyState==4){
            if(ajax_.status==200){
                data=ajax_.responseText;
                dataList=JSON.parse(data);
                show();
            }
            else{
                console.log('加载失败');
            }
        }
    }
}

var index=0;
var flr=true;
function show(){
    if(flg){
        index++;
        if(index>dataList.length){
            var div_=document.createElement('div');
            div_.setAttribute('class','loding');
            body.appendChild(div_);
            div_.innerHTML='数据加载完毕';
            return flg=false;
        }
        ul.setAttribute('class','se-t1-ul');
        for(var item of dataList[index]){
            var li=document.createElement('li');
        }
    }
}