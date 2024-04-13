import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdEmail } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const UserProfile = () => {
  const { user, loading } = useContext(AuthContext);

  const isImgLink = (url) => {
    if (typeof url !== "string") return false;
    return (
      url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) != null
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center ite'">
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
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

  console.log(metadata);
  const { creationTime, lastSignInTime } = metadata;
  return (
    <div className=" mx-auto mb-5">
      <div>
        <div className="bg-[#3B719799] relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-full xl:w-full mx-auto">
          <div className="flex justify-center">
            <img
              src={
                isImgLink(photoURL)
                  ? photoURL
                  : "https://i.ibb.co/x3qtSTk/istockphoto-1300845620-612x612-2.jpg"
              }
              alt=""
              className="rounded-full mx-auto  mt-4 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div className="mt-3">
            <h1 className="font-semibold text-center text-4xl text-gray-900 font-jost">
              {displayName ? displayName : "Unknown"}
            </h1>
            <p className="text-center text-sm   my-2 font-bold">UID: {uid}</p>

            <div className="my-5 px-6">
              <a
                href="#"
                className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
              >
                <span className="font-bold">
                  {emailVerified ? "Verified" : "Not Verified"}
                </span>
              </a>
            </div>
            <div className="flex justify-between items-center my-5 px-6 text-lg font-semibold">
              <div>
                <p>Account Created: {creationTime}</p>
              </div>
              <div>
                <p>Last Sign In : {lastSignInTime}</p>
              </div>
            </div>

            <div className="w-full">
              <h3 className="font-medium text-gray-900 text-left px-6">
                Details
              </h3>
              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                <div
                  className="w-full flex gap-1 items-center border-t border-gray-100 text-xl py-4 pl-6 pr-3  
                  hover:text-gray-800 hover:bg-gray-100 transition duration-150 font-bold text-white"
                >
                  <MdEmail className="text-2xl"></MdEmail>
                  Email:
                  <span className="text-xl ">{email}</span>
                </div>

                <a className="w-full flex gap-1 items-center border-t border-gray-100  py-4 pl-6 pr-3   hover:bg-gray-100 transition duration-150 text-white  font-bold text-xl    hover:text-gray-800">
                  <MdManageAccounts className="text-3xl"></MdManageAccounts>
                  Anonymous:
                  <span className="text-xl">{isAnonymous ? "Yes" : "No"}</span>
                </a>

                <a className="w-full border-t flex gap-1 items-center border-gray-100  py-4 pl-6 pr-3   hover:bg-gray-100 transition duration-150 text-white  font-bold text-xl    hover:text-gray-800">
                  <FaPhoneSquareAlt className="text-2xl"></FaPhoneSquareAlt>
                  Phone Number:
                  <span className="text-xl">
                    {phoneNumber ? phoneNumber : "Not Available"}
                  </span>
                </a>

                <a className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150">
                  <img
                    src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                    alt=""
                    className="rounded-full h-6 shadow-md inline-block mr-2"
                  />
                  Edited website settings
                  <span className="text-gray-500 text-xs">1 day ago</span>
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
