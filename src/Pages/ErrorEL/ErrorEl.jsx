/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorEl = () => {
  return (
    <div className="text-black h-screen flex justify-center gap-5 flex-col">
      <Helmet>
        <title>Error | Green Vally</title>
      </Helmet>
      <div className="flex justify-center">
        <MdReportGmailerrorred className="text-8xl text-red-500 "></MdReportGmailerrorred>
      </div>
      <h1 className="font-jost text-5xl font-black text-center text-[#4A8DB7]">
        Oops!
      </h1>
      <h2 className="font-jost text-8xl font-black text-center text-red-500">
        404
      </h2>
      <h3 className="font-jost text-4xl font-bold text-center text-[#4A8DB7]">
        Page Not Found!
      </h3>
      <p className="text-[#09293f] text-xl font-semibold text-center">
        Sorry, the page you're looking for is unavailable. You might find what
        you're looking for by using our menu or search options.
      </p>

      <Link to="/" className="btn max-w-96 mx-auto text-lg">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorEl;
