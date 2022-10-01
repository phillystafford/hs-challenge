import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import '../styles/base/index.scss';

import ExercisePage from '../components/ExercisePage/ExercisePage';

const root = createRoot(document.getElementById('root'));
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

// TODO: add tests
// TODO: add web vitals
