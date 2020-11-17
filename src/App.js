import './App.scss';
import {firestore} from './firebase';
import React, {Component} from 'react';
import Posts from "./components/Posts";
import {collectIdsAndDocs} from "./utilities";

class Application extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection('posts')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        this.setState({posts})
      })
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    const {posts} = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
        />
      </main>
    );
  }
}

export default Application;