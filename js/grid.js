

let makeResponsive = function(event){
  //console.log('OOooopps');
  let orientation = screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type;
  widthWindow = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log(widthWindow, orientation);
    if(orientation === "landscape-primary"){
      if (widthWindow >= 1200){
        console.log("========= Extra Large landscape-primary===============");
      }  else if(widthWindow >= 993 && widthWindow < 1199){
        console.log('============Large landscape-primary===================');
      }  else if (widthWindow >= 768 && widthWindow < 992){
        console.log('============Medium landscape-primary================');
      } else if (widthWindow >= 576 && widthWindow < 767){
        console.log("==============Small landscape-primary===============");
      } else if (widthWindow < 576){
        console.log('=============X-Small landscape-primary=============');
      }
    } else {
      if (widthWindow >= 1200){
        console.log("========= Extra Large portret-secondary===============");
      }  else if(widthWindow >= 993 && widthWindow < 1199){
        console.log('============Large portret-secondary===================');
      }  else if (widthWindow >= 768 && widthWindow < 992){
        console.log('============Medium portret-secondary================');
      } else if (widthWindow >= 576 && widthWindow < 767){
        console.log("==============Small portret-secondary===============");
      } else if (widthWindow < 576){
        console.log('=============X-Small portret-secondary=============');
      }
    }
};

window.addEventListener("orientationchange", makeResponsive);
window.addEventListener('resize', makeResponsive);
