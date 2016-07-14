import React, { Component } from 'react';
import { styles } from './styles.scss';

import { Input } from 'semantic-react';

/**
 * Search Input
 */
export class SearchInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            loading: false
        }

    }

    toggleLoadingState() {
       this.setState({
           loading: !this.state.loading
       });
    }

    /**
     * Main rending function of the search input.
     * @return Search Input
     */
    render() {
        return (
            <Input
                icon="search"
                size="huge"
                onChange={(evt) => this.setState({ value: evt.target.value, loading: true })}
                state={this.state.loading ? 'loading' : null}
                placeholder="Sláðu inn leitarorð. Dæmi: House, Hús, Barn"
                fluid
                />
        );
    }
}


// Validation of Types.
SearchInput.propTypes = {

};

export default SearchInput;
