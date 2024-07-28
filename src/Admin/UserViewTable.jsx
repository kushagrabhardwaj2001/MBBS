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

const UserViewTable = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [counseling, setConselling] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [pageHeading, setPageHeading] = useState("ADMIN PANEL");

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `https://api.mbbsdunia.com/api/${location.state}`
      );
      // setUsers(response.data.user);
      switch (location.state) {
        case "user":
          setUsers(response.data.user);
          break;
        case "get-conselling":
          setConselling(response.data.conselling);
          break;
        case "contact-us":
          setContactData(response.data.contact);
          break;
        default:
          setPageHeading("ADMIN PANEL");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getUsers();
    switch (location.state) {
      case "user":
        setPageHeading("Registered Users");
        break;
      case "get-conselling":
        setPageHeading("Counseling Enquiry");
        break;
      case "contact-us":
        setPageHeading("Contact us Enquiry");
        break;
      default:
        setPageHeading("ADMIN PANEL");
    }
  }, [location.state]);
  console.log("contactData:", contactData);
  return (
    <Dashboard>
      <TableContainer height={"80vh"} overflowY={"scroll"} mt={2}>
        <Table variant="striped" colorScheme="#ccc" size="md">
          <TableCaption bg={"#1C375B"} placement="top">
            <Text color={"#FFFF"} fontSize={"24px"}>
              {pageHeading}
            </Text>
          </TableCaption>
          <Thead bg={"#1C375B"}>
            <Tr color={"#FFFF"}>
              <Th color={"#FFFF"}>Name</Th>
              <Th color={"#FFFF"}>Email</Th>
              <Th color={"#FFFF"}>Contact Number</Th>
              <Th color={"#FFFF"}>
                {pageHeading === "Registered Users"
                  ? "State"
                  : "Education Level"}
              </Th>
              <Th color={"#FFFF"}>
                {pageHeading === "Registered Users"
                  ? "Exam Attempted"
                  : "Education Interest"}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {(pageHeading === "Registered Users" ? users : counseling)?.map(
              (item, index) => (
                <Tr key={index}>
                  <Td>
                    {pageHeading === "Registered Users"
                      ? `${item.firstname} ${item.lastname}`
                      : item.name}
                  </Td>
                  <Td>
                    {pageHeading === "Registered Users"
                      ? `${item.mail_id}`
                      : item.email}
                  </Td>
                  <Td>
                    {pageHeading === "Registered Users"
                      ? `${item.mobile_num}`
                      : item.phone}
                  </Td>
                  <Td>
                    {pageHeading === "Registered Users"
                      ? item.state
                      : item.educationLevel}
                  </Td>
                  <Td>
                    {pageHeading === "Registered Users"
                      ? item.exam_attempted
                      : item.educationInterest}
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Dashboard>
  );
};

export default UserViewTable;
