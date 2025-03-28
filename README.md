# ThrillQuest - Adventure Booking Platform

ThrillQuest is a full-stack web application for booking adventure activities. Users can browse various adventures across different categories (Air, Water, Land), book activities, and manage their bookings.

## Features

- User Authentication (Sign Up, Login)
- Adventure Categories (Air, Water, Land)
- Adventure Listings with Details
- Booking System
- User Profile Management
- Reviews and Ratings
- Responsive Design

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- CSS for styling
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd thrillquest
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Set up Environment Variables
Create a .env file in the backend directory with:
```
MONGODB_URI=mongodb://localhost:27017/thrillquest
PORT=4000
JWT_SECRET=your_jwt_secret_key_here
```

### Running the Application

1. Start MongoDB
```bash
brew services start mongodb-community
```

2. Start Backend Server
```bash
cd backend
npm start
```

3. Start Frontend Development Server
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000

## API Endpoints

### Users
- POST /api/users/register - Register a new user
- POST /api/users/login - Login user
- GET /api/users/profile - Get user profile (Protected)

### Adventures
- GET /api/adventures - Get all adventures
- GET /api/adventures/:id - Get adventure by ID
- GET /api/adventures/category/:category - Get adventures by category
- POST /api/adventures/:id/reviews - Create a review (Protected)

### Bookings
- POST /api/bookings - Create a new booking (Protected)
- GET /api/bookings - Get user's bookings (Protected)
- GET /api/bookings/:id - Get booking by ID (Protected)
- PUT /api/bookings/:id/cancel - Cancel booking (Protected)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 