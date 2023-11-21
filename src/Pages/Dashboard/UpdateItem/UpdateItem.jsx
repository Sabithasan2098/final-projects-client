import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <SectionTitle heading={"update item"}></SectionTitle>
    </div>
  );
};

export default UpdateItem;
