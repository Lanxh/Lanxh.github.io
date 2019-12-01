$(function(){
  $.scrollify({
    section: ".slide",
		interstitialSection : ".footer",
    easeing: "easeOutExpo",
    scrollSpeed: 1100,
		offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});

/** Section links **/

$("#start-nav").click(function(){
	$.scrollify.move(0);
});

$("#gamedev").click(function(){
	$.scrollify.move(1);
});

/*$("#webdev").click(function(){
	$.scrollify.move(2);
});

$("#archeo").click(function(){
	$.scrollify.move(3);
});

$("#archeo-nav").click(function(){
	$.scrollify.move(3);
});*/
