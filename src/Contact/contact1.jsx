import React from "react";
import { Box, Image, Input, Button, Text } from "@chakra-ui/react";
import img1 from "../Contact/image 2.png";
import img2 from "../Contact/Call.png";
import img3 from "../Contact/Message.png";
import img4 from "../Contact/Globe.png";

function contact1() {
  return (
    <div>
      <Box
        border="1px solid #0D3F64"
        h={["auto", "auto", "auto", "100vh"]}
        display="flex"
        flexDirection={["column", "column", "column", "row" , 'row']}
        justifyContent="center"
        alignItems="center"
        p={[4, 6, 8, 12]}
      >
        <Box
          border="20px solid #0D3F64"
          w={["90vw", "80vw", "71vw", "30vw" ,"30vw"]}
          borderRadius="22px"
          h={["auto", "32vh", "41vh", "49vh"]}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt={{sm:'none' , md:'2%' , lg:"-12%" , xl:"-12%"}}
          
        >
          <Image src={img1} />
        </Box>
        <Box
          bg="#ECECEC"
          w={["90vw", "80vw", "73vw", "44vw"]}
          h={["auto", "auto", "60vh", "54vh"]}
          borderRadius="22px"
          justifyContent="center"
          textAlign="center"
          mt={["23px", "23px", "2%", "-12%"]}
          ml={["0", "0", "2%", "2%"]}
          p={[4, 6, 8, 12]}
        >
          <Input
            type="name"
            border="1px solid #0D3F64"
            borderRadius="10px"
            bg="white"
            mt="28px"
            w="100%"
            h="7vh"
            placeholder="Full Name"
            fontFamily="Rubik"
            _hover="none"
          />
          <Input
            type="email"
            border="1px solid #0D3F64"
            borderRadius="10px"
            bg="white"
            mt="15px"
            w="100%"
            h="7vh"
            placeholder="Email"
            fontFamily="Rubik"
            _hover="none"
          />
          <Input
            type="tel"
            border="1px solid #0D3F64"
            borderRadius="10px"
            bg="white"
            mt="15px"
            w="100%"
            h="7vh"
            placeholder="Mobile Number"
            fontFamily="Rubik"
            _hover="none"
          />
          <Input
            type="text"
            border="1px solid #0D3F64"
            borderRadius="10px"
            bg="white"
            mt="15px"
            w="100%"
            h="9vh"
            placeholder="Message"
            fontFamily="Rubik"
            _hover="none"
          />
          <Box display="flex" justifyContent="flex-end" h="10vh" p={4}>
            <Button w={["18vw",  "20vw", "15vw", "10vw", "10vw"]} h="5vh" bg="#0E3F63" color="#FFA800">
              Submit
            </Button>
            </Box>
          </Box>
          <Box
            w={["92vw",  "82vw", "75vw", "79vw", "75vw"]}
            borderRadius="22px"
            h="24vh"
            mt={{base:'23px' , sm:'none' , md:'none' , lg:"72%" , xl:"30%"}}
            bg="#ECECEC"
            ml={{sm:'none' , md:'3%' , lg:"-86%" , xl:"-80%"}}
            display={{base:'flex' , sm:'flex' , md:'flex', lg:"flex" , xl:"flex"}}
            flexDirection="column"
            alignItems="center"
          >
            <Text
              fontFamily="Rubik"
              fontWeight={800}
              fontSize={{base:'22px' , sm:'24px' , md:'24px' , lg:"32px" , xl:"32px"}}
              color="#0E3F63"
              textAlign="center"
              mt={4}
            >
              We’d love to hear from you
            </Text>
            <Box
              display="flex"
              flexDirection={["row", "row", "row", "row"]}
              justifyContent="center"
              alignItems="center"
              gap={{base:'2%' , sm:'2%' , md:'4%' , lg:"0%" , xl:"6%"}}
              mt={{base:'1%', sm:'',md:'-7px', lg:'', xl:'7px'}}
            >
              <Box w={{base:'32vw' , sm:'22vw' , md:'28vw' , lg:"22vw" , xl:"22vw"}} textAlign="center"  >
                <Image src={img2}  ml={{ base:"19%" ,sm:'none' , md:'39%' , lg:"13%" , xl:"43%"}} />
                <br />
                <Text fontWeight={800} color="#0E3F63" fontSize={{base:'10px' , sm:'10px' , md:'10px' , lg:"23px" , xl:"23px"}}>
                  +91 -98735604704
                </Text>
              </Box>
              <Box
                as="hr"
                display={["none", "none", "block", "block"]}
                width="2px"
                height="100px"
                backgroundColor="#0E3F63"
                border="none"
              />
              <Box w="28vw" textAlign="center">
                <Image src={img3}  ml={{base:"18%" ,sm:'26%' , md:'39%' , lg:"13%" , xl:"43%"}} />
                <br />
                <Text fontWeight={800} color="#0E3F63" fontSize={{base:'10px' , sm:'10px' , md:'10px' , lg:"23px" , xl:"23px"}}>
                  info@mbbsdunia.com
                </Text>
              </Box>
              <Box
                as="hr"
                display={["none", "none", "block", "block"]}
                width="2px"
                height="100px"
                backgroundColor="#0E3F63"
                border="none"
              />
              <Box w="28vw" textAlign="center">
                <Image src={img4} ml={{base:"18%" ,sm:'26%' , md:'39%' , lg:"13%" , xl:"43%"}}/>
                <br />
                <Text fontWeight={800} color="#0E3F63" fontSize={{base:'10px' , sm:'10px' , md:'10px' , lg:"23px" , xl:"23px"}}  >
                  www.mbbsdunia.com
                </Text>
              </Box>
            </Box>
          </Box>
        
      </Box>
    </div>
  );
}

export default contact1;
