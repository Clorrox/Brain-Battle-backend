<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Teslo API

1. Clonar proyecto
2. ``` yarn install ```
3. Clonar el archivo ``` .env.template ``` y renombrarlo a ``` .env ```
4. Cambiar las varibles de entorno
5. Levantar la base de datos

1. Levantar la base de datos
```
docker-compose up
```

1. Correr las migraciones 
```
 npm run migration:generate --name=ejemploname
```

```
 npm run migration:run
```

6. Levantar: ``` yarn start:dev ```


