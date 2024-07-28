import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TrackUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get("http://localhost:4100/api/count");


        const data1 = response1.data;
        setUserData(data1)
        
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
console.log('userData:', userData)
  return <Box>{userData?.totalVisits}</Box>;
};

export default TrackUser;
 
