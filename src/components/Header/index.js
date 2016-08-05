import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem, Icon } from 'semantic-react';

import { styles } from './styles.scss';

/**
 * General Header Component
 */
export class Header extends Component {

    /**
     * Main render function for the Header
     * @return Header
     */
    render() {
        // TODO: Generate Navigation Bar more dynamically.
        return (
            <div className={`${styles}`}>
              <div className={`content`}>
                  <h1 className="ui header siteTitleHeader">
                    Orðabókin hans Hauxa.
                    <div className="siteSubTitleHeader sub header">Einföld og þægileg.</div>
                  </h1>
              </div>
            </div>
        );
    }
}
