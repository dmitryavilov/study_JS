'use strict';

let money;

let isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
};

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
};

start();

let appData = {
    income: {
        
    },
    addIncome: [],
    expenses: {},
    addExpenses: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    deposit: false,
    mission: 12000000,
    period: 6,
    asking() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
            sumFin;
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expense = prompt('Введите обязательную статью расходов?');            
            do {
                sumFin = prompt('Во сколько это обойдется?');
                appData.expenses[expense] = +sumFin;
            } while (!isNumber(sumFin));
        }
    },
    getExpensesMonth() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        };
    },
    getBudget() {
        let expensesMonth = appData.expensesMonth;
        appData.budgetMonth = money - expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth() {
        return appData.mission / appData.budgetMonth;
    },
    checkTargetMonth() {
        let targetMonth;

        if (appData.getTargetMonth() < 0) {
            targetMonth = 'Цель не будет достигнута';
        } else {
            targetMonth = "Цель будет достигнута за " + Math.round(appData.getTargetMonth()) + " месяцев.";
        }

        return targetMonth;
    },
    getStatusIncome() {
        let statusIncome;

        if (appData.budgetDay >= 1200) {
            statusIncome = 'У вас высокий уровень дохода'
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            statusIncome = 'У вас средний уровень дохода'
        } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
            statusIncome = 'У вас низкий уровень дохода'
        } else if (appData.budgetDay < 0) {
            statusIncome = 'Что-то пошло не так'
        }

        return statusIncome;
    }
}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log("Объект: ", appData.expenses);

console.log("Расходы за месяц: ", appData.expensesMonth);

console.log(appData.checkTargetMonth());

console.log(appData.getStatusIncome());

console.log("Бюджет на день: ", appData.budgetDay);

