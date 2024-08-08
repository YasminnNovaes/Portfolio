const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });
};

document.getElementById('sendButton').addEventListener('click', () => {
    document.getElementById('message').classList.remove('hidden');
});
