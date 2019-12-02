$(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    selectedClass = $(this).attr("data-rel");
		if (selectedClass == "all") {
			$("#gallery").removeClass('d-flex justify-content-center align-items-center').addClass('gallery');
			$('.1, .2, .3, .4').removeClass('w-50 mx-2');
			var slideHeight = $("#slide3").height();
			if (slideHeight >= 1000) {
				$("#myworks").removeClass('align-items-end').addClass('align-items-center');
			} else {
				$("#myworks").removeClass('align-items-center').addClass('align-items-end');
			}
		} else {
			$("#gallery").removeClass('gallery').addClass('d-flex justify-content-center align-items-center');
			$('.1, .2, .3, .4').addClass('w-50 mx-2');
			$("#myworks").removeClass('align-items-end').addClass('align-items-center');
		}
    $("#gallery").fadeTo(100, 0.1);
    $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('animation');
      $("#gallery").fadeTo(300, 1);
    }, 300);
  });
});

$(document).ready(function(){
	var slideHeight = $("#slide3").height();
	if (slideHeight >= 1000) {
		$("#myworks").removeClass('align-items-end').addClass('align-items-center');
	} else {
		$("#myworks").removeClass('align-items-center').addClass('align-items-end');
	}
});
