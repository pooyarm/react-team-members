import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addMember } from '../actions';

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
    add() {
        var userId = this.selectRef.current.value;
        if (userId && this.props.users[userId]) {
            this.props.add(userId);
        }
    }
    renderSelectOptions() {
        return [
            <option key='0' value=''>Select one</option>
        ].concat(this.props.users.map((user) => {
            return <option key={user.id} value={user.id}>{user.username}</option>;
        }));
    }
	render() {
        return (
            <div className="member-list-item member-list-item--add col-md-6 py-3">
                <select ref={this.selectRef}>{this.renderSelectOptions()}</select>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        users: state.users
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