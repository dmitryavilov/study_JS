'use strict';

const finalPrice = document.getElementById('start'),
      plusButtonOne = document.getElementsByTagName('button')[0],
      plusButtonTwo = document.getElementsByTagName('button')[1],
      depositCheckBox = document.querySelector('#deposit-check'),
      additionalIncomes = document.querySelectorAll('.additional_income-item'),
      rightSide = document.querySelector('.result'),
      valuesItems = rightSide.querySelectorAll('[class*=-value]'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('.income-title'),
      incomeAmount = document.querySelector('.income-amount'),
      additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0],
      additionalIncomeItem2 = document.querySelector('.additional_income-item')[1],
      expensesTitle = document.querySelector('.expenses-title'),
      expensesAmount = document.querySelector('.expenses-amount'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select');

