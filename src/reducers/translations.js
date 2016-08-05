import * as Type from 'constants/action-types';

let initialState = {
    current: {},
    lastSearch: null,
    lastTranslation: null
}

/**
 * Reducer for current displayed translations
 * @param  {Object} old state
 * @param  {Object} action from the action creator
 * @return {Object} reduced state.
 */
export default function translations(state = initialState, action) {
    switch (action.type) {
        case Type.REQUEST_TRANSLATIONS:
            return Object.assign({}, state, {loading: true, lastSearch: action.request});
        case Type.ERROR_TRANSLATIONS:
            return Object.assign({}, state, {loading: false});
        case Type.SUCCESS_TRANSLATIONS:
            return Object.assign({}, state, {loading: false, current: action.payload.data});
        case Type.TRANSLATE_TRANSLATION:
            return Object.assign({}, state, {lastTranslation: action.translation});
        case Type.REHYDRATE:
            var incoming = action.payload.translations // redux-persist use payload.
            if (incoming)
                return incoming;
            return state
        default:
            return state;
    }
}
