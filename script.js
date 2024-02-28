//your JS code here. If required.
const sizeInfo = document.querySelector('#sizeInfo');
window.addEventListener("resize" , getDimension);

getDimension();

function getDimension(){
	let height = window.innerHeight;
	let width = window.innerWidth;
	sizeInfo.innerText = `Width: ${width} and Height: ${height}`;
}