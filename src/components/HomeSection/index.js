import React, { Component } from 'react';
import { styles } from './styles.scss';

import { Grid, Column, Divider, Icon } from 'semantic-react';

import SearchInput from '../SearchInput';

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
        return (
            <div className="ui container">
                <div className="ui segment">
                    <SearchInput {...this.props} />
                    <div className="ui segment">
                    <Grid columns={3} relaxed="very" style={{position: "relative"}}>
                        <Column>
                            <div className="ui vertical basic buttons">
                              <button fluid className="ui button">Feed</button>
                              <button className="ui button">Messages</button>
                              <button className="ui button">Events</button>
                              <button className="ui button">Photos</button>
                              <button className="ui button">Photos</button>
                              <button className="ui button">Photos</button>
                              <button className="ui button">Photos</button>
                              <button className="ui button">Photos</button>
                            </div>
                        </Column>
                        <Divider aligned="vertical">OR</Divider>
                        <Column>
                            Vivamus dui dui, eleifend vitae imperdiet ut, tristique bibendum ante. <br/>Fusce at orci ante. Nulla varius leo in ante cursus sodales.
                        </Column>
                        <Divider aligned="vertical">
                            <Icon name="idea" />
                        </Divider>
                        <Column>
                            Etiam est erat, elementum eu urna ut, finibus sollicitudin metus. <br/>Morbi dapibus id risus quis ultrices. Nunc hendrerit est vitae elementum dignissim.
                        </Column>
                    </Grid>
                    </div>
                </div>
            </div>
        );
    }
}
