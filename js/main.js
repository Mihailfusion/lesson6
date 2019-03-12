//  'use strict';

let start = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value'),
  daybudgetValue = document.getElementsByClassName('daybudget-value'),
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value'),
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesInput = document.getElementsByClassName('expenses-item'),
  optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),

  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],

  incomeItem = document.querySelector('#income'),
  savingValue = document.querySelector('#savings'),
  sumValue = document.querySelector('#sum'),
  percentValue = document.querySelector('#percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');


let money, time;
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// start();
start.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", ''); //бюджет

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?"); //бюджет
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue[0].textContent = money.toFixed();
  console.log(budgetValue);

  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesInput.length; i++) {
    let a = expensesInput[i].value,
      b = expensesInput[++i].value;
    // console.log(i);
    if (a == null || b == null) {
      alert("Заполните поля");
      // console.log(a),
      i--;
    } else if (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      console.log(appData);

      sum += +b;
    } else {
      i--,
      alert("Введите статью без использования цыфр");
    }
  }
  expensesValue[0].textContent = sum;
});



optionalExpensesBtn.addEventListener('click', function () {


  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    console.log(typeof opt);

    appData.optionalExpenses[i] = opt;
    optionalExpensesValue[0].textContent += appData.optionalExpenses[i] + ' ';
    console.log(appData);
  };
});

countBudgetBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {

    appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue[0].textContent = appData.moneyPerDay
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Ошибка!!";
    };
    console.log(appData);
  } else {
    daybudgetValue[0].textContent = 'Произошла ошибка';
  }
})


incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
})

savingValue.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

