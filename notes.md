
# Javascript Master
# By Victor Robles

Start: 03/18/2023
End:

Sessions NodeJS:
- 03/19/2023

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



