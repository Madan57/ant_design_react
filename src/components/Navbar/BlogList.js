const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {console.log('blogs data check', blogs)}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)}>delete block</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
