API de Dragon Ball

API de Dragon Ball es una aplicación web desarrollada con React+vite y routerdown que permite explorar personajes de Dragon Ball Z. Los personajes se obtienen a través de la API pública Dragon Ball API (https://dragonball-api.com/api/characters), y se organizan en categorías como "Home" ,"Masculino", "Femenino", y una página informativa "Acerca de". La aplicación cuenta con un diseño responsivo, asegurando una experiencia de usuario óptima en dispositivos móviles, tablets y escritorios.
Características

Exploración de personajes: Visualiza una lista de personajes de Dragon Ball Z con detalles como nombre, raza, nivel base de KI, nivel total del KI y género.
Filtrado por género: Filtra personajes por categorías "Masculino" y "Femenino".
Diseño responsivo: Adaptado para todos los tamaños de pantalla, desde móviles pequeños (≤320px) hasta pantallas grandes (>1024px).
Navegación intuitiva: Barra de navegación con enlaces a las secciones "Home", "Masculino", "Femenino" y "Acerca de".
Página "Acerca de": Información sobre la aplicación e informacion sobre el creador de la aplicacion web.
Carga y manejo de errores: Muestra estados de carga y mensajes de error claros cuando falla la solicitud a la API.

Tecnologías Utilizadas

React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Para la navegación entre diferentes páginas (Home, Masculino, Femenino, Acerca de).
CSS: Estilos personalizados y responsivos para cada componente.
Dragon Ball API: API pública para obtener datos de personajes (https://dragonball-api.com/).
JavaScript (ES6+): Para la lógica de la aplicación, incluyendo manejo de estados y efectos con Hooks (useState, useEffect y UseParams).

Instalación
Sigue estos pasos para ejecutar la aplicación localmente:
Prerrequisitos

Pasos

Clona el repositorio:
git clone https://github.com/AjgarciaMontania/DragonBall
cd DragonBall


Instala las dependencias:
npm install

Instala el material MUI:
npm install @mui/material @emotion/react @emotion/styled 

Instala el routerdom para las navegaciones entre paginas:
npm i react-router-dom


Inicia la aplicación:
npm run dev

La aplicación se ejecutará en http://localhost:5173.


Uso

Página principal (Home):

Al iniciar la aplicación, verás una lista de todos los personajes de Dragon Ball Z obtenidos de la API.
Cada personaje se muestra en una tarjeta con su imagen, nombre, raza y género.


Filtrado por género:

Clickea "Masculino" o "Femenino".
Estas páginas filtran los personajes y muestran una lista de todos los personajes según su género seleccionado.


Página "Acerca de":

Haz clic en "Acerca de" en la barra de navegación para ver información sobre la aplicación y su creador.


Navegación responsiva:

En pantallas pequeñas, la barra de navegación se apila verticalmente para facilitar el uso.
Las tarjetas de personajes se ajustan automáticamente al tamaño de la pantalla.



Estructura del Proyecto
Producto2/
├── public/
│   ├── vite.svg             # Carpeta para imágenes (por ejemplo, 
├──├── src/
│   ├── assets/                     # Recursos estáticos (imágenes, etc.)
│   ├── Components/
│   │   ├── CustomCard/
│   │   │   ├── CustomCard.css      # Estilos para las tarjetas de personajes
│   │   │   └── CustomCard.jsx      # Componente para mostrar personajes
│   │   ├── CustomCard2/
│   │   │   ├── CustomCard2.css        
│   │   │   └── CustomCard2.jsx     # Variante del componente de tarjetas
│   │   ├── Footer/
│   │   │   ├── Footer.css          # Estilos para el pie de página
│   │   │   └── Footer.jsx          # Componente de pie de página
│   │   ├── Header/
│   │   │   ├── Header.css          # Estilos para el encabezado
│   │   │   └── Header.jsx          # Componente de encabezado
│   │   ├── NavBar/
│   │   │   ├── NavBar.css          # Estilos para la barra de navegación
│   │   │   └── NavBar.jsx          # Componente de barra de navegación
│   ├── pages/
│   │   ├── DetailsPage/
│   │   │   ├── AcercaDe.css        # Estilos para la página "Acerca de"
│   │   │   ├── AcercaDe.jsx        # Página "Acerca de"
│   │   │   └── DetailsPage.jsx     # Página que detalla cada tarjeta 
│   │   ├── ErrorPage/
│   │   │   ├── ErrorPage.css       # Estilos para la página de error
│   │   │   └── ErrorPage.jsx       # Página de error para rutas inválidas
│   │   ├── FilterPage/
│   │   │   ├── FilterPage.css      # Estilos para la página de filtro por género
│   │   │   └── FilterPage.jsx      # Página de filtro por género
│   │   ├── HomePage/
│   │   │   ├── HomePage.css        # Estilos para la página principal
│   │   │   └── HomePage.jsx        # Página principal
│   ├── App.css                     # Estilos globales
│   ├── App.jsx                     # Componente principal con las rutas
│   ├── main.jsx                    # Punto de entrada de la aplicación
│   └── index.css                   # Estilos globales de entrada
├── .gitignore                      # Archivos ignorados por Git
├── eslint.config.js                # Configuración de ESLint
├── index.html                      # Plantilla HTML principal
├── package.json                    # Dependencias y scripts del proyecto
├── package-lock.json               # Bloqueo de versiones de dependencias
├── README.md                       # Documentación del proyecto
└── vite.config.js                  # Configuración de Vite

Si tienes preguntas o sugerencias, puedes contactarme en:

Correo: cha1@outlook.es
GitHub: AjgarciaMontania
