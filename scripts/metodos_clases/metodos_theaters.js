// CINES - METODOS
function dibujar_cine(id_div, clase, img, id_movie) {
     // let array_origen = JSON.parse(localStorage.getItem(`lista_local_${clase}`));
     // console.log(id_div, clase, id_movie);
     // FUNCIONES QUE TIENE LA PELI
     // console.log(funciones_con_la_peli);
     // funciones_con_la_peli = funciones.filter(item => item.id_movie == id_movie);
     // funciones_con_la_peli = filtrar_funciones_con_la_peli(clase, id_movie);
     // RECORRO LOS CINES Y ARMO UN ARRAY NUEVO CON LOS CINES QUE TIENEN LA PELI
     let array_de_funciones_disponibles = filtrar_funciones_con_la_peli(clase, id_movie);
     // let array_de_funciones_disponibles = armar_array_de_opciones_con_la_peli('theater');
     if (array_de_funciones_disponibles.length === 0) {
          array_de_funciones_disponibles = mensaje_sin_funciones_disponibles;
          // console.log(array_de_funciones_disponibles);
     }

     let div_a_llenar = document.getElementById(id_div);
     if (div_a_llenar.childElementCount == 0) {
          array_de_funciones_disponibles.forEach(elemento => {
               // card
               // console.log('entra a dibujar el cine');
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
                    // case 'movies':
                    //      sub.textContent = elemento.genero;
                    //      sub.classList.add('card-subtitle');
                    //      sub.classList.add(`${clase}__subtitle`);
                    //      body.appendChild(sub);
                    //      break;
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
               if (elemento.codigo != 0) {
                    card.onclick = () => elegir_elemento(id_div, card, card.id);
               }
               div_a_llenar.classList.add('enabled');
               // animaciones
               presentar_opciones(id_div, card.id, 500, 1000, true);
          });
     }
}
