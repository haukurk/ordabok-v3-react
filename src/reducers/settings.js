import * as Type from 'constants/action-types';

let initialState = {
    OPEN_WITH_MODAL: false
}

/**
 * Reducer for settings in the app
 * @param  {Object} old state
 * @param  {Object} action from the action creator
 * @return {Object} reduced state.
 */
export default function settings(state = initialState, action) {
    switch (action.type) {
        case Type.SET_OPTION_OPEN_TRANSL_MODAL:
            return Object.assign({}, state, {OPEN_WITH_MODAL: action.settings.OPEN_WITH_MODAL});
        case Type.REHYDRATE:
            var incoming = action.payload.settings // redux-persist use payload.
            if (incoming)
                return incoming;
            return state
        default:
            return state;
    }
}
