// $(document).ready(() => {
     // get_config();
     // get_movie(url_api_movies, id_movie, url_api_key, lang);
     // get_movies(url_api_movies, list_movie, url_api_key, lang);

     // get_cartelera(url_api_movies, list_movie, url_api_key, lang);
// })

traer_funciones_JSON();
// console.log(funciones);
// console.log('pasó por tickets.js');
preparar_compra('movies_tickets');
// console.log(theaters);
// console.log(days);
// console.log(horarios);
armar_cartelera('movies_tickets');

// EVENTO PARA BLOQUEAR / DESBLOQUEAR LAS OPCIONES
let btn_checkout = document.getElementById('btn_checkout');
// btn_checkout.onclick = () => mostrar_resumen_compra();
btn_checkout.onclick = () => hacer_checkout($('#btn_checkout').hasClass('modificar'));

// email.onblur = () => {
//      return $('#email_enviar').attr('href', `mailto:${$('#email').val()}`);
// };

$("#btn_enviar").click( function() {
     // console.log('entra en el click de btn_enviar');

     if (validar_formulario ()) {
          $('#section_cartelera').slideUp(1000);
          $('#section_pago').slideUp(1000);
          $('#section_checkout').slideUp(1000);
          $('#section_resumen').slideUp(1000);
          // $('#resumen_compra').slideUp(1000);
          $('#section_comprador').slideUp(1000);

          $('#section_finalizar').fadeIn(1000);

          // setTimeout(()=>{
          //      preparar_compra('movies_tickets');
          //      armar_cartelera('movies_tickets');
          // }, 2000);
     }
});

$('#btn_finalizar').click( function () {
     console.log('entra en el click de btn_finalizar');
     
     preparar_compra('movies_tickets');
     armar_cartelera('movies_tickets');
});

// href="mailto:midireccioneslucas@hotmail.com"

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