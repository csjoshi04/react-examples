import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectBook} from "../action/selectbook.acation"
import {bindActionCreators} from "redux"

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
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}>{book.title}</li>
            )
        })
    }
}

function mapStateToProps(state){
    return{
        books : state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)