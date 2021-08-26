import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const PostsList = () => {
  // React 组件可以使用 React-Redux 库中的 useSelector 钩子从 Redux store 中读取数据。
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
        <p className="post-content">{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
