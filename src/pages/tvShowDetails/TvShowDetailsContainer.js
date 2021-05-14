import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import TvShowDetails from './TvShowDetails';
import _get from 'lodash/get';

const mapStateToProps = (state) => ({
  singleTvShowDetails: _get(state, 'tvShowById', []),
});

const mapDispatchToProps = (dispatch) => ({
  getSingleTvShowDetails: (id) => {
    dispatch(moviesAndTvActions.getTvShowById(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TvShowDetails);