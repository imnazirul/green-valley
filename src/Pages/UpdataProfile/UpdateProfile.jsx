import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const UpdateProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);

  const { email, photoURL, displayName } = user;

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    console.log(name, photoURL);

    updateUserProfile(name, photoURL)
      .then(() => {
        setLoading(false);
        setTimeout(() => {
          toast.success("Profile Info Updated Successfully", {
            position: "top-center",
          });
        }, 10);
      })
      .catch(() => {});
  };

  return (
    <>
      <ToastContainer autoClose={3000}></ToastContainer>
      <div className="flex flex-col justify-center items-center space-y-6 pt-5 pb-16  bg-base-200 rounded-lg mb-5">
        <div className="text-center space-y-1 mb-10">
          <h2 className="text-3xl font-bold t mb-2 ">Update Profile</h2>
          <p className="text-lg font-semibold font-jost ">
            Update your account information and set other preferences.
          </p>
        </div>

        <form
          onSubmit={handleUpdateProfile}
          className="flex flex-col space-y-4  max-w-2xl "
        >
          <div className="flex gap-3 justify-between">
            <p className="text-xl font-semibold">Email Address:</p>

            <p className="text-black text-lg">
              {email}{" "}
              <span className="text-btn-1 ml-1">(Can Not be Edited)</span>
            </p>
          </div>
          <hr />
          <div className="flex gap-3 items-center justify-between">
            <p className="text-xl font-semibold">Profile Name:</p>
            <input
              className="border-2 px-3 py-1 rounded-lg flex-1"
              type="text"
              placeholder="Enter New Name"
              name="name"
              defaultValue={displayName ? displayName : "Unknown"}
            />
          </div>
          <hr />
          <div className="flex gap-3 items-center justify-between">
            <p className="text-xl font-semibold">Profile Image URL:</p>

            <input
              className="border-2 px-3 py-1 rounded-lg flex-1"
              type="text"
              placeholder="Enter New Image Url"
              name="photoURL"
              defaultValue={photoURL ? photoURL : "_blank"}
            />
          </div>
          <hr />

          <div className="pt-3 text-right">
            <button className="btn  bg-btn-1 text-white text-lg font-semibold hover:bg-btn-1 ">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
