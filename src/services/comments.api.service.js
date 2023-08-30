const getAllComments = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json());
    return comments;
}

export {
    getAllComments
}