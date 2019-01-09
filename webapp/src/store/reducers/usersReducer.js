import { 
    GET_USER_BY_ID      
} from '../actions/usersActions'

// const InitialState = {
//     firstName: "First Name",
//     lastName: "Last Name",
//     email: "taubeyana@gmail.com",
//     location: "Israel",
//     about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ""a pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     title: "Front-end Developer",
//     img: "https://goo.gl/ryHGRR",
//     website: "https://www.linkedin.com/in/YanaTaube",
// } 
const InitialState = {
   currentUser: {
        "firstName" : "Yana",
        "lastName" : "Taube",
        "email" : "taubeyana@gmail.com",
        "location" : "Israel",
        "about" : "Lorem, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "title" : "Front-end Developer",
        "img" : "https://goo.gl/ryHGRR",
        "website" : "https://www.linkedin.com/in/YanaTaube",
        "username" : "taubeyana",
    }
    
} 

const usersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID:
            return {...state, currentUser:{ ...action.user}}
        default: 
            return state
    }
}

export default usersReducer