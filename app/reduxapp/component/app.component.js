import React, {Component} from 'react'
import BookList from "../container/booklist.component";
import BookDetailComponent from "../container/bookdetail.component";

export class AppComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <BookList/>
                <BookDetailComponent/>
            </div>
        )
    }
}