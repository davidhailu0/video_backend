# Express + TypeScript + Sequelize + JWT API

A scalable REST API built with **Express.js**, **TypeScript**, **Sequelize ORM (MySQL)**, and **JWT authentication**.  
Features include user authentication, avatar uploads, video metadata management, and validation with Joi.

---

## 🚀 Features

- **Authentication**

  - Register (name, email, password)
  - Login (JWT-based authentication)
  - Middleware for protected routes

- **User Module**

  - CRUD for users
  - Avatar upload (image storage with Multer)

- **Video Module**

  - Upload video metadata (title, description, YouTube ID, category, duration)
  - Search & filter videos

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

## 📂 Folder Structure
