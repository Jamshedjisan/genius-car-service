import React from "react";
import google from "../../../images/social/google-logo.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/GitHub_logo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div className=" w-50 mx-auto">
      <div className="d-flex">
        <div style={{ height: "1px" }} className="bg-primary w-50 mt-3 "></div>
        <p className="px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 mt-3"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img src={google} alt="" />
          <span className="px-1">Google Sign In</span>
        </button>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto  my-2">
          <img src={facebook} alt="" />
          <span className="px-1">Google Sign In</span>
        </button>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto">
          <img src={github} alt="" />
          <span className="px-1">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
