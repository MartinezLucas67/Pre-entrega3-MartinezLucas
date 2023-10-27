// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    itemsCarrito.push({ nombre: nombreProducto, precio: precioProducto });
    localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const itemsCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaCarrito = document.getElementById('items-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0;

    listaCarrito.innerHTML = '';
    itemsCarrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalCarrito.textContent = total;
}

// Función para realizar la compra (borrar el carrito)
function realizarCompra() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
    alert("Su compra ha sido realizada con éxito");
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Mostrar el carrito
mostrarCarrito();