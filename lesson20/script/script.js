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

    //Menu

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', e => {
            let target = e.target;
                target = target.closest('a');

            if (target) {
                handlerMenu();
            };
        });
    };

    toggleMenu();

    //Popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popupClose = document.querySelector('.popup-close');
     
        let opacityCounter = 0,
            int;

        const animatePopup = () => {
            if (opacityCounter < 1) {
                popup.style.display = 'block';
                opacityCounter += 0.01;
                popup.style.opacity = opacityCounter;
            } else {
                clearInterval(int);
            }
        };
        
        popupBtn.forEach(item => {
            item.addEventListener('click', animatePopup);
            item.addEventListener('click', () => int = setInterval(animatePopup, 8));
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            opacityCounter = 0; 
            clearInterval(int);
        });

        popup.addEventListener('click', e => {
            let target = e.target;
                target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
                opacityCounter = 0; 
                clearInterval(int);
            }
        });
    };

    togglePopup();

    //Tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            };  
        };

        tabHeader.addEventListener('click', e => {
            let target = e.target;
                target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    };
                });
            };
        });
    };

    tabs();
});