var i = 100
function no_contact(){
	var fade = setInterval(()=>{
		i -= 1
		document.getElementById('contact').style.opacity = i / 100
		if (i < 0){
			document.getElementById('contact').remove();
			clearInterval(fade);
		}		
	},5)
}