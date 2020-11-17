import './App.scss';
import {firestore} from './firebase';
import React, {useState, useEffect} from 'react';
import Posts from "./components/Posts";
import {collectIdsAndDocs} from "./utilities";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('posts')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs);
        setPosts(posts)
      })

    return () => unsubscribe()
  }, [])

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts
        posts={posts}
      />
    </main>
  );
}

export default App;