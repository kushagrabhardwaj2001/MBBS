import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {  ownership, state } from "../Statecollege/data";
import axios from "axios";

export const Filter = () => {
  const [searchState, setSearchState] = useState("");
  const [university, setUniversity] = useState();

  const handleCheckboxChange = (e, item) => {
    console.log(e, item);
  };
  const handleCourseSearch = (e) => {
    const courseSearchValue = e.target.value;
    console.log("courseSearchValue:", courseSearchValue);
  };

  // console.log("university:", university);
  return (

      <Box
        w="28vw"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        p="5"
        maxH="100vh"
        overflowY="scroll"
        overflowX={"hidden"}
      >
        <HStack mb={2}>
          <Heading fontSize={"1.3rem"}>Filter By</Heading>
          <Spacer />{" "}
          <Text cursor={"pointer"} color={"red"}>
            Clear Filter
          </Text>
        </HStack>
        <hr></hr>

        <Text fontWeight={"500"} mt={5}>
          STATE
        </Text>
        <InputGroup mt="2">
          <InputLeftAddon>
            <Search2Icon />
          </InputLeftAddon>
          <Input
            onChange={handleCourseSearch}
            type="text"
            placeholder="Filter By State"
          />
        </InputGroup>
        <VStack
          mt={3}
          align={"flex-start"}
          spacing={2}
          w="100%"
          maxH="40vh"
          overflowY="scroll"
          overflowX={"hidden"}
        >
          {state?.map((item, index) => (
            <Checkbox
              key={index}
              onChange={(e) => handleCheckboxChange(e, item)}
            >
              {item}
            </Checkbox>
          ))}
        </VStack>

      

        <Text mt={5}>OWNERSHIP</Text>
        {/* <InputGroup mt="2">
          <InputLeftAddon>
            <Search2Icon />
          </InputLeftAddon>
          <Input type="text" placeholder="Filter By State" />
        </InputGroup> */}
        <VStack mt={3} align={"flex-start"} spacing={2} w="100%" maxH="40vh">
          {ownership?.map((item, index) => (
            <Checkbox key={index}>{item}</Checkbox>
          ))}
        </VStack>


 




      </Box>
    
 
  );
};