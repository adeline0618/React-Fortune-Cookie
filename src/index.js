import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import proverb from './proverbs';

//html el에 접근, App(React로 개발한 부분)을 렌더링.abs
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
