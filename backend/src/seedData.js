const mongoose = require('mongoose');
const Adventure = require('./models/Adventure');
require('dotenv').config();

const adventureData = [
  {
    name: 'Skydiving',
    category: 'air',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
    price: 39999,
    duration: '1 day',
    locations: ['Mysore, Karnataka', 'Pune, Maharashtra', 'Dehradun, Uttarakhand'],
    requirements: [
      'Minimum age: 18 years',
      'Maximum weight: 95 kg',
      'No heart conditions',
      'Comfortable with heights'
    ],
    description: 'Experience the ultimate thrill of free-falling from 15,000 feet above the ground. Our certified instructors will guide you through this exhilarating adventure.',
    highlights: [
      'Free fall at 200 km/h',
      'Stunning aerial views',
      'Professional tandem jump',
      'Safety briefing and training',
      'Certificate of completion'
    ],
    maxParticipants: 15
  },
  {
    name: 'Paragliding',
    category: 'air',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b',
    price: 12999,
    duration: '1 day',
    locations: ['Bir Billing, Himachal Pradesh', 'Kamshet, Maharashtra', 'Nandi Hills, Karnataka'],
    requirements: [
      'Minimum age: 16 years',
      'Maximum weight: 90 kg',
      'No back problems',
      'Comfortable with heights'
    ],
    description: 'Soar through the skies like a bird with our experienced paragliding instructors. Experience the freedom of flight in some of India\'s most scenic locations.',
    highlights: [
      '15-20 minute flight',
      'Scenic mountain views',
      'Professional equipment',
      'Safety training',
      'GoPro footage available'
    ],
    maxParticipants: 15
  },
  {
    name: 'Scuba Diving',
    category: 'water',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
    price: 16999,
    duration: '1 day',
    locations: ['Andaman Islands', 'Lakshadweep', 'Goa'],
    requirements: [
      'Minimum age: 12 years',
      'Basic swimming ability',
      'No respiratory problems',
      'Medical certificate required'
    ],
    description: 'Explore the underwater world with our PADI certified instructors. Discover vibrant coral reefs and marine life in India\'s best diving spots.',
    highlights: [
      'Professional equipment',
      'Underwater photography',
      'Marine life spotting',
      'Safety briefing',
      'PADI certification available'
    ],
    maxParticipants: 15
  },
  {
    name: 'White Water Rafting',
    category: 'water',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
    price: 4999,
    duration: '1 day',
    locations: ['Rishikesh, Uttarakhand', 'Kolad, Maharashtra', 'Coorg, Karnataka'],
    requirements: [
      'Minimum age: 14 years',
      'Basic swimming ability',
      'No back problems',
      'Comfortable in water'
    ],
    description: 'Navigate through thrilling rapids with our expert rafting guides. Experience the perfect blend of adventure and natural beauty.',
    highlights: [
      'Grade III-IV rapids',
      'Safety equipment',
      'Professional guides',
      'Riverside lunch',
      'Photography service'
    ],
    maxParticipants: 15
  },
  {
    name: 'Mountain Trekking',
    category: 'ground',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    price: 24999,
    duration: '3 days',
    locations: ['Himalayas', 'Western Ghats', 'Eastern Ghats'],
    requirements: [
      'Minimum age: 16 years',
      'Good physical fitness',
      'No heart conditions',
      'Previous trekking experience recommended'
    ],
    description: 'Embark on an unforgettable journey through India\'s most scenic mountain trails. Our experienced guides ensure a safe and memorable trek.',
    highlights: [
      'Professional guides',
      'Camping equipment',
      'Meals included',
      'First aid kit',
      'Trek certificate'
    ],
    maxParticipants: 15
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/thrillquest', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing data
    await Adventure.deleteMany({});
    
    // Insert new data
    await Adventure.insertMany(adventureData);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 