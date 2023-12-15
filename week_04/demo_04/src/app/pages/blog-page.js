// Import external modules
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Import custom modules
import  { ROUTES } from "../routes";

// Import data
import posts from '../data/posts.json';

// GraphQL Query
const GET_ALL_POSTS_SMALL = gql`
query GetPosts {
  posts {
    id
    title
    slug
    thumbnail {
      url
    }
  }
}
`;

export default function BlogPage () {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_SMALL);
  console.log(loading, error, data);  
  
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