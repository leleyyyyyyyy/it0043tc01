function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

let currentPage = 1;
const projectsPerPage = 3;
const totalProjects = 5;
const totalPages = Math.ceil(totalProjects / projectsPerPage);

function showPage(page) {
    currentPage = page;
    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    for (let i = 1; i <= totalProjects; i++) {
        const project = document.getElementById(`project-${i}`);
        if (i > start && i <= end) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }

    document.getElementById('prevPage').style.display = currentPage === 1 ? 'none' : 'inline';
    document.getElementById('nextPage').style.display = currentPage === totalPages ? 'none' : 'inline';

    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page${i}`).classList.remove('active');
    }
    document.getElementById(`page${currentPage}`).classList.add('active');
}

function prevPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage(1);
});


