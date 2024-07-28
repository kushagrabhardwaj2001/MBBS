import React from "react";
import "./Nepal.css";
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
import img1 from "./nepal1.png";
import img2 from "./nepal2.jpg";
import { BsCheckCircle } from "react-icons/bs";
import WhatsApp from "../Whatsapp/whatsapp";

const Nepal = () => {
  return (
    <div>
      <WhatsApp />
      <Box
        className="custom5-background"
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
          "MBBS In Nepal"
        </Text>
      </Box>

      <Box width={"80vw"} margin={"0px auto"} fontFamily={"Roboto"}>
        <HStack>
          <Box fontSize={"1rem"} width={{sm:"80%",lg:"60%"}}>
            <Heading marginBottom={"4vh"} fontFamily={"poppins"}>
              MBBS In Nepal
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
              : Nepal, officially the Federal Democratic Republic of Nepal, is a
              landlocked country located in South Asia. It is bordered by China
              to the north and India to the south, east, and west. Nepal is a
              beautiful country with stunning mountain scenery, diverse
              cultures, and a rich history.
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
                29,304,998 {" "}
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
                </span>
                 147,181 sq. km. (56,826 sq. mi){" "}
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
                Kathmandu{" "}
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
                Pokhara, Patan, Biratnagar, Janakpur, etc.{" "}
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
              Varies greatly depending on altitude, from subtropical in the
              south to arctic in the north Language: Nepali (official), English
              (also widely spoken)
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
            Hinduism and Buddhism are the two religions with the largest number of adherents in Nepal. These two religions represented 81.3% and 9.04% of the national population respectively. Along with India, Nepal is also home to the greatest number of Hindus in the world.
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
              67.9% (male 84.7%, female 51.4%)
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
              Nepali Rupee (NPR)
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
              UTC+5:45
            </Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"#1C375B"}>
            Why Nepal?
          </Text>
          <ul style={{ marginLeft: "3vw" }}>
            <li>Low Tuition Fee</li>
            <li>High-quality education</li>
            <li>Beautiful environment</li>
            <li>Rich culture</li>
            <li>Friendly people</li>
          </ul>
        </Box>

        <Text>
          With its affordable tuition fees, high-quality education, and
          beautiful environment, Nepal is a great option for international
          students looking for a unique and rewarding study abroad experience.
        </Text>

        <Box width={"80vw"} margin={"0px auto"} marginTop={"5vh"} marginBottom={6}>
          <HStack>
            <Box width={"100%"} justifyContent={"space-between"}>
              <Heading fontSize={"1.2rem"} fontWeight={"500"} color={"#1C375B"}>
              Advantages of Studying in Nepal:
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
                    Nepal offers a safe and secure environment for students.
                  </Text>
                </Flex>

                <Flex marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    There are a variety of scholarships and financial aid
                    options available for international students.
                  </Text>
                </Flex>

                <HStack marginTop={"0.9vh"}>
                  <BsCheckCircle
                    size={20}
                    color="#CE4308"
                    style={{ marginTop: "0.5vh" }}
                  />
                  <Text marginLeft={"1vw"}>
                    Studying in Nepal is a great opportunity to learn about a
                    new culture and make lifelong friends.
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
                    (USA), UNESCO, the General Medical Council (UK), the European Union,
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

export default Nepal;
