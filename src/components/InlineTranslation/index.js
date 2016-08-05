import React, { Component, PropTypes } from 'react';
import { styles } from './styles.scss';

import { Message, Icon, Content, Header } from 'semantic-react';

/**
 * Inline Translation
 */
export class InlineTranslation extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main rending function of the component.
     * @return Inline Translation Section
     */
    render() {

        let { translations, settings } = this.props;

        return (
            <div className={`${styles}`}>
                <Message icon>
                    <Icon name="help"/>
                    <Content>
                        <Header>
                            {translations.lastTranslation.word}
                        </Header>
                        <p>{translations.lastTranslation.translation}</p>
                    </Content>
                </Message>
            </div>
        );
    }
}


// Validation of Types.
InlineTranslation.propTypes = {
    translations : PropTypes.object.isRequired,
    settings     : PropTypes.object.isRequired
};

export default InlineTranslation;
