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


// handling carousel
const hobbyCarousel = document.querySelector( '.hobby-carousel');
const hobbyImages = document.querySelectorAll( '.hobby-carousel img');

const backButton = document.querySelector( '#back-btn');
const nextButton = document.querySelector( '#next-btn');

// counter for rotating images
let counter = 1;
const carouselSize = hobbyImages[0].clientWidth;

hobbyCarousel.style.transform = `translateX( ${ - carouselSize * counter}px)`;

console.log( hobbyCarousel, hobbyImages, carouselSize);

nextButton.addEventListener( 'click', ()=>{
    if ( counter > hobbyImages.length - 2) return;
    hobbyCarousel.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    hobbyCarousel.style.transform = `translateX( ${ - carouselSize * counter}px)`;
    console.log(counter);
});

backButton.addEventListener( 'click', ()=>{
    if ( counter < 1) return;
    hobbyCarousel.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    hobbyCarousel.style.transform = `translateX( ${ - carouselSize * counter}px)`;
    console.log( counter);
});


hobbyCarousel.addEventListener( 'transitionend', ()=> {
    if ( hobbyImages[counter].id == 'last-img') {
        console.log( hobbyImages[counter]);
        hobbyCarousel.style.transition = 'none';
        counter = hobbyImages.length - 2;
        hobbyCarousel.style.transform = `translateX( ${ - carouselSize * counter}px)`;
        console.log('fired', counter)
    }

    if ( hobbyImages[counter].id == 'first-img') {
        console.log( hobbyImages[counter]);
        hobbyCarousel.style.transition = 'none';
        counter = 1;
        hobbyCarousel.style.transform = `translateX( ${ - carouselSize * counter}px)`;
        console.log('fired', counter)
    }
})


// resizing image if the aspect ratio is not correct

const hutPicture = document.querySelector( '.main .first img');
if ( window.innerWidth / window.innerHeight >= 2 ) {

    hutPicture.style.width = window.innerWidth + "px";
}

console.log( window.innerWidth/window.innerHeight, hutPicture.style.width)