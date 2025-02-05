# Full-Stack Web Application - Backend

## Overview
This backend is part of a full-stack web application that includes user authentication, real-time interactions, and an admin panel. The application is built using Node.js with Express.js and is designed to be deployed on cPanel with MySQL as the database.

## Features
- User authentication (sign-up/login via email, Google, and Facebook)
- Profile management
- Real-time karaoke room creation and joining
- Real-time text, voice, and video chat
- Admin panel for user and room management
- RESTful API with JWT authentication
- WebSocket support for real-time interactions

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/full-stack-web-app.git
   ```
2. Navigate to the backend directory:
   ```
   cd full-stack-web-app/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Configure the database connection in `config/database.js`.
5. Set up environment variables by copying `.env.example` to `.env` and filling in the required values.
6. Run the installation script:
   ```
   php install.php
   ```
7. Start the server:
   ```
   node src/server.js
   ```

## Directory Structure
- `src/`: Contains the main application code.
  - `controllers/`: Controller functions for handling requests.
  - `models/`: Data models for the application.
  - `routes/`: API route definitions.
  - `services/`: Business logic and service functions.
  - `app.js`: Initializes the Express application.
  - `server.js`: Starts the server.
- `config/`: Configuration files.
- `install.php`: Installation script for setting up the application.
- `package.json`: Lists dependencies and scripts.
- `.env.example`: Example environment variables.

## Usage
After installation, navigate to `www.yourdomain.com` to access the application. Use the `/install` endpoint to set up the application, and then log in to start using the features.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.