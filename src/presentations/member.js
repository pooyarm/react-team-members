import React, { Component } from 'react';

export default class MemberItem extends Component {
    remove() {
        if (window.confirm('Are you sure?')) {
            this.props.removeHandler(this.props.id);
        }
    }
	render() {
        var picture = 'assets/' + this.props.picture;
        return (
            <div className="member-list-item member-list-item--member col-md-6">
                <div className="d-flex">
                    <div className="member-list-item__avatar rounded-circle">
                        <img src={picture} />
                    </div>
                    <div className="member-list-item__remove rounded-circle" onClick={this.remove.bind(this)}>
                        X
                    </div>
                    <div className="member-list-item__content flex-fill">
                        <div className="member-list-item__userdata__role">{this.props.role}</div>
                        <div className="member-list-item__userdata__username">{this.props.username}</div>
                    </div>
                </div>
            </div>
        )
	}
}
