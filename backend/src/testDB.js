const mongoose = require('mongoose');
const Adventure = require('./models/Adventure');
require('dotenv').config();

const testDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/thrillquest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB successfully!');

    // Count documents
    const count = await Adventure.countDocuments();
    console.log(`Total adventures in database: ${count}`);

    // Fetch all adventures
    const adventures = await Adventure.find();
    console.log('\nAll adventures:');
    adventures.forEach(adventure => {
      console.log(`\nName: ${adventure.name}`);
      console.log(`Category: ${adventure.category}`);
      console.log(`Price: ₹${adventure.price}`);
      console.log('------------------------');
    });

    process.exit(0);
  } catch (error) {
    console.error('Error testing database:', error);
    process.exit(1);
  }
};

testDatabase(); 