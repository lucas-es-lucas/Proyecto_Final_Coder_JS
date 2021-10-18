// $(document).ready(() => {
     // get_config();
     // get_movie(url_api_movies, id_movie, url_api_key, lang);
     // get_movies(url_api_movies, list_movie, url_api_key, lang);

     // get_cartelera(url_api_movies, list_movie, url_api_key, lang);
// })

traer_funciones_JSON();
// console.log(funciones);
console.log('pasó por tickets.js');
preparar_compra('movies_tickets');
console.log(theaters);
console.log(days);
console.log(horarios);
armar_cartelera('movies_tickets');

// EVENTO PARA BLOQUEAR / DESBLOQUEAR LAS OPCIONES
let btn_checkout = document.getElementById('btn_checkout');
// btn_checkout.onclick = () => mostrar_resumen_compra();
console.log($('#btn_checkout').hasClass('modificar'));
btn_checkout.onclick = () => hacer_checkout($('#btn_checkout').hasClass('modificar'));

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