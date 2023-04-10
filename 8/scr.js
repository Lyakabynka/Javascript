var canvas = document.querySelector("#drCanvas");
var ctx = canvas.getContext('2d');
var shapeSelect = document.querySelector("#shape");
var colorSelect = document.querySelector("#color");
var clearButton = document.querySelector("#clearButton");
var range = document.querySelector("#picker");
range.min = 1;
range.max = 100;
range.step = 1;
let drawing = false;
let startX, startY, radiusLast, widthLast, heightLast, shape;
let rectanglesList = [];
let circlesList = [];

function getCursorPosition(event){
	startX = event.clientX - canvas.offsetLeft;
	startY = event.clientY - canvas.offsetTop;
}

function setSelectedOptions(){
	ctx.strokeStyle = colorSelect;
}

function drawShape(startX, startY, endX, endY){
	shape = shapeSelect.value;
	if(shape === "circle"){
		ctx.fillStyle = colorSelect.value;
		radiusLast = Math.sqrt(Math.pow(endX-startX,2)+Math.sqrt(Math.pow(endY-startY,2)));
		ctx.beginPath();
		ctx.arc(startX, startY, radiusLast, 0, Math.PI*2);
		ctx.fill();
	}
	else if(shape === 'rectangle'){
		ctx.beginPath();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		circlesList.forEach(function(elem) {
			ctx.beginPath();
			ctx.fillStyle = elem.color;
			ctx.arc(elem.startX, elem.startY, elem.radius, 0, elem.endAngle);
			ctx.fill();
		});
		rectanglesList.forEach(function(elem) {
			ctx.fillStyle = elem.color;
			ctx.fillRect(elem.startX, elem.startY, elem.width, elem.height);
		});
		ctx.fillStyle = colorSelect.value;
		widthLast = endX-startX;
		heightLast = endY-startY;
		ctx.fillRect(startX, startY, widthLast, heightLast);
	}
	else if(shape === 'paint'){
		ctx.fillStyle = colorSelect.value;
		ctx.beginPath();
		ctx.arc(endX, endY, range.value, 0, Math.PI*2);
		ctx.fill();
	}
	else if(shape === 'remover'){
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(endX, endY, range.value, 0, Math.PI*2);
		ctx.fill();
	}
}

clearButton.addEventListener('click',(event) => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	rectanglesList = [];
	circlesList = [];
})
canvas.addEventListener('mousedown', (event) => {
	drawing = true;
	getCursorPosition(event);
})
canvas.addEventListener('mouseup', (event) => {
	drawing = false;
	if(shape === "circle"){
		saveCircle(startX, startY, radiusLast, Math.PI*2, colorSelect.value);
	}
	else if(shape === 'rectangle'){
		saveRectangle(startX, startY, widthLast, heightLast, colorSelect.value);
	}
})
canvas.addEventListener('mousemove', (event) => {
	if(!drawing) return;
	drawShape(startX, startY, event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
})

function saveRectangle(startX, startY, width, height, color) {
	var line = {
		"startX": startX,
		"startY": startY,
		"width": width,
		"height": height,
		"color": color
	}
	rectanglesList.push(line);
}
function saveCircle(startX, startY, radius, endAngle, color) {
	var line = {
		"startX": startX,
		"startY": startY,
		"radius": radius,
		"endAngle": endAngle,
		"color": color
	}
	circlesList.push(line);
}