import _ from 'lodash'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import {Link} from 'react-router-dom'

class PostsIndex extends Component{
    componentDidMount() {
        this.props.fetchPosts();
    }

    constructor(props){
        super(props);
    }

    renderPosts(){
        return _.map(this.props.posts, post=>{
            return (
                <li className='list-group-item' key={post.id} >{post.title}</li>
            )
        })
    }

    render(){
        console.log(this.props.posts)
        return (
            <div>
                <Link className="btn btn-primary" to="/posts/new">Add New Post</Link>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         posts: state.posts
//     }
// }

function mapStateToProps(state){
    return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)