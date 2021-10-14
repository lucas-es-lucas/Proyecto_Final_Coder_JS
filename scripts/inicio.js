localStorage.clear();
// const valor_entrada = 100;
let seguir;
// ARRAYS
let lista_local_movie;
let lista_local_theaters;
// let tickets = new Array();
let restricciones = new Array();
// let movies = new Array();
let theaters = new Array();
let days = new Array();
let horarios = new Array();
// let funciones = new Array();
// let funciones_completas = new Array();
let promociones = new Array();
let formas_de_pago = new Array();
// llenar_arrays_globales();
// let ticket_nuevo = new Ticket;
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

traer_funciones_JSON();
// console.log(funciones);
console.log('pasó por inicio.js');