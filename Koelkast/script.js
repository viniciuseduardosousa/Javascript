console.log("Script is geladen")
const groentevak = document.getElementById('fruit');
const fruitvak = document.getElementById('groente')
function ZetInFruitLa(fruit){
    console.log('fruitla')
    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = fruit; 
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}
function ZetInGroenteLa(groente){
    console.log('groentela');
    const nieuwElement = document.createElement('h2')
    nieuwElement.innerHTML = groente; 
    nieuwElement.className = 'blauw';
    groentevak.appendChild(nieuwElement);
}