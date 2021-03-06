import React, { Component } from 'react';


export default class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = { term : ""};
    }
    handleInputChange(e){
        this.setState({
            term : e.target.value
        })
        this.props.onInputChange(e.target.value);
    }

    render() {
        return (
            <div className="search-bar">
                <input
                 value={this.state.term}
                 onChange={this.handleInputChange.bind(this)}/>
            </div>
        );
    }
}
