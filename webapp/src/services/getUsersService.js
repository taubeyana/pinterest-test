class GetUsersService {
    static getUser(id) {
        return fetch('/api/users/'+id)
        .then(res => res.json())
        .then(user => user)
    }
}

export default GetUsersService;