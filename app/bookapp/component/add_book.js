import React, { Component } from 'react';
import {addNewBookAction} from '../action/addnewbook.action';
import {bindActionCreators} from "redux";
import {connect} from "react-redux"

class AddBook extends Component{
    constructor(props){
        super(props)
        this.state = {"newbook":""};
        this.addNewBook = this.addNewBook.bind(this)
    }

    addNewBook(){
        this.props.addBook({title:this.state.newbook});
        this.setState({newbook:""})
    }

    render(){
        return (
            <span>
                <input type="text" value={this.state.newbook}
                 onChange={event=>this.setState({newbook:event.target.value})} />
                 <button className="btn btn-primary" onClick={this.addNewBook}>Add New Book</button>
            </span>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({addBook:addNewBookAction},dispatch);
}

export default connect(null,mapDispatchToProps)(AddBook);