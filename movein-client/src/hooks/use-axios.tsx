import React, { useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  url?: string;
  method: "post" | "get" | "put" | "delete";
  body?: Object;
  headers?: Record<string, string>;
}

interface IResponse {
  data: any;
  error: string | null;
}

const UseAxios = (props: IProps) => {
  const baseUrl = "http://localhost:8080";
  const { url, method, body, headers } = props;
  const [response, setResponse] = useState<IResponse>({
    data: null,
    error: null,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const result = await axios[method](`${baseUrl}${url ? url : ""}`, body, {
        headers: headers,
      });
      console.log(result);
      setResponse({ data: result, error: null });
    } catch (err: any) {
      console.log(err.response.data);
      let errorMessage = err.response.data;
      if (errorMessage.hasOwnProperty("data")) {
        errorMessage = errorMessage.data[0].msg;
      } else {
        errorMessage = errorMessage.message;
      }
      setResponse({ data: null, error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, fetchData };
};

export default UseAxios;
