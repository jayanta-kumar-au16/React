import {getmovies} from './actionType';
const initialState = {
    moviesData : []
}

const allmovies = (state=initialState , {type:payload})=>{
    switch (getmovies) {
        case getmovies.GET_MOVIES:
            return {...state , moviesData:payload}
        default:
            return state;
    }
};

export default allmovies;