fetch("http://localhost:3000/posts")
.then((data)=>  data.json( ))
.then((posts)=>{
        displayPosts(posts)

})
function displayPosts(posts){
    let cardscontainer = document.getElementById("cardsContainer")
    for(post of posts){
        cardscontainer.innerHTML +=`
         <div href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img class="w-full" src="${post.img}" alt="Loading...">
            <div class="flex justify-between my-3">
            <i class="fa fa-trash-o text-2xl" aria-hidden="true"></i>
            <i class="fa fa-pencil text-2xl " aria-hidden="true"></i>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${post.title  }</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">${post.description}</p>
        </div>
        `   
    }}          
    function deletePost(id)
    {
        fetch(`http://localhost:3000/posts/ `,{
method: "DELETE"
        })
.then((data)=>  data.json( ))   
.then((posts)=>{
        displayPosts(posts) 
    })
    }