import {createStore} from 'redux';
import reducers from '../reducers/index';
/*import DevTools from '../devtools';
 *
 * const store = createStore(
 *     reducers,
 *     DevTools.instrument()
 * );
*/

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
