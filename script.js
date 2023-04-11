const features = document.querySelector('.features');
const company = document.querySelector('.company');
const desktopScreen = window.matchMedia('(min-width: 951px)');
const mobileScreen = window.matchMedia('(max-width: 950px)');
const hamburger = document.querySelector('.hamburger');

//Mouseover Features: Desktop Version
if (desktopScreen.matches) {
    features.addEventListener('mouseover', () => {
        features.style.opacity = '1';
        document.querySelector('.arrow').style.transform = "scaleY(-1)";
        document.querySelector('.features-dropdown').style.display = 'block';
    });
    
    features.addEventListener('mouseout', () => {
        features.style.opacity = '0.5';
        document.querySelector('.arrow').style.transform = "scaleY(1)";
        document.querySelector('.features-dropdown').style.display = 'none';
    });
    
    document.querySelector('.features-dropdown').addEventListener('mouseover', () => {
        features.style.opacity = '1';
        document.querySelector('.arrow').style.transform = "scaleY(-1)";
        document.querySelector('.features-dropdown').style.display = 'block';
    });
    
    document.querySelector('.features-dropdown').addEventListener('mouseout', () => {
        features.style.opacity = '0.5';
        document.querySelector('.arrow').style.transform = "scaleY(1)";
        document.querySelector('.features-dropdown').style.display = 'none';
    });
}


//Mouseover Company: Desktop Version
/*
company.addEventListener('mouseover', () => {
    company.style.opacity = '1';
    document.querySelector('.arrow2').style.transform = "scaleY(-1)";
    document.querySelector('.company-dropdown').style.display = 'block';
});

company.addEventListener('mouseout', () => {
    company.style.opacity = '0.5';
    document.querySelector('.arrow2').style.transform = "scaleY(1)";
    document.querySelector('.company-dropdown').style.display = 'none';
});

document.querySelector('.company-dropdown').addEventListener('mouseover', () => {
    company.style.opacity = '1';
    document.querySelector('.arrow2').style.transform = "scaleY(-1)";
    document.querySelector('.company-dropdown').style.display = 'block';
});

document.querySelector('.company-dropdown').addEventListener('mouseout', () => {
    company.style.opacity = '0.5';
    document.querySelector('.arrow2').style.transform = "scaleY(1)";
    document.querySelector('.company-dropdown').style.display = 'none';
});
*/






//Mouseover Company: Mobile Version


    if (mobileScreen.matches) {
        //Mouseover Features: Mobile Version
        features.addEventListener('click', () => {
            features.classList.toggle('toggle');
            document.querySelector('.arrow').classList.toggle('toggle');
            document.querySelector('.features-dropdown').classList.toggle('toggle');
        });

        //Mouseover Company: Mobile Version
        company.addEventListener('click', () => {
            company.classList.toggle('toggle');
            document.querySelector('.arrow2').classList.toggle('toggle');
            document.querySelector('.company-dropdown').classList.toggle('toggle');
        });
    }
