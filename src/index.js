import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/Routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { TodoListProvider } from './context/TodoListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <TodoListProvider>
        <Routes/>
      </TodoListProvider> 
    </BrowserRouter>
    <GlobalStyles/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
