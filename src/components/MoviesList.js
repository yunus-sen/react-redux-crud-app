import React, {Component} from 'react';
import PropTypes from 'prop-types';



function MoviesList({movies}) {

    const emptyMessage="there are no movies yet";
    const moviesList=(
        <div>
            movies list.
        </div>
    )
    return(
        <div>
            {
                movies.length===0?emptyMessage:moviesList
            }
        </div>
    )
}

MoviesList.propTypes = {};

export default MoviesList;
