import React, {Component} from "react";
import {connect} from 'react-redux';

class BookList extends Component{
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li className="list-group-item" key={book.title}>{book.title}</li>
            )
        })
    }
}

function mapStateToProps(state){
    return{
        books : state.books
    }
}

export default connect(mapStateToProps)(BookList)