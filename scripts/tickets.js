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
let funciones = new Array();
let funciones_completas = new Array();
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

// $(document).ready(() => {
     // get_config();
     // get_movie(url_api_movies, id_movie, url_api_key, lang);
     // get_movies(url_api_movies, list_movie, url_api_key, lang);

     // get_cartelera(url_api_movies, list_movie, url_api_key, lang);
// })

// INICIAR LA COMPRA
// let btn__start = document.getElementById('btn__start');
// btn__start.addEventListener('click', preparar_compra);

const url_JSON = '/JSONS/funciones.json';

function traer_funciones_JSON () {
     $.get(url_JSON, function (respuesta, estado) {
          if (estado === 'success') {
               let funciones_JSON = respuesta;
               // console.log(funciones_JSON);
               for (let i = 0; i < funciones_JSON.length; i++) {
                    let funcion = new Funcion;
                    funcion.id_funcion = funciones_JSON[i].id_funcion;
                    funcion.id_movie = funciones_JSON[i].id_movie;
                    funcion.id_theater = funciones_JSON[i].id_theater;
                    funcion.id_day = funciones_JSON[i].id_day;
                    funcion.id_horario = funciones_JSON[i].id_horario;
                    funciones.push(funcion);
               }
               // console.log(funciones);
               // for (let i = 0; i < funciones.length; i++) {
               //      let funcion_completa = new Funcion_completa;
               //      funcion_completa.id_funcion = funciones[i].id_funcion;

               //      // console.log(funciones_JSON[i].id_movie, funciones_JSON[i].id_theater,funciones_JSON[i].id_day, funciones_JSON[i].id_horario);
               //      // let item =   movies.find(i => i.id == funciones[i].id_movie)
               //      // let item = calculos.find(i => i.id == elemento.id);
               //      // console.log(movies[i].id);
               //      funcion_completa.movie = movies.find(i => i.codigo == funciones[i].id_movie);
               //      funcion_completa.theater = theaters.find(i => i.codigo == funciones[i].id_theater);
               //      funcion_completa.day = days.find(i => i.codigo == funciones[i].id_day);
               //      funcion_completa.horario = days.find(i => i.codigo == funciones[i].id_horario);
               //      funciones_completas.push(funcion_completa);
               //      console.log(funcion_completa);
               // }
          }
     })
}

preparar_compra();
get_cartelera();
console.log(movies);
// console.log(theaters);
// console.log(days);
// console.log(horarios);
traer_funciones_JSON();
// console.log(funciones);

// CONFIRMAR DATOS PARCIALES
let btn_resumen_funcion = document.getElementById('btn_resumen_funcion');
btn_resumen_funcion.onclick = () => $('#section_pago').slideDown(2000);
// btn_resumen_funcion.onclick = () => llenar_div(promociones, 'promociones', 'promocion');
btn_resumen_funcion.addEventListener('click', llenar_div(promociones, 'promociones'));

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