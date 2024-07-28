import React from "react";
import { Box, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const Adminblog = () => {
  const [image1, setImage1] = useState(null);

  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formDataToSend = {
    ...formData,
    image1,
  };

  const handlesubmit = async () => {
    try {
      const response = axios.post(
        "https://api.mbbsdunia.com/api/uploadBlog",
        formDataToSend
      );
      if ((await response).status === 200) {
        alert("data added successfully");
      } else {
        alert("error adding data");
      }
    } catch (error) {
      console.error("error adding data", error);
    }
  };

  console.log(formDataToSend);
  return (
    <div>
      <Box width={"100vw"}>
        <Box width={"80vw"} margin={"0px auto"}>
          <form>
            <Input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleInputChange}
              placeholder="enter heading"
            />

            <Textarea
              w={"100%"}
              h={"80vh"}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
            />

            <Input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="enter Date"
            />
            <Input type="file" name="image1" onChange={handleImage1Change} />

            <Button type="button" onClick={handlesubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Adminblog;
