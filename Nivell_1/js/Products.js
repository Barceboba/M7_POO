// Declaració clases
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
let dataBase = [];

//Events del DOM
document.getElementById('product-form').addEventListener('submit', function (e) {

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;


    console.log('Nom del producte: ' + name + '. Preu del producte: ' + price + ' €. Any de fabricació: ' + year + '.');
    console.log(new Product(name, price, year));

    
    const product = new Product(name, price, year);
    
    dataBase.push(product);
    console.log(dataBase);
    e.preventDefault();
});

