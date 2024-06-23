import axios from "axios";
import React, { useEffect, useState } from "react";

const useUserType = (email) => {
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const fetchUserType = async () => {
      const response = await axios.get(
        `https://booknokery.vercel.app/user/type/${email}`
      );
      setUserType(response.data);
      //   console.log(response);
    };
    if (email) fetchUserType();
  }, [email]);

  return { userType };
};

export default useUserType;
