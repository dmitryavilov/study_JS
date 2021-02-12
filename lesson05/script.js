'use strict';

let money,
    income = "120000",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses = [],
    mission = 12000000,
    budgetDay,
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
    let sumFin = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            sumFin = prompt('Во сколько это обойдется?');
            sum = +sum + +sumFin;
        } while (!isNumber(sumFin));
    }
    console.log(sum);
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

budgetDay = getAccumulatedMonth() / 30;

showTypeOf(money);
console.log(budgetDay);

switch (true) {
    case budgetDay >= 1200:
        console.log('У вас высокий уровень дохода');
        break;
    case budgetDay === 600:
    case budgetDay > 600 && budgetDay < 1200:
        console.log('У вас средний уровень дохода');
        break;
    case budgetDay === 0:
    case budgetDay > 0 && budgetDay < 600:
        console.log('У вас низкий уровень дохода');
        break;
    case budgetDay < 0:
        console.log('Что-то пошло не так');
}