# MERN Product App

This is a simple MERN (MongoDB, Express, React, Node.js) application that allows users to create, update, and delete products. The app has separate folders for the frontend and backend.

## Features

- **Frontend**: Built with Vite, Chakra UI, and Zustand for state management and API calls.
- **Backend**: Developed using Node.js, Express, and MongoDB for the database.
- **CRUD**: Supports Create, Read, Update, and Delete (CRUD) operations on products.

## Folder Structure

`/frontend` # Frontend code using React, Vite, Chakra UI, Zustand `/backend` # Backend code using Node.js, Express, MongoDB

## Getting Started

### Installation

1. Clone the repository from GitHub: `git clone https://github.com/nikolakenjic/products-mern.git`
2. Navigate to the project directory: `cd your-repo-name`
3. Open the project in your code editor.

### Running the App

1. Start install dependencies: In the project root directory you should open the terminal and type:
   `npm run build`

2. Start the server: In the project root directory: `npm run start:dev`
   This will start both the frontend and backend.

### Environment Variables

Make sure to set up the following environment variables for your backend (in a `config.env` file):

```config.env
PORT=5050
MONGODB_URL=your-mongodb-uri
DATABASE_PASSWORD=your-password
```
