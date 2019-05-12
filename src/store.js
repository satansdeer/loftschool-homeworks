import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import searchMiddleware from './middlewares/searchMiddleware';
import showMiddleware from './middlewares/showMiddleware';


/*
searchText: '',
searchItems: [],
isLoading: false,
shows: [ show_id => show_info ]
error
*/

const getStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(searchMiddleware),
            applyMiddleware(showMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        ),
    );
    return store;
};

export default getStore;