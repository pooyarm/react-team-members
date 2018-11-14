import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddContainer from './add';
import MembersList from './members';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
	render() {
        return (
            <div className="members-list p-3">
                <h6 className="members-list__title mb-3">Your team for this test</h6>
                <div className="members-list__content">
                    <div className="container">
                        <div className="row">
                            <AddContainer />
                            <MembersList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        members: state.members
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);