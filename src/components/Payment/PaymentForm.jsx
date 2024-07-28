// PaymentForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    // Remove order_id from here
    merchant_id: 'YOUR_MERCHANT_ID',
    currency: 'INR',
    amount: '100',
    cancel_url: 'YOUR_CANCEL_URL',
    redirect_url: 'YOUR_REDIRECT_URL',
    language: 'en',
  });

  const initiatePayment = async () => {
    try {
      const response = await axios.post('https://api.mbbsdunia.com/api/initiate-payment');
      // const response = await axios.post('http://localhost:3100/api/initiate-payment');
      console.log(response.data)
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div>
      <h1>Payment Form</h1>
      <Button onClick={initiatePayment}>Initiate Payment</Button>
    </div>
  );
};

export default PaymentForm;
