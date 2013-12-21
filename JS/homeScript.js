$(document).ready(function() {
		
		$(function(){
			
			$("#ProgressHistory").accordion({heightStyle: "content", collapsible: true, active: false});
		
		});
		
		mainImg() 
		createHistory();
		
});

function mainImg() {
	
	var currentDate = ProgressIMG[0];
	var currentImgHTML = "<img id='CurrentImg' src='ProgressImgs/Originals/" + currentDate + "'>";
	
	currentDate = currentDate.replace(".png", "");
	var currentDateHTML = "<p style='text-align:right;'>" + currentDate + "</p>";
	
	$("#IMGContainer").append(currentImgHTML);
	$("#CurrentProgress").append(currentDateHTML);
	
	document.getElementById("MainOriginalSourceLink").href = "ProgressImgs/Originals/" + currentDate + ".png";
	document.getElementById("MainOriginalSourceLink").target = "_blank";
	
}

function createHistory() {
	
	var listHTML = "";
	var listDate = "";
	
	for (var counter = 1; counter < ProgressIMG.length; counter++){
		
		listDate = ProgressIMG[counter].replace(".png", "");
			
		listHTML += "<div id='ListDiv'>";
		listHTML += "<img name='" + listDate + "' onclick='popUp(name);' id='ListImg' src='ProgressImgs/Thumbnails/";
		listHTML += ProgressIMG[counter];
		listHTML += "'></img><p id='ListDate'>";
		listHTML += listDate;
		listHTML += "</p></div>";
	}
			
	$("#ProgressList").append(listHTML);
		
}

function popUp(name) {
	
	document.getElementById("ImgPopUp").style.display = "inline-block";
	
	document.getElementById("OriginalSourceLink").href = "ProgressImgs/Originals/" + name + ".png";
	document.getElementById("OriginalSourceLink").target = "_blank";
	
	document.getElementById("MainImg").src = "ProgressImgs/Originals/" + name + ".png";
	
	var img = document.getElementById("MainImg");
	
	var browserWidth = window.innerWidth;
	
	if (browserWidth >= 900){
		var width = browserWidth - 900;
				
		var setLeft = (width/browserWidth) * 100;
				
		setLeft /= 2;

		document.getElementById("ImgPopUp").style.left = setLeft + "%";		
	} else document.getElementById("ImgPopUp").style.left = "2%";	
	
	img.onload = function () {
		var height = img.clientHeight;
	
		document.getElementById("ImgPopUp").style.height = (height + 80) + "px";
	}	
}

function closePopUp() {
	
	document.getElementById("ImgPopUp").style.display = "none";
	
}











