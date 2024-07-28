import React, { useEffect } from "react";
import img1 from "./about.png";
import {
  Box,
  background,
  position,
  button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./About.css";

import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import WhatsApp from "../components/Whatsapp/whatsapp";

const About = () => {
  return (
    <Box>
      <WhatsApp />
      <Box
        // border={"1px solid red"}
        className="container4"
        width="100%"
        height={{ base: "180vh", md: "100vh", lg: "100vh", xl: "100vh" }}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        py={5}
      >
        <h2 style={{ fontSize: "2rem", marginTop: "10px" }}>
          About Us
          <br />
          <span style={{ color: "#023B7D", fontWeight: "200" }}>
            {" "}
            About Mbbs Dunia
          </span>
        </h2>

        <Stack
          height={{ base: "160vh", md: "90vh", lg: "90vh", xl: "160vh" }}
          width={"94%"}
          margin={"auto"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={6}
        >
          <Box
            width={{ base: "90%", sm: "90%", md: "80%", xl: "50%" }}
            margin="auto"
            height={{ base: "0vh", md: "auto" }}
          >
            <Image
              src={img1}
              w={{ base: "90%", md: "60vw" }}
              margin={"auto"}
              h="auto"
            />
          </Box>

          <Box
            width={{ base: "90%", sm: "90%", md: "80%", xl: "50%" }}
            margin={"auto"}
          >
            <Box
              style={{
                fontSize: "1rem",

                color: "rgba(0,0,0,0.6)",
              }}
              textAlign={"start"}
            >
              Welcome to MBBS Dunia, where your journey to becoming a successful
              medical professional begins. At MBBS Dunia, we understand that
              choosing the right MBBS college is a pivotal decision in your
              academic and professional life. Our mission is to empower aspiring
              doctors like you with accurate, comprehensive, and up-to-date
              information about MBBS colleges worldwide. We are dedicated to
              simplifying the college selection process and helping you make
              informed choices that will shape your future.
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#023B7D" />
                  <Text marginLeft={"10px"}>Educational Excellence</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#023B7D" />
                  <Text marginLeft={"10px"}>User-Centric Approach</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#023B7D" />
                  <Text marginLeft={"10px"}>Continuous Improvement</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#023B7D" />
                  <Text marginLeft={"10px"}>Community Support</Text>
                </Flex>
              </Box>
              <Box marginTop={"3vh"}>
                <Flex>
                  <Icon as={StarIcon} w={25} h={25} color="#023B7D" />
                  <Text marginLeft={"10px"}>Feedback Integration</Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
