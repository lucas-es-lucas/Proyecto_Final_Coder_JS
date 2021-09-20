// VALIDACIONES
function validar_movie (movie) {
     console.log(movie);
     for (const Movie of movies) {
          if (Movie.codigo == movie.codigo) {
               return true;
          }
     }
     return false;
}
function validar_theater (theater) {
     console.log(theater);
     for (const Theater of theaters) {
          if (Theater.codigo == theater.codigo) {
               return true;
          }
     }
     return false;
}
function validar_day (day) {
     console.log(day);
     for (const Day of days) {
          if (Day.codigo == day.codigo) {
               return true;
          }
     }
     return false;
}
function validar_horario (horario) {
     console.log(horario);
     for (const Horario of horarios) {
          if (Horario.codigo == horario.codigo) {
               return true;
          }
     }
     return false;
}
function validar_valor (valor) {
     if (!isNaN(parseInt(valor))) {
          return true;
     } else {
          return false;
     }
}