import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

function Reviews() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container relative">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="border p-5 relative rounded-xl mr-3">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-6.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <span className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white font-semibold font-roboto inline-block absolute px-4 py-2">
            2 Properties
          </span>
          <p className="flex gap-1 justify-center items-center">
            <IoLocationSharp></IoLocationSharp>Denever, Colorado
          </p>
          <h1 className="text-2xl text-[#4A8DB7] font-bold text-center">
            Michael P. Grimaldo
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
          <div className="flex justify-center gap-3 mt-4">
            <button className="btn flex gap-1 text-white text-lg bg-[#4A8DB7]">
              <HiMail></HiMail>Message
            </button>
            <button className="btn text-white text-lg bg-gray-700">
              <FaPhone></FaPhone>
            </button>
          </div>
        </div>

        {/* two */}
        <div className="border p-5 relative rounded-xl">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-2.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <span className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white font-semibold font-roboto inline-block absolute px-4 py-2">
            3 Properties
          </span>
          <p className="flex gap-1 justify-center items-center">
            <IoLocationSharp></IoLocationSharp>Alexandria, Virginia
          </p>
          <h1 className="text-2xl text-[#4A8DB7] font-bold text-center">
            Sargam S. Singh
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
          <div className="flex justify-center gap-3 mt-4">
            <button className="btn flex gap-1 text-white text-lg bg-[#4A8DB7]">
              <HiMail></HiMail>Message
            </button>
            <button className="btn text-white text-lg bg-gray-700">
              <FaPhone></FaPhone>
            </button>
          </div>
        </div>
        {/* three */}
        <div className="border p-5 relative rounded-xl">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-1.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <span className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white font-semibold font-roboto inline-block absolute px-4 py-2">
            1 Properties
          </span>
          <p className="flex gap-1 justify-center items-center">
            <IoLocationSharp></IoLocationSharp>Phoenix, Arizona
          </p>
          <h1 className="text-2xl text-[#4A8DB7] font-bold text-center">
            Harijeet M. Siller
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
          <div className="flex justify-center gap-3 mt-4">
            <button className="btn flex gap-1 text-white text-lg bg-[#4A8DB7]">
              <HiMail></HiMail>Message
            </button>
            <button className="btn text-white text-lg bg-gray-700">
              <FaPhone></FaPhone>
            </button>
          </div>
        </div>
        {/* four */}
        <div className="border p-5 relative rounded-xl">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-5.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <span className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white font-semibold font-roboto inline-block absolute px-4 py-2">
            4 Properties
          </span>
          <p className="flex gap-1 justify-center items-center">
            <IoLocationSharp></IoLocationSharp>Denever, Colorado
          </p>
          <h1 className="text-2xl text-[#4A8DB7] font-bold text-center">
            Colin H. Renda
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
          <div className="flex justify-center gap-3 mt-4">
            <button className="btn flex gap-1 text-white text-lg bg-[#4A8DB7]">
              <HiMail></HiMail>Message
            </button>
            <button className="btn text-white text-lg bg-gray-700">
              <FaPhone></FaPhone>
            </button>
          </div>
        </div>
        {/* five */}
        <div className="border p-5 relative rounded-xl">
          <div className=" flex justify-center ">
            <div className="relative">
              {" "}
              <img
                className="w-24 rounded-full"
                src="https://rhoomy.smartdemowp.com/wp-content/uploads/team-3.jpg"
                alt=""
              />
              <img
                className="w-6 h-6 absolute top-0 right-0"
                src="https://rhoomy.smartdemowp.com/wp-content/themes/rhoomy/assets/images/verified.svg"
                alt=""
              />
            </div>
          </div>
          <span className="bg-[#00B1FF] rounded-3xl left-3 top-3 text-white font-semibold font-roboto inline-block absolute px-4 py-2">
            7 Properties
          </span>
          <p className="flex gap-1 justify-center items-center">
            <IoLocationSharp></IoLocationSharp>Richmond, Virginia
          </p>
          <h1 className="text-2xl text-[#4A8DB7] font-bold text-center">
            Adam K. Jollio
          </h1>
          <ul className="flex justify-center gap-3 text-2xl">
            <li>
              <a href="#">
                <FaFacebook></FaFacebook>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare></FaInstagramSquare>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitterSquare></FaTwitterSquare>
              </a>
            </li>{" "}
          </ul>
          <div className="flex justify-center gap-3 mt-4">
            <button className="btn flex gap-1 text-white text-lg bg-[#4A8DB7]">
              <HiMail></HiMail>Message
            </button>
            <button className="btn text-white text-lg bg-gray-700">
              <FaPhone></FaPhone>
            </button>
          </div>
        </div>
      </Slider>
      <button
        className="btn absolute left-2 top-[50%] rounded-full outline-none"
        onClick={previous}
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>{" "}
      <button
        className="btn absolute right-2 top-[50%] rounded-full outline-none"
        onClick={next}
      >
        <IoIosArrowForward></IoIosArrowForward>
      </button>
    </div>
  );
}
export default Reviews;
