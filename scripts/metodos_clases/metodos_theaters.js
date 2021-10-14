// CINES - METODOS
function dibujar_cine(id_div, clase, img, id_movie) {
     // let array_origen = JSON.parse(localStorage.getItem(`lista_local_${clase}`));
     // console.log(array_origen, id_div);
     // FUNCIONES QUE TIENE LA PELI
     let funciones_con_la_peli = funciones.filter(item => item.id_movie == id_movie);
     console.log(funciones_con_la_peli);
     // RECORRO LOS CINES Y ARMO UN ARRAY NUEVO CON LOS CINES QUE DAN LA PELI
     let theaters_filtered = [];
     theaters_filtered = theaters;

     for (let i = 0; i < theaters.length; i++) {
          // console.log(theaters[i].codigo);
          if (funciones_con_la_peli.find(item => item.id_theater == theaters[i].codigo) == undefined) {
               // console.log(theaters[i].codigo);
               theaters_filtered = theaters_filtered.filter(item => item.codigo != theaters[i].codigo);
          };
     }
     // ARRAY DE CINES CON LOS CINES QUE TIENEN LA PELI
     console.log(theaters_filtered.length);
     // console.log(funciones_con_la_peli.length);
     if (funciones_con_la_peli.length == 0 || theaters_filtered.length == 0) {
          let theaters_filtered_sin_funciones = new Theater(0, 'PRÓXIMO ESTRENO', 'Fecha a Confirmar');
          // let theater1 = new Theater(1, 'Cine 1', 'CABA');
          theaters_filtered = [theaters_filtered_sin_funciones];
     }

     let div_a_llenar = document.getElementById(id_div);

     if (div_a_llenar.childElementCount == 0) {
          theaters_filtered.forEach(elemento => {
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
               card.onclick = () => elegir_elemento(id_div, card, card.id);

               presentar_opciones(id_div, card.id, 500, 1000, true);
          });
     }
}
