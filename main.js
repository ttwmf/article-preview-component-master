const button = document.getElementById('btnShare');

const popup = document.getElementById('popup');

const icons = popup.querySelectorAll('a')

button.addEventListener('click', () => {
    popup.style.display = 'flex';
})

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        popup.style.display = 'none';
    })
});