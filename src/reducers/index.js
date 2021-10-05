//not changing current state instead returning new sate which would be merged with current state in the store
export default function movies (state = [], action) {
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}