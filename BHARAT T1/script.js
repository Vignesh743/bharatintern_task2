document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const blogPosts = document.getElementById('blog-posts');

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Create a new blog post element
        const post = document.createElement('div');
        post.className = 'blog-post';

        // Extract form data
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];

        // Build the post content
        post.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;

        // If an image is uploaded, add it to the post
        if (image) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            post.appendChild(img);
        }

        // Append the post to the blog
        blogPosts.appendChild(post);

        // Clear form fields
        blogForm.reset();
    });
});
