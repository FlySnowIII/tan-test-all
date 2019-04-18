/**
 * ES6
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

function createPost(newpost){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(newpost);
            console.log(posts);

            const error = false;
            // const error = true;

            if(!error){
                resolve();
            }
            else{
                reject('Error: This has a Error');
            }
        },2000)
    });
}

createPost({title:'Three',body:'Three Body'},getPosts)
.then(()=>{
    getPosts();
})
.catch((err)=>{
    console.log(err);
})