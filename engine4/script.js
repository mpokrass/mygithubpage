// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack(e,a,b){var f=jQuery;var h=f(this);var d=f("li",b);var g=f("<div>").addClass("ws_effect").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b.parent());function c(m,j,k,i,l){if(e.support.transform&&e.support.transition){if(!j.transform){j.transform=""}if(j.left){j.transform+=" translate3d("+(j.left?j.left:0)+"px,0,0)"}delete j.left;j.transition=k+"ms all "+i+"ms cubic-bezier(0.770, 0.000, 0.175, 1.000)";m.css(j);if(l){m.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",l)}}else{if(k){m.animate(j,k,"easeInOutExpo",l)}else{m.css(j)}}}this.go=function(n,k,q,p){var j=d.length>2?(n-k+1)%d.length:1;if(Math.abs(q)>=1){j=(q>0)?0:1}j=!!j^!!e.revers;var l=(e.revers?1:-1)*b.width();d.each(function(r){if(j&&r!=k){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var m=f(".ws_list",b);var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(f(a.get(j?n:k)).clone()),o=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(f(a.get(j?k:n)).clone());if(e.responsive<3){i.find("img").css("width","100%");o.find("img").css("width","100%")}c(i,{left:(j?l:0)});c(o,{left:(j?0:-l*0.5)});if(j){o.appendTo(g);i.appendTo(g)}else{i.insertAfter(m);o.insertAfter(m)}if(!j){m.stop(true,true).hide().css({left:-n+"00%"});if(e.fadeOut){m.fadeIn(e.duration)}else{m.show()}}else{if(e.fadeOut){m.fadeOut(e.duration)}}setTimeout(function(){c(i,{left:(j?0:l)},e.duration,e.duration*(j?0:0.1),function(){h.trigger("effectEnd");i.remove();o.remove()});c(o,{left:(j?1:0)*b.width()*0.5},e.duration,e.duration*(j?0.1:0))},0)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container4").wowSlider({effect:"stack",prev:"",next:"",duration:8*100,delay:20*100,width:480,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:0,caption:false,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,onBeforeStep:0,images:0});