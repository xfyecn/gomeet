import { connect } from 'react-redux';
import { fetchGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const msp = (state, ownProps) => {
  return {
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser: state.entities.users[state.session.id],
    creator: state.entities.users[group.creator_id]
  };
};

const mdp = dispatch => {
  return {
    fetchGroup: id => dispatch(fetchGroup(id))
  };
};

export default connect(msp, mdp)(GroupShow);