# Skyscanner - Frontend

Skyscanner es un proyecto llevado a cabo por un equipo de desarrolladores del master en Full Stack Developement de la escuela Nuclio Digital School. El objeto del proyecto es un aplicativo web full stack orientado a la búsqueda y gestión de vuelos nacionales. Entre otras funcionalidades la aplicación ofrece al usuario funciones como la aplicación de filtros sobre los resultados, la creación y gestión de sesiones de usuario y la posibilidad de guardar y reservar vuelos entre otras.

![alt text](./src/files/readme/home.png)
## Acceso web

El aplicativo web esta alojado en los servidores ofrecidos por Netlify y la URL asignada es https://sky-reader.netlify.app/. Si quisiera ser usada de manera local los pasos a seguir para su instalación son los descritos a continuación.
### Instalación en local
En primer lugar debemos clonar el repositoria a nuestra máquina local usando:
```bash
git clone git@github.com:goby-lang/sample-web-app.git
```
*Se debe tener en cuenta que al tratarse de un repositorio privado, se requieren ciertos permisos para acceder al código.*

Una vez, clonado el código debemos instalar todas las dependencias con el comando:
```bash
npm install
```
Una vez hecho instalados todos los paquetes ya se puede levantar la aplicación mediante: 
```bash
npm start
```
Una vez hecho todo esto ya tendremos nuestra aplicación corriendo en https://localhost:3000.
## Descripción técnica
El aplicativo de se ha desarrollado usando **React**.

<img src="./src/files/readme/react-logo.png" alt="drawing" width="200"/>

</br>

## Librerias
Las librerias usadas en la aplicación son:

| Liberia | Utilidad |
| ----------- | ----------- |
| React-Hook-Form | Gestión de los forumalarios |
| React-Router-Dom | Navegabilidad mediante rutas url |
| JWT Decode | Decodificación del token de usuario |
| Moment | Gestión de objetos tipo Timestamp |
| React-Scripts | Creación de scripts |
| SweetAlert2 | Alertas de interacción con Backend |

Todas ellas han sido instaladas y gestionadas mediante el gestor de paquetes **npm**.
## Mapa estructural del código

```
├─ .gitignore
├─ .idea
├─ README.md
├─ build
├─ node_modules
├─ package.json
├─ public
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ api
   ├─ components
   │  ├─ avatar
   │  ├─ filters
   │  ├─ flightCard
   │  ├─ flightsTable
   │  ├─ footer
   │  ├─ icons
   │  ├─ loginForm
   │  ├─ modal
   │  ├─ navbar
   │  ├─ profileData
   │  │  ├─ accountData
   │  │  ├─ bookingResult
   │  │  └─ favoriteResult
   │  ├─ profileSidebar
   │  ├─ registerForm
   │  ├─ results
   │  ├─ searchForm
   │  ├─ searchHeader
   │  ├─ selectedCard
   │  ├─ sideBar
   │  └─ topBar
   ├─ context
   │  └─ userContext.js
   ├─ data
   ├─ files
   ├─ images
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ bookingPage
   │  ├─ home
   │  ├─ layout
   │  ├─ loginPage
   │  ├─ profile
   │  ├─ registerPage
   │  ├─ resultsPage
   │  ├─ returnFlightPage
   │  └─ successPage
   ├─ reportWebVitals.js
   └─ setupTests.js
```
## Contribuyentes
El equipo que ha llevado a cabo el proyecto esta formado por:
- Eric Capella ([Github Account](https://github.com/ericcapella))
- Carolina Marianela Gallegos ([Github Account](https://github.com/CarolinaMarianela))
- Jose Luis Conejero ([Github Account](https://github.com/jlcrayo))
- Marc Cuesta Martínez ([Github Account](https://github.com/marccuesta99))

