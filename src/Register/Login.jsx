import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import WhatsApp from "../components/Whatsapp/whatsapp";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    mail_id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post(
        "https://api.mbbsdunia.com/api/user/login",
        loginData
      );

      console.log("res:", res.data);

      if (
        loginData.mail_id === "mbbsduniadelhi@gmail.com" &&
        res.status === 200
      ) {
        setIsAuth(true);
        // Set user details in local storage
        localStorage.setItem("userDetails", JSON.stringify(res.data.user));
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user[0].firstname)
        );
        localStorage.setItem("isAuth", true);
        toast({
          title: "User",
          description: "Login successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/admin-dashboard");
      } else if (
        loginData.mail_id !== "mbbsduniadelhi@gmail.com" &&
        res.status === 200
      ) {
        // Handle other cases here
        setIsAuth(true);
        // Set user details in local storage
        localStorage.setItem("userDetails", JSON.stringify(res.data.user));
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user[0].firstname)
        );
        localStorage.setItem("isAuth", true);
        toast({
          title: "User",
          description: "Login successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      }
    } catch (error) {
      // Set error state and show error toast
      setError("Login failed. Please try again.");
      toast({
        title: "Error",
        description: error.message || "An error occurred.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box bg={"rgb(151,162,226)"} height={"100vh"}>
      <WhatsApp />
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          width={{ base: "80%", sm: "80%", md: "60%", xl: "40%" }}
          p="10"
          bg="#ffff"
          borderRadius={"12px"}
          boxShadow="0px 3px 8px rgba(0, 0, 0, 0.24)"
        >
          <Heading fontSize={"1.5rem"} textAlign={"center"} mb={"5"}>
            Login Here
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl
              marginBottom={{ base: "14%", sm: "12%", md: "6%", xl: "6%" }}
            >
              <FormLabel>Mail ID</FormLabel>
              <Input
                name="mail_id"
                value={loginData.mail_id}
                onChange={handleChange}
                placeholder="Enter your mail id"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>

            <Box textAlign={"center"} mt={"5"} mb={"5"}>
              {" "}
              <Link to="/cutoff">
                <Text
                  fontSize={{
                    base: "0.8rem",
                    sm: "0.8rem",
                    md: "1rem",
                    xl: "1rem",
                  }}
                  color={"blue"}
                >
                  Don't have account click me to Register ⬇
                </Text>
              </Link>
            </Box>
            <Center>
              <Button
                mt={"5"}
                width={"80%"}
                border={"2px solid #1C375B"}
                margin={"auto"}
                _hover={{ backgroundColor: "#1C375B", color: "white" }}
                type="submit"
                isLoading={loading} // Show loading spinner while loading
              >
                Login
              </Button>
            </Center>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
