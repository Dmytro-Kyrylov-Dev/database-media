import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import ListMovie from './ListMovie';
import _get from 'lodash/get';

const mapStateToProps = (state) => ({
  updatedListMovie: _get(state, 'listMovies.results', []),
});

const mapDispatchToProps = (dispatch) => ({
  getUpdatedListMovie: () => {
    dispatch(moviesAndTvActions.getListMovies());
  },
  getListPopularMovies: () => {
    dispatch(moviesAndTvActions.getListPopularMovies());
  },
  getListTopRatedMovies: () => {
    dispatch(moviesAndTvActions.getListTopRatedMovies());
  },
  getListNowPlayingMovies: () => {
    dispatch(moviesAndTvActions.getListNowPlayingMovies());
  },
  searchMovie: (query) => {
    dispatch(moviesAndTvActions.searchMovie(query));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListMovie);