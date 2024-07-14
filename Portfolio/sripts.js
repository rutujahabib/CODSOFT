document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { 
            image: 'tribute.png',
            title: 'Tribute Page',
            link: '#'
        },
        {
            image: 'survey.png',
            title: 'Survey Form',
            link: '#'
        },
        {
            image: 'technical_documentation.png',
            title: 'Technical Documentation Page',
            link: '#'
        },
        {
            image: 'product_landing.png',
            title: 'Product Landing Page',
            link: '#'
        },
        {
            image: 'city_lamp.png',
            title: 'City Skyline',
            link: '#'
        },
        {
            image: 'magazine.png',
            title: 'Magazine',
            link: '#'
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectTile = document.createElement('a');
        projectTile.href = project.link;
        projectTile.className = 'project-tile';

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;

        const p = document.createElement('p');
        p.innerHTML = `<span>&lt;</span>${project.title}<span>&gt;</span>`;

        projectTile.appendChild(img);
        projectTile.appendChild(p);
        projectsGrid.appendChild(projectTile);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


