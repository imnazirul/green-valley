import { IconContext } from "react-icons";
import { FaArrowCircleRight } from "react-icons/fa";

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
        <div className="col-span-2 relative rounded-xl overflow-hidden">
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-6.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#949393be] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                California,USA
              </h3>
              <p>1 Property</p>
            </div>
            <div>
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="col-span-2 relative rounded-xl overflow-hidden">
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-7.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#949393be] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Aurora, Colorado
              </h3>
              <p>1 Property</p>
            </div>
            <div>
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="col-span-2 relative rounded-xl overflow-hidden">
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-3.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#949393be] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">London, UK</h3>
              <p>1 Property</p>
            </div>
            <div>
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative rounded-xl overflow-hidden">
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-4.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#949393be] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Richmond, Virginia
              </h3>
              <p>1 Property</p>
            </div>
            <div>
              <IconContext.Provider value={{ size: "30px" }}>
                <FaArrowCircleRight></FaArrowCircleRight>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="col-span-3 relative rounded-xl overflow-hidden">
          <img
            src="https://rhoomy.smartdemowp.com/wp-content/uploads/city-5.png"
            alt=""
          />

          <div className="absolute bottom-0 w-full bg-[#949393be] text-white p-3 px-5 flex justify-between items-center">
            <div>
              <h3 className="font-jost font-semibold text-2xl ">
                Phoenix, Arizona
              </h3>
              <p>1 Property</p>
            </div>
            <div>
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
