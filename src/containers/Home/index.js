import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { HomeSection } from 'components/HomeSection';

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
                <HomeSection />
            </div>
        );
    }
}
