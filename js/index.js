
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home-btn").addEventListener("click", function() {
        window.location.href = "/index.html";  // Absolute path
    });

    document.getElementById("experience-btn").addEventListener("click", function() {
        window.location.href = "/pages/experience.html";  // Absolute path
    });

    document.getElementById("projects-btn").addEventListener("click", function() {
        window.location.href = "/pages/projects.html";  // Absolute path
    });

    document.getElementById("blogs-btn").addEventListener("click", function() {
        window.location.href = "/pages/blogs.html";  // Absolute path
    });

    document.getElementById("resume-btn").addEventListener("click", function() {
        window.location.href = "/pages/resume.html";  // Absolute path
    });
});

