'use strict';

let money,
    expsStr;

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
    income: {},
    addExpenses: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 12000000,
    period: 6,
    asking() {
        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome,
                cashIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (itemIncome.trim() === '' || !isNaN(itemIncome));

            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            } while(!isNumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        let sumFin;

        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
        appData.addExpenses = appData.addExpenses.split(', ');

        for (let i = 0; i<appData.addExpenses.length; i++) {
            appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
        }

        expsStr = appData.addExpenses.join(', ');
            
        appData.deposit = confirm('Есть ли у вас депозит в банке?');


        for (let i = 0; i < 2; i++) {
            let expense; 

            do {
                expense = prompt('Введите обязательную статью расходов?');
            } while (expense.trim() === '' || !isNaN(expense));        

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
    },
    getInfoDeposit() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while(!isNumber(appData.percentDeposit));

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while(!isNumber(appData.moneyDeposit ));
        }
    },
    calcSavedMoney() {
        return appData.budgetMonth * appData.period;
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
console.log(expsStr);
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

