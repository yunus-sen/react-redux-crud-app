import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from'react-redux'
import MoviesList from "../MoviesList";
import {fetchMovies} from "../../actions/Movies";
class MoviesPage extends Component {
    componentDidMount() {
        this.props.onfetchMovies()
    }

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
    movies:PropTypes.object.isRequired
};
const mapDispatchToProps={
    onfetchMovies:fetchMovies
}
const mapStateToProps=(state)=>{
    return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);
