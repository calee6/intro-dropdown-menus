const features = document.querySelector('.features');
const company = document.querySelector('.company');
const hamburger = document.querySelector('.hamburger');

//Mouseover Features: Desktop Version
const hoverFeatures = features.addEventListener('mouseover', () => {
    features.style.opacity = '1';
    document.querySelector('.arrow').style.transform = "scaleY(-1)";
    document.querySelector('.features-dropdown').style.display = 'block';
});

features.addEventListener('mouseout', () => {
    features.style.opacity = '0.5';
    document.querySelector('.arrow').style.transform = "scaleY(1)";
    document.querySelector('.features-dropdown').style.display = 'none';
});



//Mouseover Company: Desktop Version










/*

company.addEventListener('mouseover', () => {
    company.style.opacity = '1';
    document.querySelector('.arrow2').style.transform = "scaleY(1)";
    document.querySelector('.company-dropdown').style.display = 'block';

    company.addEventListener('mouseout', () => {
        company.style.opacity = '0.5';
        document.querySelector('.arrow2').style.transform = "scaleY(1)";
        document.querySelector('.company-dropdown').style.display = 'none';
    });
});

hamburger.addEventListener('click', () => {
    document.querySelector('.bar1').classList.toggle('toggle');
    document.querySelector('.bar2').classList.toggle('toggle');
    document.querySelector('.bar3').classList.toggle('toggle');
});

*/


