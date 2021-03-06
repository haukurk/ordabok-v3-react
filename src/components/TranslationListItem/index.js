import React, { Component, PropTypes } from 'react';
import { styles } from './styles.scss';

import { Modal, Icon, Header, Conent, Actions, Content, Button} from 'semantic-react';

/**
 * Translation List Item
 */
export class TranslationListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
           active: false
       }

    }

    onCloseModal() {
        this.setState({
            active: false
        });
    }

    onClickTranslation() {

    }

    /**
     * Main rending function of the list item.
     * @return Translation Item
     */
    render() {

        // Extract from props
        let { translation, reduxAwarenessMethod, settings } = this.props;

        return (
            <div>
                <button
                    onClick={() => {
                        if(settings.OPEN_WITH_MODAL) {
                            this.setState({ active: true });
                        }
                        reduxAwarenessMethod(translation);
                    }}
                    className={`${styles} ui button`}>{translation.word}
                </button>

                <Modal onRequestClose={this.onCloseModal.bind(this)} active={this.state.active}>
                    <Icon name="close" onClick={this.onCloseModal.bind(this)}/>
                    <Header>{translation.word}</Header>
                    <Content>
                        <p>
                            {translation.translation}
                        </p>
                    </Content>
                    <Actions>
                        <Button emphasis="default" onClick={this.onCloseModal.bind(this)}>Okey, búin(n)..</Button>
                    </Actions>
                </Modal>
            </div>
        );
    }
}


// Validation of Types.
TranslationListItem.propTypes = {
    translation : PropTypes.object.isRequired,
};

export default TranslationListItem;
