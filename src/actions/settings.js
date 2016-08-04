import * as Type from 'constants/action-types';

/**
 * Action Creator for failed login.
 * @param  {object} error message
 * @return {object} action for login failed.
 */
export function SetOpenTranslationWithModal(open_with_modal) {
  return { type: Type.SET_OPTION_OPEN_TRANSL_MODAL,
        settings: {
          OPEN_WITH_MODAL: open_with_modal
        }
  };
}
