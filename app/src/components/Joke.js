import React, {useEffect} from 'react';
import { getNewJoke } from '../actions';
import { connect } from 'react-redux';

const Joke = (props) =>{

    useEffect(() => {
        // run api call async action when the component mounts
        props.getNewJoke();
    }, [props.getNewJoke]);

    if (props.loading) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        )
    }

    return (
        <>
            <h3>{props.joke}</h3>
            <button
                onClick={() => props.getNewJoke()}
            >Get New Joke</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        joke: state.joke,
        error: state.error,
        loading: state.loading
    })
}

const mapDispatchToProps = {getNewJoke}

export default connect(mapStateToProps, mapDispatchToProps)(Joke);