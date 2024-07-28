import React, { useEffect } from "react";
import { Box, Button, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails")) ||"";

  useEffect(() => {
    if(user[0]?.mail_id !== "mbbsduniadelhi@gmail.com" || ""){
      navigate("/login/user")
      
    }
  }, []);
  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateRows={"80vh"}
      gridTemplateColumns={"200px 1fr"}
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem
        border={"1px solid #cccc"}
        mt={4}
        area={"nav"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <VStack>
          <Box
            bg={"#1C375B"}
            w="100%"
            h="15.1vh"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"#FFFF"} fontSize={"24px"}>
              ADMIN
            </Text>
          </Box>
          <Button
            width={"85%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => navigate("/user-table", { state: "user" })}
          >
            Registered User
          </Button>
          <Button
            width={"85%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => navigate("/user-table", { state: "get-conselling" })}
          >
            Counseling Enquiry
          </Button>
          <Button
            width={"85%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => navigate("/contact-us", { state: "contact-get" })}
          >
            Contact Us
          </Button>
          <Button
            width={"85%"}
            background={"#1C375B"}
            color={"white"}
            fontWeight={"200"}
            padding={"5px 15px"}
            _hover={{
              background: "none",
              border: "2px solid #1C375B",
              color: "#1C375B",
            }}
            onClick={() => navigate("/update-university")}
          >
           Update Info
          </Button>
        </VStack>
      </GridItem>
      <GridItem area={"main"}>{children}</GridItem>
    </Grid>
  );
};

export default Dashboard;

// import React from "react";
// import { Button, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
// import { Link, useNavigate } from "react-router-dom";
// const Dashboard = ({ children }) => {
//   const navigate = useNavigate();
//   /*
//   navigate("/login", { state: { from: location.pathname } });
//     const comingFrom = location.state?.from || "/";
//         navigate(comingFrom, { replace: true });
//   */
//   return (
//     <Grid
//       templateAreas={`"nav main"`}
//       gridTemplateRows={"80vh"}
//       gridTemplateColumns={"200px 1fr"}
//       gap="1"
//       color="blackAlpha.700"
//       fontWeight="bold"
//     >

//       <GridItem pl="2"  area={"nav"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
//         <VStack>
//         <Text fontSize={"24px"}>ADMIN</Text>
//         <Button  w="190px" onClick={() => navigate("/user-table", { state: "user" })} variant={"outline"}>
//           Registred User
//         </Button>
//         <Button w="190px" onClick={() => navigate("/user-table", { state: "get-conselling" })} variant={"outline"}>
//         Counseling Inquiry
//         </Button>
//         <Button w="190px" onClick={() => navigate("/user-table", { state: "user" })} variant={"outline"}>
//           Registred User
//         </Button>
//         </VStack>
//       </GridItem>
//       <GridItem pl="2"  area={"main"}>
//         {children}
//       </GridItem>
//     </Grid>
//   );
// };

// export default Dashboard;
