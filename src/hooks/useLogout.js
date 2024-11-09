import { useNavigate } from "react-router-dom";

const useLogout = () => {
  localStorage.removeItem("logedIn");
  useNavigate()("/");
};

export default useLogout;
