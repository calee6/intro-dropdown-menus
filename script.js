const featuresDropdown = document.querySelector('.features-dropdown-menu');
const companyDropdown = document.querySelector('.company-dropdown-menu');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const mediaQuery = window.matchMedia('(max-width: 650px)');
const desktopView = window.matchMedia('(min-width: 651px)');

// Events for 'Features' (Hover)
document.querySelector('.features').addEventListener('click', () => {
    featuresDropdown.classList.toggle('toggle');
    document.querySelector('.arrow').classList.toggle('toggle');
});

document.querySelector('main').addEventListener('click', () => {
    featuresDropdown.classList.remove('toggle');
    document.querySelector('.arrow').classList.remove('toggle');
});


// Events for 'Company' (Desktop)
document.querySelector('.company').addEventListener('click', () => {
    companyDropdown.classList.toggle('toggle');
    document.querySelector('.arrow2').classList.toggle('toggle');
});

document.querySelector('main').addEventListener('click', () => {
    companyDropdown.classList.remove('toggle');
    document.querySelector('.arrow2').classList.remove('toggle');
});



// Mobile
hamburger.addEventListener('click', () => {
    bar1.classList.toggle('toggle');
    bar2.classList.toggle('toggle');
    bar3.classList.toggle('toggle');
    document.querySelector('.nav-links-container').classList.toggle('toggle');
    document.querySelector('.black-bg').classList.toggle('toggle');
});

document.querySelector('.black-bg').addEventListener('click', () => {
    document.querySelector('.nav-links-container').classList.remove('toggle');
    document.querySelector('.black-bg').classList.toggle('toggle');
    bar1.classList.toggle('toggle');
    bar2.classList.toggle('toggle');
    bar3.classList.toggle('toggle');
});


//Alternative desktopView
//mediaQuery.addListener(mobileScreen);

mediaQuery.addEventListener('change', mobileScreen);

function mobileScreen(e) {
        
    if (e.matches) {
        document.querySelector('.hero').setAttribute('src', 'images/image-hero-mobile.png');

    }
    else {
        document.querySelector('.hero').setAttribute('src', 'images/image-hero-desktop.png');

    }

}

mobileScreen(mediaQuery);
