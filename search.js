$(document).ready(function(){
	
	var search = sessionStorage.getItem("searchValue");
	if (search != "gnome"){
		$(document).getElementById("#GnomeRow").style.display = "none";
	}
	
});
