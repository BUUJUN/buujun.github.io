function addLoadEvent(a){var n=window.onload;if(typeof window.onload!="function"){window.onload=a}else{window.onload=function(){n();a()}}}addLoadEvent(function(){console.log("tag cloud plugin rock and roll!");try{TagCanvas.textFont="Helvetica";TagCanvas.textColour="#333";TagCanvas.textHeight=15;TagCanvas.outlineColour="#E2E1C1";TagCanvas.maxSpeed=.03;TagCanvas.freezeActive=true;TagCanvas.outlineMethod="block";TagCanvas.minBrightness=.2;TagCanvas.depth=.92;TagCanvas.pulsateTo=.6;TagCanvas.initial=[.1,-.1];TagCanvas.decel=.98;TagCanvas.reverse=true;TagCanvas.hideTags=false;TagCanvas.shadow="#ccf";TagCanvas.shadowBlur=3;TagCanvas.weight=false;TagCanvas.imageScale=null;TagCanvas.fadeIn=1e3;TagCanvas.clickToFront=600;TagCanvas.lock=false;TagCanvas.Start("resCanvas");TagCanvas.tc["resCanvas"].Wheel(true)}catch(a){console.log(a);document.getElementById("myCanvasContainer").style.display="none"}});