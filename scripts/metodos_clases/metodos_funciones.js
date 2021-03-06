const url_JSON_funciones = '/JSONS/funciones.json';
// FUNCIONES DEL JSON (IDs)
let funciones = new Array();
// FUNCIONES DEL JSON (OBJETOS)
let funciones_completas = new Array();
// FUNCIONES FILTRADAS X ID (FILTRO ACUMULADO EN ORDEN: MOVIE, THEATER, DAY, HORARIO)
let funciones_con_la_peli = Array();
// FUNCIONES FILTRADAS PARA RESETEAR FILTROS (CUANDO DES-SELECCIONAN OPCIONES)
let funciones_xPeli = Array();
let funciones_xPeli_xCine = Array();
let funciones_xPeli_xCine_xDia = Array();
// MENSAJE SI NO HAY FUNCIONES DISPONIBLES CON ALGUN FILTRO
const mensaje_sin_funciones_disponibles = [{codigo: 0, descripcion: 'NO HAY FUNCIONES DISPONIBLES'}];

function traer_funciones_JSON () {
     $.get(url_JSON_funciones, function (respuesta, estado) {
          if (estado === 'success') {
               let funciones_JSON = respuesta;
               for (let i = 0; i < funciones_JSON.length; i++) {
                    let funcion = new Funcion;
                    funcion.id_funcion = funciones_JSON[i].id_funcion;
                    funcion.id_movie = funciones_JSON[i].id_movie;
                    funcion.id_theater = funciones_JSON[i].id_theater;
                    funcion.id_day = funciones_JSON[i].id_day;
                    funcion.id_horario = funciones_JSON[i].id_horario;
                    funciones.push(funcion);
               }
               // console.log(funciones);
               // traer_funciones_JSON_completas(funciones);
          }
     })
}
function traer_funciones_JSON_completas (funciones) {
     for (let i = 0; i < funciones.length; i++) {
          let funcion_completa = new Funcion_completa;
          funcion_completa.id_funcion = funciones[i].id_funcion;
          console.log(funciones[i]);
          console.log(movies.id);
          funcion_completa.movie = movies.find(i => i.id_movie == funciones[i].id_movie);
          funcion_completa.theater = theaters.find(i => i.codigo == funciones[i].id_theater);
          funcion_completa.day = days.find(i => i.codigo == funciones[i].id_day);
          funcion_completa.horario = days.find(i => i.codigo == funciones[i].id_horario);
          funciones_completas.push(funcion_completa);
          console.log(funcion_completa);
     }
}
// OPCIONES
function dibujar_opciones (id_div, clase, id_filtro) {
     // RECORRO LOS ARRAYS DE CLASES Y ARMO ARRAYS NUEVOS CON LOS ELEMENTOS QUE TIENEN LA PELI
     let array_de_funciones_disponibles = filtrar_funciones_con_la_peli(clase, id_filtro);
     // ARMAR MENSAJE SI NO EXISTEN FUNCIONES CON ESE FILTRO
     if (array_de_funciones_disponibles.length === 0) {
          array_de_funciones_disponibles = mensaje_sin_funciones_disponibles;
     }
     let div_a_llenar = document.getElementById(id_div);
     if (div_a_llenar.childElementCount == 0) {
          array_de_funciones_disponibles.forEach(elemento => {
               let opt = document.createElement("h4");
               opt.id = elemento.codigo;
               opt.textContent = elemento.descripcion;
               opt.classList.add('option');
               opt.classList.add(`${clase}`);
               div_a_llenar.appendChild(opt);
               if (elemento.codigo != 0) {
                    opt.onclick = () => elegir_elemento(id_div, opt, opt.id);
               }
               div_a_llenar.classList.add('enabled');
               // animaciones
               presentar_opciones(id_div, opt.id, 500, 1000, true);
          });
     }
}
function filtrar_funciones_con_la_peli (clase, id_filtro) {
     let array_de_opciones = [];
     // FUNCIONES QUE TIENEN LA PELI
     switch (clase) {
          case 'theater':
               funciones_con_la_peli = funciones_xPeli = funciones.filter(item => item.id_movie == id_filtro);
               array_de_opciones = armar_array_de_opciones_con_la_peli('theater');
               break;
          case 'day':
               funciones_con_la_peli = funciones_xPeli_xCine = funciones_con_la_peli.filter(item => item.id_theater == id_filtro);
               array_de_opciones = armar_array_de_opciones_con_la_peli('day');
               break;
          case 'horario':
               funciones_con_la_peli = funciones_xPeli_xCine_xDia = funciones_con_la_peli.filter(item => item.id_day == id_filtro);
               array_de_opciones = armar_array_de_opciones_con_la_peli('horario');
               break;
          default:
               break;
     }

     return array_de_opciones;
}
function armar_array_de_opciones_con_la_peli (clase) {
     let array_filtrado = [];
     // RECORRO LOS ARRAYS DE CLASES Y ARMO ARRAYS NUEVOS CON LOS ELEMENTOS QUE TIENEN LA PELI
     switch (clase) {
          case 'theater':
               array_filtrado = theaters;

               for (let i = 0; i < theaters.length; i++) {
                    // console.log(theaters[i].codigo);
                    if (funciones_con_la_peli.find(item => item.id_theater == theaters[i].codigo) == undefined) {
                         array_filtrado = array_filtrado.filter(item => item.codigo != theaters[i].codigo);
                    };
               };
               break;
          case 'day':
               array_filtrado = days;

               for (let i = 0; i < days.length; i++) {
                    // console.log(days[i].codigo);
                    if (funciones_con_la_peli.find(item => item.id_day == days[i].codigo) == undefined) {
                         array_filtrado = array_filtrado.filter(item => item.codigo != days[i].codigo);
                    };
               };
               break;
          case 'horario':
               array_filtrado = horarios;

               for (let i = 0; i < horarios.length; i++) {
                    // console.log(horarios[i].codigo);
                    if (funciones_con_la_peli.find(item => item.id_horario == horarios[i].codigo) == undefined) {
                         array_filtrado = array_filtrado.filter(item => item.codigo != horarios[i].codigo);
                    };
               };
               break;
          default:
               break;
     }
     // ARRAY NUEVO CON LOS ELEMENTOS QUE TIENEN LA PELI
     return array_filtrado;
}
function armar_mensaje_sin_funciones_disponibles (clase) {
     let mensaje_sin_funciones_disponibles;
     switch (clase) {
          case 'theater':
               mensaje_sin_funciones_disponibles = new Theater;
               break;
               // (0, 'NO HAY FUNCIONES DISPONIBLES', 'Estreno a Confirmar');
          case 'day':
               mensaje_sin_funciones_disponibles = new Day;
               break;
          case 'horario':
               mensaje_sin_funciones_disponibles = new Horario;
               break;
          default:
               break;
     }
     mensaje_sin_funciones_disponibles = (0, 'NO HAY FUNCIONES DISPONIBLES', 'Estreno a Confirmar');
     console.log(mensaje_sin_funciones_disponibles);
     return mensaje_sin_funciones_disponibles;
}