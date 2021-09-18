// OBJETOS
class Restriccion {
     constructor (edad, leyenda) {
          this.edad = edad,
          this.leyenda = leyenda
     }
     validar_restriccion (edad) {
          return (edad >= this.edad);
     }
}
class Pelicula {
     constructor (codigo, titulo, director, restriccion, genero, poster) {
          this.codigo = codigo,
          this.descripcion = titulo,
          this.imagen = poster,         
          this.titulo = titulo,
          this.director = director,
          this.restriccion = restriccion,
          this.genero = genero,
          this.poster = poster
          }
     getPelicula () {
          return this.titulo + ' ' + this.director + ' ' + this.restriccion.leyenda + ' ' + this.genero;
     }
}
class Cine {
     constructor (codigo, cine) {
          this.codigo = codigo,
          this.descripcion = cine,
          this.cine = cine
     }
}
class Dia {
     constructor (codigo, dia) {
          this.codigo = codigo,          
          this.descripcion = dia,
          this.dia = dia
     }
}
class Horario {
     constructor (codigo, horario) {
          this.codigo = codigo,
          this.descripcion = horario,
          this.horario = horario
     }
}
class Sala {
     constructor (codigo, sala) {
          this.codigo = codigo,
          this.descripcion = sala,
          this.sala = sala
     }
}
class Promocion {
     constructor (codigo, promocion, descuento) {
          this.codigo = codigo,
          this.descripcion = promocion,
          this.promocion = promocion,
          this.descuento = descuento
     }
}
class Forma_de_Pago {
     constructor (codigo, forma_de_pago) {
          this.codigo = codigo,
          this.descripcion = forma_de_pago,
          this.forma_de_pago = forma_de_pago
     }
}
class Ticket {
     constructor (pelicula, cine, dia, horario, sala, cantidad_entradas, cantidad_cuotas, importe, importe_cuota, promocion) {
          this.pelicula = pelicula, 
          this.cine = cine, 
          this.dia = dia, 
          this.horario = horario, 
          this.sala = sala, 
          this.cantidad_entradas = cantidad_entradas, 
          this.cantidad_cuotas = cantidad_cuotas, 
          this.importe = importe, 
          this.importe_cuota = importe_cuota, 
          this.promocion = promocion
     }
     // RESUMEN DE COMPRA
     getTicketInfo () {
          let resumen = `Resumen de compra: \nPelícula: ${this.pelicula.titulo} (${this.pelicula.genero}) en el cine ${this.cine.cine} \nFunción: día ${this.dia.dia} a las ${this.horario} en la sala ${this.sala} \n${this.cantidad_entradas} entradas \nTotal: $${this.importe} \n`;
          if (this.cantidad_cuotas > 1) {
               resumen += `Cuotas: ${this.cantidad_cuotas} de $${this.importe_cuota} \n`;
          }
          if (this.promocion != '') {
               resumen += `Promoción aplicada: ${this.promocion} \n`;
          }
          return resumen;
     }
     // MOSTRAR INFO EN HTML
     mostrar_importes () {
          let resumen = document.getElementById('resumen_compra');
          vaciar_contenedor(resumen);

          // 'IMPORTE TOTAL'
          let total = document.createElement('h3');
          total.textContent = 'Importe Total';
          resumen.appendChild(total);
          let importe = document.createElement('h3');
          importe.textContent = `$${this.importe}`;
          resumen.appendChild(importe);

          if (this.cantidad_cuotas > 1) {
               let forma_pago = document.createElement('h3');
               forma_pago.textContent = `${this.cantidad_cuotas} cuotas de $${this.importe_cuota}`;
               resumen.appendChild(forma_pago);
          }
     }
}