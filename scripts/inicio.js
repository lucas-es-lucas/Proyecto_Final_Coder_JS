// localStorage.clear();
// ARRAYS
let lista_local_movie;
let lista_local_theater;
let restricciones = new Array();
let theaters = new Array();
let days = new Array();
let horarios = new Array();
let promociones = new Array();
let formas_de_pago = new Array();
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

// let funciones_con_la_peli = Array();

// $(document).ready(() => {
     // get_config();
     // get_movie(url_api_movies, id_movie, url_api_key, lang);
     // get_movies(url_api_movies, list_movie, url_api_key, lang);

     // get_cartelera(url_api_movies, list_movie, url_api_key, lang);
// })

traer_funciones_JSON();
// console.log(funciones);
console.log('pasó por inicio.js');


// traer_funciones_JSON();
// console.log('pasó por movies.js');
armar_cartelera('movies_principal');