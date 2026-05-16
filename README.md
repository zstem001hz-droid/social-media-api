# Social Media API

A Node.js/Express application connecting to a MongoDB Atlas cluster.

---

## Tech Stack

- Node.js
- Express
- MongoDB Node.js Driver
- dotenv

---

## Project Structure

```
social-media-api/
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file using `.env.example` as a template
4. Add your MongoDB Atlas connection string as `MONGO_URI`
5. Run `nodemon server.js`

---

## Environment Variables

| Variable  | Description                     |
| --------- | ------------------------------- |
| MONGO_URI | MongoDB Atlas connection string |

---

## API Endpoints

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | /        | Verifies database connection |
