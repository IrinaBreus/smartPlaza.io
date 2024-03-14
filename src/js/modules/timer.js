const timer = () => {
    const startDate = document.querySelector('.start-date'),
          endDate = document.querySelector('.end-date');

    const date = new Date(),
          prewDate = new Date(date.getFullYear() - 1, 9, 5),
          nextDate = new Date(date.getFullYear() + 1, 9, 5);

    startDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(prewDate)}`;
    endDate.innerHTML = `${new Intl.DateTimeFormat('ru-Ru').format(nextDate)}`;
    
    function getDate() {
        let times = new Date(nextDate) - new Date(),
            month = Math.floor(times / (1000 * 60 * 60 * 24 * 30)),
            days = Math.floor((times / (1000 * 60 * 60 * 24)) % 30.4 ),
            hours = Math.floor((times / (1000 * 60 * 60)) % 24 ),
            minutes = Math.floor((times / (1000 * 60 )) % 60 ),
            seconds = Math.floor((times / 1000) % 60 );

        return {times, month, days, hours, minutes, seconds}
    }

    setClock();

    function setZero (num) {
        num < 10 ? num = '0' + num : num = num;
        return num;
    }
    function setClock() {
        const months = document.querySelector('.months'),
              days = document.querySelector('.days'),
              hours = document.querySelector('.hours'),
              minutes = document.querySelector('.minutes'),
              seconds = document.querySelector('.seconds');
        
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getDate();

            months.textContent = setZero(t.month);
            days.textContent = setZero(t.days);
            hours.textContent = setZero(t.hours);
            minutes.textContent = setZero(t.minutes);
            seconds.textContent = setZero(t.seconds);
        }
    }

    getDate();
}

export default timer;