// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"
document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = ' Понедельник - день тяжелый, как бы всё успеть ? На работу нужно ехать, ну и лекции смотреть. ' +
    'Д.З. 5 хочу всю сделать.'

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Але таке життя, воно бентежне. Завжди потрібно прагнути до кращого, нажаль це не легко'

// -- змініть кожному елементу колір фону на червоний
let pLists = document.body.getElementsByTagName('p');
console.log(pLists);
for (const pListElement of pLists) {
    pListElement.style.background = 'red';
}
let classLists = document.body.getElementsByClassName('fc bp');
console.log(classLists);

for (const classListElement of classLists) {
    classListElement.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const pListElement of pLists) {
    pListElement.style.color = 'blue';
}
for (const classListElement of classLists) {
    classListElement.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
document.getElementById('rules');
console.log(rules);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let classLists2 = document.getElementsByClassName('fc_rules');
console.log(classLists2);
for (let classLists2Element of classLists2) {
    classLists2Element.onclick = () => console.log(classLists2Element.textContent);
    classLists2Element.onclick = () => console.log(classLists2Element.innerHTML = 'Hello');
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
        for (const classListElement2 of classLists2) {
            classListElement2.style.color = 'red';
    }







