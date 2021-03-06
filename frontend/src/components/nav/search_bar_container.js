import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { updateSearchTerm } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    subs: Object.values(state.entities.subs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: searchTerm => dispatch(updateSearchTerm(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

