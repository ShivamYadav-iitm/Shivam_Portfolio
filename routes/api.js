const express = require('express');
const router = express.Router();

const { Skill, Project, Education } = require('../models/Portfolio');


router.get('/portfolio', async (req, res) => {
  try {
  
    const skills = await Skill.find();
    const projects = await Project.find();
    const education = await Education.find();
    
    res.json({
      mySkills: skills,
      myProjects: projects,
      myEducation: education
    });
    
    console.log('✅ Data sent to frontend');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;