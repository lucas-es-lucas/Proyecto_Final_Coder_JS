// $(document).ready(() => {
     // get_config();
     // get_movie(url_api_movies, id_movie, url_api_key, lang);
     // get_movies(url_api_movies, list_movie, url_api_key, lang);

     // get_cartelera(url_api_movies, list_movie, url_api_key, lang);
// })
let lista_local_ticket;
function iniciar () {
     preparar_compra('movies_tickets');
     armar_cartelera('movies_tickets');
}

traer_funciones_JSON();
iniciar();

// EVENTO PARA BLOQUEAR / DESBLOQUEAR LAS OPCIONES
let btn_checkout = document.getElementById('btn_checkout');
btn_checkout.onclick = () => hacer_checkout($('#btn_checkout').hasClass('modificar'));

$("#btn_enviar").click( function() {
     if (validar_formulario ()) {
          guardar_tickets();
          
          $('#section_cartelera').slideUp(1000);
          $('#section_pago').slideUp(1000);
          $('#section_checkout').slideUp(1000);
          $('#section_resumen').slideUp(1000);
          // $('#resumen_compra').slideUp(1000);
          $('#section_comprador').slideUp(1000);

          $('#section_finalizar').fadeIn(1000);
     }
});

$('#btn_finalizar').click( function () {
     iniciar();

     $('#section_finalizar').fadeOut(500);
     resetear_opciones('movies_tickets');
     $('#btn_checkout').removeClass('modificar');
     $('#btn_checkout h4').text('CONFIRMÁS TU COMPRA?');
     habilitar_opciones(true);
     $('#section_cartelera').slideDown(500);
});

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