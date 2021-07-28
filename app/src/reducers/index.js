import { FETCHING_QUOTE_FAILURE, FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, GET_NEW_JOKE } from "../actions";

// 1. Define initialState
const initialState = {

    title: 'Dad Jokes',
    joke: '',
    loading: false,
    error: "",

}

// 2. Define a reducer with all state management functions related to Title
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(GET_NEW_JOKE):
            return (
                {...state, joke: action.payload}
            )
        case(FETCHING_QUOTE_START) :
            return ({
                ...state,
                loading: true
            })
        case(FETCHING_QUOTE_SUCCESS) :
            return ({
                ...state,
                loading: false,
                joke: action.payload
            })
        case(FETCHING_QUOTE_FAILURE) :
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state;
    }
}