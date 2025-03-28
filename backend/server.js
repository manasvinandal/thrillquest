require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const adventureRoutes = require('./routes/adventureRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/adventures', adventureRoutes);
app.use('/api/bookings', bookingRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Server Listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
