# SQL Form Data Transfer

A simple Node.js + SQLite app that allows you to collect user input on one HTML page and display it on another. The data is saved in a persistent SQL database.

## Features

- Collect data using HTML form (input + textarea)
- Store form data in SQLite database using Express server
- Fetch and display the latest entry on another HTML page
- No cookies or localStorage used — true persistent storage

## How It Works

1. User submits form on `index.html`.
2. Data is sent to the server via JavaScript (`fetch`) and saved in SQLite.
3. User is redirected to `another.html`, where the latest saved entry is displayed.

## Requirements

- Node.js installed on your system

## Setup

1. Clone this repository or download the code.
2. Open terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000/index.html` in your browser

## Author

Kinter - [Website](https://kinter.netlify.app/) | [GitHub](https://github.com/KM-Kinter)

---

Made with ❤️ by Kinter 
