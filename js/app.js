//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
    const headerElemet = document.querySelector('.header');
    this.scrollY >= 30 ? headerElemet.classList.add('active') : headerElemet.classList.remove('active')
}
window.addEventListener('scroll' , headerScroll)
//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar_menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active')
}
menuToggler.addEventListener('click' , toggleMenu);
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
    if (e.target.classList.contains('navbar_listlink')) navbarMenu.classList.remove('active');
}
window.addEventListener('click' , linksToggleMenu)
//! === SWIPER ===
const swiper = new Swiper('.myswiper' , {
    effect:'coverflow',
    grabCursor:true,
    centeredSlides:true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth:100,
        modifier: 1,
        slideShadows:true
    },
    pagination: {
        el: '.swiper-pagination'
    }
})

//! === SCROLL ANIMATION ===
const scroll = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

scroll.reveal('.showcase_title, .showcase_image, .section_metadata, .swiper',
    {
        origin:'top',
        interval:250
});

scroll.reveal('.services_image_wrapper, .about_information, .post_left',
    {
        origin:'left',
});

scroll.reveal('.services_list, .about_images, .post_right',
    {
        origin:'right',
});

scroll.reveal('.footer_container',
    {
        origin:'top',
});