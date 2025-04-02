document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Basic validation
    if (title && content) {
        const post = { title, content };
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('Post saved!');
        window.location.href = 'index.html';
    }
});

// Load posts for the homepage
window.onload = function() {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.textContent = post.title;
        postList.appendChild(li);
    });
};

// Load specific post for viewing and editing
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts[postId];
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-content').textContent = post.content;

    document.getElementById('edit-button').onclick = function() {
        const newTitle = prompt('Edit Title', post.title);
        const newContent = prompt('Edit Content', post.content);
        if (newTitle && newContent) {
            post.title = newTitle;
            post.content = newContent;
            posts[postId] = post;
            localStorage.setItem('posts', JSON.stringify(posts));
            alert('Post updated!');
            window.location.href = 'index.html';
        }
    };
}
