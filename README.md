# 🎬 Video Backend (Express + TypeScript + Sequelize + JWT)

A backend API built with **Express.js**, **TypeScript**, **Sequelize ORM (MySQL)**, and **JWT authentication**.  
It powers a video learning platform with user management, authentication, and video metadata storage.

---

## 🚀 Features

- **Authentication**

  - Register new users (name, email, password)
  - Login with JWT-based authentication
  - Middleware for protected routes

- **User Module**

  - CRUD operations for users
  - Avatar upload (image storage with Multer)

- **Video Module**

  - Upload video metadata (title, description, YouTube ID, category, duration, thumbnailURL)
  - Search & filter videos by keyword and category

- **Endpoints**

  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/users`
  - `PUT /api/users/me`
  - `POST /api/users/avatar`
  - `POST /api/videos`
  - `GET /api/videos?search=&category=`

- **Bonus**
  - Sequelize migrations & seeds
  - Validation using Joi
  - Proper folder structure (controllers, services, models, middleware)

---

## 📂 Project Structure

```
src/
├── app.ts                    # Application entry point (Express setup)
├── server.ts                 # Server entry point (Port listening)
├── config/                   # Configuration files
│   ├── database.ts           # Database connection logic
│   └── jwt.ts                # JWT secret and expiration settings
├── middleware/               # Custom Express middleware
│   ├── authMiddleware.ts     # Request authentication logic
│   └── errorMiddleware.ts    # Global error handling
├── routes/                   # API Route definitions
│   ├── index.ts              # Main router entry
│   ├── authRoutes.ts         # Authentication endpoints
│   ├── userRoutes.ts         # User management endpoints
│   └── videoRoutes.ts        # Video management endpoints
├── controllers/              # Request controllers (handles req/res)
│   ├── authController.ts
│   ├── userController.ts
│   └── videoController.ts
├── services/                 # Business logic layer
│   ├── authService.ts
│   ├── userService.ts
│   └── videoService.ts
├── models/                   # Database models/schemas
│   ├── index.ts
│   ├── User.ts
│   └── Video.ts
├── validators/               # Input validation logic
│   ├── authValidators.ts
│   ├── userValidators.ts
│   └── videoValidators.ts
├── utils/                    # Utility helper functions
│   ├── passwordUtils.ts      # Hashing and comparison helpers
│   └── upload.ts             # File upload configuration (Multer)
├── uploads/                  # Local directory for file storage
└── migrations/               # Database migration scripts

```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/video-backend.git
cd video-backend
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Environment variables

```
PORT=3000
DB_NAME=mydb
DB_USER=myuser
DB_PASS=mypassword
DB_HOST=localhost
JWT_SECRET=supersecret
JWT_EXPIRES_IN=1h
```

### 4.Start MySQL with Docker

```bash
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=yourpassword -d mysql:latest
```

### 5.Run migrations & seeds

```bash
pnpm exec sequelize-cli db:migrate
pnpm exec sequelize-cli db:seed:all
```

### 6.Start the server

```bash
pnpm dev
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
