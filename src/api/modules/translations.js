import api from '../create';

/**
 * Send a GET request to the Dictionary API.
 * @param  {[string]} search input for searching translations.
 * @return {[promise based response from apisauce]}
 */
export function get_translations(search_input) {
  return api.get('translations',
    {
       "filter[where][word][like]": search_input+"%",
       "filter[limit]"            : 100
    }
  );
}
