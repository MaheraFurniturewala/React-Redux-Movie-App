
//actions --> js object -->express intent to the redux store to modify state 

// reducers(take in a state and return new state) in redux --> pure functions(1-->same input output same, 2-->function relies only on args provided and not use args outside its scope, 3-->not perform any side function (no manipulation pf DOM,DB,STATE,AJAX,should not change anything outside its scope))

// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3],
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies,
    }
}
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie,
    }
}
export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie,
    }
}