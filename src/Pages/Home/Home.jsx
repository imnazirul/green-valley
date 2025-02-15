import Carousel from "./Carousel";
import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { Helmet } from "react-helmet-async";
import Reviews from "./Reviews";
import TopProperty from "./TopProperty";
import Contact from "./Contact/Contact";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Home | Green Valley</title>
      </Helmet>
      <div className="rounded-xl  overflow-hidden">
        {" "}
        <Carousel></Carousel>
      </div>
      <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1
          data-aos="zoom-out-right"
          data-aos-duration="500"
          className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-jost"
        >
          Featured Listed Property
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Discover our featured listed property, boasting exquisite design,
          premium amenities, and unparalleled location. its a lifestyle waiting
          to be embraced.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {data.map((singleData, index) => (
            <PropertyCard key={index} data={singleData}></PropertyCard>
          ))}
        </div>
      </div>
      {/* top property list */}
      <div className="mb-5 lg:mb-10">
        <TopProperty></TopProperty>
      </div>

      {/* Our Featured Agents */}
      <div className="mb-5 lg:mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold font-jost">
          Our Featured Agents
        </h1>
        <p className="max-w-3xl text-lg text-center  mx-auto mt-3 mb-4">
          Meet our accomplished featured agents. With a keen eye for detail and
          dedication, they are ready to guide you through your real estate
          journey with confidence.
        </p>
        <div>
          <Reviews></Reviews>
        </div>
      </div>

      <div className="mt-16 lg:mb-10">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
