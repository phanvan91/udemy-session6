import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from "../actions";
import _ from 'lodash'
class PostsIndex extends React.Component {
    componentDidMount () {
        this.props.fetchPosts()
    }
    renderPosts ()  {
        return _.map(this.props.posts,post => {
            console.log(post,'hey')
            return (
                <li className={'list-group-item'} key={post.id}>
                    {post.title}
                </li>
            )
        })
    }
    render () {
        return (
            <div>
                <h3>Posts</h3>
                <ul className={'list-group'}>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({posts}) {
    return {
        posts
    }
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)