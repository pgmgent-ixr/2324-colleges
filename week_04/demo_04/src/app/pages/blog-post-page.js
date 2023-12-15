// Import external modules
import { useState } from "react";
import { useParams } from "react-router-dom";

// Import data
import posts from '../data/posts.json';

export default function BlogPostPage () {
  const routeParams = useParams();
  const postId = routeParams.postId;

  const [post, setPost] = useState(posts.find(post => post.id == postId));

  return (
    <>
      {post && (
        <>
          <h1>{ post.title }</h1>
          <p>{ post.description }</p>
        </>
      )}
    </>
  );
};