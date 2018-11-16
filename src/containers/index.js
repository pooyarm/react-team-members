import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddContainer from './add';
import MembersList from './members';

class App extends Component {
    constructor(props) {
        super(props);
        this.showAll = this.showAll.bind(this);
        this.state = {
            limit: 5
        };
    }
    showAll() {
        this.setState({
            limit: -1
        });
    }
	render() {
        return (
            <div className="members-list">
                <div className="d-flex mb-2 justify-content-between px-3 pt-3">
                    <h6 className="members-list__title mb-0 align-self-center">Your team for this test</h6>
                    <div className="members-list__team-page">
                        <span className="mr-1">Team page</span>
                        <i className="fa fa-users"></i>
                    </div>
                </div>
                <div className="members-list__content px-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <AddContainer />
                            <MembersList limit={this.state.limit} />
                        </div>
                    </div>
                </div>
                <div className="members-list__footer">
                    {this.renderPagination()}
                </div>
            </div>
        )
    }
    renderPagination() {
        if (this.state.limit < 0 || this.state.limit >= this.props.membersCount) return null;
        return (
            <div className="members-list__more" onClick={this.showAll}>
                <span>Show all</span>
                <i className="fa fa-chevron-down ml-1"></i>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        membersCount: state.members.length
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);