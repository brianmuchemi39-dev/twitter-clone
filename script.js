// Function to load our data
async function loadData() {
    // Fecth users and posts
    const [usersResponse, postsResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    // convert responses into JSON
    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    // Display the results
    console.log(users);
    console.log(posts);

    // Display posts on our webpage
    displayPosts(users, posts);

}
// Function to display posts
function displayPosts (users, posts){
// selecting the posts container
const postsContainer = document.getElementById("postsContainer")

// clear the cointainer
postsContainer.innerHTML = "";

// loop through all posts
posts.forEach(post =>{
    // find the author of each post 
    const author = users.find(user => user.id===post.userId);

    // create a post element
    const postElement = document.createElement("div");

    // add post information
    const authorName = document.createElement("h3")
    authorName.textContent = author.name + "@" + author.username;

    const postTitle = document.createElement("h4");
    postTitle.textContent = post.title;

    const postBody =document.createElement("p")
    postBody.textContent = post.body
     // put information inside the post element
     postElement.appendChild(authorName);
     postElement.appendChild(postTitle);
     postElement.appendChild(postBody);
     // add the post to the webpage
     postsContainer.appendChild(postElement);

});
// call the function

}
loadData();

