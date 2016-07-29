$(document).ready(function checkSearch(){
                   if (sessionStorage.getItem("searchValue") !== "Gnome"){
                       var gnome = document.getElementById('GnomeRow');
                       gnome.style.display = 'none';
                   };
                   
                   if (sessionStorage.getItem("searchValue") !== "Wheelbarrow"){
                       var wheelbarrow = document.getElementById('WheelbarrowRow');
                       wheelbarrow.style.display = 'none';
                   };
                   
                   if (sessionStorage.getItem("searchValue") !== "Table"){
                       var table = document.getElementById('TableRow');
                       table.style.display = 'none';                       
                   };
	
});