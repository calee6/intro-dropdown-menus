const featuresDropdown = document.querySelector('.features-dropdown-menu');
const companyDropdown = document.querySelector('.company-dropdown-menu');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

//Events for 'Features' (Desktop)
document.querySelector('.features').addEventListener('mouseover', () => {
    featuresDropdown.style.display = 'flex';
    document.querySelector('.arrow').classList.add('toggle');
});
featuresDropdown.addEventListener('mouseover', () => {
    featuresDropdown.style.display = 'flex';
    document.querySelector('.arrow').classList.add('toggle');
});
document.querySelector('.features').addEventListener('mouseout', () => {
    featuresDropdown.style.display = 'none';
    document.querySelector('.arrow').classList.remove('toggle');

});
featuresDropdown.addEventListener('mouseout', () => {
    featuresDropdown.style.display = 'none';
    document.querySelector('.arrow').classList.remove('toggle');
});


//Events for 'Company' (Desktop)
document.querySelector('.company').addEventListener('mouseover', () => {
    companyDropdown.style.display = 'flex';
    document.querySelector('.arrow2').classList.add('toggle');
});
companyDropdown.addEventListener('mouseover', () => {
    companyDropdown.style.display = 'flex';
    document.querySelector('.arrow2').classList.add('toggle');
});
document.querySelector('.company').addEventListener('mouseout', () => {
    companyDropdown.style.display = 'none';
    document.querySelector('.arrow2').classList.remove('toggle');
});
companyDropdown.addEventListener('mouseout', () => {
    companyDropdown.style.display = 'none';
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
