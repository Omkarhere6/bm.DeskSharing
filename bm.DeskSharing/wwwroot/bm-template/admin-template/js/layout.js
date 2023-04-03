
$(function () {
	SetActiveLink();	
});
$(window).on('load', function () {
	//$(".se-pre-con").fadeOut("slow");
	$(".loader").fadeOut("slow");
	$("body").fadeIn("slow");
});
//------- make navigation link active-------//
function GetActiveLink(link) {
	// Get active link to sessionStorage
	sessionStorage.setItem('NavActive', link.id);
}
function SetActiveLink() {
	if (sessionStorage.getItem('NavActive') != null) {
		var NavLink = $('.sidebar').find('a');
		$(NavLink).removeClass('active');
		$("#" + sessionStorage.getItem('NavActive')).addClass('active');
	}
}