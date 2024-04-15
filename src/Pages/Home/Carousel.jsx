import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[210px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/nmqFyjk/kelvin-zyteng-LMq-r-Tlu-Kf-Q-unspla-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1
                  className="lg:mb-5 text-xl lg:text-4xl font-bold"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Enchanting Countryside
                </h1>
                <p
                  className="lg:mb-5 max-sm:text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Discover a quaint Charming Cottage nestled in serene
                  countryside, a perfect single-family retreat, offering
                  tranquility and comfort in natures embrace.
                </p>
                <button
                  className="max-sm:btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="1000"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[210px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/yhWVPRD/owen-lystrup-bo-Lgi-M0qwkg-unsplas.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl max-sm:space-y-1">
                <h1
                  className="lg:mb-5 text-xl lg:text-4xl font-bold"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Contemporary Charm
                </h1>
                <p
                  className="lg:mb-5 max-sm:text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Chic modern loft nestled in the heart of historic downtown,
                  blending contemporary style with the charm of its heritage
                  surroundings.
                </p>
                <button
                  className="btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="1000"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[210px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/HPxHV81/frans-ruiter-x1-Py2n-XR-wc-unsplas.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1
                  className="lg:mb-5 text-xl lg:text-4xl font-bold"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Cozy Townhouse Haven
                </h1>
                <p
                  className="lg:mb-5 max-sm:text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Experience idyllic living in our townhouses, complete with a
                  playground, fostering joy and community for families to
                  thrive.
                </p>
                <button
                  className="btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="1000"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero h-[210px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Mgjkj4W/ronnie-george-z11gb-Bo13ro-unspla.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1
                  className="lg:mb-5 text-xl lg:text-4xl font-bold"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Prime Student Housing
                </h1>
                <p
                  className="lg:mb-5 max-sm:text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Convenient, Comfortable Living Near University Campus. Modern
                  amenities, ideal location for students seeking a vibrant
                  community.
                </p>
                <button
                  className="btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="1000"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-[210px] lg:h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Xy4VcTc/marvin-meyer-8-CDu-HXff3zo-unsplas.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1
                  className="lg:mb-5 text-xl lg:text-4xl font-bold"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Luxury Beachfront Paradise
                </h1>
                <p
                  className="lg:mb-5 max-sm:text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Indulge in coastal luxury with our exquisite beachfront
                  condos. Breathtaking panoramic views await, offering the
                  epitome of seaside living and relaxation.
                </p>
                <button
                  className="btn-sm btn bg-[#3B7197] border-0 text-white hover:text-black max-sm:mt-2"
                  data-aos="zoom-in-down"
                  data-aos-delay="1000"
                >
                  See Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
