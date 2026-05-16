# Proyecto Final - CV Personal con Docker Compose

Aplicación web de CV personal desarrollada con ReactJS, Node.js y MySQL utilizando Docker Compose para la orquestación completa de contenedores.

---

# Tecnologías Utilizadas

- ReactJS
- Node.js
- Express
- MySQL 8.0
- Docker
- Docker Compose
- Nginx

---

# Arquitectura del Proyecto

La solución está compuesta por tres servicios:

| Servicio | Tecnología | Puerto |
|----------|-------------|---------|
| frontend | React + Nginx | 3000 |
| backend | Node.js | 4000 |
| database | MySQL 8.0 | 3306 |

Todos los servicios se comunican mediante una única red Docker.

---

# Estructura del Proyecto

```txt
proyecto-final-docker-m8/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── database/
│   └── init.sql
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Funcionalidades

La aplicación muestra:

- Fotografía personal
- Nombre
- Apellido
- Ciudad
- Formación académica

Toda la información es obtenida desde MySQL mediante el backend Node.js.

---

# Inicialización Automática de la Base de Datos

La base de datos se inicializa automáticamente mediante scripts SQL montados en:

```txt
/docker-entrypoint-initdb.d
```

El archivo `init.sql` realiza automáticamente:

- creación de base de datos
- creación de tablas
- inserción de registros iniciales

No se requiere intervención manual.

---

# Imágenes Publicadas en Docker Hub

## Frontend

```txt
david0086/aguilar-frontend:v1
```

## Backend

```txt
david0086/aguilar-backend:v1
```

---

# Requisitos

Tener instalado:

- Docker Desktop
- Docker Compose

---

# Clonar el Proyecto

```bash
git clone https://github.com/Agl-David/proyecto-final-docker-m8.git
```

Ingresar al proyecto:

```bash
cd proyecto-final-docker-m8
```

---

# Ejecutar la Aplicación

```bash
docker compose up -d
```

---

# Acceso a la Aplicación

## Frontend

```txt
http://localhost:3000
```

## Backend

```txt
http://localhost:4000/cv
```

---

# Funcionamiento Esperado

Al ejecutar:

```bash
docker compose up -d
```

Docker Compose realiza automáticamente:

1. descarga de imágenes desde Docker Hub
2. creación de red Docker
3. creación de volumen MySQL
4. inicio del contenedor MySQL
5. ejecución automática del script SQL
6. creación automática de tablas
7. inserción automática de registros
8. inicio del backend Node.js
9. conexión automática a MySQL
10. inicio del frontend React + Nginx
11. visualización completa del CV en el navegador

---

# Comandos Útiles

## Ver contenedores activos

```bash
docker ps
```

## Ver imágenes Docker

```bash
docker images
```

## Detener contenedores

```bash
docker compose down
```

## Eliminar contenedores y volumen MySQL

```bash
docker compose down -v
```

---

# Evidencias Incluidas

El proyecto incluye evidencias de:

- construcción de imágenes Docker
- publicación de imágenes en Docker Hub
- ejecución de Docker Compose
- creación automática de base de datos
- funcionamiento del backend
- funcionamiento completo del frontend

---

# Docker Compose

La aplicación utiliza:

- una única red Docker
- volumen persistente MySQL
- dependencias mediante `depends_on`
- reinicio automático del backend con `restart: always`

---

# Autor

David Adrian Aguilar Loza

Proyecto desarrollado para la práctica final de Docker Compose utilizando React, Node.js y MySQL.