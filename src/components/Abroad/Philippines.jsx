import React from "react";
import "./Philippines.css";
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
import img2 from "./lippines2.jpg";
import img1 from "./philippines3.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Philippines = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom6-background"
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
          "MBBS In Philippines"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{ sm: "80%", lg: "60%" }}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Philippines
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
              : The Philippines is an archipelago of 7,107 islands with a total
              land area, including inland bodies of water. It is approximately
              300,000 bodies kilometers. It is located between 116° 40', and
              126° 34'E. longitude and 4°40' and 21°10'N longitude and is
              Bordered by the Philippine Sea to the east, the South China Sea to
              the west, and the Celebes Sea to the South. The island of Borneo
              is located a few hundred kilometers southwest and Taiwan is
              located directly to the north. The Moluccas and Sulawesi are
              located to the south-southwest and Palau is located to the east of
              the islands. The highest mountain is Mothe Apo. It measures up to
              2,954 meters (9,692 feet) above sea level and is located on the
              island of Alindanao. The Galatea Depth in the Philippine Trench is
              the deepest point in the country and the third deepest in the
              world. The trench is located in the Philippine Sea.
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
                10,09,81,437{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Other large cities:
                </span>{" "}
                Quezon City, Manila, Caloocan, Davao City, Cebu City etc.{" "}
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
                Manila{" "}
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Largest City:
                </span>{" "}
                Bishkek, Osh, Jala-Abad, Karakol etc.{" "}
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
              The climate is mostly hot and humid- averaging at about 80 degrees
              with humidity of 77%. The best season to visit is during the
              months of November to March, which is the dry season. The months
              of May to October are very hot and humid. The average yearly
              temperature is around 26.6°C.
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
            </span>{" "}
            Christianity is the majority faith in the Philippines, making up
            approximately 90% of the population.
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
              93.4%
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
              Philippine peso (PHP)
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
              PST (UTC+8)
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"}>
            Why Philippines?
          </Text>
          <ul style={{ marginLeft: "3vw" }}>
            <li>Affordable overseas degrees and tuition fees.</li>
            <li>Economical accommodation and living expenses.</li>
            <li>Excellent and comfortable boarding facilities.</li>
            <li>Excellent and comfortable boarding facilities.</li>
            <li>Inexpensive travel cost </li>
          </ul>
        </Box>

        <Text>
          It's an amazing opportunity! The Philippines has always been ahead in
          the field of education and more specially medicine. Studying in The
          Philippines is easy, cheap and flexible. You wanted to go someplace
          exotic and off the beaten path-isn't that everyone's dream?-Yet still
          within the realm of practicality. All universities are equipped with
          the most modern diagnostic and teaching aids. The Philippines offers
          all the possible advantages I could hope for: pervasive use of the
          Russian language, opportunities to teach English, and a storied
          cultural, political, and religious history to boot! At the same time,
          Capital Bishkek is a growing and very livable city; while it lacks the
          amenities of a Western or even a well-developed Russian or Eastern
          Asian city, there's a sense of thrilling novelty about it.
        </Text>

        <Box
          width={"80vw"}
          margin={"0px auto"}
          marginTop={"5vh"}
          marginBottom={6}
        >
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1.2rem"} fontWeight={"500"} color={"#1C375B"}>
                Advantages of studying in the Philippines
              </Heading>

              <Box style={{ marginLeft: "5vw", marginTop: "" }}>
                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    Recognized by BMDC, MCI, MMC, NMC, PMDC and other medical
                    councils. Medical education recognized by the World Health
                    Organization (WHO), and IMED.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Medical and Nursing education geared towards employment in
                    the USA and UK and easy to pass USMLE, CGFNS, and NCLEX (Nursing).
                  </Text>
                </Flex>

                <HStack marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    {" "}
                    Since the assessments are rigorous easy to pass local
                    licensing exams like USMLE, PLAB-UK, AMC-Australia, MCI
                    Screening Test, PMDC-Pakistan etc. and other board exams.
                  </Text>
                </HStack>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    American Style PBL curriculum. English to sit for the USMLE.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The education system is just so fantastic that the
                    Philippines has sent hundreds of doctors to work in USA, UK,
                    and the Middle East, etc.
                  </Text>
                </Flex>
              </Box>
            </Box>
          </HStack>
        </Box>
      </Box>
    </div>
  );
};

export default Philippines;
