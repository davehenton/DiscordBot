

 function getTime() {

	date = new Date();
	hours = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	console.log(hours.toString);
	var time = hours.toString +':'+ min.toString +':'+ sec.toString;
	
	
	return time;
};






