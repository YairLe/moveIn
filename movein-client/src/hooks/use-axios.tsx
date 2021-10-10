import React from "react";
import axios from "axios";

const useAxios = async () => {
  const method = "POST";
  const url = "http://localhost:8080";
  try {
    const result = await axios[method](url, {});
  } catch (err) {}
};

export default useAxios;
