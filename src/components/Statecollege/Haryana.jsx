// UPUniversities.js
import { StickyContainer, Sticky } from "react-sticky";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Cutoff.css";
import {
  Container,
  Grid,
  Box,
  Text,
  Icon,
  CircularProgress,
  HStack,
  Divider,
  Flex,
  VStack,
  Img,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import UniversityCard from "../collegecard/Collegecard";

import img1 from "./Karnataka banner2.jpg-86677_1 (1).jpg";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../Banner/Banner";
import { Filter } from "../Filter/Filter";

function Haryana() {
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // Fetch universities for Uttar Pradesh
    axios
      .get("https://api.mbbsdunia.com/api/state/Haryana")

      .then((response) => {
        setUniversities(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, []);

  if (loading == true) {
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

  return (
    <div>
      <HStack>
        <Box width={"100%"}>
          <Banner />

          <Text
            fontSize="1.7rem"
            fontWeight="bold"
            background={"#F4903A"}
            mb={4}
            textAlign={"center"}
            color={"white"}
          >
            Universities in Haryana
          </Text>

          {/* <HStack> */}
          {/* <Box display={{base:"none",md:"block"}}>
              <Filter />
            </Box> */}

          <Grid
            templateColumns="repeat(1,1fr)"
            gap={4}
            // border={"1px solid red"}
            margin={"auto"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "6vh",
              }}
            >
              {universities.map((university) => (
                <UniversityCard
                  key={university._id}
                  university={university}
                  style={{ marginBottom: "6vh" }}
                />
              ))}
            </div>
          </Grid>
          {/* </HStack> */}
        </Box>
      </HStack>
    </div>
  );
}

export default Haryana;
