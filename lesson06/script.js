'use strict';

let getNumber = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

let number = getNumber(0, 100);

const startGame = () => {
    let num = prompt('Угадай число от 0 до 100.');
    
    const checkVariant = () => {
        switch(true) {
        case isNaN(num):
            alert('Введите число в верном формате');
            startGame();
            break;
        case num.trim() == '':
            alert('Введите число');
            startGame();
            break;
        case num === null:
            alert('Игра окончена');
            break;
        case num > 100 || num < 0:
            alert('Введенное число должно быть в диапазоне от 0 до 100');
            startGame();
            break;
        case num < number:
            alert('Загаданное число больше');
            startGame();
            break;
        case num > number:
            alert('Загаданное число меньше');
            startGame();
            break;
        case num == number:
            alert('Поздравляю, вы выйграли!');
        }
    }
    checkVariant();
}

startGame();