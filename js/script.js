const menuBtnn = document.querySelector('#menubutton'); 
const navLinks = document.querySelector('#navlinks');     


menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
    

    if (navLinks.classList.contains('navactive')) {
        menuButton.textContent = 'Active';
    } else {
        menuButton.textContent = 'INactive';
    }
});


const themeToggle = document.querySelector('#themetoggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('darkmode');
    themeToggle.textContent = '☀️'; // Show sun if it's currently dark
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    
    if (document.body.classList.contains('darkmode')) {
        themeToggle.textContent = '☀️'; // Sun icon means "click to go light"
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙'; // Moon icon means "click to go dark"
        localStorage.setItem('theme', 'light');
    }
});


const projectData = [
    { title: "Project 1", description: "A cool web application built with HTML.", category: "Web" },
    { title: "Project 2", description: "An amazing mobile responsive design project.", category: "Design" },
    { title: "Project 3", description: "A complex data dashboard using advanced logic.", category: "Logic" }
];

const contentContainer = document.querySelector('#content-container');

if (contentContainer) {
    projectData.forEach((project) => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span>Tag: ${project.category}</span>
        `;

        contentContainer.appendChild(card);
    });
}

const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormValid = true;

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        nameInput.classList.remove('input-error');
        emailInput.classList.remove('input-error');
        messageInput.classList.remove('input-error');

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            nameInput.classList.add('input-error');
            isFormValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address (e.g., name@example.com).';
            emailInput.classList.add('input-error');
            isFormValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please write a message.';
            messageInput.classList.add('input-error');
            isFormValid = false;
        }

        if (isFormValid) {
            alert('Form submitted successfully!'); 
            contactForm.reset(); 
        }
    });
}