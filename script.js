//your JS code here. If required.
const body = document.querySelector('body');
window.addEventListener("resize" , getDimension);

getDimension();

function getDimension(){
	let height = window.innerHeight;
	let width = window.innerWidth;

	body.innerText = `WIdth: ${width} and Height: ${height}`;
}