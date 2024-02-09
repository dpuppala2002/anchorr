let posts = [];

function createAccount() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Implement logic for creating account (this is just a placeholder)
    alert(`Account created!\nUsername: ${username}\nEmail: ${email}`);
}

function login() {
    // Implement logic for login (this is just a placeholder)
    alert('Logged in!');
}

function postDiscussion() {
    const postContent = document.getElementById('postContent').value;

    // Implement logic for posting discussion (this is just a placeholder)
    posts.push(postContent);
    displayPosts();
}

function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>Post ${index + 1}</h3><p>${post}</p>`;
        postsContainer.appendChild(postElement);
    });
}