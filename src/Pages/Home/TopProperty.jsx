import { IconContext } from "react-icons";
import { FaArrowCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const TopProperty = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold font-jost">
        Top Property Places
      </h1>
      <p className="max-w-3xl text-lg text-center  mx-auto mt-3 mb-4">
        From vibrant city life in New York City to serene beaches in Maldives,
        top property places offer diverse experiences. Explore luxury living in
        Dubai or historic charm in Paris. Endless possibilities await!
      </p>

      <div className="grid grid-cols-6 gap-5">
        {/* one */}
        <div
          data-aos="fade-right"
          className="col-span-2 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-6.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#3B7197B3] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                California,USA
              </h3>
              <p>2 Property</p>
            </div>
            <div data-aos="fade-right">
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-span-2 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-7.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#3B7197B3] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Aurora, Colorado
              </h3>
              <p>1 Property</p>
            </div>
            <div data-aos="fade-right">
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="col-span-2 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-3.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#3B7197B3] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">London, UK</h3>
              <p>3 Property</p>
            </div>
            <div data-aos="fade-right">
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="col-span-3 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-4.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#3B7197B3] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Richmond, Virginia
              </h3>
              <p>2 Property</p>
            </div>
            <div data-aos="fade-right">
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="col-span-3 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-5.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#3B7197B3] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Phoenix, Arizona
              </h3>
              <p>5 Property</p>
            </div>
            <div data-aos="fade-right">
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProperty;
