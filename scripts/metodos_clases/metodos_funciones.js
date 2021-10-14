const url_JSON_funciones = '/JSONS/funciones.json';
let funciones = new Array();
let funciones_completas = new Array();

function traer_funciones_JSON () {
     $.get(url_JSON_funciones, function (respuesta, estado) {
          if (estado === 'success') {
               let funciones_JSON = respuesta;
               console.log(funciones_JSON);
               for (let i = 0; i < funciones_JSON.length; i++) {
                    let funcion = new Funcion;
                    funcion.id_funcion = funciones_JSON[i].id_funcion;
                    funcion.id_movie = funciones_JSON[i].id_movie;
                    funcion.id_theater = funciones_JSON[i].id_theater;
                    funcion.id_day = funciones_JSON[i].id_day;
                    funcion.id_horario = funciones_JSON[i].id_horario;
                    funciones.push(funcion);
               }
               console.log(funciones);
          }
     })
}
function traer_funciones_JSON_completas (funciones) {
     for (let i = 0; i < funciones.length; i++) {
          let funcion_completa = new Funcion_completa;
          funcion_completa.id_funcion = funciones[i].id_funcion;

          // console.log(funciones_JSON[i].id_movie, funciones_JSON[i].id_theater,funciones_JSON[i].id_day, funciones_JSON[i].id_horario);
          // let item =   movies.find(i => i.id == funciones[i].id_movie)
          // let item = calculos.find(i => i.id == elemento.id);
          console.log(movies);
          funcion_completa.movie = movies.find(i => i.codigo == funciones[i].id_movie);
          funcion_completa.theater = theaters.find(i => i.codigo == funciones[i].id_theater);
          funcion_completa.day = days.find(i => i.codigo == funciones[i].id_day);
          funcion_completa.horario = days.find(i => i.codigo == funciones[i].id_horario);
          funciones_completas.push(funcion_completa);
          console.log(funcion_completa);
     }
}