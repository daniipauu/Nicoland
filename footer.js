let footer = document.getElementsByTagName("footer");

let footerHTML = `<div class="contenedor-footer">
                <div class="container-fluid">
                    <div class="row footer-primera-fila">
                        <div class="col-12 col-md-6  footer-izquierda text-center text-md-start">
                            <!-- <i class="bi bi-facebook"></i> -->
                            <img class="logo-footer" src="img/src/Untitled design (2) (4).png" alt="Vitalia" width="300">
                            <div class="contenedor-iconos mt-3">
                               <a id="facebook" href="https://www.facebook.com" class="bi bi-facebook" target="_blank"></a> <!--Se modifican links-->
                                <a id="instagram" href="https://www.instagram.com" class="bi bi-instagram" target="_blank"></a>
                                <a id= "youtube" href="https://www.youtube.com" class="bi bi-youtube" target="_blank"></a>
                            </div>
                            <p>Contacto <br> daniapcm@gmail.com</p>
                        </div>
                        <div class="col-12 col-md-6 mt-4 mt-md-0 text-center">
                            <p class="hablemos">¡Let's talk!</p>
                            <p class="parrafo-hablemos">If you have any doubt, question or recommendation don't hesitate to contact me haha we accept all kind of suggestions.</p>
                        </div>
                    </div>

                    <div class="row footer-segunda-fila mt-4">
                        <hr>
                        <div
                            class="col-12 col-lg-7 text-center nav-footer d-flex flex-column flex-md-row justify-content-center justify-content-md-center align-items-center">
                            <a href="index.html">Home</a>
                            <a href="productos.html">Variety</a>
                            <a href="nosotros.html">More</a>
                            <a href="contactanos.html">Opinion</a>
                            <a href="games.html">Games</a> 

                        </div>
                        <div class="col-12 col-lg-5 text-center  text-lg-end mt-4 mt-md-0">
                            <p>Me before you 1:45:25 & Your name 1:21:30 😘😘😘😜🧡</p>
                        </div>
                    </div>
                </div>
            </div>`

footer.item(0).insertAdjacentHTML("beforeend", footerHTML);
