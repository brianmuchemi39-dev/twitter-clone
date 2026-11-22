// Function to load our data
async function loadData() {
    // Fecth users and posts
    const [usersResonse, postsResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    // convert responses into JSON
    const users = await usersResonse.json();
    const posts = await postsResponse.json();

    // Display the results
    console.log(users);
    console.log(posts);

}

// call the function
loadData();