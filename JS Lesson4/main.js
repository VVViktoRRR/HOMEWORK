// 1  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
    let array = []
    function randomArray(array) {
        let min=0;
        let max=100;
        for (let i = min; i < max; i++) {
            array.push(Math.floor(Math.random()*(max-min)+min));
        }
        return array
    }
    console.log(randomArray(array));

// // 2 - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
    let array2 = []
    function getRandomInt(min, max, l) {
        for (let i = 1; i <= l; i++) {
            array2.push(Math.floor(Math.random()*(max-min)+min));
        }
        return array2
    }
    getRandomInt( 0, 100, 84);
    console.log(array2);

// 4- створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. Відсортувати його за допомоги sort
    let array4 = []
    function getRandomInt4(min, max, l) {
        for (let i = 1; i <= l; i++) {
            array4.push(Math.floor(Math.random()*(max-min)+min));
        }
        return array4
    }
    getRandomInt4( 0, 100, 84);
            let sort = array4.sort(function (u1,u2){
                    return u1-u2;
                });
                console.log(sort);

// 5- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
    let array5 = []
    function getRandomInt5(min, max, l) {
        for (let i = 1; i <= l; i++) {
            array5.push(Math.floor(Math.random()*(max-min)+min));
        }
        return array5
    }
    getRandomInt5( 0, 100, 84);
    let filter = array5.filter(function (value){
        return value % 2 === 0;
    })
    console.log(filter);

//  6 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//    за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
    let array6 = []
    function getRandomInt6(min, max, l) {
        for (let i = 1; i <= l; i++) {
            array6.push(Math.floor(Math.random()*(max-min)+min));
        }
        return array6
    }
    getRandomInt6( 0, 100, 84);
             let map = array6.map(function (item){
            return item+'';
        });
    console.log(map);
        let stringify = JSON.stringify(array6);
        console.log(stringify);

//  8 - - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
    function User(id, name, surname , email, phone){
    this.id= id;
    this.name= name;
    this.surname= surname;
    this.email=email;
    this.phone=phone;
    }
    let user= new User(7, 'Ira', 'Shevchenko', 'Shevchenko@ukr.net', '+380937854862');
    console.log(user);
//  створити пустий масив, наповнити його 10 об'єктами new User(....)

    let users=[
        new User( 91, 'Petya', 'Pypkin', 'wsx@ukr.net', +3806325874587 ),
        new User( 84, 'Leonid', 'Ky4ma', 'edc@ukr.net', +38063326456952),
        new User( 4, 'Leonid', 'Krav4yk', 'rfv@ukr.net', +3807845845683 ),
        new User( 73, 'Viktor', 'P4elkin', 'tgb@ukr.net', +3842595845662 ),
        new User( 9, 'Petya', 'Porox', 'yhn@ukr.net', +3809547845697 ),
        new User( 64, 'Vova', 'Zelya', 'ikl@ukr.net', +3806325847593 ),
        new User( 16, 'Sasha', 'Lykash', 'qwe@ukr.net', +3806325832654 ),
        new User( 56, 'Ylia', 'Kossa', 'asd@ukr.net', +3806325845832 ),
        new User( 36, 'Ekaterina', 'Prosto', 'zxc@ukr.net', +3806325632549 ),
        new User( 25, 'Vika', 'Strelka', 'cde@ukr.net', +3806325849854 ),

    ]
        console.log(users)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)
    let filter6 = users.filter(function (User){
            return User.id % 2 === 0;
        });
        console.log(filter6)
// Відсортувати його по id. по зростанню (sort)
    let sort6 = users.sort(function (u1,u2){
            return u1.id - u2.id;
        });
        console.log(sort6);

