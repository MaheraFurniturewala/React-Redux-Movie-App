import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";



// not changing current state instead returning new sate which would be merged with current state in the 
// store
const initialMoviesState = {
    list: [],
    favourites: [],
}

export default function movies (state = initialMoviesState, action) {
//     if(action.type === ADD_MOVIES){
//         return {
//             ...state,
//             list: action.movies
//     }
// }
//     return state;
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies        
            }
        case ADD_FAVOURITE: 
                return {
                    ...state,
                    favourites: [action.movie, ...state.favourites ] 
                }
        default:
            return state;
    }
}

