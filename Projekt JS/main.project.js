const mainDiv = document.getElementById('users');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let userDiv = document.createElement('div');
            let btn = document.createElement('button');

            userDiv.innerText = `${user.id} : ${user.name}`;
            btn.innerText = 'Get info';
            btn.onclick = function (){
                fetch(window.location.href =`user-details.html?user=${JSON.stringify(user)}`);
            }
            userDiv.appendChild(btn);
            mainDiv.appendChild(userDiv);
        }
    });