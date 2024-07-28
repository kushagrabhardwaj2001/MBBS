import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { StickyContainer, Sticky } from "react-sticky";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import img1 from "./facts-icon2.png";
import img2 from "./facts-icon3.png";
import img3 from "./facts-icon4.png";
import img4 from "./facts-icon7.png";

import {
  Container,
  Grid,
  Box,
  Text,
  Icon,
  HStack,
  Stack,
  Flex,
  CircularProgress,
  VStack,
  Img,
  Button,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import WhatsApp from "../Whatsapp/whatsapp";

function Collegepage() {
  const { collegename } = useParams(); // Access the 'collegename' parameter from the URL

  const [collegeData, setCollegeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const response = await fetch(
          `https://api.mbbsdunia.com/api/college/${collegename}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setLoading(false);
          setCollegeData(data);
        } else {
          console.error("Error fetching college data");
        }
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, [collegename]);

  if (!collegeData) {
    return (
      <div>
        <Box
          width={"100vw"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>Loading Colleges....</Text>
          <CircularProgress isIndeterminate color="green.300" />
        </Box>
      </div>
    );
  }

  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "5vh",
    width: "100%",
    border: "none",
  };

  const cellStyle = {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "center",
    border: "none",
  };

  const boldCellStyle = {
    ...cellStyle,
    color: "#014BEC",
    fontWeight: "bold",
    border: "none",
  };

  const lightGreyCellStyle = {
    ...cellStyle,
    backgroundColor: "#d3d3d3",
    border: "none",
  };

  const separatorCellStyle = {
    ...cellStyle,
    borderBottom: "1px solid #000",
    border: "none",
  };

  const bodyStyle = {
    fontFamily: "'Rubik', sans-serif",
    // Add other CSS styles as needed
  };

  // Apply the style to the body element
  document.body.style = Object.assign({}, document.body.style, bodyStyle);

  return (
    <div style={{ width: "100%", marginTop: "5vh" }}>
      <Box  width={"100%"} >
        <WhatsApp />
        <Box
          style={{ fontSize: "1.9rem", color: "#01B4EC", margin: "0px auto" }}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Img
            width={["90%", "90%", "90%", "80%"]}
            height={["30vh", "30vh", "40vh", "40vh"]}
            style={{ fontWeight: "600", borderRadius: "20px" }}
            src={collegeData.image1}
            alt="Image 1"
          />
          <Box
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            border={"2px solid #00008B"}
            alignContent={"start"}
            justifyContent={"center"}
            position={"absolute"}
            bottom={["-1vh", "-1vh", "-2vh", "-3vh"]}
            left={["2vw", "2vw", "14vw", "14vw"]}
            width={["30vw", "3vw", "20vw", "13vw"]}
            height={["10vh", "20vh", "15vh", "20vh"]}
          >
            <Img
              style={{ fontWeight: "600", margin: "auto" }}
              height={"100%"}
              src={collegeData.image2}
              alt="Image 2"
            />
          </Box>

          <Box style={{ textAlign: "center", color: "#F4903A" }}>
            <Text
              style={{ fontWeight: "600", marginLeft: "30vw", width: "60vw" }}
              fontSize={{ base: "1rem", md: "1.6rem" }}
            >
              {collegename}
            </Text>

            <Flex
              // border={"1px solid red"}
              style={{
                color: "black",
                fontSize: "1.2rem",
                justifyContent: "center",
              }}
              gap={2}
            >
              <Icon style={{ marginLeft: "21vw" }} as={FaMapMarkerAlt} />
              <Text style={{ textAlign: "center" }} fontSize={"1rem"}>
                {collegeData.city}, {collegeData.state}
              </Text>
            </Flex>
          </Box>
        </Box>

        <Box
          style={{
            // fontSize: "1rem",
            textAlign: "start",
            marginTop: "6vh",
            background: "#ECECEC",
            width: "100%",
          }}
        >
          <Box>
            <Stack
              direction={["column", "column", "row", "row"]}
              justifyContent={"space-around"}
            >
              <Box
                width={["80vw", "80vw", "25vw", "20vw"]}
                height={["12vh", "12vh", "12vh", "15vh"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #F4903A",
                  borderRadius: "10px",
                  borderBottom: "5px solid #F4903A",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "space-around",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <Img style={{ marginRight: "2vw" }} src={img1}></Img>
                  <Box>
                    <Text fontWeight={"bold"}>Established</Text>
                    <Text textAlign={"center"}>{collegeData.established}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #F4903A",
                  borderRadius: "10px",
                  borderBottom: "5px solid #F4903A",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "space-around",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img2}></img>
                  <Box>
                    <Text fontWeight={"bold"}>College Type</Text>
                    <Text textAlign={"center"}>{collegeData.collegetype}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #F4903A",
                  borderRadius: "10px",
                  borderBottom: "5px solid #F4903A",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "center",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img3}></img>
                  <Box>
                    <Text fontWeight={"bold"}>Location</Text>
                    <Text textAlign={"center"}>{collegeData.city}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                width={["80vw", "80vw", "22vw", "20vw"]}
                marginTop={["2vh", "2vh", "10vh", "10vh"]}
                margin={"0px auto"}
                height={["12vh", "12vh", "12vh", "15vh"]}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #F4903A",
                  borderRadius: "10px",
                  borderBottom: "5px solid #F4903A",
                }}
                fontSize={"1rem"}
              >
                <Flex
                  justifyContent={[
                    "space-around",
                    "space-between",
                    "center",
                    "center",
                  ]}
                  style={{ alignItems: "center", height: "100%" }}
                >
                  <img style={{ marginRight: "2vw" }} src={img4}></img>
                  <Box>
                    <Text fontWeight={"bold"}>Approval</Text>
                    <Text textAlign={"center"}>{collegeData.approval}</Text>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box width={["95vw", "90vw", "80vw", "80vw"]} margin={"0 auto"}>
            <Flex>
              <Box width={["95vw", "90vw", "95vw", "57vw"]}>
                <Box
                  fontSize={"1rem"}
                  style={{
                    backgroundColor: "white",
                    marginTop: "6vh",
                    fontWeight: "40",
                    padding: "4vw",
                    boxShadow:
                      "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                    borderWidth: "1px",
                    border: "2px solid #1C375B",
                    borderRadius: "35px",
                  }}
                >
                  <Text textAlign={"center"} fontWeight={"600"}>
                    {collegeData.collegename}
                  </Text>
                  <p
                    style={{
                      color: "#333",
                      marginTop: "3vh",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "100",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: collegeData.universityDescription,
                    }}
                  ></p>
                  <table style={tableStyle}>
                    <thead style={{ color: "black" }}>
                      <tr style={{ backgroundColor: "#01B4EC" }}>
                        <th style={{ fontSize: "1rem" }}>Particulars</th>
                        <th style={{ fontSize: "1rem" }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={boldCellStyle}>State</td>
                        <td style={cellStyle}>{collegeData.state}</td>
                      </tr>
                      <tr style={lightGreyCellStyle}>
                        <td style={boldCellStyle}>City</td>
                        <td style={cellStyle}>{collegeData.city}</td>
                      </tr>
                      <tr>
                        <td style={boldCellStyle}>Affiliated By</td>
                        <td style={cellStyle}>{collegeData.affiliatedby}</td>
                      </tr>
                      <tr style={lightGreyCellStyle}>
                        <td style={boldCellStyle}>College Category</td>
                        <td style={cellStyle}>{collegeData.collegecategory}</td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>

              <StickyContainer>
                <Sticky
                  topOffset={-200}
                  bottomOffset={200}
                  stickyStyle={{ zIndex: 1 }}
                >
                  {({ style }) => (
                    <Box
                      display={["none", "none", "none", "block"]}
                      style={{
                        ...style,
                        marginLeft: "5vw",
                        marginTop: "20vh",
                        background: "rgba(255, 0, 0, 0.7)",
                        width: "25vw",
                        position: "fixed",
                        backgroundColor: "white",
                        boxShadow:
                          "10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)",
                        borderWidth: "1px",
                        border: "2px solid #1C375B",
                        borderRadius: "35px",
                      }}
                    >
                      <VStack width={"25vw"} py={6}>
                        <Text
                          style={{
                            fontsize: "1rem",
                            fontWeight: "600",
                          }}
                        >
                          Contact Details
                        </Text>

                        <Box style={{ fontSize: "1rem" }}>
                          <Flex
                            style={{
                              color: "black",
                              marginTop: "2vh",
                              justifyContent: "center",
                            }}
                            gap={2}
                          >
                            <Icon
                              style={{ fontWeight: "100" }}
                              as={FaMapMarkerAlt}
                            />
                            <Text
                              style={{ fontWeight: "600", textAlign: "start" }}
                            >
                              Address
                            </Text>
                          </Flex>
                          <Text
                            style={{ textAlign: "center", color: "#014BEC" }}
                          >
                            {collegeData.city}, {collegeData.state}
                          </Text>
                        </Box>

                        <Box
                          style={{
                            fontSize: "1rem",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <Flex
                            style={{
                              color: "black",
                              marginTop: "5vh",
                              justifyContent: "center",
                            }}
                            gap={2}
                          >
                            <FaGlobe style={{ fontWeight: "100" }} />
                            <Text
                              style={{ fontWeight: "600", textAlign: "start" }}
                            >
                              {" "}
                              website
                            </Text>
                          </Flex>
                          <Box
                            width={"20vw"}
                            style={{
                              marginLeft: "2vw",
                              overflow: "hidden",
                              wordWrap: "break-word",
                              textAlign: "center",
                            }}
                          >
                            <Text
                            color={"red"}
                              style={{ color: "#014BEC", fontSize: "1rem" }}
                            >
  <a href={`${collegeData.website.startsWith("http://") || collegeData.website.startsWith("https://") ? collegeData.website : "http://" + collegeData.website}`} target="_blank">{collegeData.website}</a>
</Text>
                          </Box>
                        </Box>
                      </VStack>
                    </Box>
                  )}
                </Sticky>
              </StickyContainer>

              <Box
                style={{ position: "absolute", right: "28vw", bottom: "80vh" }}
              ></Box>
            </Flex>
          </Box>
        </Box>
        <Box
          // border={"1px solid blue"}
          style={{ color: "#01B4EC", margin: "0px auto" }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontSize={"1.4rem"}
            style={{ color: "#1C375B", fontWeight: "600", marginTop: "5vh" }}
          >
            For more details and Cutoffs
          </Text>
          <Button
            onClick={() => {
              window.location.href = "https://api.mbbsdunia.com/pay";
            }}
            marginTop={"4vh"}
            marginBottom={"4vh"}
            background={"#F4903A"}
            color={"white"}
            fontWeight={"100"}
            width={"30vw"}
            _hover={{
              color: "black",
              border: "2px solid #F4903A",
              background: "none",
            }}
          >
            Get Cutoffs
          </Button>
                  
        </Box>
      </Box>
    </div>
  );
}

export default Collegepage;
