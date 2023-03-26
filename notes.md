
# Javascript Master
# By Victor Robles

Start: 03/18/2023
End: 03/26/2023
Time: 8 days, not bad.

Sessions NodeJS:
- 03/19/2023
- 03/20/2023
- 03/21/2023
- 03/25/2023
- 03/26/2023

Más que obvio, me voy a saltar buena parte del curso, incluyendo:
- Repaso CSS
- Repaso HTML
- Javascript
- JQuery
- MongoDB

# NodeJs
Un runtime env de multiplataforma para JS, el cual nos permite usar JS para 
algunas actividades además de desarrollo frontend.

Una de ellas es el backend con APIs REST.

Además de ser un runtime, nos da diferentes funcionalidades que se pueden comunicar con 
nuestro computador, ademas de solo ser JS sin funcionalidades de nuestro navegador, cómo 
el DOM.

## Parameters - Args 

Para ejecutar estos programas simplmente vamos a usar la cli de nodejs. Donde le vamos a pasar cómo agr el 
archivo, y si nuestro script necesita args, tambien se los podemos pasar.
Y podemos acceder a estos usando el obj integrado de NodeJs process.argv
El cual ademas de pasar los agr pasados por nosotros, 
el path del bin de node,
tambien recibe el path obsoluto del script, 
y ahí si los args pasados

Es decir desde el 2 index son los args que vayamos a usar.


## Projectos de NodeJS

En general solo con generar el project con npm init, el cual nos va a 
preguntar diferentes cosas con prompts.

## Install dependencias

En general, muy rara vez vamos a reinventar la rueda, por lo cual lo mejor es usar librerias, 
frameworks u en general componentes que otra gente ya haya creado para un desarrollo más facil.

Simplemente vamos a usar:
$ npm install <paquete> --save

el --save sirve para que este se guarde cómo dependencia en el packet.json que creamos la otra vez al 
crear el project.

Algunos paquetes que vamos a usar en este projecto, que generalmente siempre se usan para crear apis normalmente

- Express: aunque nodejs nos permite interactuar con protocolos http, con express, todo es más express.
- body-parser: poder recibir datos por post de una forma más sencilla
- connect-multiparty: poder manejar archivos en el servidor de node, existen otras 
- mongoose: ORM de mongoDB

Estas dependencias siempre van a ser vigentes, pero para desarrollar tambien podemos usar otras
que solo sean activas cuando estemos en dev, para agregar dependencies con esto, simplemente le 
agregamos a --save, -dev. 

Vamos a instalar Nodemon, un demon para que revice cada cambio y actualice la api.

Y para terminar, dentro de package, podemos defirnir scripts que nos permiten 
ejecutar un comando, generalmente para iniciar el desarrolo, testing u otra cosa.

## Node + Mongo

Para mongo vamos a usar Robo3t, una GUI FOSS GPL-2.0 que nos permite ver y manejar la db de 
mongo local. Al parecer tiene la de errores, pero meh. Probablemente solo lo vaya a usar para este curso

Nah, que coma mierda, mejor uso Compass

Para conectar Node y Mongo, vamos a usar mongoose, vamos a setear las promises de mongoose con las de 
nuestro global. 

Vamos a conectar usando connect y la uri de la db. ahí podemos usar then y catch cómo es una promise para 
funcionalidad.

## Node + Express

Para usar express lo más recomendado es hacerlo en un archivo llamado app en root. 
Donde vamos a configurar las rutas con sus controladores, crear y definir middlewares, y lo que sea CORS

Para usar express, vamos a definir app, que sea una instancia de express(). Desde ahí podemos usar use() para 
agregar middlewares y usar los metodos http:
- Get
- Post
- Put
- Delete

para definir una ruta y su callback.

El Callback tiene dos parametros, el request, o req. Y el Response.

El Request va a ser la parte que se nos va a enviar, generalmente solo datos de la connexión que se hizo desde el dispositivo y 
el servidor. Pero si llegamos a hacer un post o put, u otro metodo que traiga datos, ahí estaran.

Con Response, nosotros desde el servidor nosotros a usarlo para responder al usuario de la API, generalmente mandando 
errores u enviando datos.

Para acceder a algunos de los datos enviados, cómo el de un post de un form, usamos 
req.body.valor;
u si necesitamos algo del query de la url de la api
req.query.valor;

## Node + Mongo Models

Para crear models para nuestros datos, asi evitar que estos queden cómo cualquier cosa, vamos a hacerlo en una carpeta 
separada de nuestro proyecto llamada models. Dentro, vamos a crear un modelo por cada archivo. 
Importando mongoose y usando la clase Schema, donde le pasamos dentro de un json los tipos de nuestro modelo,
siendo tipos de datos generales cómo:
- String
- Number
- Fechas de Mongo
- Floats
- Arrays 
- Objects

Ahí lo vamos a importar usando: 
module.exports = mongoose.model('nombreModel', ModeloDefinido);

El nombre del modelo es lo que mongoose y mongodb va a usar para nuestra collection, y modelo para nuestros datos. 
Este es bastante resistente u safefail. Ya que siempre va a poner todo en plural y en minusculas, cómo una collection 
dentro de mongo.

## MVC

Model View Controller

Este sistema de arquitecutra En el cual el usuario interactua solamente indirectamente con el modelo y db. 
Interactuando con controllers, que procesan la entrada de datos, y recibiendo el output de una vista que llama y obtiene los 
datos del modelo.

## Controllers

Para trabajar con controllers, lo mejor es crear una nueva carpeta llamada controllers. Estos generalmente simplemente 
son obj que tienen functions que deberían manejar cada ruta u endpoint de la API.
Exportar con modules el obj y usarlo en el projecto.

Pero además de modularizar los controllers, tambien deberíámos hacer una carpeta y archivos para las rutas de la API.
Así tenemos todo más organizado. 
Donde simplemente vamos a crear una instancia de express.Router, y vamos a agregar las rutas con sus respectivos metodos.
Exportar la instancia de router para poder usarla en app.js

En App.js vamos a agregarlo a la app cómo si fuera un middleware, usando use('/ruta', router), pasando la ruta
Y listo, ahora podemos usar la ruta con nuestro controller.

### Guardar en Mongoose

Podemos acceder a los valores del request usando req.body, es recomendado crear un obj para filtrar los datos del body para 
tener un minimo de restricción al respetar el Model. Aunque Mongoose directamente ignora valores no definidos.

Ahora Save ya no recibe callbacks. Jueputa, el curso esta desactualizado, el peor error posible, gonorrea David que me
dijo que hiciera este curso, pero grande David que me dijo que debía mirar solo el 40% - 60% del curso y mirar por mi 
cuenta. Pero que Gonorrea David que me dijo eso aun así teniendo en cuenta que el curso no viene cómo index u introducción,
si no cómo sessions practicas de desarrollo de un projecto MEAN.

## Obtener Docs en Mongoose
Simplemente usar un find, se puede implementar diferentes metodos y limpiezas del query, como sort o limit.

## Update
A que adivina? Misma cosa, nuevo video para mostrar cómo carajo solo se hace un cambio de metodo.
Pero cómo minimo update tiene una opción, y es que por default devuelve el doc antes del cambio, 
se le puede pasar un obj con { new: true } para que pase el doc con los cambios.

## Delete
...

## Upload de Blobs
Para hacer upload, hay varias lib y modulos para implementarlo con NodeJS, pero 
nosotros vamos a usar connect-multipart.

Para usarla cómo middleware, vamos a crear una instancia de multiplart donde en las options mandamos el uploadDir,
donde los archivos pasaran en nuestro servidor de NodeJS. Esto lo pasamos a una ruta cómo primer arg u antes del 
controller.

Ahora podemos acceder a los files usando req.files donde vamos a poder enviar los archivos cómo un 
formulario, y por cada key, se nos enviara una lista de archivos.

Desde ahí nos manda el nombre del field, fileName, path dentro del server, tipo, tamaño y headers.

Para poder usarlo en Mongo, vamos a simplemente obtener el nombre con el que se ha guardado en el server, para despues
llamarlo supongo.

## Mejoras de Upload de Blebs

Finalmente un avistamiento de FS, un modulo de NodeJS que nos permite modificar el file system de nuestro OS, o nuestro servidor de NodeJS.

Vamos a agregar una condicional para que dentro de images, siempre se suban imagenes y no cualquier archivo.

connect multipart siempre va a guardar los archivos cuando los reciva, por eso vamos a usar fs para borrarlos. 
Simplemente vamos a usar de fs.unlink(path, callback);

Y ya, es async el unlink, por eso el callback.

## TERMINAMOS NODEJS PAPÁ
