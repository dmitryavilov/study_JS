window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const getNowDate = () => {
        const now = new Date(),
              good = document.querySelector('.hello__day-time'),
              day = document.querySelector('.hello__week-day'),
              time = document.querySelector('.hello__time'),
              nYElem = document.querySelector('.hello__new-year');

        const declareGoodDay = () => {
            let toGood;

            switch (true) {
                case (now.getHours() < 12 && now.getHours() >= 4):
                    toGood = "Доброе утро";
                    break;
                case (now.getHours >= 12 && now.getHours() < 16):
                    toGood = "Добрый день";
                    break;
                case (now.getHours >= 16 && now.getHours() < 22):
                    toGood = "Добрый вечер";
                    break;
                case (now.getHours >= 22 && now.getHours() < 4):
                    toGood = "Доброй ночи";
                    break;
            };

            return toGood;
        };

        const getWeekDay = () => {
            const today = now.getDay();
            let dayName;

            switch (today) {
                case 1:
                    dayName = "Понедельник"
                    break;
                case 2:
                    dayName = "Вторник"
                    break;
                case 3:
                    dayName = "Среда"
                    break;
                case 4:
                    dayName = "Четверг"
                    break;
                case 5:
                    dayName = "Пятница"
                    break;
                case 6:
                    dayName = "Суббота"
                    break;
                case 0:
                    dayName = "Воскресенье"
            };

            return dayName;
        };

        const getNewYear = () => {
            const newYear = new Date(2022, 0, 1);
            return Math.floor((newYear.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);
        };
        
        time.textContent = now.toLocaleTimeString('en');
        good.textContent = declareGoodDay();
        day.textContent = getWeekDay();
        nYElem.textContent = getNewYear();

    };

    setInterval(getNowDate, 1000);
});