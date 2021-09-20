import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // 특정 아이디를 가진 돔을 가져와서 거기에다가 리액트 컴포넌트를 그리겠다.
    <App />,document.getElementById('root')
);


reportWebVitals();
