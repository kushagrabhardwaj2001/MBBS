import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const ContactUsPage = () => {
  const location = useLocation();
  const [contactData, setContactData] = useState([]);
  const [pageHeading, setPageHeading] = useState("ADMIN PANEL");

  const getContact = async () => {
    try {
      const response = await axios.get(`https://api.mbbsdunia.com/api/${location.state}`
      );
      // setUsers(response.data.user);
      setContactData(response.data.contact);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getContact();
    console.log("state:", location.state);
  }, [location.state]);
  console.log("contactData:", contactData);
  return (
    <Dashboard>
      <TableContainer height={"80vh"} overflowY={"scroll"} mt={2}>
        <Table variant="striped" colorScheme="#ccc" size="md">
          <TableCaption bg={"#1C375B"} placement="top">
            <Text color={"#FFFF"} fontSize={"24px"}>
              {"Contact us inquiry"}
            </Text>
          </TableCaption>
          <Thead bg={"#1C375B"}>
            <Tr color={"#FFFF"}>
              <Th color={"#FFFF"}>Name</Th>
              <Th color={"#FFFF"}>Email</Th>
              <Th color={"#FFFF"}>Contact Number</Th>
              <Th color={"#FFFF"}>Description</Th>
            </Tr>
          </Thead>

          <Tbody>
            {contactData?.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.mobile}</Td>
                <Td>{item.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Dashboard>
  );
};

export default ContactUsPage;
