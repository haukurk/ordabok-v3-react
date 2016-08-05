import React, { Component } from 'react';
import GitHubButton from 'react-github-button';

import { styles } from './styles.scss';

/**
 * General Footer Component
 */
export class Footer extends Component {

    /**
     * Main render function for Footer
     * @return Footer
     */
    render() {
        return (
                <div className={`${styles} ui segment`}>

                    <p>
                        <GitHubButton type="stargazers" size="small" namespace="haukurk" repo="ordabok-v3-react" />
                        <b>Haukur, 2016</b> / Frammendi skrifaður með hjálp <b>React</b>+<b>Redux</b>+<b>SemanticUI</b>
                    </p>

                </div>
        );
    }
}
