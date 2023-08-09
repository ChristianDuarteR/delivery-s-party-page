function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function hoverEmail() {
  var x = document.getElementById("myEmail");
  var y = document.getElementById("myName");
  if (x.type == "password") {
    x.type = "text";
  } if (y.type == "password") {
    y.type = "text";
  }
}

function alertRegister() {
  Swal.fire({
    title: 'Oh oh!',
    text: 'Antes de pedir, por favor ingresa a la página.',
    icon: 'error',
    confirmButtonText: 'Entendido'
  })
}

//=======================script para pagina de restaurantes================================================
  const restaurantes = [
    { nombre: "McDonald's", calificacion: 4.5, distancia: 2.5 , precio: 3000 },
    { nombre: "El corral", calificacion: 3.8, distancia: 5.2, precio: 2000 },
    { nombre: "Sipote", calificacion: 4.2, distancia: 1.8, precio: 4000 },
    { nombre: "Qbano", calificacion: 4.1, distancia: 3.9, precio: 2500 },
    { nombre: "El Carnal", calificacion: 4.1, distancia: 3.4, precio: 3000 },
    { nombre: "Burger King", calificacion: 4.3, distancia: 3.9, precio: 3000 },
    { nombre: "Jeno's Pizza", calificacion: 4.0, distancia: 2.5, precio: 1800 },
    { nombre: "Domino's", calificacion: 4.5, distancia: 3.0, precio: 2700 },
];

const imagenes = [
  "imagenes/mcdonalds.png",
  "imagenes/elcorral.png",
  "imagenes/sipote.png",
  "imagenes/qbano.png",
  "imagenes/carnal.png",
  "imagenes/burgerking.png",
  "imagenes/jenos.png",
  "imagenes/dominos.png",
];

// Función para mostrar la imagen del restaurante al hacer clic
function mostrarImagenRestaurante(index) {
    const imagen = document.getElementById("imagenRestaurante");
    imagen.src = imagenes[index];
    imagen.style.display = "block";
}

// Función para ocultar la imagen del restaurante al hacer clic en la imagen
function ocultarImagenRestaurante() {
    const imagen = document.getElementById("imagenRestaurante");
    imagen.style.display = "none";
}

// Función para mostrar los restaurantes en la lista
function mostrarRestaurantes() {
    const listaRestaurantes = document.getElementById("restaurantesLista");
    listaRestaurantes.innerHTML = "";

    restaurantes.forEach((restaurante) => {
        const item = document.createElement("li");
        item.className = "restaurante-item";
        item.textContent = `Nombre: ${restaurante.nombre}, Calificación: ${restaurante.calificacion}, Distancia: ${restaurante.distancia} metros, Precio: $ ${restaurante.precio}`;
        listaRestaurantes.appendChild(item);
    });

    listaRestaurantes.querySelectorAll(".restaurante-item").forEach((item, index) => {
      item.addEventListener("click", () => mostrarImagenRestaurante(index));
    });
}

// Función para ordenar los restaurantes por la opción seleccionada
function ordenarRestaurantes() {
    const criterio = document.getElementById("ordenarPor").value;
    restaurantes.sort((a, b) => a[criterio] - b[criterio]);
    mostrarRestaurantes();
}

// Escuchar el evento de cambio en el select para ordenar los restaurantes
const selectOrdenar = document.getElementById("ordenarPor");
selectOrdenar.addEventListener("change", ordenarRestaurantes);

// Iniciar
mostrarRestaurantes();