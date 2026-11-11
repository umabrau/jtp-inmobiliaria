const propiedades = [
    // =========================
    // PROPIEDADES EN VENTA
    // =========================
    {
        titulo: "Casa en venta",
        operacion: "venta",
        tipo: "casa",
        ubicacion: "Lomas de City Bell, City Bell",
        direccion: "148 N°600 e/ 472 y 476",
        precio: "USD 550.000",
        ambientes: 3,
        caracteristicas: ["Pileta", "Parrilla"],
        dormitorios: 3,
        superficie: "310 m² construidos",
        imagen: "imagenes/casa.jpg",
        fotos: [
            "imagenes/casa.jpg",
            "imagenes/baño.jpg",
            "imagenes/puerta.jpg",
            "imagenes/pileta.jpg",
            "imagenes/comedor.jpg"
        ],
        descripcion: "Casa de estilo moderno en el club de campo Los de City Bell, lote 76. Desarrollada en una planta, cuenta con amplio living comedor, cocina semiintegrada con muebles bajo y sobre mesada y barra desayunadora, lavadero, toilette y tres dormitorios, uno en suite con vestidor y otro con placard. Tiene galería con parrilla, mesada con bacha, baño exterior completo, cuarto de guardado, pileta y amplio jardín. Cuenta con calefacción central por radiadores, aire acondicionado split en todos los ambientes, carpintería de aluminio con DVH, cortinas roller y termotanque de alta recuperación."
    },
    {
        titulo: "Duplex en venta",
        operacion: "venta",
        tipo: "duplex",
        ubicacion: "Manuel B. Gonnet, La Plata",
        precio: "USD 160.000",
        ambientes: 3,
        caracteristicas: ["Pileta", "Parrilla", "Cochera"],
        dormitorios: 2,
        superficie: "",
        imagen: "imagenes/duplex.jpg",
        fotos: ["imagenes/duplex.jpg"],
        descripcion: "Dúplex en venta en Manuel B. Gonnet, La Plata. Cuenta con 3 ambientes, pileta, parrilla y cochera."
    },
    {
        titulo: "Departamento en venta",
        operacion: "venta",
        tipo: "departamento",
        ubicacion: "Casco urbano, La Plata",
        precio: "USD 110.000",
        ambientes: 2,
        caracteristicas: ["Cochera"],
        dormitorios: 1,
        superficie: "",
        imagen: "imagenes/departamento.jpg",
        fotos: ["imagenes/departamento.jpg"],
        descripcion: "Departamento en venta en el casco urbano de La Plata. Cuenta con 2 ambientes y cochera."
    },

    // =========================
    // PROPIEDADES EN ALQUILER
    // =========================
    {
        titulo: "Departamento en alquiler - calle 54",
        operacion: "alquiler",
        tipo: "departamento",
        ubicacion: "Casco urbano, La Plata",
        direccion: "54 N°428 e/ 3 y 4",
        precio: "$1.200.000 por mes",
        expensas: "$160.000",
        ambientes: 3,
        caracteristicas: [
            "2 dormitorios",
            "70 m²",
            "Cochera semicubierta",
            "Balcón con parrilla",
            "Calefacción por losa radiante",
            "SUM con terraza"
        ],
        dormitorios: 2,
        superficie: "70 m²",
        imagen: "imagenes/depto1.jpg",
        fotos: [
            "imagenes/depto1.jpg",
            "imagenes/depto2.jpg",
            "imagenes/depto3.jpg",
            "imagenes/depto4.jpg"
        ],
        descripcion: "Semipiso contrafrente en quinto piso, departamento B, ubicado a metros del Pasaje Rodrigo y del Bosque de La Plata. Cuenta con dos dormitorios, uno con placard, placard en el hall distribuidor, amplio living comedor con cortinas, cocina con muebles bajo y sobre mesada, baño completo, toilette y balcón pasante con parrilla. Tiene calefacción central por losa radiante, preinstalación para aire acondicionado y portero con cámara. El último piso ofrece un SUM con parrilla, baño y terraza descubierta. Contrato por 24 meses con ajuste cuatrimestral. Expensas ordinarias y tasa municipal a cargo del inquilino."
    },
    {
        titulo: "Dúplex en alquiler",
        operacion: "alquiler",
        tipo: "duplex",
        ubicacion: "Entre Caminos, Manuel B. Gonnet",
        direccion: "489 N°1879 e/ Camino Centenario y 14",
        precio: "$1.050.000 por mes",
        expensas: "$70.000",
        absa: "$20.000",
        ambientes: 3,
        caracteristicas: [
            "2 dormitorios",
            "Cochera descubierta",
            "Patio y jardín",
            "Parrilla",
            "Complejo cerrado",
            "Calefacción por radiadores"
        ],
        dormitorios: 2,
        superficie: "",
        imagen: "imagenes/duplex1.jpg",
        fotos: [
            "imagenes/duplex1.jpg",
            "imagenes/duplex2.jpg",
            "imagenes/duplex3.jpg"
        ],
        descripcion: "Unidad funcional 07 en un complejo cerrado de dúplex con acceso por portón automatizado. Se desarrolla en dos plantas. En planta baja cuenta con amplio living comedor, cocina semiintegrada, toilette, patio, cochera descubierta con parrilla y pequeño jardín. En planta alta tiene dos amplios dormitorios con placard y baño completo con antebaño. Calefacción central por radiadores."
    },
    {
        titulo: "Departamento en alquiler - calle 43",
        operacion: "alquiler",
        tipo: "departamento",
        ubicacion: "Casco urbano, La Plata",
        direccion: "43 N°966 e/ 14 y 15",
        precio: "$900.000 por mes",
        expensas: "$210.000",
        ambientes: 3,
        caracteristicas: [
            "2 dormitorios",
            "75 m²",
            "Cochera",
            "Calefacción por radiadores",
            "3 aires acondicionados",
            "Espacio recreativo en terraza"
        ],
        dormitorios: 2,
        superficie: "75 m²",
        imagen: "imagenes/departamento1.jpg",
        fotos: [
            "imagenes/departamento1.jpg",
            "imagenes/departamento2.jpg",
            "imagenes/departamento3.jpg"
        ],
        descripcion: "Departamento en segundo piso al frente, con dos dormitorios, ambos con placard, living comedor con estantes y aparadores empotrados, cocina con muebles bajo y sobre mesada, baño completo y cochera. Cuenta con calefacción central por radiadores, tres equipos de aire acondicionado frío/calor y espacio de recreación en la terraza del edificio. Contrato por 24 meses con ajuste cuatrimestral por índice del BCRA. La tasa municipal mensual, el seguro contra incendio y los gastos de instalaciones y artefactos están a cargo del inquilino."
    },
    {
        titulo: "Local comercial en alquiler",
        operacion: "alquiler",
        tipo: "local",
        ubicacion: "Entre Caminos, City Bell",
        direccion: "Plaza Belgrano N°117 e/ Cantilo y 14B",
        precio: "$1.300.000 por mes",
        expensas: "$20.000",
        absa: "$40.000",
        tasaMunicipal: "$50.000",
        ambientes: null,
        caracteristicas: [
            "70 m²",
            "Local comercial",
            "Complejo de cuatro locales"
        ],
        dormitorios: null,
        superficie: "70 m²",
        imagen: "imagenes/local1.jpg",
        fotos: [
            "imagenes/local1.jpg",
            "imagenes/local2.jpg",
            "imagenes/local3.jpg"
        ],
        descripcion: "Local comercial número 3, ubicado en un complejo de cuatro locales en Plaza Belgrano, City Bell. Contrato por 24 meses con ajuste cuatrimestral por índice del BCRA. La descripción informa tasa municipal de $50.000, ABSA de $40.000 y expensas ordinarias de $20.000; confirmar periodicidad de estos importes."
    }
];
const listaAlquileres = document.getElementById("listaAlquileres");
const listaVentas = document.getElementById("listaVentas");
// Detectar si estamos en la página de detalle
const contenidoDetalle = document.getElementById("contenidoDetalle");

// Variables para controlar la galería de fotos
let fotosDetalleActuales = [];
let indiceFotoActual = 0;

// Cambiar la foto al tocar las flechas
function cambiarFotoDetalle(direccion) {
    if (fotosDetalleActuales.length === 0) return;

    indiceFotoActual += direccion;

    if (indiceFotoActual >= fotosDetalleActuales.length) {
        indiceFotoActual = 0;
    }

    if (indiceFotoActual < 0) {
        indiceFotoActual = fotosDetalleActuales.length - 1;
    }

    document.getElementById("fotoPrincipalDetalle").src =
        fotosDetalleActuales[indiceFotoActual];

    document.getElementById("contadorFotos").textContent =
        `${indiceFotoActual + 1} / ${fotosDetalleActuales.length}`;
}

// Mostrar una propiedad individual
function mostrarDetallePropiedad() {
    if (!contenidoDetalle) return;

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    const propiedad = propiedades[Number(id)];

    if (id === null || !propiedad) {
        contenidoDetalle.innerHTML = `
            <h2>Propiedad no encontrada</h2>
            <p>Volvé al inicio para consultar las propiedades disponibles.</p>
        `;
        return;
    }

    fotosDetalleActuales = propiedad.fotos || [propiedad.imagen];
    indiceFotoActual = 0;

    const esAlquiler = propiedad.operacion === "alquiler";

    contenidoDetalle.innerHTML = `
        <h1 class="titulo-detalle">${propiedad.titulo}</h1>
        <p class="ubicacion-detalle">${propiedad.ubicacion}</p>

        <div class="detalle-superior">

            <div class="galeria-detalle">

                <button class="flecha-galeria anterior" id="fotoAnterior">
                    &#10094;
                </button>

                <img
                    id="fotoPrincipalDetalle"
                    src="${fotosDetalleActuales[0]}"
                    alt="${propiedad.titulo}"
                >

                <button class="flecha-galeria siguiente" id="fotoSiguiente">
                    &#10095;
                </button>

                <span id="contadorFotos" class="contador-fotos">
                    1 / ${fotosDetalleActuales.length}
                </span>

            </div>

            <div class="precio-detalle">

                <h2>${esAlquiler ? "Precio de alquiler" : "Precio de venta"}</h2>

                <p class="precio">${propiedad.precio}</p>

                ${esAlquiler && propiedad.expensas ? `
                    <p class="gasto-detalle">
                        <strong>Expensas:</strong> ${propiedad.expensas}
                    </p>
                ` : ""}

                ${esAlquiler && propiedad.absa ? `
                    <p class="gasto-detalle">
                        <strong>ABSA:</strong> ${propiedad.absa}
                    </p>
                ` : ""}

                ${esAlquiler && propiedad.tasaMunicipal ? `
                    <p class="gasto-detalle">
                        <strong>Tasa municipal:</strong> ${propiedad.tasaMunicipal}
                    </p>
                ` : ""}

            </div>

        </div>

        <section class="informacion-detalle">

            <h2>Características de la propiedad</h2>

            <div class="datos-detalle">
                <p><strong>Ambientes:</strong> ${propiedad.ambientes ?? "Consultar"}</p>
                <p><strong>Dormitorios:</strong> ${propiedad.dormitorios ?? "Consultar"}</p>
                <p><strong>Superficie:</strong> ${propiedad.superficie || "Consultar"}</p>
            </div>

            <p>
                <strong>Características:</strong>
                ${(propiedad.caracteristicas || []).join(" · ") || "Consultar"}
            </p>

            <h2>Descripción</h2>

            <p>${propiedad.descripcion || "Consultanos para conocer más detalles."}</p>

        </section>
    `;

    document.getElementById("fotoAnterior").addEventListener("click", () => {
        cambiarFotoDetalle(-1);
    });

    document.getElementById("fotoSiguiente").addEventListener("click", () => {
        cambiarFotoDetalle(1);
    });
}

mostrarDetallePropiedad();
const formulario = document.getElementById("formularioBusqueda");
// Recuperar favoritos guardados
let favoritos = JSON.parse(localStorage.getItem("favoritosJTP")) || [];

function guardarFavoritos() {
    localStorage.setItem("favoritosJTP", JSON.stringify(favoritos));
}

function alternarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(function(favorito) {
            return favorito !== id;
        });
    } else {
        favoritos.push(id);
    }

    guardarFavoritos();
}

// Mostrar las propiedades favoritas
function mostrarFavoritos() {
    const listaFavoritos = document.getElementById("listaFavoritos");

    if (!listaFavoritos) return;

    const propiedadesFavoritas = propiedades.filter(function(propiedad) {
        return favoritos.includes(propiedad.titulo);
    });

    listaFavoritos.innerHTML = "";

    if (propiedadesFavoritas.length === 0) {
        listaFavoritos.innerHTML = `
            <p class="mensaje-vacio">
                Todavía no agregaste propiedades a favoritos.
            </p>
        `;
        return;
    }

    propiedadesFavoritas.forEach(function(propiedad) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-propiedad";
        tarjeta.style.cursor = "pointer";

tarjeta.addEventListener("click", function() {
    const id = propiedades.indexOf(propiedad);
    window.location.href = "detalle.html?id=" + id;
});

        tarjeta.innerHTML = `
            <div class="imagen-propiedad">
                <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
            </div>
            <div class="contenido-tarjeta">
                <p class="etiqueta">${propiedad.operacion}</p>
                <h3>${propiedad.titulo}</h3>
                <p>${propiedad.ubicacion}</p>
                <p>${propiedad.ambientes > 0
    ? propiedad.ambientes + " ambientes"
    : "Terreno"}</p>

<p>${propiedad.caracteristicas
    ? propiedad.caracteristicas.join(" · ")
    : ""}</p>

<p class="precio">${propiedad.precio}</p>
                <button class="quitar-favorito">Quitar de favoritos ♥</button>
            </div>
        `;

        tarjeta.querySelector(".quitar-favorito").addEventListener("click", function(evento) {
    evento.stopPropagation();

    alternarFavorito(propiedad.titulo);
    mostrarFavoritos();
    mostrarPropiedades(propiedades);
});

        listaFavoritos.appendChild(tarjeta);
    });
}

// Mostrar las propiedades principales
// Mostrar las propiedades en las filas de alquiler y venta
function mostrarPropiedades(resultados) {
const listaAlquileres = document.getElementById("listaAlquileres");
const listaVentas = document.getElementById("listaVentas");

if (!listaAlquileres || !listaVentas) return;

function crearTarjetas(lista, propiedadesMostrar) {
    lista.innerHTML = "";

    propiedadesMostrar.forEach(function(propiedad) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-propiedad";
        tarjeta.style.cursor = "pointer";

        tarjeta.addEventListener("click", function() {
            const id = propiedades.indexOf(propiedad);
            window.location.href = "detalle.html?id=" + id;
        });

        const estaEnFavoritos = favoritos.includes(propiedad.titulo);

        tarjeta.innerHTML = `
            <div class="imagen-propiedad">
                <img src="${propiedad.imagen}" alt="${propiedad.titulo}">

                <button
                    class="boton-favorito ${estaEnFavoritos ? "favorito-activo" : ""}"
                    aria-label="${estaEnFavoritos ? "Quitar de favoritos" : "Agregar a favoritos"}"
                    title="${estaEnFavoritos ? "Quitar de favoritos" : "Agregar a favoritos"}"
                >
                    ${estaEnFavoritos ? "♥" : "♡"}
                </button>
            </div>

            <div class="contenido-tarjeta">
                <p class="etiqueta">${propiedad.operacion}</p>
                <h3>${propiedad.titulo}</h3>
                <p>${propiedad.ubicacion}</p>
                <p>${propiedad.ambientes > 0
                    ? propiedad.ambientes + " ambientes"
                    : "Terreno"}</p>
                <p>${propiedad.caracteristicas
                    ? propiedad.caracteristicas.join(" · ")
                    : ""}</p>
                <p class="precio">${propiedad.precio}</p>
            </div>
        `;

        tarjeta.querySelector(".boton-favorito")
            .addEventListener("click", function(evento) {
                evento.stopPropagation();
                alternarFavorito(propiedad.titulo);
                mostrarPropiedades(resultados);
                mostrarFavoritos();
            });

        lista.appendChild(tarjeta);
    });

    if (propiedadesMostrar.length === 0) {
        lista.innerHTML = '<p class="mensaje-vacio">Todavía no hay propiedades en esta sección.</p>';
    }
}

const alquileres = resultados.filter(function(propiedad) {
    return propiedad.operacion.toLowerCase() === "alquiler";
});

const ventas = resultados.filter(function(propiedad) {
    return propiedad.operacion.toLowerCase() === "venta";
});

crearTarjetas(listaAlquileres, alquileres);
crearTarjetas(listaVentas, ventas);

}

// Buscador de propiedades
if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const operacion = document.getElementById("operacion").value;
        const tipo = document.getElementById("tipo").value;
        const ubicacion = document.getElementById("ubicacion").value.trim().toLowerCase();

        const resultados = propiedades.filter(function(propiedad) {
            return (operacion === "todas" || propiedad.operacion === operacion)
                && (tipo === "todos" || propiedad.tipo === tipo)
                && propiedad.ubicacion.toLowerCase().includes(ubicacion);
        });

        mostrarPropiedades(resultados);

        const seccionPropiedades = document.getElementById("propiedades");
        if (seccionPropiedades) {
            seccionPropiedades.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Mostrar las propiedades del inicio
mostrarPropiedades(propiedades);

// Mostrar los favoritos
mostrarFavoritos();
// Abrir ventana de contacto
function abrirContacto() {
    document.getElementById("ventanaContacto").classList.add("activo");
}

// Cerrar ventana de contacto
function cerrarContacto() {
    document.getElementById("ventanaContacto").classList.remove("activo");
}
