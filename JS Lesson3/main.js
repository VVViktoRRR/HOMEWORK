// 1 - створити функцію яка обчислює та повертає площу прямокутника висотою
function calculator (a, b){
    return a*b;
}
let res1 = calculator (5,10) ;
console.log(res1);
document.write(`<h2> Площадь треугольника  = ${res1} </h2>`);


// 2 - створити функцію яка обчислює та повертає площу кола
function calculator2 (r){
    return 3.14*r*r;
}
let res2 = calculator2(5)  ;
console.log(res2);
document.write(`<h2> Площадь круга  = ${res2} </h2>`);


// 3 - створити функцію яка обчислює та повертає площу циліндру
function calculator3 (R, h){
    return 2*3.14*R*(h+R);
}
let res3 = calculator3 (10,10) ;
console.log(res3);
document.write(`<h2> Площадь цилиндра  = ${res3} </h2>`);

// 4 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function min_max (){
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max) max = item;
        if (item < min) min = item;
    }
    document.write(max);
    return min;
}
console.log(min_max(2,3,4,5,6,7,89,23,4,5,110,67,43,58,38,28,98,5,4))

// 5 - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function createDiv(text){
        document.write(`<div>
                        <h2>${text}</h2>
                        </div>`);
}
createDiv(` Okten is cool, but very heavily `);

// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createli(text){
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                   </ul>`);
}
createli(` Okten is cool, but very heavily `)


// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createli2 (text, n) {
         document.write(`<ul>`)
                     for ( let i = 0; i < n; i++) {
                                    document.write(`<li>${text}</li>`)
                                         }
         document.write(`</ul>`);
                              }
createli2(`Слава Украине !!!!`, 3 )

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array=[ true, false, 14, 83, 44, 91, 72, 'Petr', 'Ira', 37, 'milk', true, 'Vova', 'audi', 'BMW' ];
function createA(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>${arrayElement}</li>`);
    }
}
createA(array);