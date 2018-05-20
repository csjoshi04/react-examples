import React, {Component} from 'react'
import BookList from "../container/booklist.component";
import AddBook from "./add_book";
import BookDetailComponent from "../container/bookdetail.component";

export class AppComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <AddBook/>
                <div className="row">
                    <div className="col-lg-12">
                        <BookList/>
                        <BookDetailComponent/>
                    </div>
                </div>
            </div>
        )
    }
}