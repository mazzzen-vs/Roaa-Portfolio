const projectsData = [
    {
        id: "jadeite-project",
        title: "Jadeite",
        category: "Design | UI/UX",
        description: "A premium and elegant user interface design focusing on luxury, aesthetics, and a seamless user experience.",
        arabicTitle: "Jadeite",
        images: [
            "Projects/Jadeite/1.png",
            "Projects/Jadeite/2.png",
            "Projects/Jadeite/3.png",
            "Projects/Jadeite/4.png",
            "Projects/Jadeite/5.png"
        ],
        thumb: "Projects/Jadeite/1.png"
    },
    {
        id: "glowly-app",
        title: "Glowly",
        category: "Beauty | UI/UX",
        description: "A modern, beautiful, and intuitive application with a focus on elegant aesthetics and smooth navigation.",
        arabicTitle: "Glowly",
        images: [
            "Projects/glowly/1.png",
            "Projects/glowly/2.png",
            "Projects/glowly/3.png",
            "Projects/glowly/4.png",
            "Projects/glowly/5.png",
            "Projects/glowly/6.png",
            "Projects/glowly/7.png",
            "Projects/glowly/8.png",
            "Projects/glowly/9.png",
            "Projects/glowly/10.png",
            "Projects/glowly/11.png",
            "Projects/glowly/12.png",
            "Projects/glowly/13.png",
            "Projects/glowly/14.png",
            "Projects/glowly/15.png",
            "Projects/glowly/16.png",
            "Projects/glowly/17.png",
            "Projects/glowly/18.png",
            "Projects/glowly/19.png",
            "Projects/glowly/20.png",
            "Projects/glowly/21.png",
            "Projects/glowly/22.png",
            "Projects/glowly/23.png",
            "Projects/glowly/24.png"
        ],
        thumb: "Projects/glowly/1.png"
    },
    {
        id: "bank-app",
        title: "Bank App",
        category: "Fintech | UI/UX",
        description: "A secure and intuitive banking application designed for seamless transactions, account management, and financial tracking with a premium user experience.",
        arabicTitle: "بنك",
        images: [
            "Projects/بنك/6.png", 
            "Projects/بنك/7.png", 
            "Projects/بنك/8.png"
        ],
        thumb: "Projects/بنك/6.png"
    },
    {
        id: "feast-app",
        title: "Ozoma App",
        category: "Food & Event | UI/UX",
        description: "An elegant event and catering application that helps users plan feasts, invite guests, and manage food orders with ease and style.",
        arabicTitle: "عزومه",
        images: [
            "Projects/عزومه/1.png", 
            "Projects/عزومه/2.png", 
            "Projects/عزومه/3.png"
        ],
        thumb: "Projects/عزومه/1.png"
    },
    {
        id: "traffic-fine",
        title: "Traffic Fine App",
        category: "Utility | UI/UX",
        description: "A streamlined utility app tailored for quick checking, managing, and paying of traffic violations through a clear, user-friendly interface.",
        arabicTitle: "مخالفه",
        images: [
            "Projects/مخالفه/3.png", 
            "Projects/مخالفه/4.png", 
            "Projects/مخالفه/5.png"
        ],
        thumb: "Projects/مخالفه/3.png"
    },
    {
        id: "mars-app",
        title: "Mars App",
        category: "Exploration | UI/UX",
        description: "An immersive exploration app featuring stunning space visuals, interactive facts, and an engaging digital journey to the red planet.",
        arabicTitle: "مريخ",
        images: [
            "Projects/مريخ/14.png", 
            "Projects/مريخ/15.png", 
            "Projects/مريخ/16.png", 
            "Projects/مريخ/17.png", 
            "Projects/مريخ/18.png", 
            "Projects/مريخ/19.png"
        ],
        thumb: "Projects/مريخ/14.png"
    },
    {
        id: "monorail-app",
        title: "Monorail App",
        category: "Transport | UI/UX",
        description: "A modern public transport application designed for the Monorail system, offering easy ticket booking, live route tracking, and smart scheduling.",
        arabicTitle: "مونوريل",
        images: [
            "Projects/مونوريل/20.png", 
            "Projects/مونوريل/21.png", 
            "Projects/مونوريل/22.png", 
            "Projects/مونوريل/23.png", 
            "Projects/مونوريل/24.png", 
            "Projects/مونوريل/25.png"
        ],
        thumb: "Projects/مونوريل/20.png"
    },
    {
        id: "harry-potter",
        title: "Harry Potter Experience",
        category: "Entertainment | UI/UX",
        description: "A magical and engaging interface design that brings the wizarding world to life, allowing users to explore spells, characters, and lore.",
        arabicTitle: "هاري بوتر",
        images: [
            "Projects/هاري بوتر/11.png", 
            "Projects/هاري بوتر/12.png", 
            "Projects/هاري بوتر/13.png"
        ],
        thumb: "Projects/هاري بوتر/11.png"
    },
    {
        id: "ecommerce-concept",
        title: "E-Commerce Concept",
        category: "Shopping | UI/UX",
        description: "A sleek, conversion-focused e-commerce design with intuitive product discovery, beautiful imagery, and a friction-free checkout process.",
        arabicTitle: "--",
        images: [
            "Projects/--/iPhone 13 mini - 13.png", 
            "Projects/--/iPhone 13 mini - 14.png", 
            "Projects/--/iPhone 13 mini - 15.png"
        ],
        thumb: "Projects/--/iPhone 13 mini - 13.png"
    },
    {
        id: "social-concept",
        title: "Social Dashboard",
        category: "Social | UI/UX",
        description: "A comprehensive social media dashboard emphasizing data visualization, user engagement metrics, and clean community management tools.",
        arabicTitle: "_.._",
        images: [
            "Projects/_.._/iPhone 13 mini - 16.png", 
            "Projects/_.._/iPhone 13 mini - 17.png", 
            "Projects/_.._/iPhone 13 mini - 18.png"
        ],
        thumb: "Projects/_.._/iPhone 13 mini - 16.png"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Render projects
    const projectsContainer = document.getElementById('projects-container');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalGallery = document.getElementById('modal-gallery');
    const closeModal = document.querySelector('.close-modal');

    function renderProjects() {
        projectsContainer.innerHTML = '';
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.onclick = () => openModal(project);
            
            card.innerHTML = `
                <div class="project-thumb-container">
                    <img src="${encodeURI(project.thumb)}" alt="${project.title}" class="project-thumb" loading="lazy">
                    <div class="project-overlay">
                        <span class="view-btn">View Project</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p class="project-category">${project.category}</p>
                    <p class="project-desc">${project.description}</p>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    function openModal(project) {
        modalTitle.textContent = project.title;
        if(modalDesc) {
            modalDesc.textContent = project.description;
        }
        modalGallery.innerHTML = '';
        
        project.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = encodeURI(imgSrc);
            img.alt = project.title;
            img.loading = 'lazy';
            modalGallery.appendChild(img);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }

    function closeProjectModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    closeModal.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    // Initialize
    renderProjects();
});
