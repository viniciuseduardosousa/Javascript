const myTitle = document.getElementById('myTitle');

const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        'titel':'Seizoenen',
        'image':'img2/seasons.jpg'
    },
    {
        'titel':'lente',
        'image':'img2/spring.jpg'
    },
    {
        'titel':'zomer',
        'image':'img2/summer.jpg'
    },
    {
        'titel':'herfst',
        'image':'img2/autumn.jpg'
    },
    {
        'titel':'winter',
        'image':'img2/winter.jpg'
    }
];

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
}