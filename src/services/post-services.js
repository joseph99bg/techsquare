const postService = {
    load: function (id, limit) {
        return fetch(`http://localhost:8080/api/post${id ? `/details/${id}` : '' }${limit ? `?limit=${limit}` : ''}`)
            .then(res => res.json());
    },
    loadMy: function () {
        return fetch(`http://localhost:8080/api/post/my-posts`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    create: function(data) {
        return fetch('http://localhost:8080/api/post/create/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    },
    edit: function (id, data) {
        return fetch(`http://localhost:8080/api/post/edit/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    },
    delete: function(id) {
        return fetch(`http://localhost:8080/api/post/delete/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    getComments: function (id) {
        return fetch(`http://localhost:8080/api/comment/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json());
    },
    createComment: function (id, data) {
        return fetch(`http://localhost:8080/api/comment/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    }
}

export default postService