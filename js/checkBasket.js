$(document).ready(function checkBasket(){
	                   if (localStorage.getItem("bGnomeTrue") === "true"){
                       var gnome = document.getElementById('BGnomeRow');
                       gnome.style.display = 'block';
                   }
				   else {
					   var gnome = document.getElementById("BGnomeRow");
					   gnome.style.display = 'none';
				   };
                   
                   if (localStorage.getItem("bWheelbarrowTrue") === "true"){
                       var wheelbarrow = document.getElementById('BWheelbarrowRow');
                       wheelbarrow.style.display = 'block';
                   }				   
				   else {
					   var wheelbarrow = document.getElementById("BWheelbarrowRow");
					   wheelbarrow.style.display = 'none';
				   };
                   
                   if (localStorage.getItem("bTableTrue") === "true"){
                       var table = document.getElementById('BTableRow');
                       table.style.display = 'block';                       
                   }
				   else {
                       var table = document.getElementById('BTableRow');
                       table.style.display = 'none';
				   };
});