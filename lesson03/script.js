'use strict';

let money = prompt('Ваш месячный доход?'),
    income = "120000",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = prompt('Во сколько это обойдется?'),
    amount2 = prompt('Во сколько это обойдется?'),
    mission = 12000000,
    budgetMonth = +money - +expenses1 - +expenses2 - +amount1 - +amount2,
    budgetDay = parseInt(budgetMonth / 30),
    period = 6;

console.log('Месячный бюджет: ', budgetMonth);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " долларов");

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(", "));
console.log('Дневной бюджет: ', budgetDay);

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