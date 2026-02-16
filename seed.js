require('dotenv').config(); 
const mongoose = require('mongoose');
// Import the models we just created
const { Skill, Project, Education } = require('./models/Portfolio');

// Connect to the SAME database as your server
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to Cloud DB for Seeding'))
  .catch(err => console.log('❌ Seeding Error:', err));

const seedDB = async () => {
  // 1. Clear any old data so we don't get duplicates
  await Skill.deleteMany({});
  await Project.deleteMany({});
  await Education.deleteMany({});

  // 2. Define YOUR Data
 // 2. Define YOUR Data
  const mySkills = [
    { name: 'JavaScript', level: 'Advanced', icon: 'fa-js' },
    { name: 'React JS', level: 'Advanced', icon: 'fa-react' },
    { name: 'Next.js', level: 'Intermediate', icon: 'fa-server' }, 
    { name: 'Node.js', level: 'Advanced', icon: 'fa-node' },
    { name: 'SQL', level: 'Intermediate', icon: 'fa-database' },
    { name: 'Python', level: 'Advanced', icon: 'fa-python' }
  ];

  const myProjects = [
    {
      title: 'Kawach',
      description: 'A mobile app for women safety in India.',
      techStack: ['Flutter', 'Firebase', 'Google Maps'],
      link: '#'
    },
    {
      title: 'Deloitte Job Simulation Internship',
      description: 'Data Analytics visualization and dashboarding.',
      techStack: ['Tableau', 'Excel', 'Python'],
      link: '#'
    }
  ];

 // 3. Your Education (Updated with CGPA)
  const myEducation = [
    {
      institute: 'IIT Madras',
      degree: 'BS in Data Science & Applications',
      duration: '2024 - 2028',
      cgpa: '7.33' // New Field
    },
    {
      institute: 'Mizoram University',
      degree: 'B.Tech in Computer Engineering',
      duration: '2024 - 2028',
      cgpa: '8.37' // New Field
    }
  ];

  // 3. Insert into Database
  await Skill.insertMany(mySkills);
  await Project.insertMany(myProjects);
  await Education.insertMany(myEducation);

  console.log('✅ Database Seeded with Shivam\'s Data!');
  process.exit(); // Stop the script
};

seedDB();