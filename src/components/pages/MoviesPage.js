import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from'react-redux'
import MoviesList from "../MoviesList";
class MoviesPage extends Component {
    render() {
        return (
            <div>
                <h1>Movies Page</h1>
                <MoviesList  movies={this.props.movies}/>
            </div>
        );
    }
}

MoviesPage.propTypes = {
    movies:PropTypes.array.isRequired
};

const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps)(MoviesPage);
