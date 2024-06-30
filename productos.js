let mainContainer = document.getElementById("mainProducts");
let carrusel1 = document.getElementById("carruselUno");
let carrusel2 = document.getElementById("carruselDos");
let carrusel3 = document.getElementById("carruselTres");
let navPage = document.querySelectorAll(".nums-li a");
let controlPage = document.querySelectorAll(".control-li a");

// arreglo que se lla productos principales

//cada elemento del arrego es un OBJETO y cada objeto tiene 4 llaves (name, img, descripcion, price)


let productosVarios = [
    {'name':"The enchanted syrup" , 'img':"./img/src/sirup.webp", 'description':"my favorite part was seeing you laugh with me and about me haha"},
    {'name':"The enchanted brot or Super Clumsy Pau" , 'img':"./img/src/brot.webp", 'description':"hahaha thanks for don't make me feel bad, te quiero mucho Nicortle"},
    {'name':"Chef Nico" , 'img':"./img/src/pizza.jpg", 'description':"I really enjoyed every dinner and meal with you, thanks a lot every day was special."},
    {'name':"Good idea/Bad idea, who knows?" , 'img':"./img/src/bathtub.avif", 'description':"hahaha like you said, thanks for helping me recreate a romantic scene, a jacuzzi next time."},
    {'name':"I met an extraordinary singer" , 'img':"./img/src/comun.jpg", 'description':"You already know my favorite part about watching community was you singing at the beginning."},
    {'name':"My favorite gamer" , 'img':"./img/src/jak.jpeg", 'description':"Doing something that you really like was super special, thanks for your patience."},
    {'name':"Danugs and kisses" , 'img':"./img/src/oso.jpeg", 'description':"thanks for inventing a new hug with me haha and sorry for so many kisses"},
    {'name':"Don't see don't see and good job" , 'img':"./img/src/sobre.jpeg", 'description':"opening them with you was amazing haha although the result wasn't always good I had fun every time."},
    {'name':"Pew pew team" , 'img':"./img/src/nerf.jpg", 'description':"all my days were special but the last day was really one of my favorites, it was a lot of fun especially the nerfs, I really appreciate everything you did and continue to do for me."}
  
  ];

  

navPage.forEach((item) => {
    item.addEventListener("click",function(){
        navPage.forEach((item) => {item.classList.remove("actived")});
        this.classList.add('actived');
    });
});

controlPage.forEach((item) => {
  item.addEventListener("click",function(){
      let activo = document.querySelector(".nums-li .actived");
      let pagActiva = parseInt(activo.textContent) - 1;
      let boton = item.textContent;
      activo.classList.remove("actived");
      if(boton == "Next"){
        try{
          navPage.item(pagActiva+1).classList.add('actived');
        }
        catch(e){
          navPage.item(0).classList.add('actived');
        }
      }
      else{
        try{
          navPage.item(pagActiva-1).classList.add('actived');
        }
        catch(e){
          navPage.item(navPage.length-1).classList.add('actived');
        }
      }
  });
});

function addItem(item, container){
  item.forEach(element => {
      container.insertAdjacentHTML("beforeend",
          `<div class="col">
            <div class="card">
            <div class="card-img">
            <img src="${element.img}" class="mx-auto d-block" alt="Producto">
            </div>
              <div class="card-body">
              <div class="card-title">
              <h5 class="title">${element.name}</h5>
              <div class="card-body">
              <div class="card-title">
              <h5 class="title">${element.description}</h5>
              
              </div>
                
               
          </div>`)
      
  });
}

function addItem(item, container){
  item.forEach(element => {
      container.insertAdjacentHTML("beforeend",
          `<div class="col">
            <div class="card">
              <div class="card-img">
                <img src="${element.img}" class="mx-auto d-block" alt="Producto">
              </div>
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
               
               
              </div>
            </div>
          </div>`);
  });
}

function showMore(name, description, price) {
  alert(`Nombre: ${name}\nDescripción: ${description}\nPrecio: ${price}`);
}
// productos.js


function initializeArray() {
 
}

// Llama a la función de inicialización antes de usar la variable


const arrayProductosPrincipal = JSON.parse(localStorage.getItem('productosPrincipales')); // pasar un texto a un json
// se lee de localstorage la variable productosprincipales y se convierte en formato JSON
let arrayProductosPrincipales = JSON.parse(localStorage.getItem('productosPrincipales'));;
addItem(productosVarios.slice(0,3), carrusel1);
addItem(productosVarios.slice(3,6), carrusel2);
addItem(productosVarios.slice(6,9), carrusel3);
addItem(arrayProductosPrincipales, mainContainer);

// pasar un texto a un json
// se lee de localstorage la variable productosprincipales y se convierte en formato JSON

addItem(productosVarios.slice(0,3), carrusel1);
addItem(productosVarios.slice(3,6), carrusel2);
addItem(productosVarios.slice(6,9), carrusel3);
addItem(arrayProductosPrincipales, mainContainer); // se va a cargar el arreglo de productos principales para construis cards 