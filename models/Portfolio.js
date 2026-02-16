const mongoose = require('mongoose');

// 1. Schema for your Skills (e.g., Java, Python)
const SkillSchema = new mongoose.Schema({
  name: String,       // "Java"
  level: String,      // "Advanced"
  icon: String        // "fa-brands fa-java" (for icons later)
});

// 2. Schema for your Projects (e.g., Project Kawach)
const ProjectSchema = new mongoose.Schema({
  title: String,      // "Project Kawach"
  description: String,// "Women's safety app..."
  techStack: [String],// ["Flutter", "Firebase"]
  link: String        // GitHub link
});

// 3. Schema for your Education (e.g., IIT Madras)
// ... inside models/Portfolio.js ...

// 3. Schema for Education
const EducationSchema = new mongoose.Schema({
  institute: String,
  degree: String,
  duration: String,
  cgpa: String  // <--- ADD THIS LINE!
});

// ... rest of the file ...

// Export them so the server can use them
module.exports = {
  Skill: mongoose.model('Skill', SkillSchema),
  Project: mongoose.model('Project', ProjectSchema),
  Education: mongoose.model('Education', EducationSchema)
};