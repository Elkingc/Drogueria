const productos = [
    {
        categoria: 'Medicamentos', items: ['Paracetamol 500mg', 'Ibuprofeno 400mg',
            'Amoxicilina 500mg', 'Loratadina 10mg', 'Omeprazol 20mg',
            'Clorfenamina 4mg', 'Ácido fólico 1mg', 'Losartán 50mg', 'Salbutamol inhalador',
            'Metformina 850mg']
    },
    {
        categoria: 'Vitaminas', items: ['Vitamina C 1000mg', 'Multivitamínico Centrum',
            'Vitamina D3 2000 UI', 'Vitamina B12 1000mcg', 'Vitamina E 400 IU', 'Complejo B',
            'Omega 3 1000mg', 'Calcio + Vitamina D', 'Hierro 65mg', 'Magnesio 500mg']
    },
    {
        categoria: 'Higiene Personal', items: ['Jabón antibacterial', 'Pasta de dientes Colgate',
            'Enjuague bucal Listerine', 'Desodorante Nivea', 'Shampoo Head y Shoulders',
            'Crema corporal Dove', 'Gel antibacterial', 'Toallas sanitarias Always',
            'Pañuelos faciales Kleenex', 'Cepillo de dientes Oral-B']
    },
    {
        categoria: 'Cuidado de la Piel', items: ['Crema hidratante Nivea Soft',
            'Protector solar Neutrogena SPF 50', 'Serum de ácido hialurónico',
            'Crema antiarrugas Olay', 'Exfoliante facial St. Ives', 'Gel limpiador facial CeraVe',
            'Loción tónica Clinique', 'Mascarilla facial Garnier', 'Crema para manos Eucerin',
            'Labial hidratante EOS']
    }
];

let carrito = [];

function generarProductos() {
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(categoria => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const tituloCategoria = document.createElement('h3');
        tituloCategoria.textContent = categoria.categoria;

        const lista = document.createElement('ul');
        categoria.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            const botonCarrito = document.createElement('button');
            botonCarrito.textContent = 'Añadir al carrito';
            botonCarrito.onclick = function () {
                añadirAlCarrito(item);
            };

            li.appendChild(botonCarrito);
            lista.appendChild(li);
        });

        productCard.appendChild(tituloCategoria);
        productCard.appendChild(lista);
        productosContainer.appendChild(productCard);
    });
}

function añadirAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        const listaCarrito = document.createElement('ul');

        carrito.forEach((producto, indice) => {
            const li = document.createElement('li');
            li.textContent = producto;

            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.onclick = function () {
                eliminarDelCarrito(indice);
            };

            li.appendChild(botonEliminar);
            listaCarrito.appendChild(li);
        });

        carritoContainer.appendChild(listaCarrito);
    }
}

window.onload = function () {
    generarProductos();
    actualizarCarrito();
};
