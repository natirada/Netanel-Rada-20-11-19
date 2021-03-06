import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware, compose ,combineReducers} from 'redux';
import forecastReducer from './store/Reducers/Forecast';
import favoriteReducer from './store/Reducers/Favorite';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    Forecast: forecastReducer,
    Favorite: favoriteReducer
});


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
const app = (
   <Provider store={store}>
     <BrowserRouter>  
        <App />
     </BrowserRouter>
    </Provider> 
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
