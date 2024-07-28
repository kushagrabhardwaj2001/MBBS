import React from "react";
import "./Georgia.css";
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
import img1 from "./Georgia 1.webp";
import img2 from "./Georgia2.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Georgia = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom-background"
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
          "MBBS In Georgia"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{sm:"80%",lg:"60%"}}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Georgia
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
              : Georgia is a country in the Caucasus region of Eurasia. Located
              at the crossroads of Western Asia and Eastern Europe, it is
              bounded to the west by the Black Sea, to the north by Russia, to
              the south by Turkey and Armenia, and to the southeast by
              Azerbaijan. The capital and largest city is Tbilisi. Georgia
              covers a territory of 69,700 square kilometers. Georgia is a unitary,
              semi-presidential republic, with the government elected through a
              representative democracy. Georgia is a member of the United
              Nations, the Council of Europe, and the GUAM Organization for
              Democracy and Economic Development.
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
                The population of Georgia is over 37 Lakhs people.{" "}
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
                69700 km2
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
                Mtskheta {" "}
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
              The climate of Georgia is extremely diverse, considering the
              nation's small size. There are two main climatic zones, roughly
              corresponding to the eastern and western parts of the country. The
              Greater Caucasus Mountain Range plays an important role in
              moderating Georgia's climate and protecting the nation from the
              penetration of colder air masses from the north. The Lesser
              Caucasus Mountains partially protect the region from the influence
              of dry and hot air masses from the south.
            </p>
          </Box>
          <Box width={"40%"} display={{base:"none",lg:"block"}}>
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
              Religions:{" "}
            </span>
            85.84% of the population adhered to Christianity (mainly Orthodox), 11% were Muslim, 0.1% were Jewish, 0.04% were Baha'i, and 3% had no religious beliefs.
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
              99.8% (Male-99.8% and Female-99.7%)
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
              Georgian Lari (GEL)
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
              GET (UTC+4)
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
            <li>Five-year MBBS program</li>
            <li>WHO, PM & DC Approved</li>
            <li>Master the USMLE-based program</li>
            <li>
            Study from the latest US medical textbooks, manuals and other aids.
            </li>
            <li>
              Language is not a barrier since the medium of education is
              English.
            </li>
            <li>No Entrance Exam for Indian Students</li>
          </ul>
        </Box>

        <Text marginBottom={6}>
          Acquire all-embracing and sound knowledge to ensure a successful
          career in the medical field. Most of the medical colleges in Georgia are
          approved by the MCI Act 1956 and listed in the World Health Organization
          (WHO), Directory of World Medical Schools. Foundation for Advancement
          of International Medical Education and Research (FAIMER) and
          Educational Commission for Foreign Medical Graduates (FCFMG). Students
          who wish to study MBBS in European countries are choosing Georgia as
          their study destination due to various reasons. MBBS in Georgia
          benefits are huge in comparison to studying MBBS in England or MBBS in
          Romania or any other European country for that matter. MD/MBBS in
          Georgia is a new upcoming destination for Indian students. MBBS fees
          and living costs in Georgia are very affordable for international
          students. It is a dream for every Indian student to study MBBS in
          Europe. However, Georgia is not a part of the European Union. It is
          slowly becoming a popular destination to study MBBS / MD in Europe for
          Indian students. Medical colleges in Georgia provide a high
          quality of education at an affordable cost. There are many medical
          colleges in Tbilisi and other parts of Georgia.
        </Text>
      </Box>
    </div>
  );
};

export default Georgia;
