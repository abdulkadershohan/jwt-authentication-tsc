<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)

# JWT Authentication with Node.js and TypeScript
This project demonstrates how to implement JSON Web Token (JWT) based authentication in a Node.js application using TypeScript.

## Features
* User registration with email and password
* User login with JWT generation
* Authentication middleware for protected routes
* TypeScript for type safety and better development experience
* MongoDB for data storage
* Express.js for RESTful API endpoints

## Requirements
* Node.js
* MongoDB
* npm or yarn
* Postman or any API testing tool


<!-- Getting Started -->

## Getting Started

Please follow the below instructions to run this project in your machine:

1. Clone this repository
   ```sh
   git clone https://github.com/abdulkadershohan/jwt-authentication-tsc.git
   cd jwt-authentication-tsc
   ```
2. Install dev dependencies
   ```sh
    npm install
    # or
    yarn install
   ```
3. Create a .env file in the root directory and add the following environment variables
   ```sh
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/jwt-auth
   JWT_SECRET=your_jwt_secret
    ```
    Replace your_jwt_secret with your own secret key for JWT.

4. Start the server:
   ```sh
   npm run dev 
   # or
   yarn dev
   ```
   Your app should be available in port 3000

5. API Endpoints:

* POST /api/user/signup
    * Registers a new user. Requires `email` ,`name` and `password` in the request body.

* POST /api/user/login
    * Logs in a user. Requires `email` and `password` in the request body.

* GET /api/user
    * Returns the user profile. Requires a valid JWT in the `Authorization` header. e.g. `Bearer your_jwt_token`

* POST /api/user/logout
    * Logs out the user by invalidating the current JWT.
    


