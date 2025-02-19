    const navLinks = document.querySelectorAll('.box_navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    

    // Get the navbar element
    const navbar = document.querySelector('.container_nav');
    const navbarL = document.querySelector('.logo');
    const navbarB = document.querySelector('.box_navbar');

    const navbarOffset = navbar.offsetTop;
    const navbarOffsetL = navbarL.offsetTop;
    const navbarOffsetB = navbarB.offsetTop;

    function handleNavbarScroll() {
        if (window.pageYOffset >= navbarOffset&&navbarL&&navbarB) {
            navbar.classList.add('fixed-navbar');
            navbarL.classList.add('fixed-L');
            navbarB.classList.add('fixed-B');
        } else {
            navbar.classList.remove('fixed-navbar');
            navbarL.classList.remove('fixed-L');
            navbarB.classList.remove('fixed-B');

        }
    }
    window.addEventListener('scroll', handleNavbarScroll);



aboutmeBtn=()=>{
    document.getElementById("btnAboutme").style.color = "var(--primary-text-color)";
    document.getElementById("btnEducation").style.border = "none";
    document.getElementById("btnEducation").style.color = "rgb(125, 125, 125)";
    document.getElementById("btnAboutme").style.borderBottom = "5px solid";
    document.getElementById("box_aboutme_details").style.display = "block"
    document.getElementById("box_education_details").style.display = "none"
}
educationBtn=()=>{
    document.getElementById("btnAboutme").style.color = "rgb(125, 125, 125)";
    document.getElementById("btnAboutme").style.border = "none";
    document.getElementById("btnEducation").style.color = "var(--primary-text-color)";
    document.getElementById("btnEducation").style.borderBottom = "5px solid";
    document.getElementById("box_aboutme_details").style.display = "none"
    document.getElementById("box_education_details").style.display = "flex"
}

// document.getElementById("btn_dark").addEventListener('click', function(){
//     document.getElementById('bodys').style.backgroundColor='#000';
// })
// document.getElementById("btn_light").addEventListener('click', function(){
//     document.getElementById('bodys').style.backgroundColor='#f9e6a3';
// })

// // Get the checkbox input and body element
// const darkModeToggle = document.querySelector('.input');

// // Check if there is a saved preference in localStorage
// if (localStorage.getItem('theme') === 'dark') {
//     darkModeToggle.checked = true;
// }
// darkModeToggle.addEventListener('change', () => {
//     if (darkModeToggle.checked) {
//         document.getElementById('bodys').style.backgroundColor='#000';
//         document.getElementById('page1_change_color').style.color='#00cddb';
//     } else {
//         document.getElementById('bodys').style.backgroundColor='#fff';
//         document.getElementById('page1_change_color').style.color='#000';

//     }
// });

// Get the checkbox input
const darkModeToggle = document.querySelector('.input');

// Check the stored theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.style.setProperty('--primary-bg-color', '#040614');
    document.documentElement.style.setProperty('--secondary-bg-color', '#ffffff');
    document.documentElement.style.setProperty('--primary-text-color', '#00c3ff');
    document.documentElement.style.setProperty('--secondary-text-color', '#000000');
    document.documentElement.style.setProperty('--secondary-bg1-color', '#040614');

    darkModeToggle.checked = true;
} else {
    document.documentElement.style.setProperty('--primary-bg-color', '#ffffff');
    document.documentElement.style.setProperty('--secondary-bg-color', '#040614');
    document.documentElement.style.setProperty('--primary-text-color', '#000000');
    document.documentElement.style.setProperty('--secondary-text-color', '#00c3ff');
    document.documentElement.style.setProperty('--secondary-bg2-color', '#f2eddb');

}

// Change colors when toggled
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.documentElement.style.setProperty('--primary-bg-color', '#040614');
        document.documentElement.style.setProperty('--secondary-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--primary-text-color', '#00c3ff');
        document.documentElement.style.setProperty('--secondary-text-color', '#000000');
        document.documentElement.style.setProperty('--secondary-bg1-color', '#040614');
        document.documentElement.style.setProperty('--secondary-bg2-color', '#f2eddb');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.style.setProperty('--primary-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--secondary-bg-color', '#040614');
        document.documentElement.style.setProperty('--primary-text-color', '#000000');
        document.documentElement.style.setProperty('--secondary-text-color', '#00c3ff');
        document.documentElement.style.setProperty('--secondary-bg1-color', '#f2eddb');
        document.documentElement.style.setProperty('--secondary-bg2-color', '#040614');
        localStorage.setItem('theme', 'light');
    }
});



