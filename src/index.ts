import React from 'react';
import ReactDOM from 'react-dom';
import { Users } from './components/Wrapper';

const reactElement = React.createElement(Users);

ReactDOM.render(reactElement, document.getElementById('app-root'));
