
//////////////////////////////// CROUSEL JS GOES HERE
var counter = 1;
var timer;
function slide(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}

timer= setInterval(slide,4000);

function plusSlides(n){
clearInterval(timer);
if(n===1){
        var nextslide=counter+1;
    if(nextslide > 4){
        nextslide=1;
    }
}
if(n===-1){
    var nextslide=counter-1;
    if(nextslide<1){
        nextslide=4;
    }
}
document.getElementById('radio' + nextslide).checked = true;
timer= setInterval(slide,4000);
counter=nextslide;
}
//////////////////////////////////////////CROUSEL JS END HERE

///////////////////////////// electric-powertrain JS GOES HERE
let longrange=document.getElementsByClassName('long-range')[0];
let plaid= document.getElementsByClassName('plaid')[0];
let longrangeh2=document.getElementsByClassName('longrange-h2');
let plaidh2=document.getElementsByClassName('plaid-h2');
let longrangep=document.getElementsByClassName('long-range-p');
let plaidp =document.getElementsByClassName('plaid-p');
let dualmotorimg=document.getElementsByClassName('dual-motor')[0];
let trimotorimg=document.getElementsByClassName('tri-motor')[0];
longrange.addEventListener('click',()=>{
if(longrange.classList.contains('inactive')){
  longrange.classList.remove('inactive');
  longrange.classList.add('active');
  trimotorimg.style.display="none";
  dualmotorimg.style.display="block";
  plaid.classList.remove('active');
  plaid.classList.add('inactive');

  for(element of plaidh2){
    element.classList.remove('h2-op-1');
    element.classList.add('h2-op-less');
 }
  for(element of longrangeh2){
     element.classList.add('h2-op-1');
     element.classList.remove('h2-op-less');
  }

  for(element of plaidp){
    element.classList.remove('p-op');
    element.classList.add('p-op-less');
  }
  for(element of longrangep){
    element.classList.add('p-op');
    element.classList.remove('p-op-less');
  }
}

})
plaid.addEventListener('click',()=>{
if(plaid.classList.contains('inactive')){
  plaid.classList.remove('inactive');
  plaid.classList.add('active');
  dualmotorimg.style.display="none";
  trimotorimg.style.display="block";
  longrange.classList.remove('active');
  longrange.classList.add('inactive');

  for(element of longrangeh2){
   element.classList.remove('h2-op-1');
   element.classList.add('h2-op-less');
}
  for(element of plaidh2){
    element.classList.remove('h2-op-less');
    element.classList.add('h2-op-1');
 }
 for(element of longrangep){
  element.classList.remove('p-op');
  element.classList.add('p-op-less');
}
 for(element of plaidp){
   element.classList.remove('p-op-less');
   element.classList.add('p-op');
 }
}
})

//////////////////////// electric-powertrain JS END HERE


////////////////////// Features VIDEO CAROUSEL JS GOES HERE
document.getElementById('vcc-radio1').checked=true;
var radiobtn= document.getElementsByClassName('vcc-radio');
let vccactive=document.getElementsByClassName('vcc-active')[0];
let vccitem=document.getElementsByClassName('vcc-items');
let videocarouselcontent=document.getElementsByClassName('video-carousel-content')[0];
var screensize = window.matchMedia("(max-width: 840px)");
let pos0=-(videocarouselcontent.getBoundingClientRect().left);

//////////manual video carousel JS 
function maualvideocarousel(){
for(var i=0; i<radiobtn.length; i++)
{
  if(radiobtn[i].checked==true)
  {
   
   if(screensize.matches){
      if(i>0)
      {
        var pos=-vccitem[i].getBoundingClientRect().left;      
        videocarouselcontent.style.transform = `translateX(${pos}px)`;
      }
    if(i==0) {videocarouselcontent.style.transform = `translateX(${pos0}px)`;}
    } 

    vccactive.style.left = `${vccitem[i].offsetLeft}px`;
      let video=document.getElementById('vcc-video-'+i);
      vccitem[i].style.opacity="1";
      video.style.display="block";
      video.play();
    }
    else{
    let video=document.getElementById('vcc-video-'+i);
    vccitem[i].style.opacity="0.6";
      video.style.display="none";
      video.pause();
  }
}
}
setInterval(maualvideocarousel,100);

/////////automatic video carousel JS
function videoend(n)
{
if(n>2){
  document.getElementById('vcc-radio1').checked=true;
  var video=document.getElementById('vcc-video-0');
  video.play();
  maualvideocarousel();
}
else
{
  document.getElementById('vcc-radio'+(n+2)).checked=true;
  var video=document.getElementById('vcc-video-'+(n+1));
  video.play();

  maualvideocarousel();
}
}
/////////////////////////////// Features VIDEO CAROUSEL JS END HERE

///////////////////////Footer JS goes here
// document.getElementsByClassName('footerbottomitem')[0].innerHTML='Tesla © 2021 (by @_k_rajat)';
 let footerelem= document.createElement('div');
 let parentfooter=document.getElementsByClassName('footerbottom')[0]
 footerelem.appendChild('parentfooter');
 footerelem.addClass('')
/////////////////////////Footer JS end here

//////////////////////////////////ModelS Specs JS GOES HERE
let left=document.getElementsByClassName('msc-content-left');
let right=document.getElementsByClassName('msc-content-right');
let mscactualbtn=document.getElementsByClassName('msc-actualbtn');
function mscbtn(){
  for(leftelement of left){
    leftelement.style.display=="block" ?   leftelement.style.display='none': leftelement.style.display='block';
  }    
  for(rightelement of right){
    rightelement.style.display=="block" ?   rightelement.style.display='none': rightelement.style.display='block';
  }
 for(btn of mscactualbtn){
   btn.style.opacity!='1'? btn.style.opacity='1':btn.style.opacity='0.6';
 }
}
//////////////////////////////////ModelS Specs JS END HERE
