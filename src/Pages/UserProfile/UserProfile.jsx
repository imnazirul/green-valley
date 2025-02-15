import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdEmail } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const {
    email,
    emailVerified,
    metadata,
    phoneNumber,
    photoURL,
    isAnonymous,
    uid,
    displayName,
  } = user;

  const { creationTime, lastSignInTime } = metadata;
  return (
    <div className=" mx-auto mb-5">
      <Helmet>
        <title>User Profile | Green Valley</title>
      </Helmet>
      <div>
        <div className="bg-[#3B719799] relative shadow rounded-lg md:w-5/6  lg:w-full xl:w-full mx-auto">
          <div className="flex justify-center">
            <img
              src={
                photoURL
                  ? photoURL
                  : "https://i.ibb.co/x3qtSTk/istockphoto-1300845620-612x612-2.jpg"
              }
              alt=""
              className="rounded-full mx-auto  mt-4 w-24 h-24 lg:w-32 lg:h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-3">
            <h1 className="font-semibold text-center text-2xl lg:text-4xl text-gray-900 font-jost">
              {displayName ? displayName : "Unknown"}
            </h1>
            <p className="text-center text-xs   my-2 font-bold">UID: {uid}</p>
            <p className="text-center lg:text-lg   my-2 font-bold">
              Email: {emailVerified ? "Verified" : "Not Verified"}
            </p>

            <div className="my-5 px-6">
              <Link
                to="/update_profile"
                className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                <span className="font-bold">Edit Profile</span>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row max-sm:gap-2 justify-between items-center my-5 px-6 md:text-lg font-semibold">
              <div>
                <p>Account Created: {creationTime}</p>
              </div>
              <div>
                <p>Last Sign In : {lastSignInTime}</p>
              </div>
            </div>

            <div className="w-full">
              <h3 className="font-medium text-gray-900 text-left px-6 text-bold text-xl lg:text-2xl font-jost">
                Details
              </h3>
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden ">
                <div
                  className="w-full flex  gap-1 items-center border-t border-gray-100 text-lg lg:text-xl py-4 pl-6 pr-3  
                  hover:text-gray-800 hover:bg-gray-100 transition duration-150 font-bold text-white"
                >
                  <MdEmail className="text-3xl"></MdEmail>
                  Email:
                  <span className="text-[16px] lg:text-xl ">
                    {email ? email : "Not Available"}
                  </span>
                </div>

                <a className="w-full flex gap-1 items-center border-t border-gray-100  py-4 pl-6 pr-3   hover:bg-gray-100 transition duration-150 text-white  font-bold text-lg lg:text-xl    hover:text-gray-800">
                  <MdManageAccounts className="text-2xl lg:text-3xl"></MdManageAccounts>
                  Anonymous:
                  <span className="text-lg lg:text-xl">
                    {isAnonymous ? "Yes" : "No"}
                  </span>
                </a>

                <a className="w-full border-t flex gap-1 items-center border-gray-100  py-4 pl-6 pr-3   hover:bg-gray-100 transition duration-150 text-white  font-bold text-lg lg:text-xl    hover:text-gray-800">
                  <FaPhoneSquareAlt className="text-xl lg:text-2xl"></FaPhoneSquareAlt>
                  Phone Number:
                  <span className="text-sm lg:text-xl">
                    {phoneNumber ? phoneNumber : "Not Available"}
                  </span>
                </a>

                <a className="w-full border-t border-gray-100 text-black py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 font-semibold">
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Profile Image URL:{" "}
                  <input
                    className="mt-1 w-full p-1 rounded-md"
                    type="text"
                    defaultValue={photoURL}
                    disabled
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
