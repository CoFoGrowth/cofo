import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/content");
    }
  }, [navigate]);

  return <AuthForm />;
};

export default Auth;
