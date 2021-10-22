// const JSON_funciones = "JSONS/JSON_funciones";

// $.getJSON(JSON_funciones, function (resp, est) {
//      if (est === 'success') {
//           let funciones = resp;
//           // recorro y dibujo
//           for (const funcion of funciones) {
               
//           }
//      }
// })
// API MOVIES
const url_api_movies = 'https://api.themoviedb.org/3/movie/';
const url_api_config = 'https://api.themoviedb.org/3/configuration';
const url_api_key = '?api_key=83ee70971e16f966c95c1418658d5317';
let url_images;
let image_size;
let list_movie = 'now_playing';
let id_movie = 550; //PELICULA DE PRUEBA
let lang = '&language=es';
let movies = new Array();

// const url_movies = 'https://api.themoviedb.org/3/movie/550?api_key=83ee70971e16f966c95c1418658d5317';
const url_configuration = url_api_config + url_api_key;
// console.log(url_configuration);

function get_config () {
     $.get(url_configuration, function(respuesta, estado) {
          // console.log(estado);
          // console.log(respuesta);

          if (estado === 'success') {
               url_images = respuesta.images.base_url;
               image_size = respuesta.images.poster_sizes[2];               
               // console.log(url_images, image_size);
          }
     })
}
function get_movies (url_api_movies, list_movie, url_api_key, lang) {
     let url_movies = url_api_movies + list_movie + url_api_key + lang;
     $.get(url_movies, function (respuesta, estado) {
          console.log(respuesta.results);

          if (estado === 'success') {
               let movies = respuesta.results;

               for (let i = 0; i < movies.length; i++) {
                    // console.log(movies[i].id);
                    get_movie(url_api_movies, movies[i].id, url_api_key, lang);
               }
          }
     })
}
function get_movie (url_api_movies, id_movie, url_api_key, lang) {
     let url_movie = url_api_movies + id_movie + url_api_key + lang;
     $.get(url_movie, function (respuesta, estado) {
          // console.log(estado);
          // console.log(respuesta);

          if (estado === 'success') {
               let mis_datos = respuesta;

               $('#cartelera').append(`<div class="movie">
                                        <image src="${url_images}${image_size}${mis_datos.poster_path}">
                                        <h3>${mis_datos.title}</h3>
                                        <h4>${mis_datos.genres[0].name}</h4>
                                        <h5>${mis_datos.runtime} min</h5>
                                        <p>${mis_datos.overview}</p>
                                   </div>`);
          }
     });
}
async function armar_cartelera (origen) {
     // debugger;
     // console.log(movies);
     // preparar_compra(origen);
     // console.log(theaters);
     // console.log(days);
     // console.log(horarios);
     // traer_funciones_JSON();
     // console.log(funciones);
     get_cartelera(origen);
     // console.log(movies);
     // traer_funciones_JSON_completas(funciones);
}
function get_cartelera (origen) {
     let url_movies = url_api_movies + list_movie + url_api_key + lang;
     $.get(url_movies, function (respuesta, estado) {
          // console.log(respuesta.results);

          if (estado === 'success') {
               get_config();

               let peliculas = respuesta.results;
               // console.log(peliculas.length);
               for (let i = 0; i < peliculas.length; i++) {
                    // console.log(peliculas[i].id);
                    get_pelicula(peliculas[i].id, origen);
               }
               // return peliculas;
               // console.log(peliculas);
               // console.log(movies);
          }
     })
}
function get_pelicula (id_movie, origen) {
     let url_movie = url_api_movies + id_movie + url_api_key + lang;
     $.get(url_movie, function (respuesta, estado) {
          // console.log(estado);
          // console.log(respuesta);

          if (estado === 'success') {
               let pelicula = respuesta;
               let movie = new Movie;
               movie.id = pelicula.id;
               movie.codigo = pelicula.id;
               movie.descripcion = pelicula.overview;
               movie.imagen = url_images + image_size + pelicula.poster_path;
               movie.titulo = pelicula.title;
               // movie.director = director;
               // movie.restriccion = restriccion;
               movie.genero = pelicula.genres[0].name;
               movie.poster = url_images + image_size + pelicula.poster_path;
               movie.duracion = pelicula.runtime;
               // console.log(movie);
               movies.push(movie);
               // console.log(movies);
               dibujar_pelicula(origen, 'movie', true, pelicula);
               // return movie;
          }
     });
}
function dibujar_pelicula (id_div, clase, img, pelicula) {
     // console.log(array_origen, id_div);
     let div_a_llenar = document.getElementById(id_div);
     // console.log(div_a_llenar.childElementCount);
     // card
     let card = document.createElement('div');
     card.id = pelicula.id;
     if (id_div === 'movies_tickets') {
          // card.classList.add('btn', 'col-10', 'offset-1', 'col-sm-10', 'offset-sm-1', 'col-md-6', 'offset-md-0', 'col-xl-4', 'offset-xl-0', 'col-xxl-4', 'offset-xxl-0');
          card.classList.add('btn', 'col-12', 'col-sm-12', 'col-md-6', 'offset-md-0', 'col-lg-3', 'offset-lg-0', 'col-xl-3', 'offset-xl-0', 'col-xxl-3', 'offset-xxl-0');
     } else if (id_div === 'movies_principal') {
          card.classList.add('btn', 'col-12', 'col-sm-12', 'col-md-12', 'col-lg-6', 'col-xl-6', 'col-xxl-4');
          // card.classList.add('btn', 'col-10', 'offset-1', 'col-sm-10', 'offset-sm-1', 'col-md-6', 'offset-md-0', 'col-xl-4', 'offset-xl-0', 'col-xxl-4', 'offset-xxl-0');
     }

     card.classList.add('card');
     card.classList.add('option');
     card.classList.add(`${clase}`);
     // imagen
     if (img) {
          let img = document.createElement('img');
          img.src = `${url_images}${image_size}${pelicula.poster_path}`;
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
     tit.textContent = pelicula.title;
     tit.classList.add('card-title');
     tit.classList.add(`${clase}__title`);
     body.appendChild(tit);
     // genero
     let sub = document.createElement("h5");
     sub.textContent = pelicula.genres[0].name;
     sub.classList.add('card-subtitle');
     sub.classList.add(`${clase}__subtitle`);
     body.appendChild(sub);
     // genero
     let run = document.createElement("h5");
     run.textContent = `${pelicula.runtime} min`;
     run.classList.add('card-subtitle');
     run.classList.add(`${clase}__subtitle__run`);
     body.appendChild(run);
     // sinopsis
     if (id_div == 'movies_principal') {
          let sinopsis = document.createElement("p");
          sinopsis.textContent = pelicula.overview;
          sinopsis.classList.add('card-text');
          sinopsis.classList.add(`${clase}__text`);
          body.appendChild(sinopsis);
     }
     // append al html
     card.appendChild(body);
     div_a_llenar.appendChild(card);
     card.onclick = () => elegir_elemento(id_div, card, card.id);
     
     presentar_opciones(id_div, card.id, 500, 1000, true);
}
