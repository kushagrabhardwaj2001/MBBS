import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Button,
  Box,
  Input,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const UniversityTable = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const user = JSON.parse(localStorage.getItem("userDetails")) || "";

  useEffect(() => {
    if (user[0]?.mail_id !== "mbbsduniadelhi@gmail.com" || "") {
      navigate("/login/user");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (searchTerm.trim() !== "") {
          url = `https://api.mbbsdunia.com/api/search/universities?page=${currentPage}&search=${searchTerm}`;
        } else {
          url = `https://api.mbbsdunia.com/api/universities?page=${currentPage}`;
        }
        const response = await axios.get(url);
        setUniversities(response.data.universities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, searchTerm]);
  const handleDelete = async (id) => {
    try {
      const responce = await axios.delete(`https://api.mbbsdunia.com/api/universities/${id}`
      );
      if (responce.status === 200) {
        toast({
          title: "University Data",
          description: "Deleted Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      //   navigate("/update-university")
      window.location.reload();
      console.log("id:", id);
    } catch (error) {
      console.error("Error deleting data:", error);
      toast({
        title: "Somthing went wrong",
        description: "Try Again",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <Dashboard>
      <TableContainer height={"80vh"} overflowY={"scroll"} mt={2}>
        <Table variant="simple">
          <TableCaption bg={"#1C375B"} placement="top">
            <Text color={"#FFFF"} fontSize={"24px"}>
              {"Update University Data"}
            </Text>
            <Input
              color={"white"}
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by college name"
            />
          </TableCaption>
          <Thead>
            <Tr>
              <Th>College Name</Th>
              <Th>State</Th>
              <Th>Fees</Th>
              <Th>Established</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {universities.map((uni, index) => (
              <Tr key={index}>
                <Td>{uni.collegename}</Td>
                <Td>{uni.state}</Td>
                <Td>{uni.fees}</Td>
                <Td>{uni.established}</Td>
                <Td
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2}
                >
                  <Text cursor={"pointer"}>
                    <DeleteIcon onClick={() => handleDelete(uni._id)} />
                  </Text>{" "}
                  <Text cursor={"pointer"}>
                    <EditIcon
                      onClick={() =>
                        navigate("/edit-university", { state: { id: uni._id } })
                      }
                    />
                  </Text>{" "}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box
          mb="5"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="10"
        >
          <Button
            width={"10%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </Button>{" "}
          <Button
            width={"10%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Box>
      </TableContainer>
    </Dashboard>
  );
};

export default UniversityTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Dashboard from "./Dashboard";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
//   Text,
//   Button,
//   Box,
//   Input,
// } from "@chakra-ui/react";
// const UniversityTable = () => {
//   const [universities, setUniversities] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `
// https://api.mbbsdunia.com/api/universities?page=${currentPage}`
//         );
//         setUniversities(response.data.universities);
//         // setTotalPages(response.data.totalPages);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [currentPage]);
//   useEffect(() => {
//     const fetchDataOnSearch = async () => {
//       try {
//         const response = await axios.get(
//           `
// https://api.mbbsdunia.com/api/search/universities?page=${currentPage}&search=${searchTerm}`
//         );
//         setUniversities(response.data.universities);
//         //   setTotalPages(response.data.totalPages);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchDataOnSearch();
//   }, [searchTerm]);
//   const handleSearch = (event) => {};

//   return (
//     <Dashboard>
//       <TableContainer height={"80vh"} overflowY={"scroll"} mt={2}>
//         <Table variant="simple">
//           <TableCaption bg={"#1C375B"} placement="top">
//             <Text color={"#FFFF"} fontSize={"24px"}>
//               {"Update University Data"}
//             </Text>
//             <Input
//               type="text"
//               value={searchTerm}
//               onChange={(event) => setSearchTerm(event.target.value)}
//               placeholder="Search by college name"
//             />
//             <Button onClick={handleSearch}>Search</Button>
//           </TableCaption>
//           <Thead>
//             <Tr>
//               <Th>College Name</Th>
//               <Th>State</Th>
//               <Th>Fees</Th>
//               <Th>Established</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {universities.map((uni, index) => (
//               <Tr key={index}>
//                 <Td>{uni.collegename}</Td>
//                 <Td>{uni.state}</Td>
//                 <Td>{uni.fees}</Td>
//                 <Td>{uni.established}</Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//         <Box
//           mb="5"
//           display={"flex"}
//           alignItems={"center"}
//           justifyContent={"center"}
//           gap="10"
//         >
//           <Button
//             width={"10%"}
//             background={"#1C375B"}
//             color={"white"}
//             fontWeight={"200"}
//             padding={"5px 15px"}
//             _hover={{
//               background: "none",
//               border: "2px solid #1C375B",
//               color: "#1C375B",
//             }}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//           >
//             Prev
//           </Button>{" "}
//           <Button
//             //   width={"85%"}
//             width={"10%"}
//             background={"#1C375B"}
//             color={"white"}
//             fontWeight={"200"}
//             padding={"5px 15px"}
//             _hover={{
//               background: "none",
//               border: "2px solid #1C375B",
//               color: "#1C375B",
//             }}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//           >
//             Next
//           </Button>
//         </Box>
//       </TableContainer>
//     </Dashboard>
//   );
// };

// export default UniversityTable;
