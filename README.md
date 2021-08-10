# primeraEntregaProyectoCoder
Primera Entrega del proyecto final del curso de programación Backend de CoderHouse
```````````````````````````````````````````````````````````````````````````````````
Para ver el proyecto en el navegador ingresar a https://entregatpcoderhouse.herokuapp.com/

Para ejecutar desde local con el front:
--------------------------------------

ingresar a public y poner los comandos: 
npm i
npm run build (esto creara los archivos del front)
ingresar en la carpeta principal y poner el comando
npm i

IMPORTANTE: de querer ejecutar el front y el backend en dos puertos diferentes (osea levantar por
un lado el front y por el otro el backend) se debera agregarle al package.json de la carpeta public la siguiente linea:

"proxy":"http://localhost:8080",
ademas hacer los siguientes pasos:
en el archivo .env poner una variable llamada NODE_ENV y asignarle el valor dev.
ejecutar el comando node servidor.js en la carpeta principal
ejecutar el comando npm run start en la carpeta public.

-----------------------------------------------------------------------------------------
de querer solo ejecutar la api:
npm i (en la carpeta principal)
en el archivo .env poner una variable llamada NODE_ENV y asignarle el valor dev.
`````````````````````````````````````````````````````````````````````````````````````

