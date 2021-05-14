import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import MovieDetails from './MovieDetails';
import _get from 'lodash/get';

const mapStateToProps = (state) => ({
  singleMovieDetails: _get(state, 'movieById', []),
});

const mapDispatchToProps = (dispatch) => ({
  getSingleMovieDetails: (id) => {
    dispatch(moviesAndTvActions.getMovieById(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);