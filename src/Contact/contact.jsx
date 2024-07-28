import React, { useState } from "react";
import { Box, FormErrorMessage, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Flex,
  Button,
  VStack,
  FormControl,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import img1 from "./contactus.png";
import axios from "axios";
import WhatsApp from "../components/Whatsapp/whatsapp";

const Contact = () => {
  const toast = useToast();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    console.log("contactData:", contactData);
    try {
      const responce = await axios.post(
        `https://api.mbbsdunia.com/api/contact`,
        contactData
      );
      if (responce.status === 200) {
        toast({
          title: `Thank you for contacting us!`,
          status: "success",
          isClosable: true,
        });
        setContactData({
          name: "",
          email: "",
          mobile: "",
          description: "",
        });
      }
      console.log("responce:", responce);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <WhatsApp />
      <form onSubmit={handleContactFormSubmit}>
        <Box marginTop={"7vh"}>
          <Flex
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
              src={img1}
              width={{ base: "80%", sm: "80%", md: "80%", xl: "32%" }}
              h={"60vh"}
              margin={"auto"}
            ></Image>

            <VStack
              width={{ base: "80vw", sm: "80vw", md: "45vw", xl: "40vw" }}
              margin={"auto"}
            >
              <h2 style={{ fontSize: "1.8rem" }}>
                <Text style={{ color: "#000000" }}>CONTACT US </Text>
              </h2>

              <Text
                fontSize={{ base: "2rem" }}
                style={{ color: "#00008B", marginTop: "1vh" }}
                textAlign={"center"}
              >
                Request a Callback
              </Text>

              <FormControl isRequired marginTop={"2vh"}>
                <Input
                  onChange={handleInput}
                  name="name"
                  value={contactData.name}
                  placeholder="Full name"
                />
              </FormControl>

              {/* <FormControl isRequired marginTop={"2vh"}>
              <Input onChange={handleInput} name="email" value={contactData.email} placeholder="Email" />
            </FormControl>

            <FormControl isRequired marginTop={"2vh"}>
              <Input onChange={handleInput} name="mobile" value={contactData.mobile} placeholder="Mobile" />
            </FormControl> */}
              <FormControl mb={4} isRequired>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                  value={contactData.email}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Email pattern
                />
                <FormErrorMessage>Email address is not valid</FormErrorMessage>
              </FormControl>
              <FormControl mb={4} isRequired>
                <Input
                  type="tel"
                  placeholder="Phone"
                  name="mobile"
                  onChange={handleInput}
                  value={contactData.mobile}
                  pattern="[0-9]{10}"
                  required
                />
                <FormErrorMessage>
                  Please enter a valid phone number (10 digits only).
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired marginTop={"2vh"}>
                <Textarea
                  onChange={handleInput}
                  name="description"
                  value={contactData.description}
                  placeholder="Enter description"
                ></Textarea>
              </FormControl>

              <Button
                type="submit"
                marginTop={"2vh"}
                color={"white"}
                fontWeight={"400"}
                backgroundColor={"#00008B"}
                padding={"5px 40px"}
                _hover={{
                  color: "black",
                  border: "2px solid #00008B",
                  backgroundColor: "white",
                }}
                marginBottom={"5vh"}
              >
                Submit
              </Button>
            </VStack>
          </Flex>
        </Box>
      </form>
    </div>
  );
};

export default Contact;
