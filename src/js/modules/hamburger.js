const hamburger = () => {
    const btn = document.querySelector('.hamburger__btn'),
          hamburger = document.querySelector('.hamburger'),
          menuItem = document.querySelectorAll('.hamburger__menu > li');

    btn.style.transition = 'all .7s';
    btn.addEventListener('click', () => {
        btn.classList.toggle('hamburger__btn-close');
        hamburger.classList.toggle('hamburger__open');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            btn.classList.remove('hamburger__btn-close');
            hamburger.classList.remove('hamburger__open');
        })
    })
}

export default hamburger;