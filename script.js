let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nava');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ] ').classList.add
                ('active');
            })
        }
    
    })
}

document.getElementById('sendButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
});
