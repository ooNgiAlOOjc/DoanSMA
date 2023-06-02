import React from "react"

import { Button, CheckBox, Img, Input, Line, Text } from "../../components"
import ImgAirPlane from "../../assets/images/img_airplane.svg"
import ImgAirPlaneSlash from "../../assets/images/img_airplane_slash.svg"
import { useState } from "react"

const Signup = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [passwordRepeat, setPasswordRepeat] = useState("")
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)
  return (
    <div className="flex items-center justify-center w-full h-screen mx-auto bg-sky">
      <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-transparent flex flex-col items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-center w-full gap-8">
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <div className="flex flex-col items-start justify-start w-full gap-6">
                <div className="flex flex-row items-center justify-start w-full gap-2">
                  <Text
                    className="flex-1 text-white tracking-[-0.72px] w-auto text-center"
                    as="h3"
                    variant="h3"
                  >
                    Create Account
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-start w-full gap-3 md:flex-col">
                  <div className="flex flex-col items-start justify-start flex-1 w-full gap-5">
                    <Input
                      wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                      className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                      type="email"
                      name="textfieldlarge"
                      onChange={setUserName}
                      placeholder="UserName"
                    ></Input>
                    {!showPassword ? (
                      <Input
                        wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                        className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                        type="password"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        onChange={setPassword}
                        suffix={
                          <Img
                            src={ImgAirPlane}
                            className="mt-auto mb-px ml-[35px] text-white_A700 w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPassword(true)}
                          />
                        }
                      ></Input>
                    ) : (
                      <Input
                        wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                        className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                        type="type"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        onChange={setPassword}
                        suffix={
                          <Img
                            src={ImgAirPlaneSlash}
                            className="mt-auto mb-px ml-[35px] text-white_A700 w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPassword(false)}
                          />
                        }
                      ></Input>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-start flex-1 w-full gap-5">
                    <Input
                      wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                      className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                      type="email"
                      name="textfieldlarge_Two"
                      placeholder="Email"
                      onChange={setEmail}
                    ></Input>
               {!showPasswordRepeat ? (
                      <Input
                        wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                        className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                        type="password"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        onChange={setPasswordRepeat}
                        suffix={
                          <Img
                            src={ImgAirPlane}
                            className="mt-auto mb-px ml-[35px] text-white_A700 w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPasswordRepeat(true)}
                          />
                        }
                      ></Input>
                    ) : (
                      <Input
                        wrapClassName="bg-[#ffffff40] flex px-4 py-2 rounded-full w-full"
                        className="w-full p-0 text-lg font-semibold text-left placeholder:text-white_A700 text-white_A700 focus:outline-none"
                        type="type"
                        name="textfieldlarge_One"
                        placeholder="Password"
                        onChange={setPasswordRepeat}
                        suffix={
                          <Img
                            src={ImgAirPlaneSlash}
                            className="mt-auto mb-px ml-[35px] text-white_A700 w-6 h-6"
                            alt="airplane"
                            onClick={() => setShowPasswordRepeat(false)}
                          />
                        }
                      ></Input>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full ml-3">
                <CheckBox
                  className="flex items-center text-lg font-bold text-left text-white_A700"
                  inputClassName="border-2 border-gray_900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                  name="iagreetoallterm_One"
                  id="iagreetoallterm_One"
                  label="I agree to all Terms & Conditions"
                ></CheckBox>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="w-full px-6 py-2.5 text-lg font-bold text-center rounded-full cursor-pointer bg-deep_orange_50 sm:px-5 text-gray_900">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
