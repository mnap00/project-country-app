import {createStore} from 'redux';
import reducers from '../reducers/index';
import {devToolsEnhancer} from 'redux-devtools-extension/logOnlyInProduction';
/*import DevTools from '../devtools';
 *
 * const store = createStore(
 *     reducers,
 *     DevTools.instrument()
 * );
*/

const store = createStore(
    reducers,
    devToolsEnhancer()
);

export default store;
