import { ADD_MOVIES } from "../actions";


// not changing current state instead returning new sate which would be merged with current state in the 
// store
const initialMoviesState = {
    list: [],
    favourites: [],
}
export default function movies (state = initialMoviesState, action) {
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list: action.movies
    }
}
    return state;
}

