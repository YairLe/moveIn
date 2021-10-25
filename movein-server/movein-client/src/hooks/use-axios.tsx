import axios, { Method } from "axios";
import { useState } from "react";

interface IProps {
  url?: string;
  method: "post" | "get" | "put" | "delete";
}

const UseAxios = (props: IProps) => {
  const baseUrl = "http://localhost:8080";
  const { url, method } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const newMethod = method.toUpperCase() as Method;
  const fetchData = async (body?: Object, headers?: any) => {
    try {
      const result = await axios({
        method: newMethod,
        url: `${baseUrl}${url ? url : ""}`,
        headers: headers,
        data: body,
      });
      return result;
    } catch (err: any) {
      let errorMessage = err;
      if (err.response) {
        errorMessage = err.response.data;
        if (errorMessage.hasOwnProperty("data")) {
          errorMessage = errorMessage.data[0].msg;
        } else {
          errorMessage = errorMessage.message;
        }
      }
      return errorMessage;
    } finally {
      setLoading(false);
    }
  };
  return { loading, fetchData };
};

export default UseAxios;
