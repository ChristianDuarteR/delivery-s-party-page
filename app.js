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
    { nombre: "McDonald's", calificacion: 4.5, distancia: 250 , precio: 3000 },
    { nombre: "El corral", calificacion: 3.8, distancia: 520, precio: 2000 },
    { nombre: "Sipote", calificacion: 4.2, distancia: 180, precio: 4000 },
    { nombre: "Qbano", calificacion: 4.1, distancia: 390, precio: 2500 },
    { nombre: "El Carnal", calificacion: 4.1, distancia: 340, precio: 3000 },
    { nombre: "Burger King", calificacion: 4.3, distancia: 390, precio: 3000 },
    { nombre: "Jeno's Pizza", calificacion: 4.0, distancia: 250, precio: 1800 },
    { nombre: "Domino's", calificacion: 4.5, distancia: 300, precio: 2700 },
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

function mostrarDetallesRestaurante(index) {
  const imagen = document.getElementById("imagenRestaurante");
  const detalles = restaurantes[index];

  imagen.src = imagenes[index];
  imagen.style.display = "block";

  const detallesHTML = `
      <p class="texto"><strong></strong> ${detalles.nombre}</p>
      <div class="detalles-calificacion">
        <div class="estrella">
          <img src=imagenes/estrella.png alt=estrella-calificatoria>
          <span>${detalles.calificacion}</span>
        </div>
      </div>
      <p class="texto"><strong>Distancia:</strong> ${detalles.distancia} metros</p>
      <p class="texto"><strong>Domicilio:</strong> $ ${detalles.precio}</p>
      `

  const detallesContainer = document.getElementById("detallesRestaurante");
  detallesContainer.innerHTML = detallesHTML;
}

// Función para mostrar los restaurantes en la lista
function mostrarRestaurantes() {
  const listaRestaurantes = document.getElementById("restaurantesLista");
  listaRestaurantes.innerHTML = "";

  restaurantes.forEach((restaurante, index) => {
      const item = document.createElement("li");
      item.className = "restaurante-item";
      item.textContent = restaurante.nombre;
      listaRestaurantes.appendChild(item);

      item.addEventListener("click", () => mostrarDetallesRestaurante(index));
  });
}

// Función para ordenar los restaurantes por la opción seleccionada
function ordenarRestaurantes() {
    const criterio = document.getElementById("ordenarPor").value;
    restaurantes.sort((a, b) => a[criterio] - b[criterio]);
    ordenarImagenesRestaurantes();
    mostrarRestaurantes();
}

// funcion para ordenar las imagenes por la opciones seleccionada
function ordenarImagenesRestaurantes() {
  const criterio = document.getElementById("ordenarPor").value;
  imagenes.sort((a,b) => a[criterio] -b[criterio]);
}

// Escuchar el evento de cambio en el select para ordenar los restaurantes
const selectOrdenar = document.getElementById("ordenarPor");
selectOrdenar.addEventListener("change", ordenarRestaurantes);

// Iniciar
mostrarRestaurantes();