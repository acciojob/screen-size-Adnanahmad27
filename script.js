//your JS code here. If required.
window.addEventListener("resize" , getDimension);

getDimension();
const body = document.querySelector('body');
function getDimension(){
	let height = window.innerHeight;
	let width = window.innerWidth;

	body.innerText = `WIdth: ${width} and Height: ${height}`;
}