import { useLoaderData, useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { MdScreenShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdAreaChart } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const idInt = parseInt(id);

  const AData = data.find((data) => data.id === idInt);
  console.log(AData);
  const {
    area,
    contact_info,
    description,
    estate_title,
    facilities,
    image,
    location,
    long_description,
    price,
    segment_name,
    status,
  } = AData;

  const { agent_contact, agent_name } = contact_info;
  console.log(contact_info);

  return (
    <div className="mb-5 lg:mb-10">
      <Helmet>
        <title>Details | Green Valley</title>
      </Helmet>
      <div className="rounded-xl h-[500px] overflow-hidden mb-3">
        <img className=" h-full mx-auto rounded-xl " src={image} alt="" />
      </div>
      <div className="space-y-5">
        {" "}
        <div className="flex justify-between mb-4">
          <p className="text-2xl text-blue-700 font-bold px-2 py-1 rounded-3xl bg-blue-200">
            For {status}
          </p>{" "}
          <div className="flex text-2xl gap-4">
            <FaPenToSquare></FaPenToSquare>
            <FaMapLocationDot></FaMapLocationDot>
            <MdScreenShare></MdScreenShare>
            <FaRegHeart></FaRegHeart>
            <MdMoreVert></MdMoreVert>
          </div>
        </div>
        <hr />
        <div className="flex justify-between space-y-3">
          <div className="space-y-2">
            <h3 className="text-2xl font-jost text-black">{price}</h3>
            <h1 className="text-3xl font-jost text-black">{estate_title}</h1>
            <p className="text-xl font-roboto">{location}</p>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-[#3B7197]">
              Owner Info
            </h1>
            <div className="font-roboto font-semibold ">
              <p className="flex gap-1">
                <IoPersonSharp></IoPersonSharp> {agent_name}
              </p>
              <p className="flex gap-1">
                <FaPhone></FaPhone>
                {agent_contact}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex justify-between items-center">
            {" "}
            <h3 className="text-[#1a90be] text-xl bg-[#1a90be1A] inline-block px-3 py-1 font-semibold rounded-3xl mt-2">
              {segment_name}
            </h3>
            <p className="text-xl text-black font-bold bg-gray-200 flex gap-1 items-center px-3 py-1 rounded-3xl">
              <MdAreaChart></MdAreaChart>
              {area}
            </p>
          </div>
          <p className="text-2xl mt-2 text-[#0e3857]">{description}</p>
        </div>
        <div>
          <h3 className="text-2xl font-jost text-white bg-[#3B7197]  bg-inline-block px-3 py-1 rounded-3xl">
            Facilities:
          </h3>
          <ul className="list-disc list-inside">
            {facilities.map((text, index) => (
              <li className="text-lg uppercase" key={index}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <p className="text-xl">
            <span className="text-[#3B7197] font-semibold">More Details: </span>
            {long_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
