# Frontend Documentation

## Overview

This frontend is built using React.js and Tailwind CSS, providing a responsive and modern user interface for the full-stack web application. It interacts with the backend API to manage user authentication, profile management, and real-time karaoke room functionalities.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/full-stack-web-app.git
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
This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:
```
npm run build
```
This will generate a `build` directory with optimized files for deployment.

## Folder Structure

- `public/`: Contains the static HTML file and assets.
- `src/`: Contains the React components, pages, and styles.
  - `components/`: Reusable components used throughout the application.
  - `pages/`: Main page components for different routes.
  - `styles/`: CSS files, utilizing Tailwind CSS for styling.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.

## Features

- User authentication (sign-up/login via email, Google, and Facebook).
- Profile management (avatar, bio, and settings).
- Join/Create live karaoke rooms.
- Real-time text, voice, and video chat.
- Audio effects and voice enhancements.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.