// 加载更多
var jiazai =document.getElementsByClassName('jiazai')[0]
// 加载中
var jiazhong=document.getElementsByClassName('jiazaizhong')[0]
// console.log(jiazhong)
var drawing=document.getElementsByClassName('drawing')[0]
var body=document.getElementsByTagName('body')[0]
var xin =document.getElementsByClassName('xin')


window.onload=function(){
   fu()
  

}
var arr=[]
function fu(){
    $.ajax(
        {
            url:'http://127.0.0.1:3000/play/hot',
            type:'get',
            dataType:'json',
             success:function(res){
              arr=res
             
           
            },
            error:function(){
                console.log('出错')
            }    
        }
    )
}
var index=0
var flg=true

function fn(){ 
    
    jiazai.innerHTML='数据加载中'
    jiazai.style.backgroundImage="url(../img/loading-icon.gif)"
    setTimeout(function(){
        jiazai.innerHTML='点击加载更多'
        jiazai.style.backgroundImage="url(../img/more.png)"
        if(flg){ 
           
            index++
            if(index>=arr.length){ 
                jiazai.innerHTML='数据加载完毕'
                jiazai.style.color='blue'
                jiazai.style.color='blue'
               jiazai.style.fontSize='20px'
               jiazai.style. backgroundImage="url()"      
               jiazai.style.backgroundColor='yellow'
                return flg =false
            } 
            $.each(arr[index],function(index1,element){
                var li_=document.createElement('li')
                var img_=document.createElement('img')
                img_.className='pic'
                img_.src=element.img
                // 
                var p_=document.createElement('p')
                p_.className='title'
                p_.innerHTML=element.text
                // 
                var p_1=document.createElement('p')
                p_1.className='title1'
                p_1.innerHTML=element.description
                // 价格
                var p_2=document.createElement('p')
                p_2.className='price'
                p_2.innerHTML=element.price
                // 
               
                var span_=document.createElement('span')
                span_.className='xin'
                span_.innerHTML=element.like
                // 
                var span_1=document.createElement('span')
                span_1.className='look'
                span_1.innerHTML=element.words
                p_2.appendChild(span_)
                p_2.appendChild(span_1)
                li_.appendChild(img_)
                li_.appendChild(p_1)
                li_.appendChild(p_)
                li_.appendChild(p_2)
                drawing.appendChild(li_)
            })
        } 
    },1500)
    
}
var xin =document.getElementsByClassName('xin')
console.log(xin)
var index6=0
for (var k=0;k<xin.length;k++){
 xin[k].setAttribute('index',k)
 xin[k].onclick=function(){
     index6++
     var index5=this.getAttribute('index');
  console.log(index5)
     if(index6%2==0){
        xin[index5].style.backgroundImage="url(../img/xin.png)"
         xin[index5].innerHTML=3
     }else{
        xin[index5].style.backgroundImage="url(../img/xinRedh.png)"
         xin[index5].innerHTML=2
     }
 }
}
// setTimeout(fn,2500)
