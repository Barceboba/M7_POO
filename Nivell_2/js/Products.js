// Declaració clases
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div div class="card text-center mb-4" >
                <div class="card-body">
                    <strong>Nom del producte</strong>: ${product.name}
                    <strong>Preu del producte</strong>: ${product.price}
                    <strong>Any del producte</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                </div>
        </div>
            `;
        productList.appendChild(element);
        this.resetForm();
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage() {

    }
}
//Events del DOM
document.getElementById('product-form').addEventListener('submit', function (e) {

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //Nou objecte
    const product = new Product(name, price, year);
    const ui = new UI();
    ui.addProduct(product);
    ui.resetForm();
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});

