import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuIteam from "../../Shered/MeniItean/MenuIteam";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]); // Initialize menu as an empty array

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularData = data.filter((item) => item.category === "popular");
        setMenu(popularData);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  console.log(menu);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"Cheak it out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {menu.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
