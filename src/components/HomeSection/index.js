import React, { Component } from 'react';
import { styles } from './styles.scss';

import SearchInput from '../SearchInput';
import TranslationList from '../TranslationList';
import InfoBar from '../InfoBar';

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

                    <div className="ui two column doubling stackable grid container">

                        <div className="column">
                            <h1>Íslenska</h1>
                            <TranslationList translations={translations} lang_code="IS" />
                        </div>

                        <div className="column">
                            <h1>Enska</h1>
                            <TranslationList translations={translations} lang_code="EN" />
                        </div>

                    </div>
                </div>
        </div>
        );
    }
}
