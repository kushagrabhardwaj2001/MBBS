import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function AddBlog() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = {
        ...formData,
        image,
      };
      console.log(formDataToSend);
      const response = await fetch("https://api.mbbsdunia.com/api/uploadData1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
      console.log("response", response);
      if (response.status === 200) {
        setFormData({
          title: "",
          date: "",
          description: "",
        });
        setImage(null)
        alert("Data added successfully");
      } else {
        console.error("Error adding data");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <form
      method="POST"
      action="/uploadData"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <Box
        padding={10}
        w="80%"
        // h="100vh"
        margin={"0 auto"}
        border={"1px solid #014BEC"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Blog Description</FormLabel>
          <Textarea
          h="40vh"
            style={{
              fontSize: "1.2rem",
              border: "1px solid #ccc",
            }}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Upload Blog Image</FormLabel>
          <Input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </FormControl>
        <Input
          mt="10"
          type="submit"
          fontSize="1rem"
          cursor="pointer"
          border="1px solid #014BEC"
          borderRadius="10px"
          _hover={{ backgroundColor: "#014BEC" }}
          marginBottom={"3vh"}
        />
      </Box>
    </form>
  );
}

export default AddBlog;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";

// function AddBlog() {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     date: "",
//     description: "",
//   });

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formDataToSend = {
//         ...formData,
//         image,
//       };
//       console.log(formDataToSend);
//       const response = await fetch("http://localhost:3007/api/uploadData1", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formDataToSend),
//       });
//       console.log("response", response);
//       if (response.status === 200) {
//         alert("Data added successfully");
//       } else {
//         console.error("Error adding data");
//       }
//     } catch (error) {
//       console.error("Error adding data:", error);
//     }
//   };

//   return (
//     <Box border={"1px solid red"} w="50%" h="60vh" m="auto" display="flex" alignItems="center" justifyContent="center">
//       <form method="POST" action="/uploadData" encType="multipart/form-data" onSubmit={handleSubmit}>
//         <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//           <Input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title"/>
//           <Input type="date" name="date" value={formData.date} onChange={handleChange} />
//           <Textarea
//             style={{
//               fontSize: "1.2rem",
//               border: "1px solid #ccc",
//             }}
//             name="description"
//             placeholder="University Description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//           <h2>Upload Blog Image</h2>
//           <Input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <Button
//             type="submit"
//             style={{
//               fontSize: "1rem",
//               cursor: "pointer",
//               border: "1px solid #014BEC",
//               borderRadius: "10px",
//             }}
//             _hover={{ backgroundColor: "#014BEC" }}
//             marginBottom={"3vh"}
//           >
//             Add Blog
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddBlog;
