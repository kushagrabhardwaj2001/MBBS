import React from "react";
import "./Bangladesh.css";
import {
  Box,
  Text,
  HStack,
  Button,
  VStack,
  Heading,
  Img,
  Flex,
  Image,
} from "@chakra-ui/react";
import img1 from "./bangladesh3.jpg";
import img2 from "./bangladesh4.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Bangladesh = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom3-background"
        width={"100%"}
        marginTop={"3vh"}
        height={"45vh"}
        mb={"10"}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={"flex-start"}
        p={4}
      >
        <div class="overlay"></div>

        <Text
          fontSize={"3rem"}
          textAlign={"center"}
          color={"white"}
          zIndex={"1"}
        >
          "MBBS In Bangladesh"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{ sm: "80%", lg: "60%" }}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS in Bangladesh
            </Heading>
            <p style={{ fontSize: "1.1rem" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Geography
              </span>
              : Bangladesh, officially the People's Republic of Bangladesh, is a
              country in South Asia. It shares land borders with India and
              Myanmar (Burma). Nepal, Bhutan, and China are close to near
              Bangladesh but do not share a border with it. The country's
              maritime territory in the Bay of Bengal is roughly equal to the
              size of its land area. Bangladesh is the world's eighth most
              populous country. Dhaka is its capital and largest city, followed
              by Chittagong which has the country's largest port. The
              politically dominant Bengali Muslims make the nation the world's
              third largest Muslim-majority country. Most of Bangladesh is
              covered by the Bengal Delta, the largest delta on Earth.
              <br />
              <br />
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Population:
                </span>{" "}
                The population of Bangladesh is more than 17 crore.{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Area:
                </span>{" "}
                147,610 km2{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Capital:
                </span>{" "}
                Dhaka{" "}
              </Text>
              <br />
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Climate:
              </span>{" "}
              Bangladesh's climate is tropical, with a mild winter from October
              to March, and a hot, humid summer from March to June. The country
              has never recorded an air temperature below 0°C (32°F), with a
              record low of 1.1°C (34.0°F).
            </p>
          </Box>
          <Box width={"40%"} display={{ base: "none", lg: "block" }}>
            <VStack>
              <Img src={img1} width={"100%"}></Img>
              <Img src={img2} width={"100%"}></Img>
            </VStack>
          </Box>
        </HStack>

        <Box width={"100%"} fontSize={"1.1rem"} marginTop={"3vh"}>
          <Text>
            <span
              style={{ fontWeight: "bold", color: "1C375B", color: "#1C375B" }}
            >
              Religions:
            </span>
            Islam is the largest religion In Bangladesh, adhered to by about
            86.6% of the population, 12.1% Hinduism, 0.6% Buddhism, 0.4%
            Christianity, 0.3% others.
          </Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                {" "}
                Literacy rate:
              </span>{" "}
              71% (estimated at 66.5% for males and 63.1% for females)
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Currency:
              </span>{" "}
              Taka (BDT)
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  color: "1C375B",
                  color: "#1C375B",
                }}
              >
                Time Zone:
              </span>{" "}
              BST (UTC+6)
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"}>
            Why Bangladesh?
          </Text>
          <ul style={{ marginLeft: "3vw" }}>
            <li>Low Tuition Fee</li>
            <li>Full English Medium</li>
            <li>Minimum Expenses</li>
            <li>No Entrance Exam for Indian Students</li>
          </ul>
        </Box>

        <Text marginBottom={6}>
          The Study pattern in Bangladesh is similar to the Indian Medical
          Colleges M.C.I. Guidelines. Medical study in Bangladesh Similar to
          medical study in India with respect to the same books followed by
          students and Professors in the same syllabus like MBBS in India, the
          same study pattern, duration of study, similarmedicine, similar
          diseases, the same examination pattern, and a similar study plan. The
          culture of Bangladesh is similar to that of India, the food habits are
          also the same, the languages spoken in Bangladesh are English,
          Bengali, Hindi, Urdu, Arabic, similar to that of India. Numbers of
          Tamil, Oriya, Punjabi, Gujarati, and Marathi-speaking students can be
          found in Dhaka and other cities in Bangladesh.
          <br />
          <br />
          MCI Screening Test: 100% for MCI Registration since the same study pattern
          followed during the 5 year MBBS Course.
          <br />
          <br />
          Most of Medical Colleges in Bangladesh are approved by the MCI Act 1956
          and listed in the World Health Organization (WHO), Directory of World
          Medical Schools. Bangladesh is a dry country and the safest place for
          students studying outside the country. A low-budget Medica study is only
          possible in Bangladesh. MBBS Bangladesh is a better option than MBBS in
          other countries.
        </Text>
      </Box>
    </div>
  );
};

export default Bangladesh;
