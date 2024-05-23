const sliderAccordion = () => {
    if (window.screen.availWidth <= 768) {
        const sliders = document.querySelectorAll('.services__slider'),
              slide = document.querySelectorAll('.services__slide');
    
        sliders.forEach(slider => {
            slider.addEventListener('click', (e) => {
                let target = e.target.closest('.services__slide');
                if (!target) return;
                clearWidth();
                target.style.width = '100%';
            });
            
        })
        
        sliders.forEach(slider => {
            slider.addEventListener('mouseleave', () => {
                clearWidth();
            });
        })
        function clearWidth() {
            slide.forEach(elem => {
                if (window.screen.availWidth >= 768 && window.screen.availWidth < 576) {
                    elem.style.width = 'calc(100% / 6)';
                }
                if (window.screen.availWidth <= 576) {
                    elem.style.width = 'calc(100% / 3)';
                }
            })
        }
    }
    
}

export default sliderAccordion;