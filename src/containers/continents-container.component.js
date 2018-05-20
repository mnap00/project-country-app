import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setContinent, deleteCountry} from '../actions/actions-countries';
import CountryFlagList from '../components/flag-list.component';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(setContinent('Europe'));
    }
    handleSetContinent = event => {
        this.props.dispatch(setContinent(event.target.value));
    }
    handleDeleteCountry = id => {
        this.props.dispatch(deleteCountry(id));
    }
    render() {
        return (
            <div>
                <select onChange={this.handleSetContinent}>
                    <option value='Europe'>Europe</option>
                    <option value='Africa'>Africa</option>
                </select>
                <CountryFlagList
                    countries={this.props.visibleCountries}
                    deleteCountry={this.handleDeleteCountry}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    visibleCountries: state.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(ContinentsContainer);
