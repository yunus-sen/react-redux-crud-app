import axios from 'axios'
export const FETCHED_MOVİES='FETCHED_MOVİES'
function MovieAction(newMovie) {
    return{
        type:FETCHED_MOVİES,
        payload:newMovie
    }
}
export function fetchMovies(){
    return dispatch=>{
        axios.get("url adresim")
            .then(res=>res.data)
            .then(data=>dispatch(MovieAction(data)))
            .catch(err=>console.log(err))
    }
}
