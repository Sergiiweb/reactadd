const getAllPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json());
    return posts;
}

export {
    getAllPosts
}