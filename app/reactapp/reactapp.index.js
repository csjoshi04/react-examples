import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {HelloComponent} from "./component/hello.component";

class ReactAppMainComponent extends Component{
    render(){
        return(
            <div>
                <HelloComponent/>
            </div>
        )
    }
}

ReactDOM.render(<ReactAppMainComponent/>,document.getElementById('reactApp'))