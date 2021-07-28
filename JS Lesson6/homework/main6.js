// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

fetch(` https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(value => {
        let posts_wrap = document.getElementsByClassName(`posts_wrap`)[0];
        for (const post of value) {
            let div = document.createElement(`div`);
            div.innerText = post.userId +`: `+ post.id +` - ` +  post.title;
            let btn = document.createElement(`button`);
            btn.innerText = `details`;
            btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                     let postBox = document.getElementsByClassName(`post_title_body_wrap`)[0];
                     postBox.innerHTML=``;
                        for (const postcomm of value) {
                            let postcommDiv = document.createElement(`div`);
                            postcommDiv.innerText = ` * `+ post.body;
                            postBox.append(postcommDiv);
                        }
                    });
            };
            div.appendChild(btn);
            posts_wrap.appendChild(div);

        }
    })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(value => {
        let comments_wrap = document.getElementsByClassName(`comments_wrap`)[0];
        for (const comment of value) {
            let div = document.createElement(`div`);
            div.innerText = comment.postId +``+ comment.id +` : `+ comment.email;
            let btn = document.createElement(`button`);
            btn.innerText = `info`;
            btn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/comments?${comment.postId}`)
                    .then(value => value.json())
                    .then(value => {
                        let commentBox = document.getElementsByClassName(`comment_title_body_wrap`)[0];
                        commentBox.innerHTML=``;
                        for (const comment2 of value) {
                            let commentDiv = document.createElement(`div`);
                            commentDiv.innerHTML = ` * ` + comment.name + ` - ` +  comment.body;
                            commentBox.append(commentDiv);
                        }
                    });
            };
            div.appendChild(btn);
            comments_wrap.appendChild(div);

        }
    })


