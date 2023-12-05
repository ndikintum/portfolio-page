  // Sample data for projects and technologies
  const projects = [
  'Project 1: Web App',
  'Project 2: Mobile App',
  'Project 3: Data Analysis Tool',
  'Project 4: E-commerce Website',
  'Project 5: Chat Application'
]

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB']

// Function to update the projects list
function updateProjectsList () {
  const projectsList = document.getElementById('projects-list')
  projectsList.innerHTML = ''
  projects.forEach(project => {
    const li = document.createElement('li')
    li.textContent = project
    projectsList.appendChild(li)
  })
}

// Function to update the technologies list
function updateTechList () {
  const techList = document.getElementById('tech-list')
  techList.innerHTML = ''
  technologies.forEach(tech => {
    const li = document.createElement('li')
    li.textContent = tech
    techList.appendChild(li)
  })
}

// Initial update of lists
updateProjectsList()
updateTechList()

// Example of adding a new technology
// technologies.push('New Technology')
// updateTechList()

// Example of removing a technology
// technologies = technologies.filter(tech => tech !== Node.js)
// updateTechList()
