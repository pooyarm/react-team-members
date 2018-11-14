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
    componentDidMount() {
    }
    render() {
        return this.props.members.map((user) => {
            return <MemberItem
                        key={user.id}
                        removeHandler={this.props.remove}
                        {...user} />;
        });
    }
	_render() {
        return (
            <div>
                <ul>{this.renderMembersList()}</ul>
            </div>
        )
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