import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import 'react-markdown-editor-lite/lib/index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"))