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
