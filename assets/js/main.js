/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});
/*==================== switching between education and work ====================*/

function showQualification(type) {
  // Hide all timeline content
  const sections = document.querySelectorAll('.qualification__content');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove active class from all toggle buttons
  const buttons = document.querySelectorAll('.qualification__toggle .toggle-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show the selected section and activate the button
  const activeSection = document.getElementById(type);
  const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(type));

  if (activeSection) activeSection.classList.add('active');
  if (activeButton) activeButton.classList.add('active');
}
function showQualification(type) {
    const contents = document.querySelectorAll('.qualification__content');
    const buttons = document.querySelectorAll('.toggle-btn');

    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(type).classList.add('active');
    const button = Array.from(buttons).find(btn => btn.innerText.toLowerCase().includes(type));
    if (button) button.classList.add('active');
}


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
