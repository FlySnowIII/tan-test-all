/**
 * ES5
 */

const posts = [
    {title:'One',body:'One Body'},
    {title:'Two',body:'Two Body'},
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((element,index) => {
            output += `<li>${element.title}</li>`
        });

        document.body.innerHTML = output;

    },1000);
}

getPosts();

function createPost(newpost,callback){
    setTimeout(()=>{
        posts.push(newpost);
        console.log(posts);

        callback()
    },2000)
}

createPost({
    title:'Three',
    body:'Three Body'
},getPosts);