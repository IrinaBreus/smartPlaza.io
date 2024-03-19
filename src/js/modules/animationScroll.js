function animationScroll (className) {
    const parent = document.querySelector(className),
          parentPos = parent.offsetTop,
          parentHeight = parent.getBoundingClientRect().height;

    document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= parentPos - parentHeight / 4) {

            moveAnimation('.animation-center', 'center-up', 'center-up-rev');
            moveAnimation('.animation-up', 'bottom-top', 'bottom-top-rev');
            moveAnimation('.animation-right', 'right-left', 'right-left-rev');
            
        } else if (document.documentElement.scrollTop < parentPos || document.documentElement.scrollTop >= parentPos + parentHeight) {

            moveAnimation('.animation-center', 'center-up-rev', 'center-up');
            moveAnimation('.animation-up', 'bottom-top-rev', 'bottom-top');
            moveAnimation('.animation-right', 'right-left-rev', 'right-left');

        }
    })

    function moveAnimation(elemClass, addClass, removeClass) {
        try {
            let elem = parent.querySelector(elemClass);
            elem.classList.add(addClass);
            elem.classList.remove(removeClass);
        } catch (error) {}
    }
}

export default animationScroll;