const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const testUser = {
  name: 'Test User',
  email: 'test@example.com',
  password: 'password123',
  phone: '1234567890'
};

const testUserDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/thrillquest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully!');

    // Clear existing test user
    await User.deleteOne({ email: testUser.email });
    console.log('Cleared existing test user');

    // Test user registration
    const user = new User(testUser);
    await user.save();
    console.log('\nUser registration test:');
    console.log('User created successfully:', {
      name: user.name,
      email: user.email,
      phone: user.phone,
      _id: user._id
    });

    // Test password hashing
    console.log('\nPassword hashing test:');
    console.log('Original password:', testUser.password);
    console.log('Hashed password:', user.password);
    
    // Test password comparison
    const isMatch = await user.comparePassword(testUser.password);
    console.log('\nPassword comparison test:');
    console.log('Password match:', isMatch);

    // Test invalid password
    const invalidMatch = await user.comparePassword('wrongpassword');
    console.log('Invalid password match:', invalidMatch);

    // Count total users
    const count = await User.countDocuments();
    console.log('\nTotal users in database:', count);

    process.exit(0);
  } catch (error) {
    console.error('Error testing database:', error);
    process.exit(1);
  }
};

testUserDatabase(); 