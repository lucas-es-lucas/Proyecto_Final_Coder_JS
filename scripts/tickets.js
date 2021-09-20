localStorage.clear();
const valor_entrada = 100;
let seguir;
// ARRAYS
let lista_local_movie;
let lista_local_theaters;
let tickets = new Array();
let restricciones = new Array();
let movies = new Array();
let theaters = new Array();
let days = new Array();
let horarios = new Array();
let promociones = new Array();
let formas_de_pago = new Array();
// llenar_arrays_globales();
let ticket_nuevo = new Ticket();
let movie_elegida = new Movie;
let edad;
let theater_elegido = new Theater;
let dia_elegido = new Day;
let horario_elegido = '';
let sala_elegida = '';
let cantidad_elegida = 1;
let promocion_elegida = '';
let descuento = 1;
let forma_de_pago_elegida = '';
let cuotas_elegidas = 1;
let importe = 0;
let importe_cuota = 0;

// INICIAR LA COMPRA
// let btn__start = document.getElementById('btn__start');
// btn__start.addEventListener('click', preparar_compra);
preparar_compra();

// CONFIRMAR DATOS PARCIALES
let btn_resumen_funcion = document.getElementById('btn_resumen_funcion');
btn_resumen_funcion.onclick = () => llenar_div(promociones, 'promociones');
// btn_resumen_funcion.addEventListener('click', llenar_div(promociones, 'promociones'));

let btn_resumen_compra = document.getElementById('btn_resumen_compra');
btn_resumen_compra.onclick = () => mostrar_resumen_compra();
// btn_resumen_compra.addEventListener('click', mostrar_resumen_compra());

// // EMISION DE TICKETS ORDENADA POR EL DIA MÁS PROXIMO
// tickets.sort(function (a, b) {
//      if (a.dia > b.dia) {
//           return 1;
//      } else if (a.dia < b.dia) {
//           return -1;
//      }
//      return 0;
// })
// console.log(tickets);