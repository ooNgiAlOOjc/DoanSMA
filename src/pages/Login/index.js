import { Button, CheckBox, Img, Input, Line, Text } from "../../components";
import React from "react";
import ImgAirPlane from "../../assets/images/img_airplane.svg";
import ImgAirPlaneSlash from "../../assets/images/img_airplane_slash.svg";
import { useState } from "react";
import LoginService from "../../api/LoginService";
import "../../assets/style/login.scss";
import { UserOutlined } from "@ant-design/icons";

const LogIn = () => {
  const [userName, setUserName] = useState({
    value: "",
    errors: [],
  });
  const [password, setPassword] = useState({
    value: "",
    errors: [],
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async () => {
    // Check if the userName and password are not empty strings.
    if (userName.value.trim() === "" && password.value.trim() === "") {
      setUserName({ ...userName, errors: ["Vui lòng nhập dữ liệu"] });
      setPassword({ ...password, errors: ["Vui lòng nhập dữ liệu"] });
      return;
    }
    // Check if the userName are not empty strings.
    if (userName.value.trim() === "") {
      // handle the error
      setUserName({ ...userName, errors: ["Vui lòng nhập dữ liệu"] });
      return;
    } else {
      setUserName({ ...userName, errors: [] });
    }
    // Check if the password are not empty strings.
    if (password.value.trim() === "") {
      // handle the error
      setPassword({ ...password, errors: ["Vui lòng nhập dữ liệu"] });
      return;
    } else {
      setPassword({ ...password, errors: [] });
    }
    try {
      await LoginService.Login({
        username: userName.value,
        password: password.value,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen mx-auto bg-sky">
      <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-transparent flex flex-col items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
          <div className="login-wrap p-4 p-md-5">
            <div className="flex flex-col items-center justify-center w-full gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <div className="icon">
                    <UserOutlined
                      style={{ fontSize: "30px", marginLeft: "25px" }}
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start w-full gap-2">
                    <Text
                      className="flex-1 rgba() tracking-[-0.72px] w-auto text-center"
                      as="h3"
                      variant="h3"
                    >
                      Login
                    </Text>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Input
                      wrapClassName="form-control"
                      className="w-full p-0 text-lg font-semibold text-left  placeholder:text-black opacity-20 text-black focus:outline-none"
                      type="text"
                      name="textfieldlarge"
                      placeholder="UserName"
                      errors={userName.errors}
                      onChange={(e) => {
                        if (e.length > 0) {
                          setUserName({ ...userName, value: e, errors: [] });
                        } else {
                          setUserName({
                            ...userName,
                            value: e,
                            errors: ["Vui lòng nhập dữ liệu"],
                          });
                        }
                      }}
                    ></Input>
                    {!showPassword ? (
                      <Input
                        wrapClassName="form-control"
                        className="w-full p-0 text-lg font-semibold text-left  placeholder:text-black opacity-20 text-black focus:outline-none"
                        type="password"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        errors={password.errors}
                        onChange={(e) => {
                          if (e.length > 0) {
                            setPassword({ ...password, value: e, errors: [] });
                          } else {
                            setPassword({
                              ...password,
                              value: e,
                              errors: ["Vui lòng nhập dữ liệu"],
                            });
                          }
                        }}
                        suffix={
                          <Img
                            src={ImgAirPlane}
                            className="mt-auto mb-px ml-[35px] text-black w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPassword(true)}
                          />
                        }
                      ></Input>
                    ) : (
                      <Input
                        wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                        className="w-full p-0 text-lg font-semibold text-left placeholder:text-black text-black focus:outline-none"
                        type="type"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        onChange={setPassword}
                        suffix={
                          <Img
                            src={ImgAirPlaneSlash}
                            className="mt-auto mb-px ml-[35px] text-black w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPassword(false)}
                          />
                        }
                      ></Input>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button
                  onClick={() => handleSubmit()}
                  className="w-full px-6 py-2.5 text-lg font-bold text-center rounded-full cursor-pointer bg-blue-600 sm:px-5 text-white"
                >
                  Log in
                </Button>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-5">
                <CheckBox
                  className="flex items-center text-lg font-light text-left text-black"
                  inputClassName="border-2 border-gray_900 border-solid h-[18px] mr-[5px] rounded w-[18px] "
                  name="remember"
                  id="remember"
                  label="Remember"
                ></CheckBox>
                <Text
                  className="w-auto text-right text-black font-light"
                  variant="body3"
                >
                  Forgot Password
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
