import React, { useEffect, useState } from "react";
import {
  PinInput,
  PinInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function OTPVerificationModal({ isOpen, onClose, location }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const handleOtpChange = (value) => {
    setOtp((prevOtp) => prevOtp + value);
  };
  const verifySid = sessionStorage.getItem("sid");
  const phone = sessionStorage.getItem("phone");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://api.mbbsdunia.com/api/verify-otp", {
        phoneNumber: phone,
        otpCode: otp,
        verifySid,
      });
      console.log("res:", res);
      if (res.status === 200) {
        toast({
          title: "OTP",
          description: "verify Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
      onClose();
      if (location !== "") {
        navigate(location);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast({
        title: "Error",
        description: "Failed to verify OTP",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    if (verifySid) {
      console.log("verifySid:", verifySid, phone);
    }
  }, [verifySid]);

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Enter OTP</ModalHeader>
        <ModalBody>
          <PinInput otp>
            {[...Array(6)].map((_, index) => (
              <PinInputField
                key={index}
                value={otp[index] || ""}
                onChange={(e) => {
                  const newOtpDigit = e.target.value;
                  handleOtpChange(newOtpDigit);
                }}
              />
            ))}
          </PinInput>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OTPVerificationModal;
