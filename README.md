# Arquitectura de software

This project is build with:

1. [Nodejs](https://nodejs.org/en) v16.18.0
2. [MongoDB Atlas](https://www.mongodb.com/atlas)
3. [Express](https://expressjs.com/) v4.18.2
4. [Mongoose](https://mongoosejs.com/) v7.0.2
5. [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) v2.0.0

See links above for more information.

### ✅ How to prepare development environment

Install dependencies:
```shell
npm i
```
If you don't have a MongoDB Atlas account, create one and also create a database.

Open `src/environments/environment.TEMPLATE.ts` file and insert your mongodb database url, then rename the file to `environment.ts`.

### 🏃‍♂️ How to run the project in development mode

Run the project in development mode:
```shell
npm run dev
```

### 🏃‍♂️ How to run the project in production mode

Build the project:
```shell
npm run build
```

Run the project:
```shell
npm run start
```

### ✨ How to use it

This API has 1 endpoint: `/users`, which has the following methods:

`GET` /users: Get all users

`POST` /users: Create a new user (send the fields in the body), e.g:
```json
{
  "name": "John Doe",
  "email": "email@email.com",
  "age": 20
}
```

`PATCH` /users: Update user by id, send the fields you want to update in the body along with the id, e.g:
```json
{
  "_id": "60f9b9f9f9f9f9f9f9f9f9f9",
  "name": "John Doe"
}
```

`DELETE` /users: Delete user by id, send the _id to select and delete, e.g:
```json
{
  "_id": "60f9b9f9f9f9f9f9f9f9f9f9"
}
```

### 😀 Authors

- Carlos Castillo
- Carlos Quintero
- Jonathan Rodriguez
- Nestor Riaño
- Andres Ochoa
