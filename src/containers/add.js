import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addMember } from '../actions';
import AddMemberPresentation from '../presentations/add';

class AddContainer extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.selectRef = React.createRef();
        this.state = {
        };
    }
    componentDidMount() {
    }
    add(userId) {
        if (userId && this.props.users.filter((user) => user.id === userId).length > 0) {
            this.props.add(userId);
        }
    }
	render() {
        return (
            <AddMemberPresentation
                addHandler={this.add}
                users={this.props.users.filter((user) => (this.props.members.indexOf(user.id) < 0))}
            />
        )
    }
}

const mapStateToProps = (state) => {
	return {
        users: state.users,
        members: state.members
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (userId) => {
            dispatch(addMember(userId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);