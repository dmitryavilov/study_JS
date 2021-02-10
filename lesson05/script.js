'use strict';

let money,
    income = "120000",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses = [],
    mission = 12000000,
    period = 6;

let isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
};

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let showTypeOf = function(item) {
    console.log(typeof item);
};


let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            sum = prompt('Во сколько это обойдется?');
        } while (!isNumber(sum));
        sum += prompt('Во сколько это обойдется?');
    }

    return sum;
};

let expensesAmount = getExpensesMonth();


let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let getTargetMonth = function() {
    return mission / getAccumulatedMonth();
};

let targetMonth = getTargetMonth();

if (targetMonth < 0) {
    console.log('Цель не будет достигнута');
}

showTypeOf(money);
console.log(getTargetMonth());

switch (true) {
    case getAccumulatedMonth() >= 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case getAccumulatedMonth() === 600:
    case getAccumulatedMonth() > 600 && getAccumulatedMonth() < 1200:
        console.log('У вас средний уровень дохода');
        break;
    case getAccumulatedMonth() === 0:
    case getAccumulatedMonth() > 0 && getAccumulatedMonth() < 600:
        console.log('У вас низкий уровень дохода');
        break;
    case getAccumulatedMonth() < 0:
        console.log('Что-то пошло не так');
}