# 1 Instalar las siguientes librerías

npm i bootstrap
npm i json-server
npm i axios

# 2 Eliminamos el <header> del App.js

# 3 creamos carpetas en scr

components
styles

# 4 Creamos los archivos
AddUser.js => carpeta components => rface
AddUser.css => carpeta styles

# 5 Importamos en index.js

import boostrap from "bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

# 6 Correr servidor json con archivo
json-server --watch db.json --port 4000