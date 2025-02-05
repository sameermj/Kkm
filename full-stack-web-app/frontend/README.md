# Frontend Documentation

## Overview

This is the frontend part of the full-stack web application, built using React.js and styled with Tailwind CSS. The application provides user authentication, live karaoke rooms, and real-time chat features.

## Features

- User Authentication
  - Sign-up/Login with email, Google, or Facebook.
  - Profile management with avatars and user bios.

- Singing & Chat Room Features
  - Live karaoke rooms for users to sing along with music.
  - Real-time text, voice, and video chat in rooms.
  - Users can create/join rooms with public or private access.
  - Audio effects and voice enhancements for singing.

- Admin Panel
  - Dashboard to manage users, rooms, and reports.
  - API controls to enable/disable features.
  - Moderation tools for banning users or muting rooms.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd full-stack-web-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```

This will generate a `build` directory with the optimized application.

## Folder Structure

- `src/`: Contains the source code for the application.
  - `components/`: Reusable React components.
  - `pages/`: Page components for different routes.
  - `services/`: API call services.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the application.

- `public/`: Static assets and the HTML file.

- `package.json`: Configuration file for npm.

- `tailwind.config.js`: Configuration file for Tailwind CSS.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.