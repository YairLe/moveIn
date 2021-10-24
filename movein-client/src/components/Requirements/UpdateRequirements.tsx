import { useCookies } from "react-cookie";
import UseAxios from "../../hooks/use-axios";
import { IRequirements } from "../../interfaces/interfaces";

const UpdateRequirements = () => {
  const [cookies] = useCookies(["token"]);

  const { loading, fetchData } = UseAxios({
    method: "post",
    url: "/updateRequirement",
  });

  const handleFetching = async (newRequirements: IRequirements) => {
    const response = await fetchData(
      { ...newRequirements },
      {
        Authorization: `Bearer ${cookies.token}`,
      },
    );
    return response;
  };

  return { handleFetching };
};

export default UpdateRequirements;
