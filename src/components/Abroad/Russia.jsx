import React from "react";
import "./Russia.css";
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
import img1 from "./Russia1.jpg";
import img2 from "./Russia2.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Russia = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom1-background"
        width={"100%"}
        marginTop={"3vh"}
        height={"40vh"}
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
          "MBBS In Russia"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{ sm: "80%", lg: "60%" }}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Russia
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
              : Russia, also officially known as the Russian Federation is a
              country in northern Eurasiaand one of its subjects. The Sedential
              republic, comprisinia federal subjects. The Russian federation is
              the largest of the 21 republic that make up the Commonwealth of Independent States. It occupies most of Eastern Europe and North
              Asia, stretching from the Baltic Sea in the west to the Pacific
              Ocean in the east and from the Arctic Ocean in the north to the
              Black Sea and the Caucasus in the south. It is bordered by Norway
              and Finland in the northwest, Estonia, Latvia, Belarus, Ukraine,
              Poland, and Azerbaijan in the southwest and Kazakhstan, Mongolia,
              China, and North Korea along the Southern (border). Russia has the
              world's largest reserves of mineral and energy resources and is
              the largest producer of oil and natural gas globally. Russia has
              the world's largest forest reserves.
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
                The population of Russia is 146.45 million
              </Text>
              <Text>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "1C375B",
                    color: "#1C375B",
                  }}
                >
                  Languages:
                </span>{" "}
                Russian is the only official state language{" "}
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
                Moscow is the Capital city and most populous and largest city of
                Russia.{" "}
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
                Other largest cities are St. Petersburg, Novosibirsk,
                Yekaterinburg, Nizhny Novgorod, Samara, Kazan etc.{" "}
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
              Climate of course with an area the size of Russia. There are only
              two distinct seasons --- winter and summer; spring and autumn are
              usually brief periods of change between extremely low temperatures
              and extremely temperatures. The coldest month is January (February on the
              coastline), and the warmest is usually July. Great ranges of
              temperature are typical. In winter, temperatures become colder both
              from south to north and from west to east. Summers can be quite
              hot, even in Siberia. The continental interiors are the driest
              area.
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
            80% of the population is Christian while 10% are Muslim, 15% are unaffiliated and 3% follow other religions.
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
                Literacy rate:{" "}
              </span>{" "}
              99.6% (Male--99.7% & Female--99.5%)
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
              Russian Ruble (RUB)
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
              UTC+3 to +12
            </Text>
          </Box>
        </Box>

        <Box
          width={"80vw"}
          margin={"0px auto"}
          marginTop={"5vh"}
          marginBottom={6}
        >
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1.2rem"} fontWeight={"500"} color={"#1C375B"}>
                Advantages of Studying in Russia-
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
                    Russia has always been ahead in the field of education and
                    more specifically medicine.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Studying in Russia is easy, cheap and flexible. No donations
                    are to be paid to the universities in Russia.
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
                    It probably has one of the best education systems in the
                    world producing a literacy rate of 99%.
                  </Text>
                </HStack>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Russia has been one of top preferred destinations for international students to pursue their medical degree courses.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The Medium of instruction in English.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    All universities are equipped with the most modern
                    diagnostic and teaching aids.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The Indian students seeking admission are admitted in those
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

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    The MBBS in Russia is taught in two different languages, it
                    is a very important issue. Specifically, English Medium and Russian.
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

export default Russia;
