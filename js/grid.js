window.addEventListener('resize', function(event){
  makeResponsive();
});

let makeResponsive = function(){
  let widthWindow = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
 if (widthWindow >= 1200) || (window.innerHeight > window.innerWidth){
  console.log("========= Extra "" Large===============");
 } else if((widthWindow >= 993 || widthWindow < 1199)|| (window.innerHeight > window.innerWidth)){
    console.log('============Large===================');
 }  else if (widthWindow >= 768 || widthWindow < 992)|| (window.innerHeight > window.innerWidth)){
    console.log('============Medium================');
  } else if (widthWindow >= 576 || widthWindow < 767)|| (window.innerHeight > window.innerWidth)){
    console.log("==============Small===============");
  } else if (widthWindow < 576) || (window.innerHeight > window.innerWidth)){
    consolo.log('=============X-Small=============');
  }

