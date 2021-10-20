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

// $('#email_enviar').attr('href', `mailto:${$('#email').text()}`);

//BLUR
email.addEventListener('blur', ()=>{
     // inputFocus.style.border = "1px solid black";
     // passRecomendation.textContent = "";
     console.log($('#email').value);
     $('#form__comprador').append(
          `<a id="email_enviar"href="mailto:${$('#email').value}">email del comprador</a>`
     );
})


// href="mailto:midireccioneslucas@hotmail.com"

// let input_nro_tarjeta = document.getElementById('nro_tarjeta');

// input_nro_tarjeta.addEventListener("keyup", event => {
//     //Objeto de evento
//      if (event.which === 13 || event.keyCode == 13) {
//         //Al presionar enter
//      //    keyText.textContent = ':)';
//      } else if (event.which === 8 || event.keyCode == 8){
//         //Al presionar Backspace 
//      //    keyText.textContent = ':(';
//      } else {
//         //Acción para el resto de las teclas
//      //    keyText.textContent = 
//      console.log(input_nro_tarjeta.value);
//      if (!validar_valor(parseInt(input_nro_tarjeta.value))) {
//           alert('Solamente podés ingresar números');
//      };
// }
// });

// function validar_valor (valor) {
//      console.log(valor);
//      if (!isNaN(parseInt(valor))) {
//           return true;
//      } else {
//           return false;
//      }
// }

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