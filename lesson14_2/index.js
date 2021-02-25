'use strict';

let finalPrice = document.getElementById('start'),
      plusButtonOne = document.getElementsByTagName('button')[0],
      plusButtonTwo = document.getElementsByTagName('button')[1],
      leftSideFields = document.querySelectorAll('input[type=text]'),
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
      icomeItems = document.querySelectorAll('.income-items'),
      cancel = document.getElementById('cancel');

let expsStr;

let isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
};

const AppData = function() {
    this.income = {
        
    };
    this.addIncome = [];
    this.expenses = {};
    this.income = {};
    this.addExpenses = [];
    this.budget = 0;
    this.incomeMonth = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.mission = 12000000;
};

AppData.prototype.start = function() {
        let leftSideFields = document.querySelectorAll('input[type=text]');

        appData.budget = +salaryAmount.value;

        AppData.prototype.getExpenses();
        AppData.prototype.getIncome();
        AppData.prototype.getExpensesMonth();
        AppData.prototype.getIncomeMonth();
        AppData.prototype.getAddExpenses();
        AppData.prototype.getAddIncome();
        AppData.prototype.getBudget();
        AppData.prototype.showResult();

        leftSideFields.forEach(function(item) {
            item.disabled = true;
        });
        finalPrice.style.display = "none";
        cancel.style.display = "block";
};

AppData.prototype.reset = function() {
        let leftSideFields = document.querySelectorAll('input[type=text]');

        valuesItems.forEach(function(item) {
            item.value = "";
        });

        this.income = {
        
        };
        this.addIncome = [];
        this.expenses = {};
        this.income = {};
        this.addExpenses = [];
        this.budget = 0;
        this.incomeMonth = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.mission = 12000000;

        leftSideFields.forEach(function(item) {
            item.disabled = false;
            item.value = "";
        });

        finalPrice.style.display = "block";
        cancel.style.display = "none";
};
    
AppData.prototype.addExpensesBlock = function() {
        let expensesItems = document.querySelectorAll('.expenses-items');
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusButtonTwo);

        if (expensesItems.length === 2) {
            plusButtonTwo.style.display = "none";
        }
};

AppData.prototype.addIncomeBlock = function() {
        let incomeItems = document.querySelectorAll('.income-items');
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusButtonOne);

        if (incomeItems.length === 2) {
            plusButtonOne.style.display = "none";
        }
};
    
AppData.prototype.getExpenses = function() {
        let expensesItems = document.querySelectorAll('.expenses-items');
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
};
    
AppData.prototype.getPeriodAmount = function() {
        periodAmount.textContent = periodSelect.value;
};
    
AppData.prototype.getAddExpenses = function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item) {
            item = item.trim();

            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
};
    
AppData.prototype.getAddIncome = function() {
        additionalIncomeItems.forEach(function(item) {
            let itemValue = item.value.trim();

            if (item.value !== '') {
                appData.addIncome.push(itemValue);
            }
        });
};

AppData.prototype.getExpensesMonth = function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        };
};
    
AppData.prototype.getBudget = function() {
        let expensesMonth = appData.expensesMonth;
        appData.budgetMonth = appData.budget + appData.incomeMonth - expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
};
    
AppData.prototype.getTargetMonth = function() {
        return targetAmount.value / appData.budgetMonth;
};
    
AppData.prototype.getIncome = function() {
        let incomeItems = document.querySelectorAll('.income-items');
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
};

AppData.prototype.getIncomeMonth = function() {
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        };
};

AppData.prototype.calcSavedMoney = function() {
        return appData.budgetMonth * periodSelect.value;
};
    
AppData.prototype.salaryCheck = function() {
        if (salaryAmount.value === '') {
            finalPrice.disabled = true;
        } else {
            finalPrice.disabled = false
        }
};

AppData.prototype.showResult = function() {
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
};

AppData.prototype.eventListeners = function() {
        periodSelect.addEventListener('input', this.getPeriodAmount);
        cancel.addEventListener('click', this.reset);
        plusButtonOne.addEventListener('click', this.addIncomeBlock);
        plusButtonTwo.addEventListener('click', this.addExpensesBlock);
        finalPrice.addEventListener('click', this.start);
        salaryAmount.addEventListener('input', this.salaryCheck);
};

const appData = new AppData();

appData.eventListeners();


finalPrice.disabled = true;





periodSelect.addEventListener('input', appData.getPeriodAmount);
cancel.addEventListener('click', appData.reset);
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



