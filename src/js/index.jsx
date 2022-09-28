import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import '../styles/base/index.scss';

import ExercisePage from '../components/ExercisePage/ExercisePage';

// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExercisePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// TODO: SASS
// TODO: Use mixins for media queries and font sizes etc.

// TODO: Assume the the Tell Me more CTA is a link directing to another page

// TODO: can't test against latest safari. I have 15.6.1
