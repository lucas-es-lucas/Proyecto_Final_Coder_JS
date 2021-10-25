function iniciar () {
     preparar_compra('movies_tickets');
     armar_cartelera('movies_tickets');
}
function iniciar_comprador () {
     window.localStorage.clear();
     tickets = new Array();
     vaciar_formulario();
     preparar_compra('movies_tickets');
     armar_cartelera('movies_tickets');
}
function dibujar_pantalla () {
     $('#section_carrito').fadeOut(500);
     resetear_opciones('movies_tickets');
     $('#btn_checkout').removeClass('modificar');
     $('#btn_checkout h4').text('CONFIRMÁS TU COMPRA?');
     habilitar_opciones(true);
     $('#section_cartelera').slideDown(500);
}

traer_funciones_JSON();
console.log('pasó por tickets.js');
iniciar();

// EVENTO PARA BLOQUEAR / DESBLOQUEAR LAS OPCIONES
let btn_checkout = document.getElementById('btn_checkout');
btn_checkout.onclick = () => hacer_checkout($('#btn_checkout').hasClass('modificar'));

$("#btn_comprador").click( function() {
     if (validar_formulario ()) {
          // guardar_tickets();
          cargar_carrito();
          
          $('#section_cartelera').slideUp(1000);
          $('#section_pago').slideUp(1000);
          $('#section_checkout').slideUp(1000);
          $('#section_importe').slideUp(1000);
          $('#section_comprador').slideUp(1000);

          $('#section_carrito').fadeIn(1000);
     }
});
$('#btn_comprador_cancelar').click( function() {
     // mostrar carrito solamente con tickets
     cancelar_carrito();
     $('#section_cartelera').slideUp(1000);
     $('#section_pago').slideUp(1000);
     $('#section_checkout').slideUp(1000);
     $('#section_importe').slideUp(1000);
     $('#section_comprador').slideUp(1000);

     $('#section_carrito').fadeIn(1000);
})

$('#btn_seguir').click( function () {
     iniciar();
     dibujar_pantalla();
});

$('#btn_enviar').click( function () {
     iniciar_comprador();
     dibujar_pantalla();
})
$('#btn_volver').click( function () {
     $('#section_cartelera').slideDown(1000);
     $('#section_pago').slideDown(1000);
     $('#section_checkout').slideDown(1000);
     $('#section_importe').slideDown(1000);
     $('#section_comprador').slideDown(1000);

     $('#section_carrito').fadeOut(1000);
});
$('#btn_cancelar').click( function () {
     iniciar_comprador();
     dibujar_pantalla();
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