import SectionTitle from "../../../Components/SectionTitle";
import MenuIteam from "../../Shered/MeniItean/MenuIteam";
import useMenu from "../../../Components/hooks/useHooks";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularData = menu.filter((iteam) => iteam.category === "popular");

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"Cheak it out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {popularData.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
