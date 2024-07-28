import React, { useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OTPVerificationModal from "./OTPVerificationModal";
import WhatsApp from "../components/Whatsapp/whatsapp";

const Register = () => {
  const toast = useToast();
  const location = "/login/user";
  const [verifyOtp, setVerifyOtp] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    father_name: "",
    mother_name: "",
    mobile_num: "",
    dob: "",
    mail_id: "",
    password: "",
    city: "",
    state: "",
    exam_attempted: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const countryCode = "+91";
    const phoneNumberWithCountryCode = countryCode + formData.mobile_num;
    try {
      const otpResponce = await axios.post(
        "https://api.mbbsdunia.com/api/send-otp",
        {
          phoneNumber: phoneNumberWithCountryCode,
        }
      );
      console.log("otpResponce:", otpResponce);
      if (otpResponce.data.success) {
        setVerifyOtp(true);
        sessionStorage.setItem("sid", otpResponce.data.verification.sid);
        sessionStorage.setItem("phone", phoneNumberWithCountryCode);
        const response = await axios.post(
          `https://api.mbbsdunia.com/api/user/register`,
          formData
        );
        if (response.status == 201) {
          toast({
            title: "OTP Send Successfully",
            description: "On your mobile",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setFormData({
            firstname: "",
            lastname: "",
            father_name: "",
            mother_name: "",
            mobile_num: "",
            dob: "",
            mail_id: "",
            password: "",
            city: "",
            state: "",
            exam_attempted: "",
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Somthing went wrong",
        description: "Try Again",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    console.log(formData);
  };
  const handleCloseModal = () => {
    setVerifyOtp(false);
  };
  return (
    <Box>
      <WhatsApp />
      <OTPVerificationModal
        location={location}
        isOpen={verifyOtp}
        onClose={handleCloseModal}
      />
      <Box
        width={"100vw"}
        height={{
          base: "190vh",
          sm: "210vh",
          md: "100vh",
          lg: "100vh",
          xl: "120vh",
        }}
        marginTop={"4vh"}
        backgroundColor={"#97A2E2"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={{ base: "80vw", sm: "80vw", md: "70vw", xl: "60vw" }}
          height={{
            base: "186vh",
            sm: "100vh",
            md: "75vh",
            lg: "80vh",
            xl: "100vh",
          }}
          backgroundColor={"white"}
          borderRadius={"10px"}
        >
          <Text
            textAlign={"center"}
            fontSize={"1.5rem"}
            color={"#1C375B"}
            marginTop={"4vh"}
          >
            Register to get started
          </Text>

          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              xl: "row",
            }}
            justifyContent={"space-around"}
            margin={"auto"}
            width={"80%"}
            marginTop={"4vh"}
            gap={6}
          >
            <FormControl
              isRequired
              width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
            >
              <FormLabel>First name</FormLabel>
              <Input
                name="firstname"
                onChange={handlechange}
                value={formData.firstname}
                placeholder="First name"
              />
            </FormControl>

            <FormControl
              isRequired
              width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
            >
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastname"
                value={formData.lastname}
                onChange={handlechange}
                placeholder="Last name"
              />
            </FormControl>
          </Box>

          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              xl: "row",
            }}
            justifyContent={"space-around"}
            margin={"auto"}
            width={"80%"}
            marginTop={"4vh"}
            gap={6}
          >
            <FormControl
              isRequired
              width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
            >
              <FormLabel>Father's name</FormLabel>
              <Input
                name="father_name"
                onChange={handlechange}
                value={formData.father_name}
                placeholder="Enter Father name"
              />
            </FormControl>

            <FormControl
              isRequired
              width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
            >
              <FormLabel>Mother name</FormLabel>
              <Input
                name="mother_name"
                value={formData.mother_name}
                onChange={handlechange}
                placeholder="Enter Mother name"
              />
            </FormControl>
          </Box>

          <form onSubmit={handlesubmit}>
            <Box
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                xl: "row",
              }}
              justifyContent={"space-around"}
              margin={"auto"}
              width={"80%"}
              marginTop={"4vh"}
              gap={6}
            >
              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>Mobile no</FormLabel>
                <Input
                  name="mobile_num"
                  value={formData.mobile_num}
                  onChange={handlechange}
                  placeholder="mobile no"
                >
                  {/* <NumberInputField /> */}
                </Input>
              </FormControl>

              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>DOB</FormLabel>
                <Input
                  name="dob"
                  onChange={handlechange}
                  value={formData.dob}
                  placeholder="Select Date and Time"
                  size="md"
                  type="date"
                />
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                xl: "row",
              }}
              justifyContent={"space-around"}
              margin={"auto"}
              width={"80%"}
              marginTop={"4vh"}
              gap={6}
            >
              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>Mail Id</FormLabel>
                <Input
                  name="mail_id"
                  value={formData.mail_id}
                  onChange={handlechange}
                  placeholder="Enter mail id"
                ></Input>
              </FormControl>
              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={formData.password}
                  onChange={handlechange}
                  placeholder="Enter your password"
                ></Input>
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                xl: "row",
              }}
              justifyContent={"space-around"}
              margin={"auto"}
              width={"80%"}
              marginTop={"4vh"}
              gap={6}
            >
              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>City</FormLabel>
                <Input
                  name="city"
                  onChange={handlechange}
                  value={formData.city}
                  placeholder="Enter City"
                />
              </FormControl>
              <FormControl
                isRequired
                width={{ base: "100%", sm: "100%", md: "100%", xl: "45%" }}
              >
                <FormLabel>State</FormLabel>
                <Input
                  name="state"
                  value={formData.state}
                  onChange={handlechange}
                  placeholder="Enter State"
                />
              </FormControl>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              margin={"0px auto"}
              width={"80%"}
              marginTop={"4vh"}
              textAlign={"center"}
            >
              <Link to="/login/user">
                <Text
                  margin={"auto"}
                  mb="2"
                  color={"blue"}
                  fontSize={{
                    base: "0.6rem",
                    sm: "0.8rem",
                    md: "1rem",
                    xl: "1rem",
                  }}
                >
                  Already have account click me to login ⬇
                </Text>
              </Link>
              <Input
                margin={"auto"}
                width={"80%"}
                border={"2px solid #1C375B"}
                _hover={{ backgroundColor: "#1C375B", color: "white" }}
                type={"submit"}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
