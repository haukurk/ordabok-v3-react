// API action types

export const SET_OPTION_OPEN_TRANSL_MODAL = 'SET_OPTION_OPEN_TRANSL_MODAL';

// Note that async API calls have REQUEST, ERROR, SUCCESS action types.
export const REQUEST_TRANSLATIONS = 'REQUEST_TRANSLATIONS';
export const ERROR_TRANSLATIONS = 'ERROR_TRANSLATIONS';
export const SUCCESS_TRANSLATIONS = 'SUCCESS_TRANSLATIONS';

// Translations List
export const TRANSLATE_TRANSLATION = 'TRANSLATE_TRANSLATION';

// Rehydrate types
import { REHYDRATE as ALIAS_RHYDRATE } from 'redux-persist/constants';
export const REHYDRATE = ALIAS_RHYDRATE;
export const REHYDRATED_COMPLETE = 'REHYDRATED_COMPLETE';
