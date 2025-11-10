//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
    var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
    var widthMatch = /width\=(\d+)/.exec(str);
    var heightMatch = /height\=(\d+)/.exec(str);
    return {
        width: parseInt(widthMatch[1]),
        height: parseInt(heightMatch[1])
    }
  })();
  
  var tl;
  var stopWatch;
  
  //INITIALIZE
  function init(){
  
  // Helper function for FOUC
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
  };
  
  
  
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });
  
  IDsToVars();
  
  container.style.width = dimensions.width + 'px';
  container.style.height = dimensions.height + 'px';
  
  //set timeline
  tl = new TimelineLite();
  tl.addLabel("start")
  
  // set variables here
  // i.e.
  // .set([c1_a_2x, c1_b_2x], { opacity: 0, x: 80, force3D: true })
  
  addListeners();
  
  animate();
  }
  
  function addListeners(){
  }
  
  //ANIMATE
  function animate(){
  stopWatch=new Date().getTime(); 
  
  //timeline animation here
  tl
  // .set(star)
  .staggerFrom([c1_2x,c2_2x],0.6,{opacity:0,ease:Power1.easeIn},0.8,"+=.2")

  // star expands and fills banner
  .to(star,.7,{scale:15,x:-150,y:100,ease:Power3.easeIn},"+=.7")

  // ef fades
  .from(c3_2x,0.3,{opacity:0,ease:Power1.easeIn},"+=.3")
  // .from(cta_2x,0.3,{opacity:0,ease:Power1.easeIn},"ef-=.1")

  .to(c3_2x,0.3,{opacity:0,ease:Power1.easeOut},"+=1")
  .from(logo_2x,0.3,{opacity:0,ease:Power1.easeIn},"+=.3")

  //.call(returnTimer)
  }
  
  function returnTimer(){
  stopWatch=((new Date().getTime())-stopWatch)*.001;
  console.log(stopWatch+" seconds");
  }
  
function myFunction() {
  Enabler.exit('BackgroundExit');
}

function exitClickHandler() {
  Enabler.exit('BackgroundExit');
}
function clickThrough(){
    window.open(clicktag);
}
  
  //SET IDs IN DOM TO GLOBAL VARIABLES
  function IDsToVars(){
  var allElements = document.getElementsByTagName("*");
  
  for (var q = 0; q<allElements.length; q++){
     var el = allElements[q];
     if (el.id){
        window[el.id]=document.getElementById(el.id);
    }
  }
  };