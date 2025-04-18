# 📝 List Post - Fullstack App

Proyecto fullstack para la gestión de publicaciones con CRUD completo.

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

- Base de datos PostgreSQL
- Ejecutar los scripts en orden (1, 2, 3)
- Usuario por defecto: `postgres`

---

## 📁 Estructura del proyecto

- `database/` - Archivos SQL
- `services/` - Backend Node.js + Prisma  
  - `src/`  
  - `package.json`
- `web/`  
  - `list_post/` - Frontend React + Vite  
    - `src/`  
    - `package.json`
- `README.md`

---

## 📦 Instalación

```bash
# 🔹 1. Clonar el proyecto
git clone https://github.com/KrotthY/list_post.git
cd list_post

# 🔹 2. Instalación del backend
cd services
pnpm install
pnpm approve-builds    # Autoriza el uso de @prisma/client u otros paquetes que lo requieran

npx prisma init --datasource-provider postgresql

# Agregar las variables de entorno en un archivo .env
# Ingresar tus credenciales según el script de la base de datos
DATABASE_URL="tu_url_de_base"
PORT=3000

npx prisma db pull
npx prisma generate
pnpm run dev

# El backend correrá en el puerto 3000

# 🔹 3. Instalación del frontend
cd ../web/list_post
pnpm install
pnpm run dev

Made with 💻 by Carlos Vidal – para fines educativos y de aprendizaje.
