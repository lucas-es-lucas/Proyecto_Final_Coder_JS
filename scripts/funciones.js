// ARMAR ARRAY DE LAS FUNCIONES:
// ID_FUNCION, ID_PELICULA, ID_CINE, ID_DIA, ID_HORARIO

// class Funcion {
//      constructor (id_funcion, id_movie, id_cinema, id_day, id_horario) {
//           this.id_funcion = id_funcion,
//           this.id_movie = id_movie,
//           this.id_cinema = id_cinema,
//           this.id_day = id_day,
//           this.id_horario = id_horario
//      }

//      getFuncion () {
//           return this.id_funcion + ',' + this.id_movie + ',' + this.id_cinema + ',' + this.id_day + ',' + this.id_horario;
//      }
// }
// // CINES
// let theater1 = new Theater(1, 'Cine 1', 'CABA');
// let theater2 = new Theater(2, 'Cine 2', 'Zona Norte');
// let theater3 = new Theater(3, 'Cine 3', 'Zon Oeste');
// let theater4 = new Theater(4, 'Cine 4', 'Zona Sur');
// theaters = [theater1, theater2, theater3, theater4];
// // guardar_localStorage(theaters, 'theater');
// // console.log(theaters);
// // DIAS
// let day1 = new Day(1, 'Lunes');
// let day2 = new Day(2, 'Martes');
// let day3 = new Day(3, 'Miércoles');
// let day4 = new Day(4, 'Jueves');
// let day5 = new Day(5, 'Viernes');
// let day6 = new Day(6, 'Sábado');
// let day7 = new Day(7, 'Domingo');
// days = [day1, day2, day3, day4, day5, day6, day7];
// // console.log(days);
// // HORARIOS
// let horario1 = new Horario(1, '11:00');
// let horario2 = new Horario(2, '13:00');
// let horario3 = new Horario(3, '15:00');
// let horario4 = new Horario(4, '17:00');
// let horario5 = new Horario(5, '19:00');
// let horario6 = new Horario(6, '21:00');
// let horario7 = new Horario(7, '23:00');
// horarios = [horario1, horario2, horario3, horario4, horario5, horario6, horario7];
// // console.log(horarios);
// // FUNCIONES
// let funciones = new Array();
// let funcion1 = new Funcion(0,550988,1,1,1);
// let funcion2 = new Funcion(1,568620,2,2,2);
// let funcion3 = new Funcion(2,580489,3,3,3);
// let funcion4 = new Funcion(3,566525,4,4,4);
// let funcion5 = new Funcion(4,597316,1,5,5);
// let funcion6 = new Funcion(5,859860,2,6,6);
// let funcion7 = new Funcion(6,588921,3,7,7);
// let funcion8 = new Funcion(7,725273,4,1,1);
// let funcion9 = new Funcion(8,597891,1,2,2);
// let funcion10 = new Funcion(9,451048,2,3,3);
// let funcion11 = new Funcion(10,385128,3,4,4);
// let funcion12 = new Funcion(11,482373,4,5,5);
// let funcion13 = new Funcion(12,675445,1,6,6);
// let funcion14 = new Funcion(13,459151,2,7,7);
// let funcion15 = new Funcion(14,508943,3,1,1);
// let funcion16 = new Funcion(15,744275,4,2,2);
// let funcion17 = new Funcion(16,379686,1,3,3);
// let funcion18 = new Funcion(17,522241,2,4,4);
// let funcion19 = new Funcion(18,619778,3,5,5);
// let funcion20 = new Funcion(19,585216,4,6,6);
// let funcion21 = new Funcion(20,585216,1,7,7);
// funciones = [funcion1, funcion2, funcion3, funcion4, funcion5, funcion6, funcion7, funcion8, funcion9, funcion10, funcion11, funcion12, funcion13, funcion14, funcion15, funcion16, funcion17, funcion18, funcion19, funcion20, funcion21];
// // console.log(funciones);

// const url_JSON = '/JSONS/funciones.json';

// function traer_funciones_JSON () {
//      $.get(url_JSON, function (respuesta, estado) {
//           if (estado === 'success') {
//                let funciones_JSON = respuesta;
//                console.log(funciones_JSON);
//                for (const funcion_JSON of funciones_JSON) {
//                     let funcion = new Funcion;
//                     funcion.id_funcion = funcion_JSON.id_funcion;
//                     funcion.id_movie = funcion_JSON.id_movie;
//                     funcion.id_cinema = funcion_JSON.id_cinema;
//                     funcion.id_day = funcion_JSON.id_day;
//                     funcion.id_horario = funcion_JSON.id_horario;
//                     console.log(funcion);
//                }
//                // return funciones;
//           }
//      })
// }

// const info_JSON = {id_funcion: 0, id_movie: 550988, id_cinema: 1, id_day: 1, id_horario: 1};
// console.log(funcion1);
// function llenar_JSON () {
//      $.post(url_JSON, info_JSON, (respuesta, estado) => {
//           console.log(respuesta);
//           if (estado === 'success') {
//                alert('info OK');
//           };
//      });
// }
