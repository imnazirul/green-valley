import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogData = useLoaderData();

  return (
    <div className="mb-5 lg:mb-10">
      <Helmet>
        <title>Blogs | Green Valley</title>
      </Helmet>
      <h1 className="text-3xl lg:text-4xl font-jost font-semibold text-[#0054A5] text-center underline mt-2 mb-4">
        Newest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
