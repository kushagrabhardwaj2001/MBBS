import React from "react";

import { useNavigate } from "react-router-dom";
// Import navigate

import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  Img,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdPlace } from "react-icons/md";
import WhatsApp from "../Whatsapp/whatsapp";

function Collegecard({ university }) {
  const navigate = useNavigate();

  const handleclick = () => {
    const cleanedUniversityName = university.collegename.trim();
    navigate(`/colleges/${cleanedUniversityName}`);
  };
  return (
    <div>
      <WhatsApp />
      <Box
        display={["none", "none", "flex", "flex"]}
        flexDirection={"column"}
        onClick={handleclick}
        marginBottom={"4vh"}
        // border="5px solid red"

      >
        <Box
          // marginRight={"2vh"}
          borderWidth="1px"
          border={"2px solid #023B7D"}
          // border={"1px solid red"}

          // border={"2px solid red"}
          borderRadius="35px"
          overflow="hidden"
          p={4}
          boxShadow="md"
          bg="white"
          // width="80vw"
          margin={"auto"}
          // height={"35vh"}
          position={"relative"}
          fontFamily={"Lato"}
          cursor={"pointer"}
          // boxShadow="rgba(0, 0, 0, 0.7) 5px 7px 8px"
          transition="transform 0.3s ease"
          _hover={{
            transform: "translate(-15px, -15px)",
          }}
        >
          <HStack textAlign={"center"}>
            <VStack ml={"3vw"}>
              <Image src={university.image2} alt={university.name} />
            </VStack>

            <VStack width={"45vw"} textAlign={"center"}>
              <Text color={"#F4903A"} fontSize="1.2rem" fontWeight="bold">
                {university.collegename}
              </Text>
              <Flex
                align="center"
                fontSize={"1rem"}
                color={"black"}
                fontWeight={"200"}
                opacity={"0.7"}
              >
                <Icon as={MdPlace} boxSize={30} />
                <Text>{university.city}</Text>
                <span>,</span>

                <Text>{university.state}</Text>
                <Box ml={2}></Box>
              </Flex>

              <Box bg="gray.200" p={2} borderRadius="md">
                <Text fontSize={"1rem"} textAlign={"center"}>
                  <strong>Established:</strong> {university.established}
                </Text>

                <Box
                  background={"#023B7D"}
                  width={"70vh"}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={"1rem"} marginRight={"2vw"}>
                    <strong style={{ marginRight: "1vw" }}>
                      {" "}
                      Affiliated By :
                    </strong>
                    {university.affiliatedby}
                  </Text>
                </Box>
              </Box>
            </VStack>

            <VStack>
              <Button
                width={"10vw"}
                fontSize={"1rem"}
                borderRadius={"10px"}
                height={"4vh"}
                mt={4}
                border={"2px solid #023B7D"}
                cursor={"pointer"}
                _hover={{ backgroundColor: "#023B7D", color: "white" }}
              >
                Details
              </Button>
            </VStack>
          </HStack>
          <HStack>
            <Box mt={4} fontSize={"1rem"}>
              <Flex>
                <Text ml={"30"} mr={"30"}>
                  About
                </Text>
                <Box w="2px" h="1.3rem" bg="black" />
                <Text ml={"30"} mr={"30"}>
                  Courses
                </Text>{" "}
                <Box w="2px" h="1.3rem" bg="black" />
                <Text ml={"30"} mr={"30"}>
                  Cut Off
                </Text>
                <Box w="2px" h="1.3rem" bg="black" />
                <Text ml={"30"} mr={"30"}>
                  Admission
                </Text>
                <Box w="2px" h="1.3rem" bg="black" />
                <Text ml={"30"} mr={"30"}>
                  Qna
                </Text>
              </Flex>
            </Box>
          </HStack>
        </Box>
      </Box>

      <Box
        width={"95vw"}
        display={["block", "block", "none", "none"]}
        onClick={handleclick}
        padding={"10px"}
        background={"#FFFFFF"}
        borderRadius={"11px"}
        boxShadow={"15px 4px 64px rgba(0, 0, 0, 0.15)"}
        borderBottom={"2px solid #023B7D"}
        margin={"0px auto"}
        marginTop={"7vh"}
        fontFamily={"poppins"}
      >
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Img src={university.image2} width={"25%"}></Img>

          <Box >
            <Text fontSize={"0.8rem"} fontWeight={"600"} textAlign={"center"}>
              {university.collegename}
            </Text>

            <Flex align="center" fontSize={"0.9rem"}>
              <Icon as={MdPlace} color={"#1C375B"} boxSize={5} />
              <Text>{university.city}</Text>
              <span>,</span>

              <Text>{university.state}</Text>
              <Box ml={2}></Box>
            </Flex>

            <Text
              fontSize={"0.8rem"}
              fontWeight={"600"}
// border={"5px solid red"}
              // color={"#1C375B"}
              // textAlign={"start"}
            >
              Established: {university.established}
            </Text>

            <Text fontSize={"0.8rem"} marginRight={"2vw"}>
              Affiliated By :{university.affiliatedby}
            </Text>

            <Button
              onClick={handleclick}
              fontWeight={"400"}
              border={"2px solid #1C375B"}
              padding={"5px 10px"}
              color="black"
              _hover={{
                
                border: "2px solid #FAB519",
                backgroundColor: "#1C375B",
                color: "white",
              }}
              marginBottom={"1vh"}
              fontSize={"0.8rem"}
            >
              Details
            </Button>

            <HStack>
              <Box fontSize={"0.7rem"}>
                <Flex>
                  <Text ml={"-4"} mr={"2"}>
                    About
                  </Text>
                  <Box w="2px" h="1.3rem" bg="black" />
                  <Text ml={"2"} mr={"2"}>
                    Courses
                  </Text>{" "}
                  <Box w="2px" h="1.3rem" bg="black" />
                  <Text ml={"2"} mr={"2"}>
                    Cut Off
                  </Text>
                  <Box w="2px" h="1.3rem" bg="black" />
                  <Text ml={"2"} mr={"2"}>
                    Admission
                  </Text>
                  <Box w="2px" h="1.3rem" bg="black" />
                  <Text ml={"2"} mr={"2"}>
                    Qna
                  </Text>
                </Flex>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}

export default Collegecard;
