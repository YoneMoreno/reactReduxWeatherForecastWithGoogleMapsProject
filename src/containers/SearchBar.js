import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);

        this.state = {term: ''};
    }

    onInputChange(e) {
        console.log(e.target.value);
        this.setState({term: e.target.value});
    }

    render() {
        return (
            <form className='input-group'>
                <input
                    placeholder='Write a city name to get its forecast!'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Search</button>
                </span>
            </form>
        );
    }
}
