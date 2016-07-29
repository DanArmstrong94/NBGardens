$(document).ready(function checkWish(){
	               if (localStorage.getItem("wGnomeTrue") === "true"){
                       var gnome = document.getElementById('WGnomeRow');
                       gnome.style.display = 'block';
                   }
				   else {
					   var gnome = document.getElementById("WGnomeRow");
					   gnome.style.display = 'none';
				   };
                   
                   if (localStorage.getItem("wWheelbarrowTrue") === "true"){
                       var wheelbarrow = document.getElementById('WWheelbarrowRow');
                       wheelbarrow.style.display = 'block';
                   }				   
				   else {
					   var wheelbarrow = document.getElementById("WWheelbarrowRow");
					   wheelbarrow.style.display = 'none';
				   };
                   
                   if (localStorage.getItem("wTableTrue") === "true"){
                       var table = document.getElementById('WTableRow');
                       table.style.display = 'block';                       
                   }
				   else {
                       var table = document.getElementById('WTableRow');
                       table.style.display = 'none';
				   };
	
	
});