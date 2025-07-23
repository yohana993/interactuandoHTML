const contadorElemento = document.getElementById('total-items');
const contadorPrecio = document.getElementById('total-precio');
const btnagregarMElemento = document.getElementById('Boton1');
const btnagregarPElemento = document.getElementById('Boton2');
const btnagregarAElemento = document.getElementById('Boton3');
const btneliminarMElemento = document.getElementById('Buton1');
const btneliminarPElemento = document.getElementById('Buton2');
const btneliminarAElemento = document.getElementById('Buton3');
const btnVaciar = document.querySelector('button[type="reset"]');

const precioManzana = parseInt(document.getElementById('Precio1').textContent);
const precioPera = parseInt(document.getElementById('Precio2').textContent);
const precioAnon = parseInt(document.getElementById('Precio3').textContent);

let totalitems = 0;
let totalcarrito = 0;
let productosAgregados = [];


btnagregarMElemento.onclick = function() {
    totalitems++;
    totalcarrito += precioManzana;
    productosAgregados.push('Manzana');
    actualizarCarrito();
};

btnagregarPElemento.onclick = function() {
    totalitems++;
    totalcarrito += precioPera;
    productosAgregados.push('Pera');
    actualizarCarrito();
};

btnagregarAElemento.onclick = function() {
    totalitems++;
    totalcarrito += precioAnon;
    productosAgregados.push('Anon');
    actualizarCarrito();
};

btneliminarMElemento.onclick = function() {
    if (totalitems > 0 && totalcarrito >= precioManzana) {
        totalitems--;
        totalcarrito -= precioManzana;
        const index = productosAgregados.indexOf('Manzana');
        if (index !== -1) productosAgregados.splice(index, 1);
        actualizarCarrito();
    }
};

btneliminarPElemento.onclick = function() {
    if (totalitems > 0 && totalcarrito >= precioPera) {
        totalitems--;
        totalcarrito -= precioPera;
        const index = productosAgregados.indexOf('Pera');
        if (index !== -1) productosAgregados.splice(index, 1);
        actualizarCarrito();
    }
};

btneliminarAElemento.onclick = function() {
    if (totalitems > 0 && totalcarrito >= precioAnon) {
        totalitems--;
        totalcarrito -= precioAnon;
        const index = productosAgregados.indexOf('Anon');
        if (index !== -1) productosAgregados.splice(index, 1);
        actualizarCarrito();
    }
};

btnVaciar.onclick = function() {
    totalitems = 0;
    totalcarrito = 0;
    productosAgregados = [];
    actualizarCarrito();
    alert('Carrito vaciado');
};
function actualizarCarrito() {
    contadorElemento.textContent = totalitems;
    contadorPrecio.textContent = totalcarrito;
    if (totalcarrito > 50 && !envioGratisAplicado) {
        alert('¡Envío gratis aplicado!');
        envioGratisAplicado = true;
    }
    if (totalcarrito <=50){
        envioGratisAplicado = false;
    console.log('Productos en el carrito:', productosAgregados);
}
}
