import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../components/flag-list.component';
import {
    getCountries,
    searchCountries,
    deleteCountry
} from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }
    handleSearchCountries = event => {
        this.props.dispatch(searchCountries(event.target.value));
    }
    handleDeleteCountry = id => {
        this.props.dispatch(deleteCountry(id));
    }
    render() {
        return (
            <div>
                <div className='search text-center'>
                    <input type='text' onChange={this.handleSearchCountries} />
                </div>
                <CountryFlagList
                    countries={this.props.visibleCountries}
                    deleteCountry={this.handleDeleteCountry}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    visibleCountries: state.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(CountryFlagContainer);
