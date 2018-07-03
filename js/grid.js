window.onresize = function makeResponsive(event){
  console.log('Oops');
  let orientation = window.screen.orientation,
  widthWindow = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(widthWindow, orientation);
    if (widthWindow >= 1200){
    console.log("========= Extra Large===============");
    }  else if(widthWindow >= 993 && widthWindow < 1199){
      console.log('============Large===================');
    }  else if (widthWindow >= 768 && widthWindow < 992){
      console.log('============Medium================');
    } else if (widthWindow >= 576 && widthWindow < 767){
      console.log("==============Small===============");
    } else if (widthWindow < 576){
      console.log('=============X-Small=============');
    }
};



