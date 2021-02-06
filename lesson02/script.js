let money = 150000,
    income = "120000",
    addExpenses = "Интернет, Такси, Коммуналка",
    deposit = true,
    mission = 12000000,
    period = 6;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " долларов");

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(", "));

let budgetDay = 30;
console.log(budgetDay);