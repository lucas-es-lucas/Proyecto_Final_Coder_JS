// VALIDACIONES
function validar_pelicula (pelicula) {
     console.log(pelicula);
     for (const Pelicula of peliculas) {
          if (Pelicula.codigo == pelicula.codigo) {
               return true;
          }
     }
     return false;
}
function validar_cine (cine) {
     console.log(cine);
     for (const Cine of cines) {
          if (Cine.codigo == cine.codigo) {
               return true;
          }
     }
     return false;
}
function validar_dia (dia) {
     console.log(dia);
     for (const Dia of dias) {
          if (Dia.codigo == dia.codigo) {
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