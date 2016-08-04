import { combineReducers } from 'redux';
import system from './system';
import translations from './translations';
import settings from './settings';

/**
 * Combinator for reducers.
 */
const rootReducer = combineReducers({
    system,
    settings,
    translations
});

export default rootReducer;
