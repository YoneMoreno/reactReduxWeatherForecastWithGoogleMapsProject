import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (
            <form className='input-group'>
                <input/>
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Search</button>
                </span>
            </form>
        );
    }
}
