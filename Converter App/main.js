const weightInput = document.querySelector('#weightInput');
const heightInput = document.querySelector('#heightInput');

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

weightInput.addEventListener('input', (e) => {
    const lbs = e.target.value;
    // Formula -> 1 kg = 2.20462262185 lb
    weight.innerHTML = `${lbs * 2.2} lbs`;
});

heightInput.addEventListener('input', (e) => {
    const cm = e.target.value;
    // Formula -> 1 foot = 30.48 cm
    height.innerHTML = `${cm * 30.48} cms`;
});

