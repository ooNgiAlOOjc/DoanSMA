import { Axios } from "./Axios";

function Login(payload) {
  return Axios.post("​api​/LogIn​/Login", payload);
}

const loginService = {
  Login,
};

export default loginService;
