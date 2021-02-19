'use strict';

let finalPrice = document.getElementById('start'),
      plusButtonOne = document.getElementsByTagName('button')[0],
      plusButtonTwo = document.getElementsByTagName('button')[1],
      depositCheckBox = document.querySelector('#deposit-check'),
      additionalIncomes = document.querySelectorAll('.additional_income-item'),
      rightSide = document.querySelector('.result'),
      valuesItems = rightSide.querySelectorAll('[class*=-value]'),
      budgetMonthValue = valuesItems[0],
      budgetDayValue = valuesItems[1],
      expensesMonthValue = valuesItems[2],
      additionalIncomeValue = valuesItems[3],
      additionalExpensesValue = valuesItems[4],
      periodAmountValue = valuesItems[5],
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      additionalIncomeItems = document.querySelectorAll('.additional_income-item'),
      additionalIncomeItem1 = additionalIncomeItems[0],
      additionalIncomeItem2 = additionalIncomeItems[1],
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      expensesTitle = document.querySelector('.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      targetAmount = document.querySelector('.target-amount'),
      targetMonthValue = valuesItems[6],
      periodSelect = document.querySelector('.period-select'),
      periodAmount = document.querySelector('.period-amount'),
      icomeItems = document.querySelectorAll('.income-items');

let expsStr;

let isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
};

let appData = {
    income: {
        
    },
    addIncome: [],
    expenses: {},
    income: {},
    addExpenses: [],
    budget: 0,
    incomeMonth: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 12000000,
    start() {
        // do {
        //     money = prompt('Ваш месячный доход?');
        // } while (!isNumber(money));

        if (salaryAmount.value === '') {
            alert("Ошибка, поле 'Месячный доход' должно быть заполнено");
        }

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },
    addExpensesBlock() {
        let expensesItems = document.querySelectorAll('.expenses-items');
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusButtonTwo);

        if (expensesItems.length === 3) {
            plusButtonTwo.style.display = "none";
        }
    },
    addIncomeBlock() {
        let incomeItems = document.querySelectorAll('.income-items');
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusButtonOne);

        if (incomeItems.length === 2) {
            plusButtonOne.style.display = "none";
        }
    },
    getExpenses() {
        let expensesItems = document.querySelectorAll('.expenses-items');

        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getPeriodAmount() {
        periodAmount.textContent = periodSelect.value;
    },
    getAddExpenses() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();

            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome() {
        additionalIncomeItems.forEach(function(item) {
            let itemValue = item.value.trim();

            if (item.value !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    asking() {
        

        // let sumFin;

        // appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
        // appData.addExpenses = appData.addExpenses.split(', ');

        // for (let i = 0; i<appData.addExpenses.length; i++) {
        //     appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
        // }

        // expsStr = appData.addExpenses.join(', ');
            
        // appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    getExpensesMonth() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        };
    },
    getBudget() {
        let expensesMonth = appData.expensesMonth;
        appData.budgetMonth = appData.budget + appData.incomeMonth - expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth() {
        return targetAmount.value / appData.budgetMonth;
    },
    getIncome() {
        let incomeItems = document.querySelectorAll('.income-items');

        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getIncomeMonth() {
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        };
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
        return appData.budgetMonth * periodSelect.value;
    },
    salaryCheck() {
        if (salaryAmount.value === '') {
            finalPrice.disabled = true;
        } else {
            finalPrice.disabled = false
        }
    },
    showResult() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        periodAmountValue.value = appData.calcSavedMoney();
        periodSelect.addEventListener('input', function() {
            periodAmountValue.value = appData.calcSavedMoney();
        });
    }
}

finalPrice.disabled = true;



periodSelect.addEventListener('input', appData.getPeriodAmount);
plusButtonOne.addEventListener('click', appData.addIncomeBlock);
plusButtonTwo.addEventListener('click', appData.addExpensesBlock);
finalPrice.addEventListener('click', appData.start);
salaryAmount.addEventListener('input', appData.salaryCheck);

console.log(appData.expensesMonth);

// console.log("Объект: ", appData.expenses);
// console.log("Расходы за месяц: ", appData.expensesMonth);
// console.log(appData.checkTargetMonth());
// console.log(appData.getStatusIncome());
// console.log("Бюджет на день: ", appData.budgetDay);
// console.log(expsStr);
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());



