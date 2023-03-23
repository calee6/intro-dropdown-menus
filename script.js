const features = document.querySelector('.features');
const company = document.querySelector('.company');

features.addEventListener('mouseover', () => {
    features.style.opacity = '1';
    document.querySelector('.arrow').style.transform = 'scaleY(-1)';
    document.querySelector('.features-dropdown').style.display = 'block';
});

features.addEventListener('mouseout', () => {
    features.style.opacity = '0.5';
    document.querySelector('.arrow').style.transform = 'scaleY(1)';
    document.querySelector('.features-dropdown').style.display = 'none';
});

document.querySelector('.features-dropdown').addEventListener('mouseover', () => {
    features.style.opacity = '1';
    document.querySelector('.arrow').style.transform = 'scaleY(-1)';
    document.querySelector('.features-dropdown').style.display = 'block';
});

document.querySelector('.features-dropdown').addEventListener('mouseout', () => {
    features.style.opacity = '0.5';
    document.querySelector('.arrow').style.transform = 'scaleY(1)';
    document.querySelector('.features-dropdown').style.display = 'none';
});




company.addEventListener('mouseover', () => {
    company.style.opacity = '1';
    document.querySelector('.arrow2').style.transform = 'scaleY(-1)';
    document.querySelector('.company-dropdown').style.display = 'block';
});

company.addEventListener('mouseout', () => {
    company.style.opacity = '0.5';
    document.querySelector('.arrow2').style.transform = 'scaleY(1)';
    document.querySelector('.company-dropdown').style.display = 'none';
});

document.querySelector('.company-dropdown').addEventListener('mouseover', () => {
    company.style.opacity = '1';
    document.querySelector('.arrow2').style.transform = 'scaleY(-1)';
    document.querySelector('.company-dropdown').style.display = 'block';
});

document.querySelector('.company-dropdown').addEventListener('mouseout', () => {
    company.style.opacity = '0.5';
    document.querySelector('.arrow2').style.transform = 'scaleY(1)';
    document.querySelector('.company-dropdown').style.display = 'none';
});
