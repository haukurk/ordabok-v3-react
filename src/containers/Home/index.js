import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* components */
import { HomeSection } from 'components/HomeSection';

/* action creators */
import * as TranslationActions from 'actions/translations';
import * as SettingsActions from 'actions/settings';

/**
 * Meta data for the Home Route.
 * @type {Object}
 */
const metaData = {
    title: 'Orðabók',
    description: 'Auðvelt aðgengi af þýðingum frá ensku yfir í íslensku og öfugt.',
    canonical: '',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};

/**
 * Decorator to access redux states and utils.
 */
@connect(
    state => ({
        translations: state.translations,
        settings: state.settings
    }),
    dispatch => bindActionCreators(Object.assign({}, TranslationActions, SettingsActions), dispatch)
)


/**
 * Container for Home Route.
 */
export class HomeContainer extends Component {

    /**
     * Main render function for the Home Container Route
     * @return Container for Home Route
     */
    render() {
        return (
            <div>
                <DocumentMeta {...metaData} />
                <HomeSection {...this.props} />
            </div>
        );
    }
}
