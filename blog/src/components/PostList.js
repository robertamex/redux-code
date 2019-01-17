import React from 'react';
import UserHeader from './UserHeader';
import {connectAsync} from 'iguazu';
import {fetchPosts} from '../actions';
import {queryCollection} from 'iguazu-rest';
import {loadPosts} from '../actions/loadPosts';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(props);

  }
  renderList() {
    console.log("333", this.props.posts);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
    
    
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

function loadDataAsProps({store : {dispatch}}) {
  return {
    posts: () => dispatch(loadPosts())
  }
}


export default connectAsync({loadDataAsProps})(PostList);
