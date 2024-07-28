import React, { useState } from "react";
import "./Header.css";
import { Box, border } from "@chakra-ui/react";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  IconButton,
  useDisclosure,
  Image,
  Img,
  VStack,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Rating,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import img1 from "./Group 12606.png";
import img2 from "./MBBS Dunia.png";
import img3 from "./cutoffs.png";
import { RiInstagramFill } from "react-icons/ri";

import { HStack, Flex, Icon, Divider } from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  const [springProps, set] = useSpring(() => ({
    loop: { reverse: true },
    from: { transform: "scale(1)", filter: "brightness(1)" },
    to: { transform: "scale(1.1)", filter: "brightness(1.5)" },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      set({ loop: true });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [set]);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, setIsAuth, toggleAuth } = React.useContext(AuthContext);
  const [selectedoption, setselectedoption] = useState(null);
  const [user, setUser] = useState("");

  const handleclick = (option) => {
    setselectedoption(option);
  };

  const handleLogout = () => {
    // console.log(h)
    localStorage.clear();
    toggleAuth();
    setIsAuth(false);
    console.log("logout clicked");
  };
  const loginUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    isAuth ? setUser(loginUser) : setUser("");
  }, [isAuth]);
  console.log(user);
  return (
    <div>
      <Box
        w={"100%"}
        h={"6vh"}
        backgroundColor={"#1C375B"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack width={"100%"} align={"center"} justify={"space-between"}>
          <Box
            display={{ base: "none", lg: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
            marginLeft={["none", "5vw"]}
          >
            <Text
              mr={"30"}
              color={"#FFFFFF"}
              fontSize={"1rem"}
              display={["none", "block"]}
            >
              Contact us :
            </Text>

            <Flex alignItems={"center"}>
              <FiPhoneCall
                size={19}
                color="#FFFFFF"
                style={{ marginRight: "5px" }}
              />

              <Text
                mr={30}
                color={"#FFFFFF"}
                fontSize={["0.7rem", "0.7rem", "1rem", "1rem"]}
              >
                +91-9873560704
              </Text>
            </Flex>

            <Flex alignItems={"center"}>
              <HiOutlineMail
                size={19}
                color="#FFFFFF"
                style={{ marginRight: "5px" }}
              />

              <Text
                mr={30}
                color={"#FFFFFF"}
                fontSize={["0.7rem", "0.7rem", "1rem", "1rem"]}
              >
                info@mbbsdunia.com
              </Text>
            </Flex>
          </Box>
          <Box>
            <marquee style={{ color: "red", fontWeight: "bolder" }}>
              ANNOUNCEMENT NEET (UG) 2024 RESULT LIVE!
            </marquee>
          </Box>
          <Box
            width={"30%"}
            display={["none", "flex"]}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={2}
          >
            <Flex gap={6}>
              <a href="https://www.facebook.com/people/MBBS-Dunia/61555388622195/">
                <FaFacebook size={24} color="white" />
              </a>
              <a href="https://www.instagram.com/mbbsdunia/">
                <RiInstagramFill size={24} color="white" />
              </a>
            </Flex>
            <animated.img
              onClick={() => navigate("/cutoff")}
              src="https://www.mbbsdunia.com/static/media/cutoffs.f820029c45bcd5629227.png"
              alt="Bling Image"
              style={{
                ...springProps,
                width: "4vw",
                height: "auto",
                position: "absolute",
                cursor: "pointer",
                top: "3vw",
                right: "50px",
              }}
            />
            {user ? (
              <Text
                cursor={"pointer"}
                onClick={handleLogout}
                color={"#FFFFFF"}
                fontSize={"1rem"}
                display={["none", "block"]}
              >
                Logout
              </Text>
            ) : (
              ""
            )}

            <Box
              display={["none", "block"]}
              mx={2}
              h="20px"
              w="2px"
              backgroundColor="#FFFFFF"
            />

            {user ? (
              <Text
                mr={30}
                fontSize={"1rem"}
                display={["none", "block"]}
                color={"#FFFF"}
              >
                {user}
              </Text>
            ) : (
              <Text
                mr={30}
                fontSize={"1rem"}
                display={["none", "block"]}
                color={"#FFFF"}
                cursor={"pointer"}
                onClick={() => navigate("/login/user")}
              >
                Login
              </Text>
            )}
          </Box>
        </HStack>
      </Box>

      <Box
        width={"100%"}
        height={"7vh"}
        fontSize={"1rem"}
        color={"#000000"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor={"white"}
        textAlign={"center"}
        flexDirection={"row"}
        marginTop={"1vh"}
      >
        <a href="/">
          <Img
            src={img2}
            marginLeft={"4vw"}
            marginTop={{ base: "3vw", md: "0vw" }}
            width={["100%", "80%"]}
          />
        </a>

        <Stack
          width="100%"
          height="10vh"
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Box
            display={["block", "block", "none", "none"]}
            position={"relative"}
            width={"100%"}
          >
            <Menu>
              <MenuButton
                position={"absolute"}
                top={"-4vh"}
                right={"6vw"}
                as={IconButton}
                icon={isOpen ? <FaTimes /> : <FaBars />} // Use react-icons here
                onClick={isOpen ? onClose : onOpen}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              />
              <MenuList
                // width={"0px"}
                // border={"1px solid red"}
                right={"0px"}
                textAlign={"start"}
              >
                <MenuItem as={Link} href="/">
                  Home
                </MenuItem>
                <MenuItem as={Link} href="/about">
                  About
                </MenuItem>

                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton background={"white"}>
                        <Box as="span" flex="1" textAlign="left">
                          Top Colleges
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack alignItems={"start"}>
                        <Box
                          fontSize={"1rem"}
                          fontWeight={"500"}
                          display={"flex"}
                          flexDirection={"column"}
                          // width={"100vw"}
                          // border={"1px solid red"}
                          justifyContent={"space-between"}
                        >
                          <Link href="\colleges\All India Institute of Medical Sciences Patna">
                            AIIMS Patna
                          </Link>
                          <Link href="\colleges\All India Institute of Medical Sciences New Delhi">
                            AIIMS Delhi
                          </Link>
                          <Link href="\colleges\Father Mullers Medical College Mangalore">
                            FMMC Mangalore
                          </Link>
                          <Link
                            href="\colleges\All India Institute of Medical Sciences Jodhpur

"
                          >
                            AIIMS Jodhpur
                          </Link>
                        </Box>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton background={"white"}>
                        <Box as="span" flex="1" textAlign="left">
                          MBBS In India
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <VStack alignItems={"start"}>
                        <Box
                          fontSize={"1rem"}
                          fontWeight={"500"}
                          display={"flex"}
                          flexDirection={"column"}
                          // width={"100vw"}
                          justifyContent={"space-between"}
                        >
                          <Link href="/state/Karnataka">Karnataka</Link>
                          <Link href="/state/Uttarakhand">Uttarakhand</Link>
                          <Link href="/state/Arunachal Pradesh">
                            Arunachal Pradesh
                          </Link>
                          <Link href="/state/Meghalaya">Meghalaya</Link>
                          <Link href="/state/Gujarat">Gujarat</Link>

                          <br />

                          <Link href="/state/Bihar">Bihar</Link>
                          <Link href="/state/Assam">Assam</Link>
                          <Link href="/state/Karnataka">Kerala</Link>
                          <Link href="/state/West bengal">West bengal</Link>
                          <Link href="/state/Maharashtra">Maharashtra</Link>
                          <Link href="/state/Madhya Pradesh">
                            Madhya Pradesh
                          </Link>

                          <br />

                          <Link href="/state/Delhi">Delhi</Link>
                          <Link href="/state/Sikkim">Sikkim</Link>
                          <Link href="/state/Tamil Nadu">Tamil Nadu</Link>
                          <Link href="/state/Orissa">Orissa</Link>
                          <Link href="/state/Goa">Goa</Link>
                          <Link href="/state/Andhra Pradesh">
                            Andhra Pradesh
                          </Link>

                          <br />

                          <Link href="/state/Telangana">Telangana</Link>
                          <Link href="/state/Chattisgarh">Chattisgarh</Link>
                          <Link href="/state/Mizoram">Mizoram</Link>
                          <Link href="/state/Punjab">Punjab</Link>
                          <Link href="/state/Jharkhand">Jharkhand</Link>
                          <Link href="/state/Uttar Pradesh">Uttar Pradesh</Link>
                          <Link href="/state/Karnataka">Karnataka</Link>
                        </Box>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <MenuItem
                  marginRight={"1.5vw"}
                  // fontWeight={"600"}
                  as={Link}
                  href="/blogs"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "" }}
                >
                  Blog
                </MenuItem>

                <MenuItem
                  marginRight={"1.5vw"}
                  // fontWeight={"600"}
                  as={Link}
                  href="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    marginBottom: "5px",
                  }}
                  _hover={{ color: "" }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            display={["none", "none", "block", "block"]}
            position={"absolute"}
            marginLeft={"-20vw"}
            spacing={8}
            mr={"7vw"}
          >
            <Menu>
              <MenuButton
                marginRight={"1.5vw"}
                fontWeight={"600"}
                as={Link}
                style={{ textDecoration: "none", color: "#000000" }}
                href="/"
                _hover={{ color: "#01B4EC" }}
              >
                Home
              </MenuButton>
              <MenuButton
                marginRight={"1.5vw"}
                fontWeight={"600"}
                as={Link}
                style={{ textDecoration: "none", color: "#000000" }}
                href="/about"
                _hover={{ color: "#01B4EC" }}
              >
                About
              </MenuButton>

              <Menu>
                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  href="#"
                  style={{ textDecoration: "none", color: "#000000" }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Top Colleges{<ChevronDownIcon />}
                </MenuButton>
                <MenuList display={"flex"} flexDirection={"column"}>
                  <Link href="/colleges/Dr BR Ambedkar Medical College Bangalore">
                    BRMC Bangalore
                  </Link>
                  <Link href="\colleges\All India Institute of Medical Sciences Patna">
                    AIIMS Patna
                  </Link>
                  <Link href="\colleges\All India Institute of Medical Sciences New Delhi">
                    AIIMS Delhi
                  </Link>
                  <Link href="\colleges\Father Mullers Medical College Mangalore">
                    FMMC Mangalore
                  </Link>
                  <Link
                    href="\colleges\All India Institute of Medical Sciences Jodhpur"
                  >
                    AIIMS Jodhpur
                  </Link>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  marginRight={"1.5vw"}
                  fontWeight={"600"}
                  as={Link}
                  href="#"
                  style={{ textDecoration: "none", color: "#000000" }}
                  _hover={{ color: "#01B4EC" }}
                >
                  Study Mbbs{<ChevronDownIcon />}
                </MenuButton>
                <MenuList
                  width={{ md: "34vw", lg: "20vw" }}
                  // height={"7vh"}
                  marginLeft={"-10vw"}
                  border={"2px solid #F4903A"}
                >
                  <Box display={"flex"} width={"100%"}>
                    <Menu>
                      <MenuButton
                        width={"50%"}
                        onClick={() => handleclick("abroad")}
                      >
                        MBBS In India{<ChevronDownIcon />}
                      </MenuButton>
                      <MenuList
                        backgroundColor={"white"}
                        paddingLeft={"14px"}
                        position={"absolute"}
                        // width={"50vw"}
                        left={"-22vw"}
                        zIndex={"5"}
                        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                      >
                        <HStack>
                          <Box>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Karnataka"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Karnataka
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Uttarakhand"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Uttarakhand
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Arunachal Pradesh"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Arunachal Pradesh
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Meghalaya"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Meghalaya
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Gujarat"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Gujarat
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Rajasthan"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Rajasthan
                            </MenuItem>
                          </Box>

                          <Box>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Bihar"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Bihar
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Assam"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Assam
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Kerala"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Kerala
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/West Bengal"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              West Bengal
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Maharashtra"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Maharashtra
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Madhya Pradesh"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Madhya Pradesh
                            </MenuItem>
                          </Box>

                          <Box>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Delhi"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Delhi
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Sikkim"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Sikkim
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Tamil Nadu"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Tamil Nadu
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Orissa"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Orissa
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Goa"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Goa
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Andhra Pradesh"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Andhra Pradesh
                            </MenuItem>
                          </Box>

                          <Box>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Telangana"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Telangana
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Chattisgarh"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Chattisgarh
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Mizoram"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Mizoram
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Punjab"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Punjab
                            </MenuItem>
                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Jharkhand"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Jharkhand
                            </MenuItem>

                            <MenuItem
                              marginRight={"1.5vw"}
                              as={Link}
                              href="/state/Uttar Pradesh"
                              style={{
                                textDecoration: "none",
                                color: "#000000",
                                marginBottom: "8px",
                              }}
                              _hover={{ color: "#01B4EC" }}
                            >
                              Uttar Pradesh
                            </MenuItem>
                          </Box>
                        </HStack>
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton
                        width={"50%"}
                        onClick={() => handleclick("abroad")}
                      >
                        Medical Abroad{<ChevronDownIcon />}
                      </MenuButton>
                      <MenuList display={"flex"} flexDirection={"column"}>
                        <Link href="\medical\Kyrgystan">Kyrgystan</Link>
                        <Link href="\medical\Russia">Russia</Link>
                        <Link href="\medical\Georgia">Georgia</Link>
                        <Link href="\medical\Bangladesh">Bangladesh</Link>
                        <Link href="\medical\Philippiness">Philippiness</Link>
                        <Link href="\medical\Nepal">Nepal</Link>
                      </MenuList>
                    </Menu>
                  </Box>
                </MenuList>
              </Menu>

              <MenuButton
                marginRight={"1.5vw"}
                fontWeight={"600"}
                as={Link}
                href="/blogs"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  marginBottom: "5px",
                }}
                _hover={{ color: "#01B4EC" }}
              >
                Blogs
              </MenuButton>

              <MenuButton
                marginRight={"1.5vw"}
                fontWeight={"600"}
                as={Link}
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  marginBottom: "5px",
                }}
                _hover={{ color: "#01B4EC" }}
              >
                Contact
              </MenuButton>
            </Menu>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Header;
