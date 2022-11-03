
var jiazai=document.getElementsByClassName('jiazai')[0];//数据加载中
var dianji=document.getElementsByClassName('dianji')[0];//点击加载
var body=document.getElementsByTagName('body')[0];//body
var ul=document.getElementsByClassName('se-t1-ul')[0];//ul

window.onload=function(){
    getData()
}

var arr=[];
function getData(){
    $.ajax(
        {
            url:'http://127.0.0.1:3000/useing/public',
            type:'get',
            dataType:'json',
            success:function(res){
                arr=res
                console.log(arr)
            },
            error:function(){
                console.log('数据错误');
            }
        }
    )
}

var index=0;
var flg=true;

function fn(){

    dianji.innerHTML='数据加载中';
    dianji.style.backgroundImage="url(../img/loading-icon.gif)";
    setTimeout(function(){
        dianji.innerHTML='点击加载更多';
        dianji.style.backgroundImage="url(../img/more.png)";
        if(flg){
            index++;
            if(index>=3){
                dianji.innerHTML='数据完毕';
                dianji.style.color='blue';
                dianji.style.fontSize='20px';
                dianji.style.backgroundImage="url()";
                dianji.style.backgroundColor='red';
                return flg=false;
            }
            $.each(arr,function(index1,element){


                var li_=document.createElement('li');
                li_.className='se-t1-li'
                // a 标签
                var a=document.createElement('a');
                a.className='se-t1-li-a'
                // span 
                var span1=document.createElement('span');
                span1.className='se-span';
                span1.innerHTML=element.info_ty;
                // 图片
                var img_=document.createElement('img');
                img_.className='tupic';
                img_.src=element.img;
                // div
                var div =document.createElement('div');
                div.className='se-div';

                var h2=document.createElement('h2');
                h2.innerHTML=element.text;

                var p1=document.createElement('p');
                p1.className='se-div-p1';
                var span2=document.createElement('span');
                span2.innerHTML=element.totalnum;
                var span3=document.createElement('span');
                span3.innerHTML=element.num;
                
                var p2=document.createElement('p');
                p2.className='se-div-p2';
                var span4=document.createElement('span');
                span4.innerHTML=element.innerHTML;

                var p3=document.createElement('p');
                p3.className='se-div-p3';
                var span5=document.createElement('span')
                span5.innerHTML=element.apply;
                
                ul.appendChild(li_);
                li_.appendChild(a);
                a.appendChild(img_);
                a.appendChild(span1)
                a.appendChild(div);
                div.appendChild(h2);
                div.appendChild(p1)
                div.appendChild(p2)
                div.appendChild(p3)
                p1.appendChild(span2)
                p1.appendChild(span3)
                p2.appendChild(span4)




            })
        }
    },2000)
}