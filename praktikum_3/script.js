
const tombol = document.getElementById('tombolw');
const body = document.body;
const colorPicker = document.getElementById('colorPicker');
const fontSizeControl = document.getElementById('fontSizeControl');
const fontStyleControl = document.getElementById('fontStyleControl');


tombol.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        tombol.textContent = 'LIGHT MODE';
    } else {
        tombol.textContent = 'DARK MODE';
    }
});



colorPicker.addEventListener('change', function () {
    body.style.backgroundColor = colorPicker.value || '';
});

fontSizeControl.addEventListener('input', function () {
    const newSize = fontSizeControl.value + 'px';
    const textElements = document.querySelectorAll('.divbox p, .divbox h2');
    textElements.forEach(function(element) {
        element.style.fontSize = newSize;
    });
});

fontStyleControl.addEventListener('change', function () {
    body.style.fontFamily = fontStyleControl.value || '';
});
