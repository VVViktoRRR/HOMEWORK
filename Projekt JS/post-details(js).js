let postInfoDiv = document.getElementsByClassName('post_InfoDiv')[0];
const JOSINPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JOSINPost);

const titleDiv = document.createElement('titleDiv');
titleDiv.innerHTML=
                             `<h2> User ID : ${post.userId}<br>
                             Post ID : ${post.id}<br>
                             Title: ${post.title}<br>
                             Body: ${post.body}<hr>
                             </h2>
                                 <h2> Comments: </h2>`
   postInfoDiv.appendChild(titleDiv)



let com = document.getElementsByClassName('commentDiv')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(value => value.json())
    .then(value => {

        for (const comment of value) {
            let commDiv = document.createElement('div');
            commDiv .innerText =
                `postId : ${comment.postId},
                 id : ${comment.id},
                 name: ${comment.name},:
                 email:${comment.email},
                 body:${comment.body}, `;


            com.append(commDiv );
        }
    });
