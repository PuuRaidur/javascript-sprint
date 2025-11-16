function extractContent(content, start, end) {
    return content => content.slice(Array.indexOf(start), Array.lastIndexOf(end))
}

const blogPosts = ['post1', 'post2', 'post3', 'post4', 'post5'];
const blogPost = 'The big brown fox';

extractContent(blogPosts, 'post2', 'post4');
extractContent(blogPosts, '', '');
extractContent(blogPost, '', '');
extractContent(blogPost, 'b', 'b');
extractContent(blogPost, 'big', 'fox');
extractContent(blogPost, '', 'brown');
extractContent(blogPost, 'jump', '');