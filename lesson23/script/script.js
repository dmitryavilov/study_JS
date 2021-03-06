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
            popup.style.display = 'block';
            if (opacityCounter < 1 && document.documentElement.clientWidth > 768) {
                opacityCounter += 0.01;
                popup.style.opacity = opacityCounter;
            } else {
                clearInterval(int);
            }
        };
        
        popupBtn.forEach(item => {
            item.addEventListener('click', animatePopup);

            if (document.documentElement.clientWidth > 768) {
                item.addEventListener('click', () => int = setInterval(animatePopup, 8));
            };
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            if (document.documentElement.clientWidth > 768) {
                opacityCounter = 0; 
                clearInterval(int);
            }
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

    //Слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
              slider = document.querySelector('.slider'),
              dotsList = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            int;

        const createDots = () => {
            for (let i = 0; i < slide.length; i++) {
                dotsList.innerHTML += `<li class="dot"></li>`;
            }
            
            let dots = document.querySelectorAll('.dot');

            dots[0].classList.add('dot-active');
        };

        createDots();

        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        }

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        }

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            };

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2500) => {
            int = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(int);
        };

        slider.addEventListener('click', e => {
            let target = e.target;

            e.preventDefault();

            if (!target.matches('.portfolio-btn, .dot')) return;

            
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            
            
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    };
                });
            };

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
                console.log(slide.length);
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', e => {
            if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
                stopSlide();
            };
        });

        slider.addEventListener('mouseout', e => {
            if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
                startSlide();
            };
        });

        startSlide(2500);
    };

    slider();

    //Command

    const ourCommand = () => {
        const command = document.getElementById('command');

        command.addEventListener('mouseover', e => {
            let target = e.target;

            if (target.matches('.command__photo')) {
                target.dataset.back = target.src
                target.src = target.dataset.img;

                target.addEventListener('mouseout', () => {
                    target.src = target.dataset.back;
                });
            };
        });
    };

    ourCommand();

    //Calculator

    const calculator = () => {
        const calcBlock = document.querySelector('.calc-block');

        const calculatorValidation = e => {
            let target = e.target,
                input = target.matches('.calc-item');
            target.value = target.value.replace(/\D/, '');
        };
        
        calcBlock.addEventListener('click', e => {
            let target = e.target,
                input = target.matches('.calc-item');

            if (input) {
                target.addEventListener('input', calculatorValidation);
            } else {
                target.removeEventListener('input', calculatorValidation);
            }
        });
    };

    calculator();
});