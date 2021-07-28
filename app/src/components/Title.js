import React from 'react';
import { connect } from 'react-redux';
import { getNewJoke } from '../actions';


const Title = (props) => {

    const { title } = props;

    return (

        <div>
            <h2>{title}</h2>

        </div>

    )

}

const mapStateToProps = state => {
    return ({
        title: state.title
    })
}

const mapDispatchToProps = (dispatch) => {
    return {

        getNewJoke: () => dispatch(getNewJoke())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);