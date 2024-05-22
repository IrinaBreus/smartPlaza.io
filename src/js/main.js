import animationScroll from './modules/animationScroll';
import readMore from './modules/readMore';
import sliderAccordion from './modules/sliderAccordion';
import tabs from './modules/tabs';
// import scrollUp from './modules/scrollUp';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

// scrollUp();
timer();
tabs();
readMore();

animationScroll('.construction');
animationScroll('.offices');
if (window.screen.availWidth > 992) {
    animationScroll('.about');
}
animationScroll('.founder');
animationScroll('.haracteristics');
animationScroll('.conference-hall');
animationScroll('.located');

sliderAccordion();

});