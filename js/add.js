function add(locitem, add){
	var str = "";
	str += locitem; 
	str +="True";
	localStorage.setItem(str, add);
}