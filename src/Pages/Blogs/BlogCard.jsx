import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { author, category, date, description, image, title, id } = blog;

  return (
    <div className="card border bg-base-100 shadow-xl flex justify-between  h-full">
      <div className="h-[250px] rounded-t-xl overflow-hidden">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </div>
      <div className="card-body flex justify-between ">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p className="bg-gray-200 text-gray-700 font-bold  px-3 py-1 rounded-3xl ">
          {category}
        </p>

        <p>{description.slice(0, 150)}...</p>
        <div className="flex justify-between">
          <div className="">
            <span className="text-btn-1 font-bold">Author:</span> {author}
          </div>
          <div className="badge badge-outline font-semibold">{date}</div>
        </div>
        <Link
          to={`./blog_details/${id}`}
          className="btn bg-[#0054a5] text-lg font-jost text-white hover:bg-[#0054a5] mt-3"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
