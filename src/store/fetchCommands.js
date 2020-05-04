//import fetch from 'cross-fetch'
import {fetchCommandsPending, fetchCommandsSuccess, fetchCommandsFailure} from './actions'

function fetchCommands(url){
    //console.log("Before Fetching from:", url)
    return dispatch => {
        //console.log("Fetching from:", url)
        dispatch(fetchCommandsPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                //console.log("Json results")
                //console.log(res)
                dispatch(fetchCommandsSuccess(res))
                return res;
            })
            .catch( error => {
                dispatch(fetchCommandsFailure(error))
            })
    }
}

export default fetchCommands
