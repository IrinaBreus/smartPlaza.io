function readMore() {
    try {
        const btnOpen = document.querySelector('.btn-open'),
              btnClose = document.querySelector('.btn-close'),
              text = document.querySelector('.about__more-txt'),
              dots = document.querySelector('.about__more-dots');
    
        btnOpen.addEventListener('click', () => {
            text.style.display = 'block';
            dots.style.display = 'none';
            btnOpen.style.display = 'none';
        })
        btnClose.addEventListener('click', () => {
            text.style.display = 'none';
            dots.style.display = '';
            btnOpen.style.display = '';
        })
    } catch (error) {}
}

export default readMore;