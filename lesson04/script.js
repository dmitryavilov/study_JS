'use strict';

let money = +prompt('Ваш месячный доход?'),
    income = "120000",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    amount = getExpensesMonth(),
    mission = 12000000,
    accumulatedMonth = getAccumulatedMonth(),
    period = 6;

function getExpensesMonth() {
    return amount1 + amount2;
}

function getAccumulatedMonth() {
    return money - amount;
}
function getTargetMonth() {
    return mission / accumulatedMonth;
}

console.log(getTargetMonth());

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