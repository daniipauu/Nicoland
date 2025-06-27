let header = document.getElementsByTagName('header');

let usuario = JSON.parse(localStorage.getItem("usuario"));

let navbar = `<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #143027;">
<div class="container-fluid">
    <a class="navbar-brand mx-3" href="./index.html">
        <img src="img/src/nico.png" alt="Nico" width="200">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="col-6 col-md-8">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="index.html">Home</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" style="color: white;" href="variety.html">Variety</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="more.html">More</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="games.html">Games</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="recipes.html">Recipes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="memories.html">Memories</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="album.html">Album</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " style="color: white;" href="opinion.html">Opinion</a>
                </li>
            </ul>
        </div>
        
                <h3 class="mx-2" style="color: white;"> ${usuario != null ? 'Hola '+ usuario.name.toUpperCase() : ""} </h3>
        </form>
    </div>
</div>
</div>
</nav>`;

header.item(0).insertAdjacentHTML('beforeend', navbar);

 // Obtener la URL de la página actual
 let url = window.location.href;

 // Obtener los elementos <a> dentro del navbar
 let navbarItems = document.querySelectorAll('.nav-item a');

 // Iterar sobre los elementos <a>
 navbarItems.forEach(function(item) {
     // Verificar si la URL de la página actual coincide con el enlace
     if (url.includes(item.getAttribute('href').replace("..",""))) {
         // Aplicar la clase 'active' al enlace
         item.classList.add('active');
     }
 });
