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
  .staggerFrom([c1_2x,c2_2x],0.6,{opacity:0,ease:Power1.easeOut},0.8,"+=.2")
  // .set(star)
  .to(star,0.5,{scale:5,x:20,y:70,rotation:30,ease:Power1.easeIn},"+=.5")
  .to(star,0.6,{x:800,y:20,rotation:100,ease:Power1.easeIn},"sp-=.1")
  .to(spark_cover,0.4,{width:117,ease:Power1.easeIn},"sp-=.1")


  // old copy fades, new copy + hilton logo fades in
  .to([c1_2x,c2_2x],0.5,{opacity:0,ease:Power1.easeIn},"+=.5")
  .from([c3_2x,hiltonLogo_2x],0.3,{opacity:0,ease:Power1.easeIn},"+=.3")


  //.call(returnTimer)
  }
  
  function returnTimer(){
  stopWatch=((new Date().getTime())-stopWatch)*.001;
  console.log(stopWatch+" seconds");
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