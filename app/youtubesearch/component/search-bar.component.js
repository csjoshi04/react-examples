import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {term:""};
    }

    render(){
        return <input
                    onChange={event=>this.setState({term:event.target.value})}
                    value={this.state.term}/>
    }

    onInputChange(event){
        console.log(event.target.value)
    }
}

export default SearchBar;