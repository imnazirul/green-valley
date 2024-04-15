import LeafletMap from "./LeafletMap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Message Sent.");
  };
  return (
    <div className="mb-5 lg:mb-10">
      <ToastContainer></ToastContainer>
      <h1 className="text-2xl lg:text-4xl text-center font-semibold font-jost">
        Get Helps & Friendly Support
      </h1>
      <p className="max-w-3xl text-lg text-center  mx-auto mt-3 mb-4">
        Looking For Help Or Any Support? We are Available 24 Hour A Day.
      </p>
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="flex-1 bg-[#3B719799] text-white p-4 rounded-xl">
          <h1 className="text-2xl lg:text-4xl text-center font-semibold font-jost ">
            Get a Free Consultation
          </h1>
          <div className="hero">
            <div className="card w-full">
              <form onSubmit={handleMessage} className="lg:card-body mt-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold font-jost">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input text-black input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold font-jost">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="input min-h-40 resize-none text-black  input-bordered"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#3B7197] text-white text-lg hover:bg-[#3B7197]">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-xl ">
          <LeafletMap></LeafletMap>
        </div>
      </div>
    </div>
  );
};

export default Contact;
