import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../action/index';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {term:""}
    }

    onSubmitClick(event){
        // console.log(event.target.value);
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    render() {
        return (
            <form onSubmit={(event)=>this.onFormSubmit(event)}>
                <input type="text" value={this.state.term} onChange={(event)=> this.onSubmitClick(event)} />
                <button >Submit</button>
            </form>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);