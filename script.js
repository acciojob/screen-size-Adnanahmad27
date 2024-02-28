//your JS code here. If required.
const h1 = document.querySelector('h1');
window.addEventListener("resize" , getDimension);

getDimension();

function getDimension(){
	let height = window.innerHeight;
	let width = window.innerWidth;
	h1.firstElementChild.innerText = `Width: ${width} and Height: ${height}`;
}