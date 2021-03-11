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

    const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
              calcType = document.querySelector('.calc-type'),
              calcCount = document.querySelector('.calc-count'),
              calcSquare = document.querySelector('.calc-square'),
              calcDay = document.querySelector('.calc-day'),
              totalPrice = document.getElementById('total');

        const calculatorValidation = e => {
            let target = e.target;

            target.value = target.value.replace(/[а-яёa-z]/i, '');
        };

        const calcSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                  squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            };

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            };

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            };

            
            const toCount = () => {
                let counter = 0;

                if (counter < total) {
                    for (let i = 0; i < Math.floor(total); i++) {
                        const changeCount = () => {
                            counter = i;
                            totalPrice.textContent = counter;
                        };

                        setTimeout(changeCount, 220);
                    }
                } else if (counter > total) {
                    for (let i = 0; i < Math.floor(total); i++) {
                        counter = i;
                        const changeCount = () => {
                            totalPrice.textContent = counter;
                        };

                        setTimeout(changeCount, 220);
                    }
                }
            };

            toCount();
        }

        calcBlock.addEventListener('change', e => {
            let target = e.target;

            
            if (target.matches('.calc-item')) {
                calcSum();
            };
        });
        
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

    calculator(100);

    //Feedback

    const feedBack = () => {
        const fbForm = document.getElementById('form2');

        const feedBackValidation = e => {
            let target = e.target;

            const valueReplace = elem => {
                target.value = elem;
            };

            switch (target.id) {
                case ('form2-name'):
                    valueReplace(target.value.replace(/( |\-){1}[a-z]( |\-){1}/gi, ''));
                    valueReplace(target.value.replace(/\d/gi, ''));
                    valueReplace(target.value.replace(/((\-){2,}|)*((\-){2,}|)*/gi, ''));
                    valueReplace(target.value.replace(/\s+/gi, ' '));
                    valueReplace(target.value.replace(/( |^)[а-яё]/g, x => x.toUpperCase()));

                    break;
                case ('form2-email'):
                    valueReplace(target.value.match(/\w(\w|\.|\-|~|'|!|\*)+@\w(\w|\.|\-|~|'|!|\*)+\.\w{1,3}/gi));
                    
                    break;
                case ('form2-phone'):
                    valueReplace(target.value.match(/\+?[7,8]([-()]*\d){10}/g));

                    break;
                case ('form2-message'):
                    valueReplace(target.value.replace(/\d/gi, ''));

                    break;
            };
        };

        fbForm.addEventListener('input', e => {
            let target = e.target;

            if (target.matches('input[type=text]')) {
                target.value = target.value.match(/[а-яё ]+/i, '');
            } else if (target.matches('input[type=tel]')) {
                target.value = target.value.match(/[0123456789+]+/);
            } else {
                target.value = target.value.match(/[а-яё0123456789\.,\-:;'" ]+/i);
            }
        })
        
        fbForm.addEventListener('click', e => {
            let target = e.target,
                input = target.matches('.top-form'),
                message = target.matches('.mess');

            if (input || message) {
                target.addEventListener('blur', feedBackValidation);
            } else {
                target.removeEventListener('blur', feedBackValidation);
            };
        });
    };

    feedBack();

    //Send-ajax-form

    const sendForm = form => {
        const errorMessage = 'Что-то пошло не так...',
              loadMessage = 'Загрузка...',
              successMessage = 'Спасибо! Мы скоро с вами свяжемся';

        const statusMessage = document.createElement('div');

        statusMessage.style.cssText = 'font-size: 2rem';

        const postData = body => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
    
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4) {
                        return;
                    }
    
                    if (request.status === 200) {
                        resolve(request.status);
                    } else {
                        reject(request.status);
                    }
                });
    
                request.open('POST', './server.php');
                request.setRequestHeader('Content-Type', 'application/json');
    
                request.send(JSON.stringify(body));
            })

        };

        const clearInputs = () => {
            const inputs = form.querySelectorAll('input');

            inputs.forEach(elem => elem.value = '');
        }

        const validation = () => {
            if (form.id === 'form1' || form.id === 'form3') {
                form.addEventListener('input', e => {
                    let target = e.target;

                    if (target.matches('input[type=text]')) {
                        target.value = target.value.match(/[а-яё ]+/i, '');
                    } else if (target.matches('input[type=tel]')) {
                        target.value = target.value.match(/[0123456789+]+/);
                    }
                });
            } else {
                console.log('=)');
            }
        };

        validation();

        form.addEventListener('submit', e => {
           e.preventDefault();
           if (form.querySelector('input[type=text]').value.trim().length >= 2 &&
               form.querySelector('input[type=email]').value.trim() !== '' &&
               form.querySelector('input[type=tel]').value.length >= 7 &&
               form.querySelector('input[type=tel]').value.length <= 11) 
            { 

                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(form);
                let body = {

                };

                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }

                postData(body).then(() => {
                    statusMessage.style.display = 'block';
                    statusMessage.textContent = successMessage;
                    setInterval(() => {
                        statusMessage.style.display = 'none';
                    }, 5000);
                }).catch(error => {
                    statusMessage.style.display = 'block';
                    console.log(error);
                    statusMessage.textContent = errorMessage;
                    console.log(statusMessage);
                    setInterval(() => {
                        statusMessage.style.display = 'none';
                    }, 5000)});
                

                clearInputs();
            } else {
                alert('Данные введены некорректно');
            }
        });
    }

    sendForm(document.getElementById('form1'));
    sendForm(document.getElementById('form3'));
    sendForm(document.getElementById('form2'));
});