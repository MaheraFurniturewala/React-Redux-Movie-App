import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";



// not changing current state instead returning new sate which would be merged with current state in the 
// store
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
}

export function movies (state = initialMoviesState, action) {
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
            
        case ADD_TO_FAVOURITE: 
                return {
                    ...state,
                    favourites: [action.movie, ...state.favourites ] 
                }

        case REMOVE_FROM_FAVOURITES:
           const filteredArray = state.favourites.filter((movie)=>{
               return movie.Title !== action.movie.Title;
           });
           return {
               ...state,
               favourites: filteredArray
           };
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val,
            }

        default:
            return state;
    }
}

const initialSearchState = { 
    result: {}
};
 
export function search (state = initialSearchState,  action){
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

//this reducer will be called every time action is dispatched
export default function rootReducer (state = initialRootState, action){
    return {
        movies: movies(state, action),
        search : search(state, action)
    }
}