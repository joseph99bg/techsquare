const postService = {
    load: function (id) {
        return fetch(`http://localhost:8080/api/post${id ? `/details/${id}` : '' }`)
            .then(res => res.json());
    },
    create: function(data) {
        return fetch('http://localhost:8080/api/post/create', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    edit: function (id, data) {
        return fetch(`http://localhost:8080/api/post/edit/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    delete: function(id) {
        return fetch(`http://localhost:8080/api/post/delete/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
}

export default postService