import Carousel from "./Carousel";
import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Carousel></Carousel>
      <div className="mt-5 lg:mt-10">
        <h1
          data-aos="zoom-out-right"
          data-aos-duration="500"
          className="text-4xl text-center font-semibold font-jost"
        >
          Featured Listed Property
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mt-3 mb-4">
          Discover our featured listed property, boasting exquisite design,
          premium amenities, and unparalleled location. Its more than a home;
          its a lifestyle waiting to be embraced.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {data.map((singleData, index) => (
            <PropertyCard key={index} data={singleData}></PropertyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
