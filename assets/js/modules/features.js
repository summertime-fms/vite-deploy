const button = document.querySelector('.features__button');

button.addEventListener('click', (evt) => {
    const section = evt.target.closest('.features');
    section.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    section.style.color = '#f2f2f2';
})
