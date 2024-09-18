// option-1 directly set on the html elements
// <button onclick="console.log(58)">Another Love</button> No==

// option-2
// Importent:[we will use this]
// <button onclick="simpleJs()">Simple.js Red</button>
function simpleJs() {
    document.body.style.backgroundColor = 'red';
}
// option-3
const makePurple = document.getElementById("make-purple");
makePurple.onclick = makePurpleButton;

function makePurpleButton() {
    document.body.style.backgroundColor = 'purple';
}
// option-3 Another
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}
// option-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option-4 Another
const grayButton = document.getElementById('make-gray');
grayButton.addEventListener('click', function makeGray() {
    document.body.style.backgroundColor = 'gray';
})
// Option-4 final
// Importent: [we will use this sometimes]
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';

})
