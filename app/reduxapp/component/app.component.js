import React, {Component} from 'react'
import BookList from "../container/booklist.component";

export class AppComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <BookList/>
            </div>
        )
    }
}