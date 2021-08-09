const JOSINUSer = new URL(location).searchParams.get('user');
const user = JSON.parse(JOSINUSer);
let userInfoDiv = document.getElementsByClassName(`userInfoDiv`)[0];
userInfoDiv.innerText =
        `id: ${user.id},
        name: ${user.name},
        username: ${user.username},
        email: ${user.email},
        address:
        street: ${user.address.street},
        suite: ${user.address.suite},
        city: ${user.address.sity},
        zipcode:${user.address.zipcode},
        geo:
        lat: ${user.address.geo.lat},
        lng: ${user.address.geo.lng}
        phone: ${user.phone},
        website: ${user.website},
        company:
        name: ${user.company.name},
        catchPhrase:${user.company.catchPhrase},
        bs: ${user.company.bs}`

            let div = document.getElementsByClassName(`posts_wrap`)[0];
            let btn = document.createElement('button');
            btn.innerText = 'post of current user';
            btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(value =>value.json())
            .then(value =>{
                for (const post of value) {
                    let  target = document.getElementById(`target`);
                    let title = document.createElement(`div`);
                    div.innerHTML=``;
                    title.innerText=`${post.title}`;
                    target.append(title);
                                                let detailsLink  = document.createElement('a');
                                                detailsLink .innerText = 'Info';
                                                detailsLink .onclick = function (){

                                               fetch(window.location.href =`post-details.html?post=${JSON.stringify(post)}`);
                                                   }
                                                title.appendChild(detailsLink );
                         }
                     });
                  }
            div.appendChild(btn);

