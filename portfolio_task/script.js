// DOM elements
const projectsContainer = document.getElementById("projects");
const projectDetails = document.getElementById("project-details");
const contactForm = document.getElementById("contact-form");

// Simulated project data
const projects = [
  {
    title: "Facebook",
    description:
      "a booring old social media platform with weird info across the board",
    link: "https://www.facebook.com/",
    img: "facebook.jpg",
  },
  {
    title: "Instagram",
    description: "you will waste a lot of time here believe me",
    link: "https://www.instagram.com/",
    img: "instagram.avif",
  },
  {
    title: "Twitter OR X",
    description: "not for every one if you drink coffee maybe it's for you",
    link: "https://twitter.com/?lang=en",
    img: "twitter.png",
  },
];

// Display projects
function displayProjects() {
  projectsContainer.innerHTML = "";
  projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.textContent = project.title;
    projectElement.addEventListener("click", () => {
      displayProjectDetails(index);
    });
    projectsContainer.appendChild(projectElement);
  });
}

// Display project details
function displayProjectDetails(index) {
  const project = projects[index];
  projectDetails.innerHTML = `<a href=${project.link}><img src=${project.img}></a><h2>${project.title}</h2><p>${project.description}</p>`;
  projectDetails.classList.remove("hidden");
}
// Initial display
displayProjects();
