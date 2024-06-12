const PRODUCTOS = [];

function agregarProducto() {
    const NOMBRE = document.getElementById('nombreProducto').value;
    const PRECIO = parseFloat(document.getElementById('precioProducto').value);
    const CANTIDAD = parseInt(document.getElementById('cantidadProducto').value);

    const PRODUCTO = {
        nombre: NOMBRE,
        precio: PRECIO,
        cantidad: CANTIDAD,
        obtenerCostoTotal: function() {
            return this.precio * this.cantidad;
        }
    };

    PRODUCTOS.push(PRODUCTO);

    mostrarProductos();
}

function mostrarProductos() {
    const LISTA_PRODUCTOS = document.getElementById('listaProductos');
    LISTA_PRODUCTOS.innerHTML = '';

    let costoTotal = 0;

    PRODUCTOS.forEach(PRODUCTO => {
        const ITEM_PRODUCTO = document.createElement('li');
        ITEM_PRODUCTO.textContent = `${PRODUCTO.nombre} - Precio: $${PRODUCTO.precio}, Cantidad: ${PRODUCTO.cantidad}, Costo Total: $${PRODUCTO.obtenerCostoTotal()}`;
        LISTA_PRODUCTOS.appendChild(ITEM_PRODUCTO);

        costoTotal += PRODUCTO.obtenerCostoTotal();
    });

    document.getElementById('costoTotal').textContent = costoTotal.toFixed(2);
}
