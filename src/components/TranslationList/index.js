import React, { Component, PropTypes } from 'react';
import { styles } from './styles.scss';

import _ from 'lodash';

import { Message, Header, Content, Icon } from 'semantic-react';

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

        let { translations, lang_code, getTranslation, settings } = this.props;
        let filteredTranslations = this._filterTranslations(translations.current,lang_code);

        return (
            <div className={`${styles}`}>
            {filteredTranslations.length > 0 ?
            <div className={`scrollable ui vertical basic buttons`}>
                {filteredTranslations.map(
                    (translation, index) => (
                        <TranslationListItem settings={settings} reduxAwarenessMethod={getTranslation} key={index} translation={translation} />
                    ))}
            </div>
            :
            <div>
                <Message icon>
                    <Content>
                        <Header>
                            Engin orð á skrá.
                        </Header>
                        <p><Icon color="yellow" name="attention"></Icon>Athugaðu að stórir og litlir stafir skipta máli.</p>
                    </Content>
                </Message>
            </div>
            }
            </div>
        );
    }
}


// Validation of Types.
TranslationList.propTypes = {
    translations : PropTypes.object.isRequired,
};

export default TranslationList;
