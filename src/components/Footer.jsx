import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Box, GridItem, background, position } from "@chakra-ui/react";
import {
  HStack,
  Flex,
  Icon,
  Divider,
  Button,
  Heading,
  VStack,
  Text,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTnC,
    onOpen: onOpenTnC,
    onClose: onCloseTnC,
  } = useDisclosure();
  const {
    isOpen: isOpenPrivacy,
    onOpen: onOpenPrivacy,
    onClose: onClosePrivacy,
  } = useDisclosure();
  const {
    isOpen: isOpenRef,
    onOpen: onOpenRef,
    onClose: onCloseRef,
  } = useDisclosure();
  const [visitorCount, setVisitorCount] = useState(0);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const incrementVisitorCount = async () => {
  //     try {
  //       // await axios.get('http://localhost:3001/api/visitor/count');
  //       // const response = await axios.get(
  //       //   "http://localhost:3001/api/visitor/count"
  //       // );
  //       const response = await axios.get('https://api.mbbsdunia.com/api/visitor/count');
  //       setVisitorCount(response.data.count);
  //     } catch (error) {
  //       console.error("Error updating visitor count:", error);
  //     }
  //   };

  //   incrementVisitorCount();
  // }, []);
  const [userData, setUserData] = useState(null);
  // const { totalVisits, todayVisits } = userData
  // console.log('totalVisits:', totalVisits)
  // console.log('todayVisits:', todayVisits)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://api.mbbsdunia.com/api/count"
        );
        // const response1 = await axios.get("http://localhost:3100/api/count");

        const data1 = response1.data;
        console.log("check", data1);
        setUserData(data1);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  console.log("userData:", userData);
  const digits = userData?.totalVisits?.toString().split("")?.map(Number);
  console.log("digits:", digits);
  return (
    <Box backgroundColor="#1C375B" border="1px solid" width={"100%"} py={2}>
      <Box
        className="fend"
        width={"100%"}
        height={{
          base: "180vh",
          sm: "140vh",
          md: "80vh",
          lg: "80vh",
          xl: "50vh",
        }}
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          width={"80vw"}
          height={{
            base: "160vh",
            sm: "80vh",
            md: "80vh",
            lg: "80vh",
            xl: "140vh",
          }}
          margin={"0px auto"}
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(6, 1fr)",
            }}
            gap={10}
            width="80vw"
            margin={"auto"}
            // textAlign={"right"}
          >
            <GridItem>
              <Box width={"100%"} marginRight={"5vw"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Top Colleges
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Patna"
                      );
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    AIIMS Patna
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Bhopal"
                      );
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    AIIMS Bhopal
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences Jodhpur"
                      );
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    AIIMS Jodhpur
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate(
                        "/colleges/All India Institute of Medical Sciences New Delhi"
                      );
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    AIIMS Delhi
                  </Text>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Top States
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    // marginTop={"2vh"}
                    onClick={() => {
                      navigate("/state/Karnataka");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Karnataka
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Kerala");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Kerala
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Uttar Pradesh");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Uttar Pradesh
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Rajasthan");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Rajasthan
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/West Bengal");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    West Bengal
                  </Text>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"} marginTop={"5vh"}>
                <VStack alignItems={"start"}>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Maharashtra");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Maharashtra
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Uttarakhand");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Uttarakhand
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Bihar");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Bihar
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Delhi");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Delhi
                  </Text>
                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/state/Gujarat");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Gujarat
                  </Text>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Legal
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    // marginTop={"2vh"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/About");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    About Us
                  </Text>

                  <Text
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                    onClick={() => {
                      navigate("/contact");
                    }}
                    cursor={"pointer"}
                    _hover={{ color: "#F4903A" }}
                  >
                    Contact Us
                  </Text>
                  <Box>
                    <Text
                      onClick={onOpenTnC}
                      cursor={"pointer"}
                      color={"white"}
                      _hover={{ color: "#F4903A" }}
                    >
                      T&Cs
                    </Text>

                    <Modal
                      onClose={onCloseTnC}
                      style={{ width: "50vw" }}
                      isOpen={isOpenTnC}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Terms and Conditions</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Box
                            padding="4"
                            margin="6"
                            backgroundColor="gray.50"
                            borderRadius="md"
                            boxShadow="sm"
                          >
                            <Box
                              marginTop="4"
                              marginBottom="4"
                              borderColor="gray.200"
                            />
                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              Welcome to MBBS Dunia! These terms and conditions
                              outline the rules and regulations for the use of
                              our platform, accessible at www.mbbsdunia.com.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              By accessing this website, we assume you accept
                              these terms and conditions. Do not continue to use
                              MBBS Dunia if you do not agree to all of the terms
                              and conditions stated on this page.
                            </Text>

                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              The following terminology applies to these Terms
                              and Conditions, Privacy Statement, and Disclaimer
                              Notice and any or all Agreements: "Client", "You,"
                              and "Your" refers to you, the person accessing
                              this website and accepting the Company’s terms and
                              conditions. "The Company", "Ourselves," "We,"
                              "Our," and "Us," refers to MBBS Dunia.
                            </Text>

                            {/* Services Section */}
                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Use Of Service
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia is a platform providing information
                                about various medical colleges, their programs,
                                and cut-off scores. The information provided is
                                for general informational purposes only.
                              </Text>

                              <List spacing={3}>
                                {/* Replace the placeholder content with your actual service offerings */}
                                <ListItem>
                                  <Text
                                    fontSize="md"
                                    lineHeight="1.5"
                                    color="gray.600"
                                  >
                                    The content provided on the platform may not
                                    always be up-to-date or accurate due to
                                    dynamic changes in educational institutions'
                                    admission criteria. Users are encouraged to
                                    verify information from official sources.
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text
                                    fontSize="md"
                                    lineHeight="1.5"
                                    color="gray.600"
                                  >
                                    Users must not consider the information on
                                    MBBS Dunia as professional advice. It is
                                    recommended to seek advice from qualified
                                    professionals or directly from respective
                                    educational institutions.
                                  </Text>
                                </ListItem>
                              </List>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                User Accounts
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                Users may be required to create an account to
                                access certain features or services. It is the
                                user’s responsibility to maintain the
                                confidentiality of their account information and
                                password. Users are responsible for all
                                activities that occur under their account. MBBS
                                Dunia is not liable for any loss or damage
                                arising from the user’s failure to protect their
                                account information. Intellectual Property
                              </Text>

                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                All content provided on MBBS Dunia, including
                                but not limited to text, graphics, logos,
                                images, and software, is the property of MBBS
                                Dunia and protected by applicable copyright and
                                intellectual property laws.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Limitation of Liability
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia shall not be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages arising out of or in connection with the
                                use or inability to use the service or any
                                content on the platform.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                External Links
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia may contain links to external
                                websites or resources. We do not control or
                                endorse the content on these external sites and
                                are not responsible for their availability,
                                accuracy, or legality.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Changes to Terms
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia reserves the right to modify these
                                terms and conditions at any time without prior
                                notice. By continuing to use the service after
                                changes are posted, users agree to be bound by
                                the revised terms.
                              </Text>
                            </Box>

                            {/* ... Add other sections with similar styling ... */}

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Governing Law
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                These Terms and Conditions shall be governed by
                                and construed in accordance with the laws of the
                                state of India, without regard to its conflict
                                of laws principles. Any dispute arising out of
                                or in connection with these Terms and Conditions
                                shall be submitted to the exclusive jurisdiction
                                of the courts of the state of India.
                              </Text>
                            </Box>
                          </Box>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Box>

                  <Box>
                    <Text
                      onClick={onOpenPrivacy}
                      cursor={"pointer"}
                      color={"white"}
                      _hover={{ color: "#F4903A" }}
                    >
                      Privacy Policy
                    </Text>

                    <Modal
                      onClose={onClosePrivacy}
                      style={{ width: "50vw" }}
                      isOpen={isOpenPrivacy}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Privacy Policy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Box
                            padding="4"
                            margin="6"
                            backgroundColor="gray.50"
                            borderRadius="md"
                            boxShadow="sm"
                          >
                            <Divider
                              marginTop="4"
                              marginBottom="4"
                              borderColor="gray.200"
                            />
                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              This Privacy Policy governs the manner in which
                              MBBS Dunia collects, uses, maintains, and
                              discloses information collected from users (each,
                              a "User") of the MBBS Dunia website ("Site"). This
                              privacy policy applies to the Site and all
                              products and services offered by MBBS Dunia.
                            </Text>

                            {/* Services Section */}
                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Personal Identification Information:
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                We may collect personal identification
                                information from Users in a variety of ways,
                                including but not limited to, when Users visit
                                our site, register on the site, fill out a form,
                                and in connection with other activities,
                                services, features, or resources we make
                                available on our Site. Users may be asked for,
                                as appropriate, name, email address, mailing
                                address, phone number, and other relevant
                                details. Users may, however, visit our Site
                                anonymously. We will collect personal
                                identification information from Users only if
                                they voluntarily submit such information to us.
                                Users can always refuse to supply personally
                                identification information, except that it may
                                prevent them from engaging in certain
                                Site-related activities.
                              </Text>

                              <List spacing={3}>
                                {/* Replace the placeholder content with your actual service offerings */}
                                <ListItem>
                                  <Text
                                    fontSize="md"
                                    lineHeight="1.5"
                                    color="gray.600"
                                  >
                                    The content provided on the platform may not
                                    always be up-to-date or accurate due to
                                    dynamic changes in educational institutions'
                                    admission criteria. Users are encouraged to
                                    verify information from official sources.
                                  </Text>
                                </ListItem>
                                <ListItem>
                                  <Text
                                    fontSize="md"
                                    lineHeight="1.5"
                                    color="gray.600"
                                  >
                                    Users must not consider the information on
                                    MBBS Dunia as professional advice. It is
                                    recommended to seek advice from qualified
                                    professionals or directly from respective
                                    educational institutions.
                                  </Text>
                                </ListItem>
                              </List>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Non-personal Identification Information:
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                We may collect non-personal identification
                                information about Users whenever they interact
                                with our Site. Non-personal identification
                                information may include the browser name, the
                                type of computer, and technical information
                                about Users' means of connection to our Site,
                                such as the operating system and the Internet
                                service providers utilized and other similar
                                information.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Web Browser Cookies:
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia shall not be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages arising out of or in connection with the
                                use or inability to use the service or any
                                content on the platform.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                External Links
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia may contain links to external
                                websites or resources. We do not control or
                                endorse the content on these external sites and
                                are not responsible for their availability,
                                accuracy, or legality.
                              </Text>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Changes to Terms
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                MBBS Dunia reserves the right to modify these
                                terms and conditions at any time without prior
                                notice. By continuing to use the service after
                                changes are posted, users agree to be bound by
                                the revised terms.
                              </Text>
                            </Box>

                            {/* ... Add other sections with similar styling ... */}

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Governing Law
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                These Terms and Conditions shall be governed by
                                and construed in accordance with the laws of the
                                state of India, without regard to its conflict
                                of laws principles. Any dispute arising out of
                                or in connection with these Terms and Conditions
                                shall be submitted to the exclusive jurisdiction
                                of the courts of the state of India.
                              </Text>
                            </Box>
                          </Box>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Box>

                  <Box>
                    <Text
                      onClick={onOpenRef}
                      cursor={"pointer"}
                      color={"white"}
                      _hover={{ color: "#F4903A" }}
                    >
                      Refund and cancellation policy
                    </Text>

                    <Modal
                      onClose={onCloseRef}
                      style={{ width: "50vw" }}
                      isOpen={isOpenRef}
                      isCentered
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>
                          Refund and cancellation policy
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Box
                            padding="4"
                            margin="6"
                            backgroundColor="gray.50"
                            borderRadius="md"
                            boxShadow="sm"
                          >
                            <Divider
                              marginTop="4"
                              marginBottom="4"
                              borderColor="gray.200"
                            />
                            <Text
                              fontSize="md"
                              lineHeight="1.5"
                              color="gray.600"
                              marginBottom="4"
                            >
                              At MBBS Dunia, we understand that circumstances
                              may arise that require a refund or cancellation of
                              services. Please review our policy below:
                            </Text>

                            {/* Services Section */}
                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Refund Policy:
                              </Heading>
                              <ul>
                                <li>
                                  The application fee is non-refundable once the
                                  application has been submitted.
                                </li>
                                <li>
                                  In the event of a cancellation before the
                                  commencement of our services, a partial refund
                                  may be applicable. Please contact our support
                                  team for further assistance.
                                </li>
                                <li>
                                  {" "}
                                  Refunds, if applicable, will be processed
                                  within 7 business days from the date of the
                                  cancellation request.
                                </li>
                                <li>
                                  Refunds are subject to approval and
                                  eligibility based on the terms of the service
                                  purchased.
                                </li>
                              </ul>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Cancellation Policy:
                              </Heading>
                              <ul>
                                <li>
                                  To request a cancellation, please contact our
                                  support team via email at info@mbbsdunia.com
                                  or through our customer service hotline at
                                  +91-9873560704.
                                </li>

                                <li>
                                  {" "}
                                  Depending on the stage of services rendered,
                                  cancellation charges may apply. Please refer
                                  to your service agreement or contact our team
                                  for details.
                                </li>

                                <li>
                                  Cancellations requested after the commencement
                                  of our services may not be eligible for a full
                                  refund. Partial refunds, if applicable, will
                                  be determined on a case-by-case basis.
                                </li>

                                <li>
                                  It is essential to notify us of your
                                  cancellation as soon as possible to initiate
                                  the process and evaluate refund eligibility.
                                </li>
                              </ul>
                            </Box>

                            <Box>
                              <Heading
                                as="h3"
                                size="md"
                                marginTop="4"
                                marginBottom="2"
                                color="gray.700"
                                fontWeight="bold"
                              >
                                Contact Information:
                              </Heading>
                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                For any refund or cancellation inquiries, please
                                reach out to our support team:
                              </Text>

                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                Email : info@mbbsdunia.com
                                <br />
                                Phone: +91-9873560704
                              </Text>

                              <Text
                                fontSize="md"
                                lineHeight="1.5"
                                color="gray.600"
                                marginBottom="4"
                              >
                                Our team is available 24*7 to assist you with
                                any concerns regarding refunds or cancellations.
                              </Text>
                            </Box>
                          </Box>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Box>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box width={"100%"} marginRight={"5vw"}>
                <VStack alignItems={"start"}>
                  <Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Office Location
                  </Text>

                  <Text style={{ fontSize: "1rem" }}>Delhi</Text>

                  <Text
                    textAlign={"start"}
                    fontSize={"1rem"}
                    color={"rgba(256,256,256,0.7)"}
                  >
                    B-18, 3rd floor, Comm. Complex, Dr. Mukherjee Nagar ,
                    <br />
                    Delhi-110009,
                  </Text>
                </VStack>
              </Box>
            </GridItem>
            <GridItem display={{ base: "none", md: "block" }}>
              <Box width={"100%"} marginRight={"2vw"}>
                <VStack alignItems={"center"}>
                  <Text style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                    Visitor
                  </Text>
                  <Text style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Total Users
                  </Text>

                  <Grid
                    templateColumns={`repeat(${digits?.length}, 1fr)`}
                    gap={2}
                    justifyContent="center"
                  >
                    {digits?.map((digit, index) => (
                      <Box
                        key={index}
                        borderRadius="md"
                        borderWidth="1px"
                        borderColor="gray.200"
                        textAlign="center"
                        // p={2}
                        px={2}
                        // fontSize="xl"
                        // bg="gray.100"
                      >
                        {digit}
                      </Box>
                    ))}
                  </Grid>
                  <Text style={{ fontSize: "1rem", fontWeight: "600" }}>
                    Users Today
                  </Text>
                  <Box
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.200"
                    textAlign="center"
                    px={5}
                  >
                    <Text fontSize="1.2rem" fontWeight="300">
                      {userData?.todayVisits}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box
          height={"20vh"}
          width={["80vw", "64vw"]}
          display={"flex"}
          margin={"0px auto"}
          justifyContent={"space-between"}
          flexDirection={["column", "row"]}
          alignItems={"start"}
          marginTop={8}
        >
          <Text>
            Powered By{" "}
            <span style={{ color: "yellow" }}>
              {" "}
              &nbsp;Indo-Abroad Edu Career pvt. Ltd.
            </span>
          </Text>

          <Text>
            Developed By{" "}
            <span style={{ color: "yellow" }}>
              {" "}
              &nbsp;ARV Multimedia Pvt. Ltd.
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
