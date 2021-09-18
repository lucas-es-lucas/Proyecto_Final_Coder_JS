// // OBJETOS
// class Restriccion {
//      constructor (edad, leyenda) {
//           this.edad = edad,
//           this.leyenda = leyenda
//      }
//      validar_restriccion (edad) {
//           return (edad >= this.edad);
//      }
// }
// class Pelicula {
//      constructor (codigo, titulo, director, restriccion, genero) {
//           this.descripcion = titulo,
//           this.codigo = codigo,
//           this.titulo = titulo,
//           this.director = director,
//           this.restriccion = restriccion,
//           this.genero = genero
//           }
//      getPelicula () {
//           return this.titulo + ' ' + this.director + ' ' + this.restriccion.leyenda + ' ' + this.genero;
//      }
// }
// class Cine {
//      constructor (codigo, cine) {
//           this.descripcion = cine,
//           this.codigo = codigo,
//           this.cine = cine
//      }
// }
// class Dia {
//      constructor (codigo, dia) {
//           this.descripcion = dia,
//           this.codigo = codigo,
//           this.dia = dia
//      }
// }
// class Horario {
//      constructor (codigo, horario) {
//           this.descripcion = horario,
//           this.codigo = codigo,
//           this.horario = horario
//      }
// }
// class Sala {
//      constructor (codigo, sala) {
//           this.descripcion = sala,
//           this.codigo = codigo,
//           this.sala = sala
//      }
// }
// class Promocion {
//      constructor (codigo, promocion, descuento) {
//           this.descripcion = promocion,
//           this.codigo = codigo,
//           this.promocion = promocion,
//           this.descuento = descuento
//      }
// }
// class Forma_de_Pago {
//      constructor (codigo, forma_de_pago) {
//           this.descripcion = forma_de_pago,
//           this.codigo = codigo,
//           this.forma_de_pago = forma_de_pago
//      }
// }
// class Ticket {
//      constructor (pelicula, cine, dia, horario, sala, cantidad_entradas, cantidad_cuotas, importe, importe_cuota, promocion) {
//           this.pelicula = pelicula, 
//           this.cine = cine, 
//           this.dia = dia, 
//           this.horario = horario, 
//           this.sala = sala, 
//           this.cantidad_entradas = cantidad_entradas, 
//           this.cantidad_cuotas = cantidad_cuotas, 
//           this.importe = importe, 
//           this.importe_cuota = importe_cuota, 
//           this.promocion = promocion
//      }
//      // RESUMEN DE COMPRA
//      getTicketInfo () {
//           let resumen = `Resumen de compra: \nPelícula: ${this.pelicula.titulo} (${this.pelicula.genero}) en el cine ${this.cine.cine} \nFunción: día ${this.dia.dia} a las ${this.horario} en la sala ${this.sala} \n${this.cantidad_entradas} entradas \nTotal: $${this.importe} \n`;
//           if (this.cantidad_cuotas > 1) {
//                resumen += `Cuotas: ${this.cantidad_cuotas} de $${this.importe_cuota} \n`;
//           }
//           if (this.promocion != '') {
//                resumen += `Promoción aplicada: ${this.promocion} \n`;
//           }
//           return resumen;
//      }
//      // MOSTRAR INFO EN HTML
//      mostrar_importes () {
//           let resumen = document.getElementById('resumen_compra');
//           vaciar_contenedor(resumen);

//           // 'IMPORTE TOTAL'
//           let total = document.createElement('h3');
//           total.textContent = 'Importe Total';
//           resumen.appendChild(total);
//           let importe = document.createElement('h3');
//           importe.textContent = `$${this.importe}`;
//           resumen.appendChild(importe);

//           if (this.cantidad_cuotas > 1) {
//                let forma_pago = document.createElement('h3');
//                forma_pago.textContent = `${this.cantidad_cuotas} cuotas de $${this.importe_cuota}`;
//                resumen.appendChild(forma_pago);
//           }
//      }
// }

// // FUNCIONES GLOBALES
// function vaciar_contenedor (contenedor) {
//      while (contenedor.childElementCount > 0) {
//           contenedor.removeChild(contenedor.firstChild);
//      }
// }
// function resetear_contenedor (contenedor) {
//      let contenedor_a_vaciar = document.getElementById(contenedor);
//      // console.log(contenedor_a_vaciar.childElementCount);
//      for (let i = 0; i <= contenedor_a_vaciar.childElementCount - 1; i++) {
//           // console.log(contenedor_a_vaciar.children[i]);
//           contenedor_a_vaciar.children[i].className = 'option';
//      }
// }
// function llenar_arrays_globales() {
//      // RESTRICCIONES
//      let restriccion1 = new Restriccion(0, 'Apta Todo Público');
//      let restriccion2 = new Restriccion(13, 'Apta Mayores de 13 años');
//      let restriccion3 = new Restriccion(16, 'Apta Mayores de 16 años');
//      let restriccion4 = new Restriccion(18, 'Sólo Para Adultos');
//      restricciones = [restriccion1, restriccion2, restriccion3, restriccion4];
//      // console.log(restricciones);
//      // PELICULAS
//      let pelicula1 = new Pelicula(1, 'El Silencio de los Inocentes', 'Director1', restricciones[3], 'Thriller');
//      let pelicula2 = new Pelicula(2, 'Duro de Matar', 'Director2', restricciones[1], 'Acción');
//      let pelicula3 = new Pelicula(3, 'La Era de Hielo', 'Director3', restricciones[0], 'Comedia');
//      let pelicula4 = new Pelicula(4, 'El Conjuro', 'Director4', restricciones[2], 'Terror');
//      peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];
//      // PELICULAS ORDENADAS POR LA RESTRICCION DE EDADES
//      // peliculas.sort(function (a, b) {
//      //      return a.restriccion.edad - b.restriccion.edad;
//      // });
//      // console.log(peliculas);
//      // CINES
//      let cine1 = new Cine(1, 'Cine 1');
//      let cine2 = new Cine(2, 'Cine 2');
//      let cine3 = new Cine(3, 'Cine 3');
//      let cine4 = new Cine(4, 'Cine 4');
//      cines = [cine1, cine2, cine3, cine4];
//      // console.log(cines);
//      // DIAS
//      let dia1 = new Dia(1, 'Lunes');
//      let dia2 = new Dia(2, 'Martes');
//      let dia3 = new Dia(3, 'Miércoles');
//      let dia4 = new Dia(4, 'Jueves');
//      let dia5 = new Dia(5, 'Viernes');
//      let dia6 = new Dia(6, 'Sábado');
//      let dia7 = new Dia(7, 'Domingo');
//      dias = [dia1, dia2, dia3, dia4, dia5, dia6, dia7];
//      // console.log(dias);
//      // HORARIOS
//      let horario1 = new Horario(1, '11:00');
//      let horario2 = new Horario(2, '15:00');
//      let horario3 = new Horario(3, '19:00');
//      let horario4 = new Horario(4, '23:00');
//      horarios = [horario1, horario2, horario3, horario4];
//      // console.log(horarios);
//      // PROMOCIONES
//      let promocion1 = new Promocion(1, '10% descuento', .9);
//      let promocion2 = new Promocion(2, '25% descuento', .75);
//      let promocion3 = new Promocion(3, '50% descuento', .5);
//      let promocion4 = new Promocion(4, 'Entradas Sin Cargo', 0);
//      promociones = [promocion1, promocion2, promocion3, promocion4];
//      // console.log(promociones);
//      // PROMOCIONES
//      let forma_de_pago1 = new Forma_de_Pago(1, 'Efectivo / Débito');
//      let forma_de_pago2 = new Forma_de_Pago(2, 'Tarjeta de Crédito');
//      let forma_de_pago3 = new Forma_de_Pago(3, 'Pago al Retirar');
//      formas_de_pago = [forma_de_pago1, forma_de_pago2, forma_de_pago3];
//      // console.log(promociones);
// }
// function preparar_compra () {
//      llenar_arrays_globales();
//      llenar_div(peliculas, 'peliculas');
// }
// // OPCIONES
// function llenar_div (array_origen, id_div) {
//      console.log(array_origen, id_div);     
//      let div_a_llenar = document.getElementById(id_div);
//      // console.log(lista.childElementCount);
//      // USAR LA FUNCION VACIAR_CONTENEDOR ??
//      if (div_a_llenar.childElementCount == 0) {
//           array_origen.forEach(elemento => {
//                let tit = document.createElement("h4");
//                tit.id = elemento.codigo;
//                tit.textContent = elemento.descripcion;
//                // tit.style.fontStyle = 'italic';
//                tit.className = 'option';
//                div_a_llenar.appendChild(tit);
//                tit.onclick = () => elegir_elemento(id_div, tit);

//                // REVISAR - APLICA SOLAMENTE PARA LAS PELICULAS
//                switch (id_div) {
//                     case 'peliculas':
//                          let sub_tit = document.createElement("h5");
//                          sub_tit.textContent = elemento.genero;
//                          sub_tit.className = 'sub_option';
//                          div_a_llenar.appendChild(sub_tit);
//                          break;
//                }
//           });
//      }
// }
// // INPUTS
// function crear_elemento (elemento, id, contenedor) {
//      let padre = document.getElementById(contenedor);
//      let hijo = document.createElement(elemento);
//      hijo.id = id;
//      hijo.style.textAlign = 'center';
//      console.log(hijo);
//      padre.appendChild(hijo);
// }
// // SELECCIONAR OPCION Y ARMAR SIGUIENTE
// function elegir_elemento (id_div, elemento_seleccionado) {
//      marcar_elemento(id_div, elemento_seleccionado);
//      console.log(elemento_seleccionado.id);
//      switch (id_div) {
//           case 'peliculas':
//                // pelicula_elegida = elemento_seleccionado.id;
//                ticket_nuevo.pelicula = elemento_seleccionado.id;
//                //edad               
//                llenar_div(cines, 'cines');
//                break;
//           case 'cines':
//                // cine_elegido = elemento_seleccionado.id;
//                ticket_nuevo.cine = elemento_seleccionado.id;
//                llenar_div(dias, 'dias');
//                break;
//           case 'dias':
//                // dia_elegido = elemento_seleccionado.id;
//                ticket_nuevo.dia = elemento_seleccionado.id;
//                llenar_div(horarios, 'horarios');
//                break;
//           case 'horarios':
//                // horario_elegido = elemento_seleccionado.id;
//                ticket_nuevo.horario = elemento_seleccionado.id;
//                //cantidad_entradas
//                crear_elemento('input', 'cantidad_entradas', 'entradas');
//                let cantidad_entradas = document.getElementById('cantidad_entradas');
//                cantidad_entradas.onkeyup = () => {
//                     ticket_nuevo.cantidad_entradas = cantidad_entradas.value;
//                }
//                break;
//           case 'promociones':
//                // //sala_elegida
//                // promocion_elegida = elemento_seleccionado.id;
//                ticket_nuevo.promocion = elemento_seleccionado.id;
//                descuento = promociones.find(promocion => promocion.codigo == ticket_nuevo.promocion).descuento;
//                console.log(promocion_elegida, descuento);
//                llenar_div(formas_de_pago, 'formas_de_pago');
//                break;
//           case 'formas_de_pago':
//                forma_de_pago_elegida = elemento_seleccionado.id;
//                //cantidad_cuotas
//                if (forma_de_pago_elegida == 2) {
//                     crear_elemento('input', 'cantidad_cuotas', 'cuotas');
//                     let cantidad_cuotas = document.getElementById('cantidad_cuotas');
//                     cantidad_cuotas.onkeyup = () => {
//                          ticket_nuevo.cantidad_cuotas = cantidad_cuotas.value;
//                     }
//                }
//                break;
//      }
// }
// function marcar_elemento (contenedor, elemento_seleccionado) {
//      // let contenedor_a_vaciar = document.getElementById(contenedor);
//      console.log(contenedor, elemento_seleccionado);
//      resetear_contenedor(contenedor);
//      elemento_seleccionado.classList.toggle('selected');
// }
// function mostrar_resumen_compra () {
//      console.log(promocion_elegida, descuento);
//      ticket_nuevo.importe = importe = calcular_importe(valor_entrada, ticket_nuevo.cantidad_entradas, descuento);
//      // calcular pagos
//      ticket_nuevo.importe_cuota = importe_cuota = calcular_cuota(importe, ticket_nuevo.cantidad_cuotas);
//      // generar ticket
//      console.log(ticket_nuevo);
//      ticket_nuevo.mostrar_importes();     
//      // guardar ticket
//      tickets.push(ticket_nuevo);
// }
// // VALIDACIONES
// function validar_pelicula (pelicula) {
//      console.log(pelicula);
//      for (const Pelicula of peliculas) {
//           if (Pelicula.codigo == pelicula.codigo) {
//                return true;
//           }
//      }
//      return false;
// }
// function validar_cine (cine) {
//      console.log(cine);
//      for (const Cine of cines) {
//           if (Cine.codigo == cine.codigo) {
//                return true;
//           }
//      }
//      return false;
// }
// function validar_dia (dia) {
//      console.log(dia);
//      for (const Dia of dias) {
//           if (Dia.codigo == dia.codigo) {
//                return true;
//           }
//      }
//      return false;
// }
// function validar_horario (horario) {
//      console.log(horario);
//      for (const Horario of horarios) {
//           if (Horario.codigo == horario.codigo) {
//                return true;
//           }
//      }
//      return false;
// }
// function validar_valor (valor) {
//      if (!isNaN(parseInt(valor))) {
//           return true;
//      } else {
//           return false;
//      }
// }
// // INGRESO DE DATOS
// function informar_edad () {
//      return prompt('Qué edad tenés?');
// }
// // CALCULOS
// function calcular_importe (valor_entrada, entradas, descuento) {
//      console.log(valor_entrada, entradas, descuento);
//      return ((valor_entrada * entradas) * descuento);
// }
// function calcular_cuota (importe, cuotas) {
//      console.log(importe, cuotas)
//      return (importe / cuotas);
// }
// APP
const valor_entrada = 100;
let seguir;
// ARRAYS
let tickets = new Array();
let restricciones = new Array();
let peliculas = new Array();
let cines = new Array();
let dias = new Array();
let horarios = new Array();
let promociones = new Array();
let formas_de_pago = new Array();
// llenar_arrays_globales();
let ticket_nuevo = new Ticket();
let pelicula_elegida = new Pelicula;
let edad;
let cine_elegido = new Cine;
let dia_elegido = new Dia;
let horario_elegido = '';
let sala_elegida = '';
let cantidad_elegida = 1;
let promocion_elegida = '';
let descuento = 1;
let forma_de_pago_elegida = '';
let cuotas_elegidas = 1;
let importe = 0;
let importe_cuota = 0;

// INICIAR LA COMPRA
// let btn__start = document.getElementById('btn__start');
// btn__start.addEventListener('click', preparar_compra);
preparar_compra();

// CONFIRMAR DATOS PARCIALES
let btn_resumen_funcion = document.getElementById('btn_resumen_funcion');
btn_resumen_funcion.onclick = () => llenar_div(promociones, 'promociones');
// btn_resumen_funcion.addEventListener('click', llenar_div(promociones, 'promociones'));

let btn_resumen_compra = document.getElementById('btn_resumen_compra');
btn_resumen_compra.onclick = () => mostrar_resumen_compra();
// btn_resumen_compra.addEventListener('click', mostrar_resumen_compra());

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