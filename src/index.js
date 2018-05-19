import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import 'normalize.css/normalize.css'; // I think this lib might be broken
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './styles/styles.scss';

const view = (
    <App/>
);

ReactDOM.render(view, document.getElementById('root'));
