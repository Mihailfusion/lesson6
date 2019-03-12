// 'use strict'; 
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?"); //бюджет

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?"); //бюджет
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); //дата
}
// start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        let a = prompt("Введите обязательную статью расходов в этом месяце", 'вапвап'),
            b = prompt("Во сколько обойдется?", 'вапвап');
        if (a == null || b == null) {
            alert("Заполните поля");
            console.log(a),
                i--;
        }
        else if (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log(a.length);
            appData.expenses[a] = b;
        } else {
            i-- ,
                alert("Введите статью без использования цыфр")
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Введите не обязательную статью расходов в этом месяце", '');

            if (a == null) {
                alert("Заполните поля");
                console.log(a),
                    i--;
            } else if (!a.match(/^\d+$/) && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log(a.length);
                appData.optionalExpenses[i] = a;
            } else {
                i-- ,
                    alert("Введите статью без использования цыфр");
            }
        }
    },
    detectDayBudget: function () {
        let result;
        result = (appData["budget"] / 30).toFixed(2);
        document.write("<h2> Ваш доход на один день состовляет = <u>" + result + "</u> </h2>");
    },
    detectLevel: function () {
        if (result < 100) {
            console.log("Минимальный уровень достатка");
        } else if (result > 100 && result < 2000) {
            console.log("Средний уровень достатка");
        } else if (result > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка!!");
        };
        console.log(appData);
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        for (let index = 1; index < 2; index++) {

            // let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");


            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            console.log(typeof items);
            if (items === null) {
                index--;
            } else
                if (!items.match(/^\d+$/) && items != "") {

                    appData.income = items.split(', ');
                    appData.income.push(prompt("Может что то еще?"));
                    appData.income.sort();
                    // appData.income.unshift(undefined);
                } else {
                    index--;
                }

            // appData.income = items.split(', ');
            // if (items === null) {
            //     index--;
            // } else {
            // for (let i = 0; i < appData.income.length; i++) {
            //     if (appData.income[i].match(/^\d+$/)) {
            //         console.log(typeof appData.income[i] + "test2");
            //         console.log(appData.income[i + 'test']);
            //         items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            //         index--;
            //     } else {  appData.income.push(prompt("Может что то еще?"));
            //         appData.income.sort();
            //         console.log(index);} }}
                  
                
            }
                
       
           
            } 
            
            // console.log(appData.income);
           
        
    

};
appData.chooseIncome();
console.log(appData);

appData.income.forEach(function (item, index, mass) {
    console.log(index + 1 + '.  Способы доп. заработка:' + item);

});

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);

}
