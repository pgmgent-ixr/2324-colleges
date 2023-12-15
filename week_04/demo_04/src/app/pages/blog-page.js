// Import external modules
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// Import custom modules
import { ROUTES } from "../routes";

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

export default function BlogPage() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_SMALL);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && data.posts && data.posts.length > 0 && (
        <ul>
          {data.posts.map(post => (
            <li key={post.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={post.thumbnail.url} alt={post.title} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ post.title }</h5>
                </a>
                <Link to={`${ROUTES.Blog}/${post.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </li>
            // <li key={post.id}>
            //   <Link to={`${ROUTES.Blog}/${post.slug}`}>
            //     <h2>{ post.title }</h2>
            //     <img src={post.thumbnail.url} alt={post.title} />
            //   </Link>
            // </li>
          ))}
        </ul>
      )}
    </>
  );
};