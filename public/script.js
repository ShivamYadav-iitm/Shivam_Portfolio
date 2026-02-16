// 1. Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    fetchPortfolioData();
});

// 2. Fetch data from your Backend API
async function fetchPortfolioData() {
    try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();

        // 3. Send data to the display functions
        displayProjects(data.myProjects);
        displaySkills(data.mySkills);
        displayEducation(data.myEducation);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Helper Function: Display Projects
function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small><strong>Tech:</strong> ${project.techStack.join(', ')}</small>
        `;
        container.appendChild(card);
    });
}

// Helper Function: Display Skills
function displaySkills(skills) {
    const container = document.getElementById('skills-container');
    
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.classList.add('card', 'skill-card');
        card.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.level}</p>
        `;
        container.appendChild(card);
    });
}

// Helper Function: Display Education
function displayEducation(education) {
    const container = document.getElementById('education-container');
    container.innerHTML = '';

    education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'education-item';
        div.innerHTML = `
            <h3>${edu.institute}</h3>
            <p>${edu.degree}</p>
            <small>${edu.duration}</small>
            
            <div class="cgpa-reveal">
                <strong>Current CGPA: </strong> ${edu.cgpa}
            </div>
        `;
        container.appendChild(div);
    });
}