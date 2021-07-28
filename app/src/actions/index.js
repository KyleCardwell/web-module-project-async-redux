import axios from 'axios';

export const GET_NEW_JOKE = "GET_NEW_JOKE";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START"
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS"
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE"

const headers = {
    Accept: "application/json"
}

export const getNewJoke = () => (dispatch) => {
    // update state to loading
    dispatch({type: FETCHING_QUOTE_START})
    
    // begin API request
    axios.get("https://icanhazdadjoke.com/", {headers})
    // respond to happy path & sad path, updating state with API response
        .then(res => {
            console.log(res);
            dispatch({type: FETCHING_QUOTE_SUCCESS, payload: res.data.joke})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCHING_QUOTE_FAILURE, payload: err})
        })


}