'use strict';

const finalPrice = document.getElementById('start'),
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

const isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
};

class AppData {
    constructor() {
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
    }

    start() {
        let leftSideFields = document.querySelectorAll('input[type=text]');
        console.log(this.getExpenses);
        this.budget = +salaryAmount.value;

        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getIncomeMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();

        leftSideFields.forEach(function(item) {
            item.disabled = true;
        });
        plusButtonOne.disabled = true;
        plusButtonTwo.disabled = true;
        depositCheckBox.disabled = true;
        

        finalPrice.style.display = "none";
        cancel.style.display = "block";
    }

    reset() {
        const leftSideFields = document.querySelectorAll('input[type=text]'),
              incomeItems = document.querySelectorAll('.income-items'),
              expensesItems = document.querySelectorAll('.expenses-items'),
              _this = this;

        valuesItems.forEach(function(item) {
            item.value = "";
        });

        _this.income = {
        
        };
        _this.addIncome = [];
        _this.expenses = {};
        _this.income = {};
        _this.addExpenses = [];
        _this.budget = 0;
        _this.incomeMonth = 0;
        _this.budgetDay = 0;
        _this.budgetMonth = 0;
        _this.expensesMonth = 0;
        _this.deposit = false;
        _this.percentDeposit = 0;
        _this.moneyDeposit = 0;
        _this.mission = 12000000;

        leftSideFields.forEach(function(item) {
            item.disabled = false;
            item.value = "";
        });

        if (incomeItems.length > 1) {
            for (let i = 1; i < incomeItems.length; i++) {
                incomeItems[i].remove();
            }
        }

        if (expensesItems.length > 1) {
            for (let i = 1; i < expensesItems.length; i++) {
                expensesItems[i].remove();
            }
        }

        plusButtonOne.style.display = "block";
        plusButtonTwo.style.display = "block";

        plusButtonOne.disabled = false;
        plusButtonTwo.disabled = false;
        depositCheckBox.disabled = false;

        periodSelect.value = 0;
        periodAmount.textContent = "1";
        depositCheckBox.checked = false;

        finalPrice.style.display = "block";
        cancel.style.display = "none";
    }

    addExpensesBlock() {
        const expensesItems = document.querySelectorAll('.expenses-items');
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusButtonTwo);

        if (expensesItems.length === 2) {
            plusButtonTwo.style.display = "none";
        }
    }

    addIncomeBlock() {
        const incomeItems = document.querySelectorAll('.income-items');
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusButtonOne);

        if (incomeItems.length === 2) {
            plusButtonOne.style.display = "none";
        }
    }

    getExpenses() {
        const expensesItems = document.querySelectorAll('.expenses-items');
        const _this = this;
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;

            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = +cashExpenses;
            }
        });
    }

    getPeriodAmount() {
        periodAmount.textContent = periodSelect.value;
    }

    getAddExpenses() {
        const addExpenses = additionalExpensesItem.value.split(',');
        const _this = this;
        addExpenses.forEach(function(item) {
            item = item.trim();

            if (item !== '') {
                _this.addExpenses.push(item);
            }
        });
    }

    getAddIncome() {
        const _this = this;
        additionalIncomeItems.forEach(function(item) {
            const itemValue = item.value.trim();

            if (item.value !== '') {
                _this.addIncome.push(itemValue);
            }
        });
    }

    getExpensesMonth() {
        const _this = this;
        for (let key in appData.expenses) {
            _this.expensesMonth += +_this.expenses[key];
        };
    }

    getBudget() {
        const expensesMonth = this.expensesMonth;
        this.budgetMonth = this.budget + this.incomeMonth - expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
    }

    getTargetMonth() {
        return targetAmount.value / this.budgetMonth;
    }

    getIncome() {
        const incomeItems = document.querySelectorAll('.income-items');
        const _this = this;
        incomeItems.forEach(function(item){
            const itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = +cashIncome;
            }
        });
    }

    getIncomeMonth() {
        const _this = this;
        for (let key in this.income) {
            _this.incomeMonth += +_this.income[key];
        };
    }

    calcSavedMoney() {
        return this.budgetMonth * periodSelect.value;
    }

    salaryCheck() {
        if (salaryAmount.value === '') {
            finalPrice.disabled = true;
        } else {
            finalPrice.disabled = false
        }
    }

    showResult() {
        const _this = this;
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.ceil(_this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(_this.getTargetMonth());
        periodAmountValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', function() {
            periodAmountValue.value = _this.calcSavedMoney();
        });
    }

    eventListeners(elem) {
        periodSelect.addEventListener('input', this.getPeriodAmount.bind(elem));
        cancel.addEventListener('click', this.reset.bind(elem));
        plusButtonOne.addEventListener('click', this.addIncomeBlock.bind(elem));
        plusButtonTwo.addEventListener('click', this.addExpensesBlock.bind(elem));
        finalPrice.addEventListener('click', this.start.bind(elem));
        salaryAmount.addEventListener('input', this.salaryCheck.bind(elem));
    }
};

const appData = new AppData();

appData.eventListeners(appData);


finalPrice.disabled = true;

console.log(appData.expensesMonth);

// console.log("Объект: ", appData.expenses);
// console.log("Расходы за месяц: ", appData.expensesMonth);
// console.log(appData.checkTargetMonth());
// console.log(appData.getStatusIncome());
// console.log("Бюджет на день: ", appData.budgetDay);
// console.log(expsStr);
// appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());



