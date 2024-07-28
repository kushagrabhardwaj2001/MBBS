import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import img1 from "../Statecollege/Karnataka banner2.jpg-86677_1 (1).jpg";
import img2 from "../Banner/Group 3647.png";
import { v4 as uuidv4 } from "uuid";

const Cutoff = () => {
  const handlePayment = async () => {
    // Predefined values
    // Replace with the actual URL

    // Create the payment data
    const paymentData = {
      merchant_id: "3080295",
      order_id: uuidv4(),
      currency: "INR",
      amount: 799,
      redirect_url: "https://asianlinkacademy.com/",
      cancel_url: "https://admissionpossibility.com/",
      language: "EN",
    };
    console.log(paymentData);
    window.location.href = "https://api.mbbsdunia.com/pay";
    // window.location.href = "http://localhost:3100/pay";
  };

  return (
    <div>
      <Box
        width={"100vw"}
        height={["65vh", "60vh", "80vh", "80vh"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={["none", "none", "block", "block"]}
          width={["80vw", "90vw", "100vw", "70vw"]}
          height={["50vh"]}
          position={"relative"}
        >
          <Image src={img1} width={"100%"} height={"100%"}></Image>

          <Button
            position={"absolute"}
            onClick={handlePayment}
            top={"82%"}
            left={"45%"}
            fontWeight={"200"}
            padding={"5px 15px"}
            backgroundColor={"#F4903A"}
            width={"45%"}
          >
            {" "}
            Get Cutoffs Now
          </Button>
        </Box>

        <Box
          width={"100vw"}
          display={["block", "block", "none", "none"]}
          height={"39vh"}
          position={"relative"}
        >
          <Image src={img2} width={"100%"} height={"100%"}></Image>

          <Button
            position={"absolute"}
            onClick={handlePayment}
            top={"82%"}
            left={"45%"}
            fontWeight={"200"}
            padding={"5px 15px"}
            backgroundColor={"#F4903A"}
            width={"45%"}
          >
            {" "}
            Get Cutoffs Now
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Cutoff;
