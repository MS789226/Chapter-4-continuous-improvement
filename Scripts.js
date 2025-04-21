script.js
adding project filtering
const projects = [
    { title: "movie", category: "JavaScript" },
    { title: "fashionshow", category: "HTML/CSS" },
    { title: "comminitygamesforkids", category: "React" },
];

const projectList = document.getElementById('project-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.title}</h3><p>Category: ${project.category}</p>`;
    projectList.appendChild(projectItem);
});
