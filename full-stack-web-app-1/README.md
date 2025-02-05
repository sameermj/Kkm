# Full-Stack Web Application

This project is a full-stack web application designed for live karaoke sessions, featuring real-time communication and user management. It includes both a backend and a frontend, with a setup wizard for easy installation.

## Features

### Installation Process
- A setup wizard at `/install` to configure database connections, admin credentials, and essential settings.
- Automatic creation of necessary database tables.
- Secure storage of environment variables.
- Redirects to the login page after successful installation.

### User Features
- Sign-up/Login via Email, Google, and Facebook.
- Profile management (avatar, bio, settings).
- Join/Create live karaoke rooms.
- Real-time text, voice, and video chat.
- Audio effects and voice enhancements.

### Admin Panel
- Dashboard for user, room, and report management.
- API controls for enabling/disabling features.
- Moderation tools (ban, mute, delete users/rooms).

### API Management
- RESTful API with JWT authentication.
- WebSocket for real-time interactions.

## Tech Stack
- **Frontend**: React.js or Next.js with Tailwind CSS.
- **Backend**: PHP with Laravel or Node.js with Express.js.
- **Database**: MySQL (for cPanel compatibility).
- **Real-time**: WebSocket with Socket.io.
- **Deployment**: Supports cPanel with auto-setup (`install.php`).

## Project Structure
```
full-stack-web-app
├── backend
│   ├── src
│   ├── config
│   ├── install.php
│   ├── package.json
│   └── .env.example
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
├── database
│   └── schema.sql
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/full-stack-web-app.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd full-stack-web-app/backend
   npm install
   ```

3. Set up the database by running the `install.php` script.

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Start the frontend application:
   ```
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.