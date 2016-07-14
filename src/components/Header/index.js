import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem } from 'semantic-react';

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
            <div className={`${styles}`}
            <h2 className="ui teal image header"}>
              <div className="content">
                Orðabók
              </div>
            </h2>
            </div>
        );
    }
}
