import { Link } from "react-router-dom";

// Import custom modules
import  { ROUTES } from "../routes";

// Import data
import posts from '../data/posts.json';

export default function BlogPage () {
  return (
    <>
      {posts && posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`${ROUTES.Blog}/${post.id}`}>
                <h2>{ post.title }</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}   
    </>
  );
};