const burger = document.querySelector( '.burger');
const navLinksDiv = document.querySelector( '.nav-links');
const navLinks = document.querySelectorAll( '.nav-links li');

const navSlide = function() {

    burger.addEventListener( 'click', () => {

        // navigation moving inside and outside animation 
        navLinksDiv.classList.toggle( 'nav-links-active');

        // text appearing late animation
        navLinks.forEach( ( link, index) => {
            // console.log( index);

            if ( link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFadeIn 0.5s ease forwards ${ index / 10 + 0.4}s`;
            }

        });

        // burger animation
        burger.classList.toggle( 'nav-bar-on');


    });

    

}

navSlide();