import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import UseAxios from "../../../hooks/use-axios";

interface IApartmentParams {
  apartmentId: string;
}

const ApartmentView: React.FC = () => {
  const [cookies] = useCookies(["token"]);
  const apartmentParams: IApartmentParams = useParams();
  console.log(apartmentParams.apartmentId);
  const { loading, fetchData } = UseAxios({
    method: "get",
    url: `/getUserApartments/${apartmentParams.apartmentId}`,
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData(
        {},
        {
          Authorization: `Bearer ${cookies.token}`,
        }
      );
      //@ts-ignore
      const shit = new Buffer.from(
        response.data["0"]["images.image"].data
      ).toString("base64");
      const newData = response.data.map((apartment: any) => {
        const data = { ...apartment };
        //@ts-ignore
        data["images.image"].data = new Buffer.from(
          data["images.image"].data
        ).toString("base64");
        return data;
      });
    };
    // getData();
  }, []);

  return <div></div>;
};

export default ApartmentView;
