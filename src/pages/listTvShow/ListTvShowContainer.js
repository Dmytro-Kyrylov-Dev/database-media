import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import ListTvShow from './ListTvShow';
import _get from 'lodash/get';

const mapStateToProps = (state) => ({
  updatedListTvShow: _get(state, 'listTvShow.results', []),
});

const mapDispatchToProps = (dispatch) => ({
  getUpdatedListTvShow: () => {
    dispatch(moviesAndTvActions.getListTvShow());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTvShow);