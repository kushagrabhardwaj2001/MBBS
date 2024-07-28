import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaNotebook } from "react-icons/fa";
import {
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HStack, VStack, Flex, Divider } from "@chakra-ui/react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Rectangle 60.png";
import img2 from "../Rectangle 62.png";
import img3 from "../Rectangle 63.png";
import img4 from "../Rectangle 64.png";
import img9 from "./Ellipse 10.png";
import img10 from "./Ellipse 10 (1).png";
import img11 from "./Ellipse 10 (2).png";
import img12 from "./Ellipse 10 (3).png";
import img19 from "./Rectangle 43.png";
import img20 from "./Group 89.png";
import img21 from "./Group 104 (1).png";
import img22 from "./Group 85.png";
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

import { FaUser } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div>
      <Box
        className="banner"
        width={"100vw"}
        height={"80vh"}
        position={"relative"}
        marginBottom={"3vh"}
        marginTop={"2vh"}
        backgroundColor={"#1C375B"}
      >
        <HStack>
          <img
            src={img20}
            style={{ position: "absolute", left: "5vw", top: "18vh" }}
          ></img>

          <img
            src={img22}
            style={{ position: "absolute", left: "24vw", top: "-1vh" }}
          ></img>

          <VStack>
            <Box
              color={"white"}
              fontSize={"2.5rem"}
              position={"absolute"}
              top={"12vh"}
              left={"38vw"}
              textAlign={"center"}
            >
              <Text>
                <span style={{ color: "rgba(255, 255, 255)" }}>
                  From &nbsp;
                </span>

                <span style={{ color: "#F4903A" }}>
                  College Admissions &nbsp;
                </span>

                <span style={{ color: "rgba(255, 255, 255)" }}>to</span>
              </Text>

              <Text>Being Job Ready</Text>
            </Box>

            <Button
              fontSize={"1.7rem"}
              paddingLeft={"2vw"}
              paddingRight={"2vw"}
              paddingTop={"1vw"}
              paddingBottom={"1vw"}
              backgroundColor={"#F4903A"}
              borderRadius={"8px"}
              style={{ position: "absolute", left: "40vw", top: "37vh" }}
            >
              Start you journey today
            </Button>

            <Button
              fontSize={"1.7rem"}
              paddingLeft={"2vw"}
              paddingRight={"2vw"}
              paddingTop={"1vw"}
              borderRadius={"15px"}
              paddingBottom={"1vw"}
              border={"3px solid #F4903A"}
              style={{ position: "absolute", left: "40vw", top: "50vh" }}
            >
              Get assured placement
            </Button>
          </VStack>
          <img
            src={img21}
            style={{ position: "absolute", right: "5vw", top: "16vh" }}
          ></img>
        </HStack>
      </Box>

      <Box
        width={"100vw"}
        height={"90vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box width={"85vw"} height={"90vh"}>
          <Flex>
            <HStack width={"40vw"}>
              <VStack>
                <HStack>
                  <img src={img1}></img>
                  <img src={img2} style={{ marginLeft: "1vw" }}></img>
                </HStack>
                <HStack marginTop={"1vw"}>
                  <img src={img3}></img>
                  <img src={img4} style={{ marginLeft: "1vw" }}></img>
                </HStack>
              </VStack>
            </HStack>
            <HStack width={"40vw"}>
              <Box>
                <Text
                  marginBottom={"5vh"}
                  fontWeight={"bold"}
                  color={"#1F548C"}
                  fontSize={"3.5rem"}
                >
                  Choose 2500+ <br />
                  MBBS Courses with New
                  <br /> additions
                </Text>

                <Text fontSize={"1.5rem"}>
                  Explore our MBBS college listing website to access valuable
                  insights for your medical career journey. Gain in-depth
                  knowledge about renowned medical institutions, admission
                  criteria, comprehensive courses, esteemed faculty, and
                  advanced campus facilities. We provide the essential
                  information you need to make informed decisions about your
                  medical education. Join us on the path to your successful
                  medical career today
                </Text>

                <Box>
                  <Button
                    style={{
                      background: "#B60D1D",
                      width: "11vw",
                      height: "7vh ",
                      padding: "0.9vw",
                      borderRadius: "14px",
                      marginLeft: "2vw",
                      marginTop: "5vh",
                      marginRight: "6vw",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      href="/contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Register
                    </a>
                  </Button>

                  <Button
                    style={{
                      background: "white",
                      width: "11vw",
                      padding: "0.9vw",
                      height: "7vh ",
                      borderRadius: "14px",
                      marginRight: "8vw",
                      border: "2px solid #B60D1D",
                      marginTop: "5vh",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      href="/about"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      learn more
                    </a>
                  </Button>
                </Box>
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>

      <Box
        className="container5"
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          backgroundColor: "#F4903A",
          flexDirection: "column",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "4rem", color: "#1F548C", marginTop: "-2vh" }}>
          Our Top
          <span style={{ color: "#1F548C" }}> Universities </span>{" "}
        </h2>

        <Text
          fontSize={"1.5rem"}
          textAlign={"center"}
          color={"white"}
          width={"80vw"}
          marginTop={"6vh"}
        >
          Embark on an extraordinary educational journey at our top-rated
          universities, where brilliance and innovation converge to shape the
          future of higher learning. Experience a transformative academic
          environment that nurtures your potential, empowers your ambitions, and
          propels you towards unparalleled success in your chosen field of
          study.
        </Text>
        <Carousel
          width={"100vw"}
          autoPlay={true}
          interval={2500}
          infiniteLoop={true}
        >
          <div style={{ marginTop: "10vh" }}>
            <HStack
              style={{ width: "100%", height: "100%", marginTop: "-10vh" }}
            >
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"200"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img23}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"25px"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Ahemadabad university
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img24}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Assam university
                  </Text>
                </Box>
              </Box>

              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img25}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Himalayan university
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img26}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Jiwaji University
                  </Text>
                </Box>
              </Box>
            </HStack>
          </div>

          <div style={{ marginTop: "10vh" }}>
            <HStack
              style={{ width: "100%", height: "100%", marginTop: "-10vh" }}
            >
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"200"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img27}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    LPU
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img28}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Lucknow University
                  </Text>
                </Box>
              </Box>

              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img29}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Mizoram University
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img30}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Sage University
                  </Text>
                </Box>
              </Box>
            </HStack>
          </div>
          <div style={{ marginTop: "10vh" }}>
            <HStack
              style={{ width: "100%", height: "100%", marginTop: "-10vh" }}
            >
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"200"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img31}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    chandigarh University
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img32}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Nalanda University
                  </Text>
                </Box>
              </Box>

              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img33}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    AMU
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img34}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    MGU
                  </Text>
                </Box>
              </Box>
            </HStack>
          </div>

          <div style={{ marginTop: "10vh" }}>
            <HStack
              style={{ width: "100%", height: "100%", marginTop: "-10vh" }}
            >
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"200"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img35}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Mangalyatan University
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img36}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Delhi University
                  </Text>
                </Box>
              </Box>

              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img37}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Kanpur University
                  </Text>
                </Box>
              </Box>
              <Box
                w={"17vw"}
                h={"42vh"}
                background={"white"}
                mt={"60"}
                mr={"30"}
                ml={"30"}
                boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
                display="flex"
                flexDirection="column"
                alignItems={"center"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              >
                <img
                  src={img38}
                  style={{ width: "100%", height: "80%", borderRadius: "25px" }}
                ></img>

                <Box
                  width={"100%"}
                  height={"20%"}
                  fontSize={"1.25rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text
                    textAlign={"center"}
                    color={"#023A7C"}
                    fontWeight={"bold"}
                    fontSize={"1.5rem"}
                  >
                    Jodhpur University
                  </Text>
                </Box>
              </Box>
            </HStack>
          </div>
        </Carousel>
      </Box>

      <Box
        className="container16"
        width={"100vw"}
        height={"85vh"}
        display="flex" // Use flex layout for the box
        flexDirection="column" // Stack the children vertically
        alignItems={"center"} // Align content to the bottom
        p={4}
      >
        <h2
          style={{
            fontSize: "4rem",
            zIndex: "1",
            marginTop: "10vh",
            color: "white",
          }}
        >
          <span style={{ color: "#FFFFFF" }}> What Our </span>
          <span style={{ color: "#FFFFFF" }}> Student Says </span>
        </h2>
        <HStack>
          <Box
            w={"18vw"}
            h={"50vh"}
            background={"white"}
            mt={40}
            zIndex={"1"}
            mr={"10"}
            ml={"20"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
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
              <img src={img9} style={{ marginTop: "-2vh" }}></img>

              <div class="five-star-rating" style={{ marginTop: "-3vh" }}>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
              </div>

              <div style={{ textAlign: "center" }}>
                <Text
                  style={{
                    fontSize: "2.375rem",
                    fontWeight: "600",
                    color: "#B60D1D",
                  }}
                >
                  Neha Sharma
                </Text>
                <Text
                  style={{
                    color: "rgba(0,0,0,0.3)",
                    fontSize: "1.635rem",
                    marginTop: "0.5vh",
                  }}
                >
                  Student
                </Text>
              </div>
              <div
                style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}
              >
                <Text>
                  "Stellar Medical College is top-notch! Great faculty,
                  fantastic facilities, and early clinical exposure. Highly
                  recommended!"
                </Text>
              </div>
            </Box>
          </Box>

          <Box
            w={"18vw"}
            h={"50vh"}
            background={"white"}
            mt={40}
            zIndex={"1"}
            mr={"10"}
            ml={"20"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
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
              <img src={img10} style={{ marginTop: "-2vh" }}></img>

              <div class="five-star-rating" style={{ marginTop: "-3vh" }}>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
              </div>

              <div style={{ textAlign: "center" }}>
                <Text
                  style={{
                    fontSize: "2.375rem",
                    fontWeight: "600",
                    color: "#B60D1D",
                  }}
                >
                  Priyanka
                </Text>
                <Text
                  style={{
                    color: "rgba(0,0,0,0.3)",
                    fontSize: "1.635rem",
                    marginTop: "0.5vh",
                  }}
                >
                  Student
                </Text>
              </div>
              <div
                style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}
              >
                <Text>
                  "Sunrise Medical University offers a well-rounded MBBS
                  program. Passionate professors, beautiful campus, but larger
                  class sizes."
                </Text>
              </div>
            </Box>
          </Box>

          <Box
            w={"18vw"}
            h={"50vh"}
            background={"white"}
            mt={40}
            zIndex={"1"}
            mr={"10"}
            ml={"20"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
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
              <img src={img11} style={{ marginTop: "-2vh" }}></img>

              <div class="five-star-rating" style={{ marginTop: "-3vh" }}>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
              </div>

              <div style={{ textAlign: "center" }}>
                <Text
                  style={{
                    fontSize: "2.375rem",
                    fontWeight: "600",
                    color: "#B60D1D",
                  }}
                >
                  Shashank
                </Text>
                <Text
                  style={{
                    color: "rgba(0,0,0,0.3)",
                    fontSize: "1.635rem",
                    marginTop: "0.5vh",
                  }}
                >
                  Student
                </Text>
              </div>
              <div
                style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}
              >
                <Text>
                  "Mixed experience at Greenfield. Challenging curriculum,
                  excellent library, but no international student hostels."
                </Text>
              </div>
            </Box>
          </Box>

          <Box
            w={"18vw"}
            h={"50vh"}
            background={"white"}
            mt={40}
            zIndex={"1"}
            mr={"10"}
            ml={"20"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
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
              <img src={img12} style={{ marginTop: "-2vh" }}></img>

              <div class="five-star-rating" style={{ marginTop: "-3vh" }}>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
                <span class="star yellow-star"></span>
              </div>

              <div style={{ textAlign: "center" }}>
                <Text
                  style={{
                    fontSize: "2.375rem",
                    fontWeight: "600",
                    color: "#B60D1D",
                  }}
                >
                  Vaibhav
                </Text>
                <Text
                  style={{
                    color: "rgba(0,0,0,0.3)",
                    fontSize: "1.635rem",
                    marginTop: "0.5vh",
                  }}
                >
                  Student
                </Text>
              </div>
              <div
                style={{ width: "15vw", fontSize: "1.3rem", marginTop: "2vh" }}
              >
                <Text>
                  "Highly recommended platform for focused UPSC preparation.
                  Insightful resources, effective strategies."
                </Text>
              </div>
            </Box>
          </Box>
        </HStack>
      </Box>

      <Box
        className="container11"
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          // justifyContent:'center',
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        <div className="overlay"></div>
        <h2 style={{ fontSize: "4rem", marginTop: "12vh", zIndex: "5" }}>
          <span style={{ color: "#023B7D" }}> Our Blogs </span>{" "}
        </h2>

        <HStack style={{ width: "100%", height: "100%", marginTop: "-14vh" }}>
          <Box
            w={"20vw"}
            h={"50vh"}
            background={"white"}
            mt={"20"}
            mr={"10"}
            ml={"170"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            zIndex={"5"}
          >
            <Box
              width={"100%"}
              height={"32vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                className="container12"
                width={"100%"}
                height={"100%"}
                borderRadius={"25px"}
                boxShadow="15px 15px 15px rgba(0, 0, 0, 0.3)"
              ></Box>
            </Box>

            <Box
              width={"100%"}
              height={"18vh"}
              fontSize={"1.25rem"}
              display={"flex"}
              flexDirection={"column"}
              position={"relative"}
              backgroundColor={"#023B7D"}
            >
              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", left: "4px" }}
              >
                <Text
                  backgroundColor={"white"}
                  fontSize={"1.5rem"}
                  borderRadius={"5px"}
                >
                  20 DEC,2022
                </Text>
              </Box>

              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", right: "-10px" }}
              >
                <Flex>
                  <div
                    className="yellow-bg"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                  >
                    <FaUser className="black-icon" />
                  </div>
                  <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
                    By admin
                  </Text>
                </Flex>
              </Box>

              <Box
                className="blog1"
                style={{ marginTop: "4vh", color: "white" }}
              >
                Sed ut perspiciatis unde omnis iste natus
              </Box>

              <Box className="blog2" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Box>

              <Box
                className="blog3"
                style={{ color: "white", marginTop: "2vh" }}
              >
                <Flex>
                  <div className="arrow-icon">
                    <FiArrowRight className="black-icon1" />
                  </div>
                  Read More
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box
            w={"20vw"}
            h={"50vh"}
            background={"white"}
            mt={"20"}
            mr={"10"}
            ml={"10"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            zIndex={"5"}
          >
            <Box
              width={"100%"}
              height={"32vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box className="container13" width={"100%"} height={"100%"}></Box>
            </Box>

            <Box
              width={"100%"}
              height={"18vh"}
              fontSize={"1.25rem"}
              display={"flex"}
              flexDirection={"column"}
              position={"relative"}
              backgroundColor={"#023B7D"}
            >
              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", left: "4px" }}
              >
                <Text
                  backgroundColor={"#FFFFFF"}
                  fontSize={"1.5rem"}
                  borderRadius={"5px"}
                >
                  20 DEC,2022
                </Text>
              </Box>

              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", right: "-10px" }}
              >
                <Flex>
                  <div
                    className="yellow-bg"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                  >
                    <FaUser className="black-icon" />
                  </div>
                  <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
                    By admin
                  </Text>
                </Flex>
              </Box>

              <Box
                className="blog1"
                style={{ marginTop: "4vh", color: "white" }}
              >
                Sed ut perspiciatis unde omnis iste natus
              </Box>

              <Box className="blog2" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Box>

              <Box
                className="blog3"
                style={{ color: "white", marginTop: "2vh" }}
              >
                <Flex>
                  <div className="arrow-icon">
                    <FiArrowRight className="black-icon1" />
                  </div>
                  Read More
                </Flex>
              </Box>
            </Box>
          </Box>

          <Box
            w={"20vw"}
            h={"50vh"}
            background={"white"}
            mt={"20"}
            mr={"10"}
            ml={"10"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            zIndex={"5"}
          >
            <Box
              width={"100%"}
              height={"32vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box className="container14" width={"100%"} height={"100%"}></Box>
            </Box>

            <Box
              width={"100%"}
              height={"18vh"}
              fontSize={"1.25rem"}
              display={"flex"}
              flexDirection={"column"}
              position={"relative"}
              backgroundColor={"#023B7D"}
            >
              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", left: "4px" }}
              >
                <Text
                  backgroundColor={"#FFFFFF"}
                  fontSize={"1.5rem"}
                  borderRadius={"5px"}
                >
                  20 DEC,2022
                </Text>
              </Box>

              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", right: "-10px" }}
              >
                <Flex>
                  <div
                    className="yellow-bg"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                  >
                    <FaUser className="black-icon" />
                  </div>
                  <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
                    By admin
                  </Text>
                </Flex>
              </Box>

              <Box
                className="blog1"
                style={{ marginTop: "4vh", color: "white" }}
              >
                Sed ut perspiciatis unde omnis iste natus
              </Box>

              <Box className="blog2" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Box>

              <Box
                className="blog3"
                style={{ color: "white", marginTop: "2vh" }}
              >
                <Flex>
                  <div className="arrow-icon">
                    <FiArrowRight className="black-icon1" />
                  </div>
                  Read More
                </Flex>
              </Box>
            </Box>
          </Box>

          <Box
            w={"20vw"}
            h={"50vh"}
            background={"white"}
            mt={"20"}
            mr={"10"}
            ml={"10"}
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            zIndex={"5"}
          >
            <Box
              width={"100%"}
              height={"32vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box className="container15" width={"100%"} height={"100%"}></Box>
            </Box>

            <Box
              width={"100%"}
              height={"18vh"}
              fontSize={"1.25rem"}
              display={"flex"}
              flexDirection={"column"}
              position={"relative"}
              backgroundColor={"#023B7D"}
            >
              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", left: "4px" }}
              >
                <Text
                  backgroundColor={"#FFFFFF"}
                  fontSize={"1.5rem"}
                  borderRadius={"5px"}
                >
                  20 DEC,2022
                </Text>
              </Box>

              <Box
                width={"8vw"}
                style={{ position: "absolute", top: "4px", right: "-10px" }}
              >
                <Flex>
                  <div
                    className="yellow-bg"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "5px",
                    }}
                  >
                    <FaUser className="black-icon" />
                  </div>
                  <Text color={"rgba(0,0,0,0.7)"} fontSize={"1.5rem"}>
                    By admin
                  </Text>
                </Flex>
              </Box>

              <Box
                className="blog1"
                style={{ marginTop: "4vh", color: "white" }}
              >
                Sed ut perspiciatis unde omnis iste natus
              </Box>

              <Box className="blog2" style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </Box>

              <Box
                className="blog3"
                style={{ color: "white", marginTop: "2vh" }}
              >
                <Flex>
                  <div className="arrow-icon">
                    <FiArrowRight className="black-icon1" />
                  </div>
                  Read More
                </Flex>
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>

      <div>
        <Box
          marginTop={"7vh"}
          width={"100vw"}
          height={"95vh"}
          boxShadow={"0px 4px 6px rgba(0, 0, 0, 0.7)"}
        >
          <Flex>
            <div>
              <img style={{ height: "95vh" }} src={img19}></img>
            </div>

            <VStack style={{ margin: "0px auto" }}>
              <h2 style={{ fontSize: "2rem" }}>
                <span style={{ color: "#023B7D" }}>Get In Touch </span>
              </h2>

              <Text
                style={{
                  color: "#000000",
                  fontSize: "2.5rem",
                  marginTop: "1vh",
                }}
              >
                Let's Discuss your project right now
              </Text>

              <div class="search-bars2">
                <input
                  type="text"
                  className="search-bar2"
                  placeholder="Full Name"
                ></input>
                <input
                  type="text"
                  className="search-bar2"
                  placeholder="Email"
                ></input>
                <input
                  type="text"
                  className="search-bar2"
                  placeholder="Mobile Number"
                ></input>
                <input
                  type="text"
                  className="search-bar3"
                  placeholder="Message"
                ></input>
              </div>

              <Button
                style={{
                  outline: "none",
                  fontSize: "3.5rem",
                  border: "2px solid #B60D1D",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  marginTop: "5vh",
                }}
                _hover={{ backgroundColor: "#B60D1D" }}
              >
                Contact Us
              </Button>
            </VStack>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Home;
