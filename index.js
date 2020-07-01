const colorCodes = document.querySelector('#color-codes');
const cp1 = document.querySelector('#color1');
const cp2 = document.querySelector('#color2');
const body = document.querySelector('body');

const changeBgColor = () => {
    body.style.background = `linear-gradient(to right, ${cp1.value}, ${cp2.value})`;
};

const logColor = () => {
    // console.log(cp1.value, cp2.value);
    updateColorCodes();
};

const updateColorCodes = () => {
    colorCodes.textContent = body.style.background + ';';
};

cp1.addEventListener('input', changeBgColor);
cp2.addEventListener('input', changeBgColor);

cp1.addEventListener('change', logColor);
cp2.addEventListener('change', logColor);