import { MdAreaChart } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import PropTypes from "prop-types";

const PropertyCard = ({ data }) => {
  const {
    status,
    segment_name,
    price,
    estate_title,
    area,
    location,
    image,
    description,
  } = data;

  return (
    <div
      data-aos="fade-up"
      className="flex  relative overflow-hidden card bg-base-100 shadow-xl"
    >
      <figure className="h-[300px]">
        <img className="h-full w-full" src={image} alt="Shoes" />
      </figure>
      <p className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white text-lg font-bold font-roboto inline-block absolute px-4 py-2">
        For {status}
      </p>
      <div className="p-4 space-y-4 flex flex-col justify-between h-full  ">
        <p className="flex justify-between">
          <span className="text-[#1a90be] bg-[#1a90be1A] inline-block px-3 py-1 font-semibold rounded-3xl">
            {segment_name}
          </span>{" "}
          <span className="text-[#1a90be]  inline-block font-bold text-2xl rounded-3xl">
            {price}
          </span>
        </p>
        <h2 className="card-title font-jost">{estate_title}</h2>
        <p>{description}</p>

        <div className=" bg-gray-200 flex flex-col justify-between px-2 py-2 rounded-lg">
          {" "}
          <p className=" flex gap-1 items-center text-xl">
            <MdAreaChart></MdAreaChart>
            {area}
          </p>
          <p className="flex gap-1 items-center text-lg">
            <MdLocationOn></MdLocationOn>
            {location}
          </p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-[#3B7197] text-white hover:text-black">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  data: PropTypes.object,
  status: PropTypes.string,
  segment_name: PropTypes.string,
  price: PropTypes.string,
  estate_title: PropTypes.string,
  location: PropTypes.string,
  area: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
