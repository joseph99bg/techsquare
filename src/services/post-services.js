const postService = {
    load: function (id) {
        return fetch(`http://localhost:8080/api/post${id ? `/details/${id}` : '' }`).then(res => res.json());
    }
}

export default postService