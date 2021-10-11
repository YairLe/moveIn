import React, { useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  url?: string;
  method: "post" | "get" | "put" | "delete";
  body?: any;
  headers?: any;
}

const UseAxios = (props: IProps) => {
  const baseUrl = "http://localhost:8080";
  const { url, method, body, headers } = props;
  const [response, setResponse] = useState<any>({ data: null, error: null });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const result = await axios[method](`${baseUrl}${url ? url : ""}`, body, {
        headers: headers,
      });
      setResponse({ data: result, error: null });
    } catch (err: any) {
      setResponse({ data: null, error: err.response.data.data[0].msg });
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, fetchData };
};

export default UseAxios;
