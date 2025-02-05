# Backend Application Documentation

## Overview
This backend application is built using Node.js and Express.js, providing a RESTful API for user authentication, chat room management, and administrative functionalities. It supports real-time interactions using WebSocket and Socket.io.

## Features
- User authentication with email, Google, and Facebook.
- Profile management including avatars and bios.
- Live karaoke rooms with real-time text, voice, and video chat.
- Admin panel for managing users and rooms.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- PostgreSQL or MongoDB (depending on your choice of database)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd full-stack-web-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and configure your environment variables.

### Running the Application
To start the server, run:
```
npm start
```
The server will listen on the specified port defined in your `.env` file.

### API Documentation
Refer to the individual route files in the `src/routes` directory for detailed API endpoints and usage instructions.

### Directory Structure
- `src/app.js`: Initializes the Express application and sets up middleware.
- `src/server.js`: Entry point for the backend server.
- `src/controllers`: Contains business logic for handling requests.
- `src/models`: Defines database schemas.
- `src/routes`: Sets up API endpoints.
- `src/services`: Encapsulates logic for external service interactions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.