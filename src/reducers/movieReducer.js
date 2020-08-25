import {FETCHED_MOVİES} from "../actions/Movies";
const initialReducer={
    movies:[],
    fetching:false,
    fetched:false,
    err:""
}

export function movieReducer(state=initialReducer,action) {
    switch (action.type) {
        case FETCHED_MOVİES:
            return{
                ...state,
               movies: action.payload
            }
        default:
            return  state;
    }
}
