// Función para generar el menú de navegación y el offcanvas
function crearMenu() {
    // Contenido HTML del menú
    const menuHTML = `
        <!-- Menú de navegación con Offcanvas -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
                <button class="btn btn-tranparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                    <img src="Img/menu.svg" alt="">
                </button>
            </div>
        </nav>
        <div class="offcanvas offcanvas-start  text-lights" style="width: 800px;" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
            <div class="offcanvas-header fs-4">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-row justify-content-between">
                <!-- Redes sociales -->
                <div class="d-flex flex-column justify-content-evenly px-3" id="LineaRedes">
                    <a href="https://www.facebook.com" target="_blank" class="ColorRedes" aria-label="Facebook">
                        <i class="bi bi-facebook" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" class="ColorRedes" aria-label="Instagram">
                        <i class="bi bi-instagram" style="font-size: 1.5rem;"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank" class="ColorRedes" aria-label="YouTube">
                        <i class="bi bi-youtube" style="font-size: 1.5rem;"></i>
                    </a>
                </div>
                <!-- Logo -->
                <div class="d-flex flex-column justify-content-evenly ms-3">
                    <a href="index.html">
                    <img src="Img/logofooter.png" class="img-fluid" alt="Logo de WikiMedia Colombia">
                </a>
                </div>
                <!-- Enlaces -->
                <div class="d-flex flex-column justify-content-evenly">
                    <ul class="nav flex-column fs-2 justify-content-evenly" id="MenuEnlaces">
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="testimonios.html">Testimonios</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="contact.html">DataVis</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="prensa.html">Prensa</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="formulario.html">Colaboradores</a>
                        </li>
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="creditos.html">Creditos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Inserta el menú en el documento
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

// Llama a la función al cargar la página
crearMenu();