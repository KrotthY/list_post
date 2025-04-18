# 📝 List Post - Fullstack App

Proyecto fullstack para gestión de publicaciones con CRUD completo.

## 🧩 Tecnologías utilizadas

### Frontend

- React 19
- Redux Toolkit + RTK Query
- Vite
- React Hook Form + Yup
- SweetAlert2

### Backend

- Node.js + Express
- Prisma (ORM)
- Joi (validaciones)
- CORS + Helmet
- Dotenv
  
### Base de datos

- Utilizar base de datos postgres
- Ejecutar script en orden (1,2,3)
- Usuario por defecto postgres



---

## Estructura del proyecto

list_post(root)/
├── database/             # Archivos sql
├── services/             # Backend Node.js + Prisma
│   ├── src/
│   └── package.json
├── web/
│   └── list_post/        # Frontend React + Vite
│       ├── src/
│       └── package.json
└── README.md



## 📦 Instalación

```bash
### 🔹 1. Clonar el proyecto
git clone https://github.com/KrotthY/list_post.git
cd list_post

###  🔹 2.- Instalación del frontend

cd web/list_post
pnpm install
pnpm run dev


### 🔹 3- Instalacion del backend

cd services
pnpm install
pnpm approve-builds # autorize el uso de @prisma/client u otro paquete que necesite aprobacion, todos son obligatorios
npx prisma init --datasource-provider postgresql

Agregue las variables de entorno, ingrese su usuario de bd, tal como indica el scripts db
DATABASE_URL="su url de base"
PORT = 3000

npx prisma db pull
npx prisma generate
pnpm run dev

- El local se ejecutara en el puerto 3000

####   Rutas del api postman o el que estime

GET http://localhost:3000/api/v1/publication
POST http://localhost:3000/api/v1/publication
DELETE http://localhost:3000/api/v1/publication/:id

