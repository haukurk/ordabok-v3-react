import React, { Component, PropTypes } from 'react';
import { styles } from './styles.scss';

import { Form, Field, Checkbox, Label, Icon, Grid, Column, Detail } from 'semantic-react';

/**
 * Translation List Item
 */
export class InfoBar extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * Main rending function of the list item.
     * @return Translation Item
     */
    render() {

        // Extract from props
        let { SetOpenTranslationWithModal, settings, translations } = this.props;

        return (
            <Grid>
                <Column width={8}>


                    <Form>
                        <Field>
                            <Checkbox
                                type="toggle"
                                checked={settings.OPEN_WITH_MODAL}
                                onClick={(e) =>
                                    SetOpenTranslationWithModal(!settings.OPEN_WITH_MODAL)
                                }>
                                Sýna þýðingar í sér glugga.
                            </Checkbox>
                        </Field>
                    </Form>
            </Column>
            <Column width={8}>

                <Label basic color="blue"><Icon name="search"/>Niðurstöður fyrir strenginn
                    <Detail>{translations.lastSearch}</Detail>
                </Label>

            </Column>
            </Grid>
        );
    }
}


// Validation of Types.
InfoBar.propTypes = {
    translations : PropTypes.object.isRequired,
    settings     : PropTypes.object.isRequired
};

export default InfoBar;
