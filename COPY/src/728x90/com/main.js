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
document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

function ctaOver(e) {
    if (ctaArr_2x.style.opacity == 1) {
      TweenLite.to(ctaArr_2x, .5, {x: dimensions.width*.006, ease: Quad.easeOut});

    }
  }

  function ctaOut(e) {
    if (ctaArr_2x.style.opacity == 1) {
      TweenLite.to(ctaArr_2x, .3, { x: 0, ease: Quad.easeIn });
    }

  }
//replay functionality
/*
replay_button.addEventListener('mouseover',function(){
    TweenLite.fromTo(replay_button, .5, {rotation:'-360'}, {overwrite:false, rotation:'0'});
})
replay_button.addEventListener('click',function(){
        tl.restart();
})
*/
}

//ANIMATE
function animate(){
stopWatch=new Date().getTime(); 

//timeline animation here
tl
.staggerFrom([c2_a_2x], .5, { x: 80, opacity: 0, ease: Quad.easeOut }, .1,"+=0.5")
.from(c2_c_2x, 0.5, { x: 80, opacity: 0, ease: Quad.easeOut }, "+=1.")
.staggerFrom([[cta_2x,ctaArr_2x],legal_2x], 1, { opacity: 0, ease: Quad.easeOut }, .3,"+=0.4")

.fromTo(ctaArr_2x, .5, { x: "0" }, { x: dimensions.width*.006, ease: Quad.easeOut}, "+=0")
.to(ctaArr_2x, .3, { x: 0, ease: Quad.easeIn }, "+=0.2")

// bounce arrow
.fromTo(ctaArr_2x, .2, { x: "0" }, { x: dimensions.width*.002, ease: Quad.easeOut}, "+=0")
.to(ctaArr_2x, .23, { x: 0, ease: Power1.easeIn }, "+=0")

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