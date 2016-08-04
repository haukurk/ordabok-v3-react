import React, { Component, PropTypes } from 'react';
import { styles } from './styles.scss';

import _ from 'lodash';

import TranslationListItem from '../TranslationListItem';

/**
 * Translation List
 */
export class TranslationList extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Filter Translations collection with key.
     */
    _filterTranslations(translations, lang_key) {
        // Lodash way
        return _.filter(translations, { language_code: lang_key })

        // ECMAScript 5 Array Filter and Map - Needs polyfill
        /* return translations.filter(
            function(translation) {
                return translation.language_code === lang_key;
            }
        ) */
    }

    /**
     * Main rending function of the list.
     * @return Search List of Translations
     */
    render() {

        let { translations, lang_code } = this.props;

        let filteredTranslations = this._filterTranslations(translations.current,lang_code);

        return (
            <div className={`${styles}`}>
            <div className={`scrollable ui vertical basic buttons`}>
                {this._filterTranslations(translations.current,lang_code).map(
                    (translation, index) => (
                        <TranslationListItem key={index} translation={translation} />
                    ))}
            </div>
            </div>
        );
    }
}


// Validation of Types.
TranslationList.propTypes = {
    translations : PropTypes.object.isRequired,
};

export default TranslationList;
