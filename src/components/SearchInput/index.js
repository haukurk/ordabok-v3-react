import React, { Component } from 'react';
import { styles } from './styles.scss';

import { Input } from 'semantic-react';

/**
 * Search Input
 */
export class SearchInput extends Component {

    constructor(props) {
        super(props);

        this._searchForTranslations = _.debounce(this._searchForTranslations,500);

        this.state = {
            value: ''
        }

    }

    _searchForTranslations(search_input) {

        let { GetTranslationsFromAPI } = this.props;
        if(search_input.length > 1) {
            GetTranslationsFromAPI(search_input);
        }
    }

    SearchInput_OnChange(e) {
        this._searchForTranslations(e.target.value);
    }

    /**
     * Main rending function of the search input.
     * @return Search Input
     */
    render() {

        // Extract from props
        let { translations } = this.props;

        return (
            <Input
                icon="search"
                size="huge"
                onChange={(evt) => this.SearchInput_OnChange(evt)}
                state={translations.loading ? "loading" : null}
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
