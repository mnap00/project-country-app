import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../components/flag-list.component';
import {getCountries, searchCountries} from '../actions/actions-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }
    search = event => {
        this.props.dispatch(searchCountries(event.target.value));
    }
    render() {
        return (
            <div>
                <div className='search text-center'>
                    <input type='text' onChange={this.search} />
                </div>
                <CountryFlagList countries={this.props.visibleCountries} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countriesReducer.countries,
    visibleCountries: state.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(CountryFlagContainer);
