import React from "react";
import "./Kyrgystan.css";
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
import img1 from "./Kyrgyzstan.jpg";
import img2 from "./Kyrgyzstan1.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Kyrgystan = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom2-background"
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
          "MBBS In Kyrgyzstan"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{sm:"80%",lg:"60%"}}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Kyrgyzstan
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
              : Kyrgyzstan is a landlocked country in Central Asia, bordering
              Kazakhstan, China, Tajikistan and Uzbekistan. It lies between
              latitudes 39 and 44" N, and longitudes 69° and 81° E. It is
              further from the sea than any other individual country, and all
              its rivers flow into closed drainage systems which do not reach
              the sea. The mountainous region of the Tian Shan covers over 80%
              of the country (Kyrgyzstan is occasionally referred to as "the
              Switzerland of Central Asia," as a result) with the remainder made
              up of valleys and basins. Issyk-Kul Lake in the north-eastern Tian
              Shan is the largest lake in Kyrgyzstan and the second largest
              mountain lake in the world after Titicaca.
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
                6 Million 
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
                199,951 km2{" "}
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
                Bishkek{" "}
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
              The climate varies regionally. The south-western Fergana Valley
              is subtropical and extremely hot in summer, with temperatures
              reaching 40°C (104°F). The northern foothills are temperature rate
              the Tian Shan varies from a dry continental to a polar climate,
              depending on elevation. In the coldest areas, temperatures are
              sub-zero for around 40 days in winter., and even some desert areas
              experience constant snowfall in this period, in the low lands the
              temperature ranges from around -6°C in January to 24°C in July.
              Language: Kyrgyzstan is one of the two former Soviet republics in
              Central Asia to retain Russian as an official language, Kyrgyz is
              the state language. Uzbek and English are other languages.
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
              Religions:
            </span>{" "}
            Islam is the dominant religion of Kyrgyzstan. 80% of the population
            is Muslim while 17% follows Russian Orthodoxy and 3% other
            religions.
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
              99%
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
              Som (KGS)
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
              KGT (UTC+6)
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"}>
            Why Kyrgyzstan?
          </Text>
          <ul style={{ marginLeft: "3vw" }}>
            <li>Low Tuition Fee</li>
            <li>Full English Medium</li>
            <li>Minimum Expenses</li>
            <li>Five year MBBS programme</li>
            <li>WHO, PM & DC Approved</li>
          </ul>
        </Box>

        <Text>
          It's an amazing opportunity! Kyrgyzstan has always been ahead in the
          field of education and more especially medicine. Studying in Kyrgyzstan
          is easy, cheap and flexible. You wanted to go someplace exotic and off
          the beaten path-isn't that everyone's dream?-Yet it is still within the
          realm of practicality. All universities are equipped with the most
          modern diagnostic and teaching aids. Kyrgyzstan offers all the
          possible advantages I could hope for: pervasive use of the Russian
          language, opportunities to teach English, and a storied cultural,
          political, and religioous history to boot! At the same time, Capital
          Bishkek is a growing and very livable city; while it lacks the
          amenities of a Western or even a well-developed Russian or Eastern
          Asian city, there's a sense of thrilling novelty about it.
        </Text>

        <Box width={"80vw"} margin={"0px auto"} marginTop={"5vh"} marginBottom={6}>
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1.2rem"} fontWeight={"500"} color={"#1C375B"}>
                Advantages of Studying in Kyrgyzstan-
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
                    The Indian students seeking admission are admitted to those
                    institutions which are recognized by the Medical Council of
                    India for screening test conducted by MCI.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Wide range of possibilities and broad exposure to clinical
                    practice due to highly equipped multi profile hospitals.
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
                    Kyrgyzstan Medical Universities are approved by the World Health
                    Organization (WHO) in their" World Directory of Medical
                    Schools".
                  </Text>
                </HStack>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The International Medical Education Directory (IMED), ECFMG
                    (USA), UNESCO, General Medical Council (UK), European Union
                    etc.
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

export default Kyrgystan;
