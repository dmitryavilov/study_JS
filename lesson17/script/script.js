window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    //Timer
    const countTimer = deadLine => {
        const timerHours = document.querySelector('#timer-hours'),
              timerMinutes = document.querySelector('#timer-minutes'),
              timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            const dateStop = new Date(deadLine).getTime(),
                  dateNow = new Date().getTime(),
                  timeRemaining = (dateStop - dateNow) / 1000,
                  seconds = Math.floor(timeRemaining % 60),
                  minutes = Math.floor((timeRemaining / 60) % 60),
                  hours = Math.floor(timeRemaining / 60 / 60);
            return {
                hours,
                minutes,
                seconds,
                timeRemaining
            }
        };

        const timer = getTimeRemaining();

        const updateClock = () => {
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.hours.toString().length < 2) {
                timerSeconds.textContent = `0${timer.seconds}`;
            } else {
                timerSeconds.textContent = timer.seconds;
            };

            if (timer.minutes.toString().length < 2) {
                timerMinutes.textContent = `0${timer.minutes}`
            } else {
                timerMinutes.textContent = timer.minutes;
            };

            if (timer.seconds.toString().length < 2) {
                timerSeconds.textContent = `0${timer.seconds}`;
            } else {
                timerSeconds.textContent = timer.seconds;
            };

            if (timer.timeRemaining < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };

        updateClock();
    };

    setInterval(countTimer, 1000, '1 april 2021');
});