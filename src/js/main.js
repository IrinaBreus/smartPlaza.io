import animationScroll from './modules/animationScroll';
import tabs from './modules/tabs';
// import scrollUp from './modules/scrollUp';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

// scrollUp();
timer();
tabs();

animationScroll('.construction');
animationScroll('.offices');
animationScroll('.about');
animationScroll('.founder');

});