/* ovo je JS kod za all products webpage html */

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to your server or email service
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Reset the form fields
    document.getElementById('contact-form').reset();
});

// Handle dropdown menus
document.querySelectorAll('.dropdown > a').forEach(function(dropdownLink) {
    dropdownLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        this.querySelector('::after').style.transform = dropdownMenu.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown-menu').forEach(function(dropdownMenu) {
        if (!dropdownMenu.parentElement.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            dropdownMenu.previousElementSibling.querySelector('::after').style.transform = 'rotate(0deg)';
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero');
    console.log('Scroll event detected'); // Debugging statement
    if (window.scrollY > heroSection.offsetHeight) {
        console.log('Adding scrolled class'); // Debugging statement
        navbar.classList.add('scrolled');
    } else {
        console.log('Removing scrolled class'); // Debugging statement
        navbar.classList.remove('scrolled');
    }
});

