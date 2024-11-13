const button = document.getElementById('btnShare');

const popup = document.getElementById('popup');

const icons = popup.querySelectorAll('a')

button.addEventListener('click', () => {
    const displayValue = window.getComputedStyle(popup).display;
    popup.style.display = displayValue === 'flex' ? 'none' : 'flex'
})

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        popup.style.display = 'none';
    })
});