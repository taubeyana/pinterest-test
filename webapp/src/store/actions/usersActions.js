import Axios from 'axios';

export const GET_USER_BY_ID = 'GET_USER_BY_ID'

export const getUserById = (user) => {
    return {
        type: GET_USER_BY_ID,
        user
    }
}

export const fetchUserFromDb = (id) => {
    return dispatch => {
        Axios.get('/api/users/' + id)
        .then(data => data.data)
        .then(user => dispatch(getUserById(user) ))
        .catch(err => console.log(err.message))
    }
    
}
// dispatch(getUserById(data.data)))