// FUNCIONES GLOBALES
function vaciar_contenedor (contenedor) {
     let contenedor_a_vaciar = document.getElementById(contenedor);
     console.log(contenedor_a_vaciar.childElementCount);
     while (contenedor_a_vaciar.childElementCount > 0) {
          contenedor_a_vaciar.removeChild(contenedor_a_vaciar.firstChild);
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
function preparar_compra () {
     vaciar_contenedor('movies');
     llenar_arrays_globales();
     dibujar_card('movies', 'movie', true);
}
function llenar_arrays_globales () {
     // RESTRICCIONES
     let restriccion1 = new Restriccion(0, 'Apta Todo Público');
     let restriccion2 = new Restriccion(13, 'Apta Mayores de 13 años');
     let restriccion3 = new Restriccion(16, 'Apta Mayores de 16 años');
     let restriccion4 = new Restriccion(18, 'Sólo Para Adultos');
     restricciones = [restriccion1, restriccion2, restriccion3, restriccion4];
     // console.log(restricciones);
     // movieS
     let movie1 = new Movie(1, 'El Silencio de los Inocentes', 'Director1', restricciones[3], 'Thriller', '../images/posters/silence_of_the_lambs.jpg');
     let movie2 = new Movie(2, 'Duro de Matar', 'Director2', restricciones[1], 'Acción', '../images/posters/die_hard.jpg');
     let movie3 = new Movie(3, 'Toy Story', 'Director3', restricciones[0], 'Comedia', '../images/posters/toy_story.jpg');
     let movie4 = new Movie(4, 'El Sexto Sentido', 'Director4', restricciones[2], 'Terror', '../images/posters/the_sixth_sense.jpg');
     movies = [movie1, movie2, movie3, movie4];
     guardar_localStorage(movies, 'movie');
     lista_local_movie = JSON.parse(localStorage.getItem('lista_local_movie'));
     console.log(lista_local_movie);
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
     let horario2 = new Horario(2, '15:00');
     let horario3 = new Horario(3, '19:00');
     let horario4 = new Horario(4, '23:00');
     horarios = [horario1, horario2, horario3, horario4];
     // console.log(horarios);
     // PROMOCIONES
     let promocion1 = new Promocion(1, '10% descuento', .9);
     let promocion2 = new Promocion(2, '25% descuento', .75);
     let promocion3 = new Promocion(3, '50% descuento', .5);
     let promocion4 = new Promocion(4, 'Entradas Sin Cargo', 0);
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
function llenar_div (array_origen, id_div, clase) {
     console.log(array_origen, id_div);     
     let div_a_llenar = document.getElementById(id_div);
     console.log(div_a_llenar.childElementCount);
     if (div_a_llenar.childElementCount == 0) {
          array_origen.forEach(elemento => {
               let tit = document.createElement("h4");
               tit.id = elemento.codigo;
               tit.textContent = elemento.descripcion;
               tit.classList.add('option');
               tit.classList.add(`${clase}`);
               div_a_llenar.appendChild(tit);
               tit.onclick = () => elegir_elemento(id_div, tit, tit.id);
          });
     }
}
function dibujar_contador (id, contenedor, clase) {
     console.log(id, contenedor, clase);
     $(`#${contenedor}`).append(
          `<div class="counter">
               <button class="btn counter__sub" id="btn_sub_${clase}"> - </button>
               <h4 class="counter__cant" id="${id}">1</h4>
               <button class="btn counter__add" id="btn_add_${clase}"> + </button>
          </div>`);
     $(`#btn_sub_${clase}`).on('click', function () {
          if (Number($(`#${contenedor} #${id}`).text()) > 1) {
               $(`#${contenedor} #${id}`).text(Number($(`#${contenedor} #${id}`).text()) - 1);
          }
          // alert($(`#${contenedor} #${id}`).text());
     });
     $(`#btn_add_${clase}`).on('click', function () {
          $(`#${contenedor} #${id}`).fadeOut('fast');
          $(`#${contenedor} #${id}`).text(Number($(`#${contenedor} #${id}`).text()) + 1);
          $(`#${contenedor} #${id}`).fadeIn('fast');
          // alert($(`#${contenedor} #${id}`).text());
     });
     // <div class="counter">
     //      <button class="btn" id="btn_sub"> - </button>
     //      <!-- <input type="number"> -->
     //      <h4 id="cantidad_entradas">0</h4>
     //      <button class="btn" id="btn_add"> + </button>
     // </div>
}
function presentar_opciones (id_div, id_elemento, speed_delay, speed_slide) {
     console.log(id_div, id_elemento);
     $(`#${id_div} #${id_elemento}`).css('display', 'none')
     .delay(speed_delay)
     .slideDown(speed_slide);
}
function dibujar_card (id_div, clase, img) {
     let array_origen = JSON.parse(localStorage.getItem(`lista_local_${clase}`));
     console.log(array_origen, id_div);     
     let div_a_llenar = document.getElementById(id_div);

     if (div_a_llenar.childElementCount == 0) {
          array_origen.forEach(elemento => {
               // card
               let card = document.createElement('div');
               card.id = elemento.codigo;
               card.classList.add('card');
               card.classList.add('option');
               card.classList.add(`${clase}`);
               // imagen
               if (img) {
                    let img = document.createElement('img');
                    img.src = elemento.imagen;
                    img.classList.add('card-img-top');
                    img.classList.add(`${clase}__img`);
                    card.appendChild(img);
               }
               // body
               let body = document.createElement('div');
               body.classList.add('card-body');
               body.classList.add(`${clase}__body`);
               // titulo
               let tit = document.createElement("h4");
               tit.textContent = elemento.descripcion;
               tit.classList.add('card-title');
               tit.classList.add(`${clase}__title`);
               body.appendChild(tit);
               // detalle
               let sub = document.createElement("h5");
               switch (id_div) {
                    case 'movies':
                         sub.textContent = elemento.genero;
                         sub.classList.add('card-subtitle');
                         sub.classList.add(`${clase}__subtitle`);
                         body.appendChild(sub);
                         break;
                    case 'theaters':
                         sub.textContent = elemento.adress;
                         sub.classList.add('card-subtitle');
                         sub.classList.add(`${clase}__subtitle`);
                         body.appendChild(sub);
                         break;
               }
               // append al html
               card.appendChild(body);
               div_a_llenar.appendChild(card);
               card.onclick = () => elegir_elemento(id_div, card, card.id);
               
               presentar_opciones(id_div, card.id, 500, 2000);
               // console.log(id_div, card.id);
               // $(card).css('display', 'none')
               //      .delay(500)
               //      .slideDown(2000);
          });
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
     marcar_elemento(id_div, elemento_seleccionado, id_elemento);
     console.log(elemento_seleccionado.id);
     switch (id_div) {
          case 'movies':
               ticket_nuevo.movie = elemento_seleccionado.id;
               //edad               
               // llenar_div(theaters, 'theaters', 'theater');
               dibujar_card('theaters', 'theater', false);
               break;
          case 'theaters':
               ticket_nuevo.theater = elemento_seleccionado.id;
               llenar_div(days, 'days', 'day');
               break;
          case 'days':
               ticket_nuevo.day = elemento_seleccionado.id;
               llenar_div(horarios, 'horarios', 'horario');
               break;
          case 'horarios':
               ticket_nuevo.horario = elemento_seleccionado.id;
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
               //
               // crear_elemento('input', 'cantidad_entradas', 'entradas', 'entrada');
               // let cantidad_entradas = document.getElementById('cantidad_entradas');
               // cantidad_entradas.onkeyup = () => {
               //      ticket_nuevo.cantidad_entradas = cantidad_entradas.value;
               // }
               break;
          case 'promociones':
               // //sala_elegida
               ticket_nuevo.promocion = elemento_seleccionado.id;
               console.log(ticket_nuevo.promocion);
               descuento = promociones.find(promocion => promocion.codigo == ticket_nuevo.promocion).descuento;
               console.log(promocion_elegida, descuento);
               llenar_div(formas_de_pago, 'formas_de_pago', 'forma_de_pago');
               break;
          case 'formas_de_pago':
               forma_de_pago_elegida = elemento_seleccionado.id;
               //cantidad_cuotas
               vaciar_contenedor('cuotas');
               if (forma_de_pago_elegida == 2) {
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
                    // crear_elemento('input', 'cantidad_cuotas', 'cuotas', 'cuota');
                    // let cantidad_cuotas = document.getElementById('cantidad_cuotas');
                    // cantidad_cuotas.onkeyup = () => {
                    //      ticket_nuevo.cantidad_cuotas = cantidad_cuotas.value;
                    // }
               } else {
                    // vaciar_contenedor('cuotas');
                    $('#cuotas').fadeOut('slow');
                    ticket_nuevo.cantidad_cuotas = 1;
               }
               break;
     }
}
function marcar_elemento (contenedor, elemento_seleccionado, id_elemento) {
     console.log(contenedor, elemento_seleccionado);
     // resetear_contenedor(contenedor);
     // console.log($(`#${contenedor}`).attr('id'));
     // console.log($(`#${id_elemento}`).hasClass('selected'));
     if ($(`#${contenedor} #${id_elemento}`).hasClass('selected')) {
          // si ya estaba selected -> desmarca todos
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeIn("slow");
     } else {
          // si no estaba selected -> desmarca todos y lo marca selected
          $(`#${contenedor} .option`).removeClass('selected');
          $(`#${contenedor} .option`).fadeOut("slow");
          $(`#${contenedor} #${id_elemento}`).toggleClass('selected');
          $(`#${contenedor} .selected`).fadeIn("slow");
     }
}
function mostrar_resumen_compra () {
     console.log(promocion_elegida, descuento);
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
     console.log(valor_entrada, entradas, descuento);
     return ((valor_entrada * entradas) * descuento);
}
function calcular_cuota (importe, cuotas) {
     console.log(importe, cuotas)
     return (importe / cuotas);
}