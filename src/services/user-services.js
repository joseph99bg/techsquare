const userService = {
    register: function (data) {
        return fetch(`http://localhost:8080/api/user/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
    },
    login: function (data) {
        return fetch(`http://localhost:8080/api/user/login`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.text());
    },
    logout: function () {
        return fetch(`http://localhost:8080/api/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text());
    }
}

export default userService