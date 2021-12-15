const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');

let paintings = [
"assets les 3/painting0.jpg",
"assets les 3/painting1.jpg",
"assets les 3/painting2.jpg",
"assets les 3/painting3.jpg",
"assets les 3/painting4.jpg",
"assets les 3/painting5.jpg"
];

let titles = [
"De schilderijen van van Gogh",
"De rode wijngaard",
"De sterrennacht",
"Sterrennacht boven de Rh�ne",
"Zonnebloemen" ,
"Boerderij in de Provence"
];

function Changeimage(index){
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];
}
