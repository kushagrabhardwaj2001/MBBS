import {
  Box,
  Grid,
  Button,
  GridItem,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhatsApp from "../Whatsapp/whatsapp";


const Blog = () => {
  const [formData, setFormData] = useState([]);

  const handleGet = async () => {
    try {
      const res = await fetch("https://api.mbbsdunia.com/api/blog/data");

      const data = await res.json();
      setFormData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (formData.length === 0) {
      handleGet();
    }
  }, [formData.length]);

  return (
    <>
<WhatsApp />
      <Box
        className="universities"
        width={"100%"}
        py={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"relative"}
      >
         {" "}
        <Text fontSize={"2.575rem"} color={"#00008B"}>
          Blogs
        </Text>
        <br />
        <Box width={["30vw", "30vw", "5vw", "5vw"]}>
          <hr
            style={{
              width: "100%",
              height: "0.5vh",
              background: "#FF6C00",
              marginTop: "-2.5vh",
              border: "none",
            }}
          />
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          width="90%"
          marginBottom={6}
        >
          {formData &&
            formData?.map((ele) => (
              <Link to={`singleBlogPage/${ele._id}`} key={ele._id}>
                <GridItem>
                  <Box
                    width={"100%"}
                    height={"100%"}
                    // boxShadow={"15px 4px 64px rgba(0, 0, 0, 0.15)"}
                  >
                      <Image src={ele.image} width={"100vw"} height={"30vh"} />
                  </Box>

                  <Box width={"100%"} height={"14vh"} backgroundColor={"white"}>
                     {" "}
                    <Text
                      marginLeft={"0.5vh"}
                      marginTop={"-2vh"}
                      fontSize={"0.7rem"}
                      color={"#3939BC"}
                    >
                      {ele.date}
                    </Text>
                     {" "}
                    <Text
                      marginLeft={"0.5vh"}
                      marginTop={"-1vw"}
                      color={"#00008B"}
                      fontWeight={"bold"}
                      width={"80%"}
                      fontSize={"1rem"}
                    >
                      {ele.title.split("<br></br>")[0].substring(0, 20) + "..."}
                    </Text>
                    <Text
                      marginLeft={"0.5vw"}
                      fontSize={"0.6rem"}
                      width={"80%"}
                      color={"#333333"}
                      dangerouslySetInnerHTML={{
                        __html:
                          ele.description
                            .split("<br></br>")[0]
                            .substring(0, 80) + "...",
                      }}
                    ></Text>{" "}
                  </Box>
                  {/* Content of the first GridItem */}
                </GridItem>
              </Link>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Blog;
