import React, { useState, useEffect } from "react";
import {
  Box,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  Select,
  FormErrorMessage,
  PinInput,
  PinInputField,
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Contact from "../Contact/contact";
import {
  Text,
  Button,
  Heading,
  Image,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { HStack, VStack, Flex, Grid } from "@chakra-ui/react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img23 from "./New folder/Ahemadabad university.jpeg";
import img24 from "./New folder/Assam university.jpeg";
import img25 from "./New folder/Himalyan university.jpeg";
import img26 from "./New folder/Jiwaji university.jpeg";
import img27 from "./New folder/LPU.jpeg";
import img28 from "./New folder/Lucknow university.jpeg";
import img29 from "./New folder/Mizoram university.jpeg";
import img30 from "./New folder/Sage university.jpeg";
import img31 from "./New folder/chandigarh university.jpeg";
import img32 from "./New folder/nalanda university.jpeg";
import img33 from "./New folder/AMU.jpeg";
import img34 from "./New folder/MGU.jpeg";
import img35 from "./New folder/Mangalyatan university.jpeg";
import img36 from "./New folder/Delhi university.jpeg";
import img37 from "./New folder/Kanpur University.jpeg";
import img38 from "./New folder/Jodhpur university.jpeg";
import img44 from "../test11.png";
import img45 from "../test2.png";
import img46 from "../test3.png";
import img47 from "../test4.png";
import { useNavigate } from "react-router-dom";
import img48 from "./h2image.png";
import img49 from "./img50.jpg";
import popup from "./popup.jpg";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import OTPVerificationModal from "../Register/OTPVerificationModal";
import WhatsApp from "../components/Whatsapp/whatsapp";

const Home = () => {
  const { isAuth } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const toast = useToast();
  const [formData, setFormData] = useState([]);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [isValidFormat, setIsValidFormat] = useState([]);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [forms, setForms] = useState({
    name: "",
    email: "",
    phone: "",
    educationLevel: "",
    educationInterest: "",
  });
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleGet = async () => {
    try {
      const res = await fetch("https://api.mbbsdunia.com/api/blog/data");
      const data = await res.json();
      const limitedData =
        data.data.length > 4 ? data.data.slice(0, 4) : data.data;
      setFormData(limitedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (formData.length === 0) {
      handleGet();
    }
  }, [formData.length]);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConsel = (e) => {
    const { name, value } = e.target;
    setForms((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const countryCode = "+91";
      const phoneNumberWithCountryCode = countryCode + forms.phone;

      try {
        const otpResponce = await axios.post(
          "https://api.mbbsdunia.com/api/send-otp",
          {
            phoneNumber: phoneNumberWithCountryCode,
          }
        );
        console.log("otpResponce:", otpResponce);
        if (otpResponce.data.success) {
          const res = await axios.post(
            // https://api.mbbsdunia.com/api/add-conselling",
            "https://api.mbbsdunia.com/api/add-conselling",
            forms
          );
          const responce = await axios.post(
            `https://api.mbbsdunia.com/api/counseling`,
            forms
          );
          setVerifyOtp(true);
          console.log("verify sid id", otpResponce.data.verification.sid);
          sessionStorage.setItem("sid", otpResponce.data.verification.sid);
          sessionStorage.setItem("phone", phoneNumberWithCountryCode);

          toast({
            title: "OTP Send Successfully",
            description: "On your mobile",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Somthing went wrong",
            description: "Try Again",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        toast({
          title: "Somthing went wrong",
          description: "Try Again",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      setForms({
        name: "",
        email: "",
        phone: "",
        educationLevel: "",
        educationInterest: "",
      });

      handleClose();
    } catch (error) {}
  };
  const validateEmail = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const isValidFormat = emailPattern.test(email);
    const isValidDomain = email.includes(".com") || email.includes(".in");

    return isValidFormat && isValidDomain;
  };
  const handleCloseModal = () => {
    setVerifyOtp(false);
  };

  console.log("otp:", otp);
  return (
    <>
      <WhatsApp />
      <Box width={"100%"}>
        {isAuth ? null : (
          <Modal isOpen={isOpen} onClose={handleClose} size={"80vw"}>
            <ModalOverlay />
            <ModalContent
              display="flex"
              // border="10px solid red" 
              flexDirection={{ base: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
              maxWidth="60vw"
              margin="auto"
              padding={{ base: "4", md: "8" }}
              borderRadius="md"
            >
              <Box width={{ base: "100%", md: "45vw" }}>
                {/* <Image src={popup} alt="image" /> */}
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false} // Add this line to hide the default buttons
                  autoPlay={true}
                  interval={2500}
                  infiniteLoop={true}
                >
                  <div>
                    <img src={"./importantAlert.jpg"} />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <img src={"./importantAlertTable.jpg"} />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <img src={popup} />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                </Carousel>
              </Box>
              <Box width={{ base: "100%", md: "50vw" }}>
                <ModalHeader textAlign="center" fontSize="1.2rem">
                  Fill This Form & Get Your Free Counseling Now
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleSubmit}>
                    <FormControl mb={4} isRequired>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleConsel}
                        value={forms.name}
                        required
                      />
                    </FormControl>
                    <FormControl mb={4} isRequired>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleConsel}
                        value={forms.email}
                        required
                        isInvalid={forms.email && !validateEmail(forms.email)}
                      />
                      <FormErrorMessage>
                        {forms.email &&
                          !validateEmail(forms.email) &&
                          "Email address is not valid or does not include .com or .in"}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isRequired>
                      <Input
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleConsel}
                        value={forms.phone}
                        pattern="[0-9]{10}"
                        required
                      />
                      <FormErrorMessage>
                        Please enter a valid phone number (10 digits only).
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isRequired>
                      <Select
                        name="educationLevel"
                        onChange={handleConsel}
                        required
                      >
                        <option value="">Studying In</option>
                        <option value="Graduate & Above">
                          Graduate & Above
                        </option>
                        <option value="In Graduation">In Graduation</option>
                        <option value="Class 12">Class 12</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 9">Class 9</option>
                      </Select>
                    </FormControl>
                    <FormControl mb={4} isRequired>
                      <Select
                        name="educationInterest"
                        onChange={handleConsel}
                        required
                      >
                        <option value="">Education Interest</option>
                        <option value="Private colleges">
                          {" "}
                          Private Colleges
                        </option>
                        <option value="Government Colleges">
                          Government Colleges
                        </option>
                      </Select>
                    </FormControl>
                    <Button type="submit" marginTop="4" width="100%">
                      Submit
                    </Button>
                  </form>
                </ModalBody>
              </Box>
            </ModalContent>
          </Modal>
        )}

        <OTPVerificationModal
          isOpen={verifyOtp}
          onClose={handleCloseModal}
          phoneNumber={forms.phone}
        />

        <Box width={"100%"}>
          <Box
            width={"100%"}
            className="banner"
            height={{ base: "70vh", lg: "80vh", xl: "80vh" }}
            position={"relative"}
            marginBottom={"3vh"}
            marginTop={"2vh"}
          >
            <HStack justifyContent={"center"}>
              <VStack>
                <Box
                  color={"white"}
                  fontSize={{ base: "1.8rem", md: "3rem", lg: "4.8rem" }}
                  position={["none", "absolute"]}
                  top={"2.5vh"}
                  left={{ base: "0vw", sm: "0vw", md: "3vw", lg: "3vw" }}
                  textAlign={"center"}
                  marginLeft={["5vw", "none"]}
                  marginTop={["18vh", "none"]}
                  // fontStyle="italic" // Set the font style to italic for cursive
                >
                  {/*Shape your own future &  your own nation    */}
                  <Text>
                    <span
                      className="satisfy-regular"
                      style={{ color: "rgba(255, 255, 255)" }}
                    >
                      Shape&nbsp;
                    </span>

                    <span
                      className="satisfy-regular"
                      style={{ color: "#F4903A" }}
                    >
                      your own future,&nbsp;
                    </span>

                    {/* <span style={{ color: "rgba(255, 255, 255)" }}>to</span> */}
                  </Text>

                  <Text>
                    <span
                      className="satisfy-regular"
                      style={{ color: "#F4903A" }}
                    >
                      Serve your&nbsp;
                    </span>

                    <span
                      className="satisfy-regular"
                      style={{ color: "rgba(255, 255, 255)" }}
                    >
                      own nation... &nbsp;
                    </span>
                  </Text>
                </Box>

                <Button
                  fontSize={{ base: "1rem", md: "1.3rem" }}
                  py={7}
                  px={8}
                  // padding={"20px 40px"}
                  border={"3px solid white"}
                  backgroundColor={"#F4903A"}
                  borderRadius={"8px"}
                  position={["none", "absolute"]}
                  left={{ base: "0vw", sm: "0vw", md: "9vw", lg: "8vw" }}
                  top={{ base: "30vh", md: "40vh", lg: "55vh" }}
                  marginTop={["4vh", "none"]}
                  marginLeft={["0 auto", "none"]}
                  onClick={() => {
                    navigate("/register/user");
                  }}
                >
                  Start your journey today
                </Button>
              </VStack>
            </HStack>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
          >
            <Box width={"85%"}>
              <Flex
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  xl: "row",
                }}
              >
                <Image
                  src={img49}
                  display={["none", "none", "none", "block"]}
                  width={"45%"}
                  height={"90%"}
                />

                <Box width={["100%", "100%", "80%", "40%"]} marginLeft={"2vw"}>
                  <Text
                    textAlign={"center"}
                    marginBottom={"5vh"}
                    fontWeight={"bold"}
                    color={"#1F548C"}
                    fontSize={["1.5rem", "2rem"]}
                  >
                    Choose 2500+ <br />
                    MBBS Colleges with New additions
                  </Text>

                  <Text fontSize={"1.2rem"} width={"100%"}>
                    Explore our MBBS College listing website to access valuable
                    insights for your medical career journey. Gain in-depth
                    knowledge about renowned medical institutions, admission
                    criteria, comprehensive courses, esteemed faculty, and the
                    advanced campus facilities. We provide the essential
                    information you need to make informed decisions about your
                    medical education. Join us on the path to your successful
                    medical career today.
                  </Text>

                  <Box
                    display={"flex"}
                    width={"90%"}
                    marginTop={"3vh"}
                    justifyContent={"space-between"}
                  >
                    <Button
                      width={"45%"}
                      background={"#1C375B"}
                      color={"white"}
                      fontWeight={"200"}
                      padding={"5px 15px"}
                      _hover={{
                        background: "none",
                        border: "2px solid #1C375B",
                        color: "#1C375B",
                      }}
                      onClick={() => {
                        window.location.href = "/register/user";
                      }}
                    >
                      {" "}
                      Register
                    </Button>

                    <Button
                      width={"45%"}
                      background={"#1C375B"}
                      color={"white"}
                      fontWeight={"200"}
                      padding={"5px 15px"}
                      _hover={{
                        background: "none",
                        border: "2px solid #1C375B",
                        color: "#1C375B",
                      }}
                      onClick={() => {
                        window.location.href = "/about";
                      }}
                    >
                      {" "}
                      learn more
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            width={"100%"}
            py={4}
            className="container5"
            style={{
              // width: "100vw",

              display: "flex",
              backgroundColor: "#F4903A",
              flexDirection: "column",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10vh",
            }}
          >
            <Text fontSize={["1.8rem", "1.8rem", "2.5rem", "2.5rem"]}>
              <h2 style={{ color: "#1F548C", textAlign: "center" }}>
                Here Top listed
                <span style={{ color: "#1F548C" }}>
                  {" "}
                  Universities/Colleges{" "}
                </span>{" "}
              </h2>
            </Text>

            <Text
              fontSize={"1.1rem"}
              textAlign={"center"}
              color={"black"}
              width={"80vw"}
              marginTop={"2vh"}
            >
              Embark on an extraordinary educational journey at our top-rated
              universities, where brilliance and innovation converge to shape
              the future of higher learning. Experience a transformative
              academic environment that nurtures your potential, empowers your
              ambitions, and propels you towards unparalleled success in your
              chosen field of study.
            </Text>
            <Box>
              <Carousel
                showThumbs={false}
                showStatus={false}
                showArrows={false} // Add this line to hide the default buttons
                width={"100vw"}
                autoPlay={true}
                interval={2500}
                infiniteLoop={true}
              >
                <Flex
                  width={"94vw"}
                  margin={"auto"}
                  gap={6}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    xl: "row",
                  }}
                  marginTop={6}
                >
                  <Box
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate("/colleges/St. John's Medical College Hospital");
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img23}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        St. John's Medical College Hospital
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/M.S. Ramaiah Medical College Bengaluru"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img24}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        M.S. Ramaiah Medical College Bengaluru
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/Kempegowda Institute of Medical Sciences – KIMS Bengaluru"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img25}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        Kempegowda Institute of Medical Sciences – KIMS
                        Bengaluru
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/J.J.M. Medical College Medical school"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img26}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        J.J.M. Medical College Medical school
                      </Text>
                    </Box>
                  </Box>
                </Flex>

                <Flex
                  width={"94vw"}
                  margin={"auto"}
                  gap={6}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    xl: "row",
                  }}
                  marginTop={6}
                >
                  <Box
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/Vydehi Institute Of Medical Sciences And Research Centre Bangalore"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img27}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        Vydehi Institute Of Medical Sciences And Research Centre
                        Bangalore
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/A.J. Institute of Medical Sciences & Research Centre Mangalore"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img28}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        A.J. Institute of Medical Sciences & Research Centre
                        Mangalore
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/Father Mullers Medical College Mangalore"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img29}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        Father Mullers Medical College Mangalore
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/Dr B.R. Ambedkar Medical College Bangalore"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img30}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        Dr B.R. Ambedkar Medical College Bangalore
                      </Text>
                    </Box>
                  </Box>
                </Flex>

                <Flex
                  width={"94vw"}
                  margin={"auto"}
                  gap={6}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    xl: "row",
                  }}
                  marginTop={6}
                >
                  <Box
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/Mahadevappa Rampure Medical College Kalaburagi Gulbarga"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img31}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        Mahadevappa Rampure Medical College Kalaburagi Gulbarga
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/S.S. Institute of Medical Sciences & Research"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img32}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        S.S. Institute of Medical Sciences & Research
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Bhopal"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img33}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute of Medical Sciences Bhopal
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Jodhpur"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img34}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute of Medical Sciences Jodhpur
                      </Text>
                    </Box>
                  </Box>
                </Flex>

                <Flex
                  width={"94vw"}
                  margin={"auto"}
                  gap={6}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    xl: "row",
                  }}
                  marginTop={6}
                >
                  <Box
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Patna"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img35}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute of Medical Sciences Patna
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Gorakhpur"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img36}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute of Medical Sciences Gorakhpur
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences New Delhi"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img37}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute of Medical Sciences New Delhi
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                      xl: "block",
                    }}
                    width={"100vw"}
                    borderWidth="1px"
                    borderRadius="lg"
                    background="white"
                    boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute Of Medical Science Rajkot"
                      );
                    }}
                    cursor={"pointer"}
                  >
                    <Box width={"100%"} height={"100%"}>
                      <Image
                        src={img38}
                        width={"100vw"}
                        height={"30vh"}
                        borderTopRadius={"5px"}
                      />
                      <Text color={"rgb(28,55,91)"} py={4}>
                        All India Institute Of Medical Science Rajkot
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </Carousel>
            </Box>
          </Box>

          <Box
            backgroundImage={img48}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            className={["container16"]}
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            p={4}
            width={"100%"}
          >
            <Heading
              color={{ base: "blue", sm: "blue", md: "blue", lg: "white" }}
              fontSize={["2rem", "2.5rem"]}
              style={{ zIndex: "1", marginTop: "4vh", marginBottom: "4vh" }}
            >
              <span> What Our </span>
              <span> Student Says </span>
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={6}
              width="90vw"
              margin={"auto"}
            >
              <GridItem>
                <Box
                  backgroundColor={"white"}
                  zIndex={"999"}
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  borderRadius={"25"}
                >
                  <Box
                    textAlign={"center"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <img src={img44} style={{ marginTop: "2vh" }}></img>

                    <div class="five-star-rating" style={{ marginTop: "2vh" }}>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#B60D1D",
                        }}
                      >
                        Shagun Pandey
                      </Text>
                      <Text
                        style={{
                          color: "rgba(0,0,0,0.3)",
                          fontSize: "1.4rem",
                          marginTop: "0.5vh",
                        }}
                      >
                        Student
                      </Text>
                    </div>
                    <Box
                      style={{ fontSize: "0.9rem", marginTop: "2vh" }}
                      textAlign={"center"}
                    >
                      <Text marginBottom={"2vh"}>
                        Discover top-tier MBBS colleges with transformative
                        education for aspiring healthcare professionals on this
                        platform.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>

              <GridItem>
                <Box
                  textAlign={"center"}
                  backgroundColor={"white"}
                  zIndex={"999"}
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  borderRadius={"25"}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <img src={img45} style={{ marginTop: "2vh" }}></img>

                    <div class="five-star-rating" style={{ marginTop: "2vh" }}>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#B60D1D",
                        }}
                      >
                        Shivangi Jha
                      </Text>
                      <Text
                        style={{
                          color: "rgba(0,0,0,0.3)",
                          fontSize: "1.4rem",
                          marginTop: "0.5vh",
                        }}
                      >
                        Student
                      </Text>
                    </div>
                    <Box style={{ fontSize: "0.9rem", marginTop: "2vh" }}>
                      <Text marginBottom={"2vh"}>
                        Navigate your journey to become a doctor with confidence
                        by exploring MBBS colleges on this comprehensive site.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>

              <GridItem>
                <Box
                  textAlign={"center"}
                  backgroundColor={"white"}
                  zIndex={"999"}
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  borderRadius={"25"}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <img src={img46} style={{ marginTop: "2vh" }}></img>

                    <div class="five-star-rating" style={{ marginTop: "2vh" }}>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#B60D1D",
                        }}
                      >
                        Arun Kumar
                      </Text>
                      <Text
                        style={{
                          color: "rgba(0,0,0,0.3)",
                          fontSize: "1.4rem",
                          marginTop: "0.5vh",
                        }}
                      >
                        Student
                      </Text>
                    </div>
                    <Box style={{ fontSize: "0.9rem", marginTop: "2vh" }}>
                      <Text marginBottom={"2vh"}>
                        Student insights reveal the unparalleled support at MBBS
                        colleges featured on our platform for a promising
                        future.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>

              <GridItem>
                <Box
                  backgroundColor={"white"}
                  zIndex={"999"}
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems={"center"}
                  borderRadius={"25"}
                  textAlign={"center"}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      alignItems: "center",
                    }}
                  >
                    <img src={img47} style={{ marginTop: "2vh" }}></img>

                    <div class="five-star-rating" style={{ marginTop: "2vh" }}>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                      <span class="star yellow-star"></span>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "#B60D1D",
                        }}
                      >
                        Shebhaj Khan
                      </Text>
                      <Text
                        style={{
                          color: "rgba(0,0,0,0.3)",
                          fontSize: "1.4rem",
                          marginTop: "0.5vh",
                        }}
                      >
                        Student
                      </Text>
                    </div>
                    <Box style={{ fontSize: "0.9rem", marginTop: "2vh" }}>
                      <Text marginBottom={"2vh"}>
                        Uncover empowering education at MBBS colleges that shape
                        future healthcare professionals, available on this site.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
          <Box
            width={"100%"}
            className="universities"
            py={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            position={"relative"}
          >
             {" "}
            <Text fontSize={"2.575rem"} color={"#00008B"}>
              Blogs
            </Text>
            <br />
            <Box width={["30vw", "30vw", "5vw", "5vw"]}>
              <hr
                style={{
                  width: "100%",
                  height: "0.5vh",
                  background: "#FF6C00",
                  marginTop: "-2.5vh",
                  border: "none",
                }}
              />
            </Box>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(4, 1fr)",
              }}
              gap={6}
              width="80vw"
              marginBottom={4}
              mt={4}
            >
              {formData &&
                formData?.map((ele) => (
                  <Link to={`/blogs/singleBlogPage/${ele._id}`} key={ele._id}>
                    <GridItem>
                      <Box width={"100%"} height={"100%"}>
                        <Image
                          src={ele.image}
                          width={"100vw"}
                          height={"30vh"}
                        />
                      </Box>

                      <Box
                        width={"100%"}
                        height={"16vh"}
                        backgroundColor={"white"}
                      >
                         {" "}
                        <Text
                          marginLeft={"0.5vh"}
                          marginTop={"-2vh"}
                          fontSize={"0.7rem"}
                          color={"#3939BC"}
                        >
                          {ele.date}
                        </Text>
                         {" "}
                        <Text
                          marginLeft={"0.5vh"}
                          marginTop={"-1vw"}
                          color={"#00008B"}
                          fontWeight={"bold"}
                          width={"80%"}
                          fontSize={"1rem"}
                        >
                          {ele.title.split("<br></br>")[0].substring(0, 20) +
                            "..."}
                        </Text>
                        <Text
                          marginLeft={"0.5vw"}
                          fontSize={"0.6rem"}
                          width={"80%"}
                          color={"#333333"}
                          dangerouslySetInnerHTML={{
                            __html:
                              ele.description
                                .split("<br></br>")[0]
                                .substring(0, 70) + "...",
                          }}
                        ></Text>{" "}
                      </Box>
                    </GridItem>
                  </Link>
                ))}
            </Grid>
          </Box>
          <Contact />
        </Box>
      </Box>
    </>
  );
};

export default Home;
