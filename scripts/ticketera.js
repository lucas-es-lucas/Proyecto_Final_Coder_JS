const valor_entrada = 100;
let ticket_nuevo = new Ticket;
let tickets = new Array();
// FUNCIONES GLOBALES
function vaciar_contenedor (contenedor) {
     // console.log('pasa por vaciar contenedor', contenedor);
     let contenedor_a_vaciar = document.getElementById(contenedor);
     while (contenedor_a_vaciar.childElementCount > 0) {
          contenedor_a_vaciar.removeChild(contenedor_a_vaciar.firstChild);
     }
}
function resetear_opciones (contenedor_actual) {
     // console.log(contenedor_actual);
     switch (contenedor_actual) {
          case 'movies_tickets':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideUp(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               $(`.titles__formas_de_pago`).css('display', 'none');
               vaciar_contenedor('formas_de_pago');
               $(`.titles__promociones`).css('display', 'none');
               vaciar_contenedor('promociones');
               $(`.titles__entradas`).css('display', 'none');
               vaciar_contenedor('entradas');
               $(`.titles__horarios`).css('display', 'none');
               vaciar_contenedor('horarios');
               $(`.titles__dias`).css('display', 'none');
               vaciar_contenedor('dias');
               $(`.titles__theaters`).css('display', 'none');
               vaciar_contenedor('theaters');
               break;
          case 'theaters':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideDown(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               $(`.titles__formas_de_pago`).css('display', 'none');
               vaciar_contenedor('formas_de_pago');
               $(`.titles__promociones`).css('display', 'none');
               vaciar_contenedor('promociones');
               $(`.titles__entradas`).css('display', 'none');
               vaciar_contenedor('entradas');
               $(`.titles__horarios`).css('display', 'none');
               vaciar_contenedor('horarios');
               $(`.titles__dias`).css('display', 'none');
               vaciar_contenedor('dias');
               break;
          case 'dias':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideUp(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               $(`.titles__formas_de_pago`).css('display', 'none');
               vaciar_contenedor('formas_de_pago');
               $(`.titles__promociones`).css('display', 'none');
               vaciar_contenedor('promociones');
               $(`.titles__entradas`).css('display', 'none');
               vaciar_contenedor('entradas');
               $(`.titles__horarios`).css('display', 'none');
               vaciar_contenedor('horarios');
               break;
          case 'horarios':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideUp(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               $(`.titles__formas_de_pago`).css('display', 'none');
               vaciar_contenedor('formas_de_pago');
               $(`.titles__promociones`).css('display', 'none');
               vaciar_contenedor('promociones');
               $(`.titles__entradas`).css('display', 'none');
               vaciar_contenedor('entradas');
               break;
          case 'promociones':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideUp(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               $(`.titles__formas_de_pago`).css('display', 'none');
               vaciar_contenedor('formas_de_pago');
               break;
          case 'formas_de_pago':
               $('#section_resumen').slideUp(1000);
               $('#resumen_compra').slideUp(1000);
               $('#section_comprador').slideUp(1000);
               $('#btn_checkout').css('display', 'none');
               // $(`.titles__resumen_compra`).css('display', 'none');
               vaciar_contenedor('resumen_compra');
               $(`.titles__cuotas`).css('display', 'none');
               vaciar_contenedor('cuotas');
               break;
          default:
               break;
     }
}
function resetear_contenedor (contenedor) {
     let contenedor_a_resetear = document.getElementById(contenedor);
     // console.log(contenedor_a_resetear.childElementCount);
     for (let i = 0; i <= contenedor_a_resetear.childElementCount - 1; i++) {
          // console.log(contenedor_a_resetear.children[i]);
          if (contenedor_a_resetear.children[i].classList.contains('selected')) {
               contenedor_a_resetear.children[i].classList.remove('selected');
          }
     }
}
function guardar_localStorage (array, clase) {
     for (const item of array) {
          localStorage.setItem(`${clase}_${item.codigo}`, JSON.stringify(item));
          // (clase_codigo, item del array)
     }
     localStorage.setItem(`lista_local_${clase}`, JSON.stringify(array));
}
function preparar_compra (origen) {
     vaciar_contenedor(`${origen}`);
     llenar_arrays_globales();
}
function llenar_arrays_globales () {
     // RESTRICCIONES
     let restriccion1 = new Restriccion(0, 'Apta Todo Público');
     let restriccion2 = new Restriccion(13, 'Apta Mayores de 13 años');
     let restriccion3 = new Restriccion(16, 'Apta Mayores de 16 años');
     let restriccion4 = new Restriccion(18, 'Sólo Para Adultos');
     restricciones = [restriccion1, restriccion2, restriccion3, restriccion4];
     // console.log(restricciones);
     // MOVIES
     // let movie1 = new Movie(1, 'El Silencio de los Inocentes', 'Director1', restricciones[3], 'Thriller', '../images/posters/silence_of_the_lambs.jpg');
     // let movie2 = new Movie(2, 'Duro de Matar', 'Director2', restricciones[1], 'Acción', '../images/posters/die_hard.jpg');
     // let movie3 = new Movie(3, 'Toy Story', 'Director3', restricciones[0], 'Comedia', '../images/posters/toy_story.jpg');
     // let movie4 = new Movie(4, 'El Sexto Sentido', 'Director4', restricciones[2], 'Terror', '../images/posters/the_sixth_sense.jpg');
     // movies = [movie1, movie2, movie3, movie4];
     // guardar_localStorage(movies, 'movie');
     // lista_local_movie = JSON.parse(localStorage.getItem('lista_local_movie'));
     // console.log(lista_local_movie);
     // movieS ORDENADAS POR LA RESTRICCION DE EDADES
     // movies.sort(function (a, b) {
     //      return a.restriccion.edad - b.restriccion.edad;
     // });
     // console.log(movies);
     // CINES
     let theater1 = new Theater(1, 'Cine 1', 'CABA');
     let theater2 = new Theater(2, 'Cine 2', 'Zona Norte');
     let theater3 = new Theater(3, 'Cine 3', 'Zon Oeste');
     let theater4 = new Theater(4, 'Cine 4', 'Zona Sur');
     theaters = [theater1, theater2, theater3, theater4];
     guardar_localStorage(theaters, 'theater');
     // console.log(theaters);
     // DIAS
     let day1 = new Day(1, 'Lunes');
     let day2 = new Day(2, 'Martes');
     let day3 = new Day(3, 'Miércoles');
     let day4 = new Day(4, 'Jueves');
     let day5 = new Day(5, 'Viernes');
     let day6 = new Day(6, 'Sábado');
     let day7 = new Day(7, 'Domingo');
     days = [day1, day2, day3, day4, day5, day6, day7];
     // console.log(days);
     // HORARIOS
     let horario1 = new Horario(1, '11:00');
     let horario2 = new Horario(2, '13:00');
     let horario3 = new Horario(3, '15:00');
     let horario4 = new Horario(4, '17:00');
     let horario5 = new Horario(5, '19:00');
     let horario6 = new Horario(6, '21:00');
     let horario7 = new Horario(7, '23:00');
     horarios = [horario1, horario2, horario3, horario4, horario5, horario6, horario7];
     // console.log(horarios);
     // PROMOCIONES
     let promocion1 = new Promocion(1, '10% descuento', .9);
     let promocion2 = new Promocion(2, '25% descuento', .75);
     let promocion3 = new Promocion(3, '50% descuento', .5);
     let promocion4 = new Promocion(4, 'No tengo promo', 1);
     promociones = [promocion1, promocion2, promocion3, promocion4];
     // console.log(promociones);
     // PROMOCIONES
     let forma_de_pago1 = new Forma_de_Pago(1, 'Efectivo / Débito');
     let forma_de_pago2 = new Forma_de_Pago(2, 'Tarjeta de Crédito');
     let forma_de_pago3 = new Forma_de_Pago(3, 'Pago al Retirar');
     formas_de_pago = [forma_de_pago1, forma_de_pago2, forma_de_pago3];
     // console.log(promociones);
}
// OPCIONES
function dibujar_opciones_estaticas (array_origen, id_div, clase) {
     console.log(array_origen, id_div);     
     let div_a_llenar = document.getElementById(id_div);
     console.log(div_a_llenar.childElementCount);
     if (div_a_llenar.childElementCount == 0) {
          array_origen.forEach(elemento => {
               let opt = document.createElement("h4");
               opt.id = elemento.codigo;
               opt.textContent = elemento.descripcion;
               opt.classList.add('option');
               opt.classList.add(`${clase}`);
               div_a_llenar.appendChild(opt);
               opt.onclick = () => elegir_elemento(id_div, opt, opt.id);

               presentar_opciones(id_div, opt.id, 500, 1000, true);
          });
     }
}
function dibujar_contador (id, contenedor, clase) {
     console.log(id, contenedor, clase);
     let contenedor_a_llenar = document.getElementById(contenedor);

     if (contenedor_a_llenar.childElementCount == 0) {
          $(`#${contenedor}`).append(
               `<div class="counter">
                    <button class="btn counter__sub" id="btn_sub_${clase}"> - </button>
                    <h4 class="counter__cant" id="${id}">1</h4>
                    <button class="btn counter__add" id="btn_add_${clase}"> + </button>
               </div>`);
          $(`#btn_sub_${clase}`).on('click', function () {
               if (Number($(`#${contenedor} #${id}`).text()) > 1) {
                    $(`#${contenedor} #${id}`).css('display', 'none');
                    // $(`#${contenedor} #${id}`).fadeOut('fast');
                    $(`#${contenedor} #${id}`).text(Number($(`#${contenedor} #${id}`).text()) - 1);
                    $(`#${contenedor} #${id}`).slideDown('5000');
                    // $(`#${contenedor} #${id}`).fadeIn('fast');
               }
          });
          $(`#btn_add_${clase}`).on('click', function () {
               $(`#${contenedor} #${id}`).css('display', 'none');
               $(`#${contenedor} #${id}`).text(Number($(`#${contenedor} #${id}`).text()) + 1);
               $(`#${contenedor} #${id}`).slideDown('5000');
          });
     }

     presentar_opciones(contenedor, id, 500, 1000, true);
     // <div class="counter">
     //      <button class="btn" id="btn_sub"> - </button>
     //      <!-- <input type="number"> -->
     //      <h4 id="cantidad_entradas">0</h4>
     //      <button class="btn" id="btn_add"> + </button>
     // </div>
}
function presentar_opciones (id_div, id_elemento, speed_delay, speed_slide, move) {
     // console.log(id_div, id_elemento);
     $(`.titles__${id_div}`).css('display', 'block');

     if (move === true) {
          $(`#${id_div} #${id_elemento}`).css('display', 'none')
          .delay(speed_delay)
          .slideDown(speed_slide);
     } else if (move === false) {
          $(`#${id_div} #${id_elemento}`).css('display', 'block')
          .delay(speed_delay)
          .slideUp(speed_slide)
          .css('display', 'none');
     }
}
// INPUTS
function crear_elemento (elemento, id, contenedor, clase) {
     console.log(elemento, id, contenedor, clase);
     let padre = document.getElementById(contenedor);
     if (padre.childElementCount == 0) {
          let hijo = document.createElement(elemento);
          hijo.id = id;
          hijo.classList.add('option');
          hijo.classList.add(`${clase}`);
          console.log(hijo);
          padre.appendChild(hijo);
     }
}
// SELECCIONAR OPCION Y ARMAR SIGUIENTE
function elegir_elemento (id_div, elemento_seleccionado, id_elemento) {
     console.log(elemento_seleccionado.id);
     switch (id_div) {
          case 'movies_principal': 
          // DIBUJAR FICHA DE LA PELI CON EL TRAILER Y BOTON DE COMPRAR 
          // BOTON DE COMPRAR: EVENTO PARA IR A TICKETS.HTML CON LA PELI YA SELECTED 
               ticket_nuevo.movie = elemento_seleccionado.id;
               marcar_pelicula(id_div, id_elemento);
               //edad
               console.log(ticket_nuevo.movie);
               // dibujar_cine('theaters', 'theater', false, ticket_nuevo.movie);
               break;
          case 'movies_tickets':
               ticket_nuevo.movie = elemento_seleccionado.id;
               marcar_pelicula(id_div, id_elemento);
               //edad
               console.log(ticket_nuevo.movie);
               // dibujar_cine('theaters', 'theater', false, ticket_nuevo.movie);
               break;
          case 'theaters':
               ticket_nuevo.theater = elemento_seleccionado.id;
               marcar_elemento(id_div, id_elemento);
               // llenar_div(days, 'days', 'day');
               break;
          case 'dias':
               ticket_nuevo.day = elemento_seleccionado.id;
               marcar_elemento(id_div, id_elemento);
               // llenar_div(horarios, 'horarios', 'horario');
               break;
          case 'horarios':
               ticket_nuevo.horario = elemento_seleccionado.id;
               marcar_elemento(id_div, id_elemento);
               //cantidad_entradas
               // dibujar_contador('cantidad_entradas', 'entradas', 'entrada');
               // $(`#btn_sub_entrada`).on('click', function() {
               //      console.log('entra al click de sub entradas');
               //      ticket_nuevo.cantidad_entradas = $(`#entradas #cantidad_entradas`).text();
               // });
               // $(`#btn_add_entrada`).on('click', function() {
               //      console.log('entra al click de add entradas');
               //      ticket_nuevo.cantidad_entradas = $(`#entradas #cantidad_entradas`).text();
               // });
               break;
          case 'promociones':
               ticket_nuevo.promocion = elemento_seleccionado.id;
               marcar_elemento(id_div, id_elemento);
               // //sala_elegida
               console.log(ticket_nuevo.promocion);
               descuento = promociones.find(promocion => promocion.codigo == ticket_nuevo.promocion).descuento;
               // console.log(promocion_elegida, descuento);
               // llenar_div(formas_de_pago, 'formas_de_pago', 'forma_de_pago');
               break;
          case 'formas_de_pago':
               ticket_nuevo.forma_de_pago = elemento_seleccionado.id;
               marcar_elemento(id_div, id_elemento);
               // forma_de_pago_elegida = elemento_seleccionado.id;
               // //cantidad_cuotas
               // vaciar_contenedor('cuotas');
               // if (forma_de_pago_elegida == 2) {
               //      $('#cuotas').fadeIn('slow');
               //      dibujar_contador('cantidad_cuotas', 'cuotas', 'cuota');
               //      $(`#btn_sub_cuota`).on('click', function() {
               //           console.log('entra al click de sub cuotas');
               //           ticket_nuevo.cantidad_cuotas = $(`#cuotas #cantidad_cuotas`).text();
               //      });
               //      $(`#btn_add_cuota`).on('click', function() {
               //           console.log('entra al click de add cuotas');
               //           ticket_nuevo.cantidad_cuotas = $(`#cuotas #cantidad_cuotas`).text();
               //      });
               // } else {
               //      $('#cuotas').fadeOut('slow');
               //      ticket_nuevo.cantidad_cuotas = 1;
               // }
               break;
          default:
               break;
     }
}
function marcar_elemento (contenedor, id_elemento) {
     // console.log(contenedor, id_elemento);
     if ($(`#${contenedor} #${id_elemento}`).hasClass('selected')) {
          // si ya estaba selected -> desmarca todos
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeIn("slow");
          resetear_opciones(contenedor);

          switch (contenedor) {
               case 'theaters':
                    funciones_con_la_peli = funciones_xPeli;
                    break;
               case 'dias':
                    funciones_con_la_peli = funciones_xPeli_xCine;
                    break;
               case 'horarios':
                    funciones_con_la_peli = funciones_xPeli_xCine_xDia;
                    break;
          }
     } else {
          // si no estaba selected -> desmarca todos y lo marca selected
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeOut("slow");
          $(`#${contenedor} #${id_elemento}`).toggleClass('selected');
          $(`#${contenedor} .selected`).fadeIn("slow");

          switch (contenedor) {
               // case 'movies_principal': 
               // // DIBUJAR FICHA DE LA PELI CON EL TRAILER Y BOTON DE COMPRAR 
               // // BOTON DE COMPRAR: EVENTO PARA IR A TICKETS.HTML CON LA PELI YA SELECTED 
               //      marcar_pelicula(id_div, elemento_seleccionado, id_elemento);
               //      ticket_nuevo.movie = elemento_seleccionado.id;
               //      //edad
               //      console.log(ticket_nuevo.movie);
               //      // dibujar_cine('theaters', 'theater', false, ticket_nuevo.movie);
               //      break;
               // case 'movies':
               //      marcar_pelicula(id_div, elemento_seleccionado, id_elemento);
               //      ticket_nuevo.movie = elemento_seleccionado.id;
               //      //edad
               //      console.log(ticket_nuevo.movie);
               //      // dibujar_cine('theaters', 'theater', false, ticket_nuevo.movie);
               //      break;
               case 'theaters':
                    // llenar_div(days, 'dias', 'day');
                    dibujar_opciones('dias', 'day', ticket_nuevo.theater);
                    break;
               case 'dias':
                    // llenar_div(horarios, 'horarios', 'horario');
                    dibujar_opciones('horarios', 'horario', ticket_nuevo.day);
                    break;
               case 'horarios':
                    //cantidad_entradas
                    dibujar_contador('cantidad_entradas', 'entradas', 'entrada');
                    $(`#btn_sub_entrada`).on('click', function() {
                         console.log('entra al click de sub entradas');
                         ticket_nuevo.cantidad_entradas = $(`#entradas #cantidad_entradas`).text();
                    });
                    $(`#btn_add_entrada`).on('click', function() {
                         console.log('entra al click de add entradas');
                         ticket_nuevo.cantidad_entradas = $(`#entradas #cantidad_entradas`).text();
                    });
                    ticket_nuevo.cantidad_entradas = 1;
                    dibujar_opciones_estaticas(promociones, 'promociones', 'promocion');
                    break;
               case 'promociones':
                    dibujar_opciones_estaticas(formas_de_pago, 'formas_de_pago', 'forma_de_pago');
                    break;
               case 'formas_de_pago':
                    //cantidad_cuotas
                    // vaciar_contenedor('cuotas');
                    if (ticket_nuevo.forma_de_pago == 2) {
                         $('#cuotas').fadeIn('slow');
                         dibujar_contador('cantidad_cuotas', 'cuotas', 'cuota');
                         $(`#btn_sub_cuota`).on('click', function() {
                              console.log('entra al click de sub cuotas');
                              ticket_nuevo.cantidad_cuotas = $(`#cuotas #cantidad_cuotas`).text();
                         });
                         $(`#btn_add_cuota`).on('click', function() {
                              console.log('entra al click de add cuotas');
                              ticket_nuevo.cantidad_cuotas = $(`#cuotas #cantidad_cuotas`).text();
                         });
                    } else {
                         $('#cuotas').fadeOut('slow');
                         ticket_nuevo.cantidad_cuotas = 1;
                    }
                    $('section_checkout').fadeIn('slow');
                    $('#btn_checkout').fadeIn('slow');
                    // $('#btn_checkout').click(function (e) { 
                    //      e.preventDefault();

                    //      mostrar_resumen_compra();
                    // });
                    break;
               default:
                    break;
          }
     }
}
function marcar_pelicula (contenedor, id_elemento) {
     // console.log(contenedor, id_elemento);
     if ($(`#${contenedor} #${id_elemento}`).hasClass('selected')) {
          // si ya estaba selected -> desmarca todos
          $(`#${contenedor} #${id_elemento}`).toggleClass('col-12 col-sm-12 col-md-6 offset-md-0 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0 col-xxl-3 offset-xxl-0');
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeIn("slow");
          resetear_opciones(contenedor);
     } else {
          // si no estaba selected -> desmarca todos y lo marca selected
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeOut("slow");
          $(`#${contenedor} #${id_elemento}`).toggleClass('col-12 col-sm-12 col-md-6 offset-md-0 col-lg-3 offset-lg-0 col-xl-3 offset-xl-0 col-xxl-3 offset-xxl-0');
          // $(`#${contenedor} #${id_elemento}`).toggleClass('btn col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-xl-4 offset-xl-0 col-xxl-4 offset-xxl-0');
          $(`#${contenedor} #${id_elemento}`).toggleClass('selected');
          $(`#${contenedor} .selected`).fadeIn("slow");

          dibujar_cine('theaters', 'theater', false, ticket_nuevo.movie);
     }
}
function hacer_checkout (modificar) {
     if (modificar) {
          let btn_checkout = document.getElementById('btn_checkout');
          btn_checkout.firstElementChild.textContent = 'CONFIRMÁS TU COMPRA?';

          $('#btn_checkout').removeClass('modificar');

          $('#section_resumen').slideUp(2000);
          $('#resumen_compra').slideUp(2000);
          $('#section_comprador').slideUp(2000);
          // $('#btn_checkout').css('display', 'none');
          vaciar_contenedor('resumen_compra');

          $('#section_cartelera .movie').removeClass('disabled');
          $('#section_cartelera .movie').addClass('enabled');
          $('#section_cartelera .options').removeClass('disabled');
          $('#section_cartelera .options').addClass('enabled');
          $('#section_pago .options').removeClass('disabled');
          $('#section_pago .options').addClass('enabled');

          console.log('pasa x hacer checkout modificar = true');
     } else {
          console.log('pasa x hacer checkout modificar = false');
          mostrar_resumen_compra();
     }
}
function mostrar_resumen_compra () {
     // console.log(descuento);
     // calcular importe
     ticket_nuevo.importe = importe = calcular_importe(valor_entrada, ticket_nuevo.cantidad_entradas, descuento);
     // calcular pagos
     ticket_nuevo.importe_cuota = importe_cuota = calcular_cuota(importe, ticket_nuevo.cantidad_cuotas);
     // generar ticket
     console.log(ticket_nuevo);
     ticket_nuevo.mostrar_importes();     
     // guardar ticket
     tickets.push(ticket_nuevo);
}
// INGRESO DE DATOS
function informar_edad () {
     return prompt('Qué edad tenés?');
}
// CALCULOS
function calcular_importe (valor_entrada, entradas, descuento) {
     // console.log(valor_entrada, entradas, descuento);
     return ((valor_entrada * entradas) * descuento);
}
function calcular_cuota (importe, cuotas) {
     // console.log(importe, cuotas)
     return (importe / cuotas);
}
