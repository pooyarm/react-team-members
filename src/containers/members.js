import React, { Component } from 'react';
import {connect} from 'react-redux';
import MemberItem from '../presentations/member';
import { removeMember } from '../actions';

class MembersListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return this.props.members.slice(0,(this.props.limit > 0)?this.props.limit:undefined).map((user) => {
            return <MemberItem
                        key={user.id}
                        removeHandler={this.props.remove}
                        {...user} />;
        });
    }
}

const mapStateToProps = (state) => {
	return {
        members: state.members.map((memberId) => {
            return state.users.find((user) => user.id === memberId);
        })
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (userId) => {
            dispatch(removeMember(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersListContainer);