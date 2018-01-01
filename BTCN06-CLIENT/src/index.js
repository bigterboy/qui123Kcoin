
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainContainer from './containers/MainContainer'
import RootReducer from './reducers/RootReducer';


const initState = {};

const store = createStore(RootReducer, initState);


const appRoot = (
    <Provider store={store}>
        <section id="container">
            <MainContainer />
        </section>
    </Provider>
)

ReactDOM.render(appRoot, document.getElementById('root'));