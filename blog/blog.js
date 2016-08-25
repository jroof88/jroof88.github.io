var OZ = new Array(8); /* Array of photos from Australia */
	OZ[0] = "blog/img/OZ1.jpg";
	OZ[1] = "blog/img/OZ2.jpg";
	OZ[2] = "blog/img/OZ3.jpg";
	OZ[3] = "blog/img/OZ4.jpg";
	OZ[4] = "blog/img/OZ5.jpg";
	OZ[5] = "blog/img/OZ6.jpg";
	OZ[6] = "blog/img/OZ7.jpg";
	OZ[7] = "blog/img/OZ8.jpg";
var NZ = new Array(8); /* Array of photos from New Zealand */
	NZ[0] = "blog/img/NZ1.jpg";
	NZ[1] = "blog/img/NZ2.jpg";
	NZ[2] = "blog/img/NZ3.jpg";
	NZ[3] = "blog/img/NZ4.jpg";
	NZ[4] = "blog/img/NZ5.jpg";
	NZ[5] = "blog/img/NZ6.jpg";
	NZ[6] = "blog/img/NZ7.jpg";
	NZ[7] = "blog/img/NZ8.jpg";
var Thai = new Array(8); /* Array of photos from Thailand */
	Thai[0] = "blog/img/Thai1.jpg";
	Thai[1] = "blog/img/Thai2.jpg";
	Thai[2] = "blog/img/Thai3.jpg";
	Thai[3] = "blog/img/Thai4.jpg";
	Thai[4] = "blog/img/Thai5.jpg";
	Thai[5] = "blog/img/Thai6.jpg";
	Thai[6] = "blog/img/Thai7.jpg";
	Thai[7] = "blog/img/Thai8.jpg";
var Cam = new Array(8); /* Array of photos from Cambodia */
	Cam[0] = "blog/img/Cam1.jpg";
	Cam[1] = "blog/img/Cam2.jpg";
	Cam[2] = "blog/img/Cam3.jpg";
	Cam[3] = "blog/img/Cam4.jpg";
	Cam[4] = "blog/img/Cam5.jpg";
	Cam[5] = "blog/img/Cam6.jpg";
	Cam[6] = "blog/img/Cam7.jpg";
	Cam[7] = "blog/img/Cam8.jpg";
var Nam = new Array(8); /* Array of photos from Vietnam */
	Nam[0] = "blog/img/Nam1.jpg";
	Nam[1] = "blog/img/Nam2.jpg";
	Nam[2] = "blog/img/Nam3.jpg";
	Nam[3] = "blog/img/Nam4.jpg";
	Nam[4] = "blog/img/Nam5.jpg";
	Nam[5] = "blog/img/Nam6.jpg";
	Nam[6] = "blog/img/Nam7.jpg";
	Nam[7] = "blog/img/Nam8.jpg";
	
var x = new Array(); 

var count = 0; 

function load(ID){
	x.length = 0;
	x = ID.slice();
	count = 0;
	display(x[count]);
	if(ID == OZ){
		document.getElementById("OZ").style.color = "white";
		document.getElementById("OZ").style.backgroundColor = "#002080";
		
		document.getElementById("NZ").style.color = "#002080";
		document.getElementById("NZ").style.backgroundColor = "white";
		document.getElementById("Thai").style.color = "#002080";
		document.getElementById("Thai").style.backgroundColor = "white";
		document.getElementById("Cam").style.color = "#002080";
		document.getElementById("Cam").style.backgroundColor = "white";
		document.getElementById("Nam").style.color = "#002080";
		document.getElementById("Nam").style.backgroundColor = "white";
	}
	else if(ID == NZ){
		document.getElementById("NZ").style.color = "white";
		document.getElementById("NZ").style.backgroundColor = "#002080";
		
		document.getElementById("OZ").style.color = "#002080";
		document.getElementById("OZ").style.backgroundColor = "white";
		document.getElementById("Thai").style.color = "#002080";
		document.getElementById("Thai").style.backgroundColor = "white";
		document.getElementById("Cam").style.color = "#002080";
		document.getElementById("Cam").style.backgroundColor = "white";
		document.getElementById("Nam").style.color = "#002080";
		document.getElementById("Nam").style.backgroundColor = "white";
	}
	else if(ID == Thai){
		document.getElementById("Thai").style.color = "white";
		document.getElementById("Thai").style.backgroundColor = "#002080";
		
		document.getElementById("OZ").style.color = "#002080";
		document.getElementById("OZ").style.backgroundColor = "white";
		document.getElementById("NZ").style.color = "#002080";
		document.getElementById("NZ").style.backgroundColor = "white";
		document.getElementById("Cam").style.color = "#002080";
		document.getElementById("Cam").style.backgroundColor = "white";
		document.getElementById("Nam").style.color = "#002080";
		document.getElementById("Nam").style.backgroundColor = "white";
	}
	else if(ID == Cam){
		document.getElementById("Cam").style.color = "white";
		document.getElementById("Cam").style.backgroundColor = "#002080";
		
		document.getElementById("OZ").style.color = "#002080";
		document.getElementById("OZ").style.backgroundColor = "white";
		document.getElementById("NZ").style.color = "#002080";
		document.getElementById("NZ").style.backgroundColor = "white";
		document.getElementById("Thai").style.color = "#002080";
		document.getElementById("Thai").style.backgroundColor = "white";
		document.getElementById("Nam").style.color = "#002080";
		document.getElementById("Nam").style.backgroundColor = "white";
	}
	else if(ID == Nam){
		document.getElementById("Nam").style.color = "white";
		document.getElementById("Nam").style.backgroundColor = "#002080";
		
		document.getElementById("OZ").style.color = "#002080";
		document.getElementById("OZ").style.backgroundColor = "white";
		document.getElementById("NZ").style.color = "#002080";
		document.getElementById("NZ").style.backgroundColor = "white";
		document.getElementById("Thai").style.color = "#002080";
		document.getElementById("Thai").style.backgroundColor = "white";
		document.getElementById("Cam").style.color = "#002080";
		document.getElementById("Cam").style.backgroundColor = "white";
	}
	
}

function display(y) {
	document.getElementById("pic").src = y;
};


function r() { 
	if(count == 7) { 
		count = 0;
		display(x[count]);
	}
	else { 
	 	count++;
		display(x[count]);
	}
}

function l() { 
	if(count == 0) { 
		count = 7;
		display(x[count]);
	}
	else {
		count--;
		display(x[count]);
	}
}

function registerHandlers() { 
	document.getElementById("rightArrow").addEventListener("click", r);
	document.getElementById("leftArrow").addEventListener("click", l);
}


