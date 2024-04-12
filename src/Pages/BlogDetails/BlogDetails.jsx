import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const blog = blogData.find((data) => data.id === idInt);

  console.log(blog);

  return <div>{blog.description}</div>;
};

export default BlogDetails;
