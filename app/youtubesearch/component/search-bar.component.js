import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {term:""};
    }

    render(){
        return <div className="search-bar">
            <input className="form-control"
                    onChange={event => this.onInputChange(event)} //{event=>this.setState({term:event.target.value})}
                    value={this.state.term}/>
        </div>
    }

    onInputChange(event){
        this.setState({term:event.target.value})
        this.props.onSearchTermInputChange(event.target.value)
        console.log(event.target.value)
    }
}

export default SearchBar;