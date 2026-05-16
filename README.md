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

---

## Reflection

**1. Why is it important to whitelist IP addresses in a production environment? What are the risks of allowing connections from anywhere (`0.0.0.0/0`)?**

In production, whitelisting specific IP addresses limits database access to known, trusted sources only — such as your application server. Allowing `0.0.0.0/0` means any IP address can attempt a connection, which significantly increases the attack surface. If credentials are ever compromised, an attacker can connect from anywhere in the world.

**2. What is the purpose of the `dotenv` package? What other methods could you use to manage environment variables in production?**

`dotenv` loads variables from a `.env` file into `process.env`, keeping sensitive credentials out of source code. In production, environment variables can be set directly in the host operating system or server environment, outside of the application code entirely — meaning the `.env` file is a development convenience, not a production requirement.

**3. If your application failed to connect, what are the first few steps you would take to debug the issue?**

First, verify the `MONGO_URI` in `.env` is correct and the password has no placeholder text remaining. Second, check Atlas Network Access to confirm the current IP is whitelisted. Third, check the Atlas cluster status to confirm it's running. Fourth, review the error message logged to the console — it usually identifies whether the issue is authentication, network, or configuration related.