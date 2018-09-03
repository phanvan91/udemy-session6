import React from 'react'
import {connect} from 'react-redux'
import {fetchID,deletePost} from "../actions";
import {Link} from 'react-router-dom'
class PostShow extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchID(id);
    }
    onClickDelete = (id) => {
        this.props.deletePost(id,()=>{
            this.props.history.push('/')
        });
    }
    render () {
        const { post } = this.props
        if(!post){
            return <div>...Loading</div>
        }
        return (
            <div>
                <Link to={'/'}>BackToIndex</Link>
                <button
                    className={'btn btn-danger pull-xs-right'}
                    onClick={()=>this.onClickDelete(post.id)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Category : {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}
function mapStateToProps ({posts},ownProps) {
    return {
        post : posts[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{fetchID,deletePost})(PostShow)