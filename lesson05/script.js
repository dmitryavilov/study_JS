'use strict';

let money,
    income = "120000",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses = [],
    mission = 12000000,
    budgetDay,
    targetMonth,
    statusIncome,
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
    let sum = 0,
        sumFin;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            sumFin = prompt('Во сколько это обойдется?');
        } while (!isNumber(sumFin));
        sum += +sumFin;
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

let checkTargetMonth = function() {
    if (getTargetMonth() < 0) {
        targetMonth = 'Цель не будет достигнута';
    } else {
        targetMonth = 'Цель будет достигнута';
    }

    return targetMonth;
};

console.log(checkTargetMonth());

budgetDay = getAccumulatedMonth() / 30;

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        statusIncome = 'У вас высокий уровень дохода'
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        statusIncome = 'У вас средний уровень дохода'
    } else if (budgetDay < 600 && budgetDay >= 0) {
        statusIncome = 'У вас низкий уровень дохода'
    } else if (budgetDay < 0) {
        statusIncome = 'Что-то пошло не так'
    }

    return statusIncome;
};

console.log(getStatusIncome());


showTypeOf(money);
console.log(budgetDay);

