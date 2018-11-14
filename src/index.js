import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';

import App from './containers/index';

ReactDOM.render((
    <Provider store={store}>
        <div className="container" style={{marginTop: 20, marginBottom: 20}}>
            <div className="row">
                <div className="col-12">
                    <App />
                </div>
            </div>
        </div>
    </Provider>
), document.getElementById('root'));