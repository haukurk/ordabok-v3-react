import React, { Component } from 'react';
import { styles } from './styles.scss';

import SearchInput from '../SearchInput';
import TranslationList from '../TranslationList';
import InfoBar from '../InfoBar';
import InlineTranslation from '../InlineTranslation';

/**
 * Home Section
 */
export class HomeSection extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main Render Function
     * @return Home page section.
     */
    render() {

        let { translations, settings } = this.props;

        return (
            <div className={`${styles}`}>

                <div className="ui segment">

                    <SearchInput {...this.props} />

                </div>

                <div className="ui segment">

                    <InfoBar {...this.props} />

                    <div className="ui divider"></div>

                    {(settings.OPEN_WITH_MODAL === false
                        && translations.lastTranslation != null) ?
                    <div>
                    <InlineTranslation {...this.props} />

                    <div className="ui divider"></div>
                    </div> : ''
                    }

                    <div className="ui two column doubling stackable grid container">

                        <div className="column">
                            <h2>Íslenska</h2>
                            <TranslationList {...this.props} lang_code="IS" />
                        </div>

                        <div className="column">
                            <h2>Enska</h2>
                            <TranslationList {...this.props} lang_code="EN" />
                        </div>

                    </div>
                </div>
        </div>
        );
    }
}
