import React, { Component } from 'react';

export default class AddMemberPresentation extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.showForm = this.showForm.bind(this);
        this.selectRef = React.createRef();
        this.state = {
            showForm: false
        };
    }
    add() {
        var userId = this.selectRef.current.value;
        this.props.addHandler(parseInt(userId));
    }
    showForm() {
        this.setState({
            ...this.state,
            showForm: true
        });
    }
    hideForm(e) {
        this.setState({
            ...this.state,
            showForm: false
        });
        e.stopPropagation();
    }
    renderSelectOptions() {
        return [
            <option key='0' value=''>Select one</option>
        ].concat(this.props.users.map((user) => {
            return <option key={user.id} value={user.id}>{user.username}</option>;
        }));
    }
	render() {
        var classNames = ['member-list-item','member-list-item--add','col-md-6','py-3'];
        classNames.push((this.state.showForm)?'member-list-item--add--form':'member-list-item--add--view')
        return (
            <div className={classNames.join(' ')} onClick={this.showForm}>
                {(this.state.showForm)?this.renderForm():this.renderView()}
            </div>
        )
    }
    renderView() {
        return (
            <div className="d-flex">
                <div className="member-list-item__add-btn rounded-circle">
                    <i className="fa fa-plus"></i>
                </div>
                <div className="member-list-item__content flex-fill">
                    Add team member to this test
                </div>
            </div>
        );
    }
    renderForm() {
        return (
            <div>
                <div className="members-list-add-popout">
                    <div className="d-flex">
                        <select className="form-control mr-2" ref={this.selectRef}>{this.renderSelectOptions()}</select>
                        <button type="button" onClick={this.add} className="btn btn-info">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div
                    className="members-list-add-popout-overlay"
                    onClick={this.hideForm.bind(this)}></div>
            </div>
        );
    }
}
