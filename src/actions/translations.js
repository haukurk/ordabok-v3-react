import * as Type from 'constants/action-types';
import { get_translations } from '../api/modules/translations';

/**
 * Action Creator for failed login.
 * @param  {object} error message
 * @return {object} action for login failed.
 */
export function getTranslationsFailed(error) {
  return { type: Type.ERROR_TRANSLATIONS, error: error };
}

/**
 * Action Creator for succeeded logins
 * @param  {object} user object from API.
 * @return {object} action for succeded logins.
 */
export function getTranslationsSucceded(translations) {
  return { type: Type.SUCCESS_TRANSLATIONS, payload: translations };
}

/**
 * Action Creator for when requesting login
 * @return {object} action for request login
 */
export function requestingTranslations(search_input) {
  return { type: Type.REQUEST_TRANSLATIONS, request: search_input };
}

/**
 * Action Creator for when getting a translation
 * @return {object} action for getting a translation
 */
export function getTranslation(translation) {
  return { type: Type.TRANSLATE_TRANSLATION, translation: translation };
}

/**
 * Function that sends request to the dictionary Api
 * @param  {string} search input for translaTIONS.
 * @return {promise-ish} apisauce promise-based repsonse.
 */
export function GetTranslationsFromAPI(search_input) {
  return (dispatch) => {

    dispatch(requestingTranslations(search_input)); // Start by dispatching a thunk that tell us that we are requesting a login.

    get_translations(search_input)
    .then(function(response) {
      if(response.ok === true) {
        dispatch(getTranslationsSucceded(response)); // Dispatch Login Success Action.
      } else {
        dispatch(getTranslationsFailed(response.problem)); // Dispatch Login Failed Action.
      }
    });

  };
}
