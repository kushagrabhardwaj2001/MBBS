import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const EditUniversity = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const toast = useToast();
  const [formData, setFormData] = useState({
    collegename: "",
    state: "",
    fees: "",
    universityDescription: "",
    established: "",
    collegetype: "",
    approval: "",
    city: "",
    affiliatedby: "",
    collegecategory: "",
    website: "",
    mail: "",
  });
  const user = JSON.parse(localStorage.getItem("userDetails")) || "";

  useEffect(() => {
    if (user[0]?.mail_id !== "mbbsduniadelhi@gmail.com" || "") {
      navigate("/login/user");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.mbbsdunia.com/api/universities/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.patch(
        `
https://api.mbbsdunia.com/api/universities/${id}`,
        formData
      );
      console.log("responce:", responce);
      if (responce.status === 200) {
        toast({
          title: "University Data",
          description: "Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      navigate("/update-university");
    } catch (error) {
      toast({
        title: "Somthing went wrong",
        description: "Try Again",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error updating data:", error);
    }
  };

  return (
    <Dashboard>
      <Box
        height={"80vh"}
        overflowY={"scroll"}
        mt={2}
        borderWidth="1px"
        borderRadius="md"
        p="5"
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="collegename">
            <FormLabel>College Name</FormLabel>
            <Input
              type="text"
              name="collegename"
              value={formData.collegename}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="state">
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="fees">
            <FormLabel>Fees</FormLabel>
            <Input
              type="text"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="universityDescription">
            <FormLabel>University Description</FormLabel>
            <Textarea
              name="universityDescription"
              value={formData.universityDescription}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="established">
            <FormLabel>Established</FormLabel>
            <Input
              type="text"
              name="established"
              value={formData.established}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="collegetype">
            <FormLabel>College Type</FormLabel>
            <Input
              type="text"
              name="collegetype"
              value={formData.collegetype}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="approval">
            <FormLabel>Approval</FormLabel>
            <Input
              type="text"
              name="approval"
              value={formData.approval}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="affiliatedby">
            <FormLabel>Affiliated By</FormLabel>
            <Input
              type="text"
              name="affiliatedby"
              value={formData.affiliatedby}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="collegecategory">
            <FormLabel>College Category</FormLabel>
            <Input
              type="text"
              name="collegecategory"
              value={formData.collegecategory}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="website">
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="mail">
            <FormLabel>Mail</FormLabel>
            <Input
              type="text"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="teal">
            Submit
          </Button>
        </form>
      </Box>
    </Dashboard>
  );
};

export default EditUniversity;
