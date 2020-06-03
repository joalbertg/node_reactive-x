# Curso de RXJS

* Lo primero que debemos de hacer después de descargar el repositorio, es ejecutar el comando:

```
docker-compose run app yarn install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los `node_modules`, entonces podermos ejecutar el proyecto de con el siguiente comando.

```
docker-compose up
```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8080```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```docker-compose.yml``` >> ports.

```
version: '3'
services:
  app:
    build: .
    command: sh -c "yarn start"
    volumes:
      - .:/myapp
    ports:
      - "[new_port]:8080"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```docker-compose up``` nuevamente)

* [quicktype][app_quicktype_io]
* [reqres in][reqres_in]

[app_quicktype_io]: https://app.quicktype.io/
[reqres_in]: https://reqres.in/

