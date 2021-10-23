localStorage.clear();
// ARRAYS
let lista_local_movie;
let lista_local_theater;

let lista_local_ticket;
let ticket_nuevo = new Ticket;
let tickets = new Array();

let comprador = new Comprador;
let lista_local_comprador;

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