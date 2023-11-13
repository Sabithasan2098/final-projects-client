import { Helmet } from "react-helmet-async";
import Menu from "../../Shered/Menu/Menu";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Components/hooks/useHooks";

import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((desert) => desert.category === "dessert");
  const salad = menu.filter((desert) => desert.category === "salad");
  const soup = menu.filter((desert) => desert.category === "soup");
  const pizza = menu.filter((desert) => desert.category === "pizza");
  const offered = menu.filter((desert) => desert.category === "offered");
  console.log(offered);

  return (
    <div className="my-20">
      <Helmet>
        <title>Bistro menu</title>
      </Helmet>
      {/* menu-category */}
      <Menu
        img={menuImg}
        title="our menu"
        desk="Would you like to try a dish?"
      ></Menu>
      {/* offered-section */}
      <div className="my-20">
        <SectionTitle
          heading={"todays offer"}
          subHeading={"Dont miss"}
        ></SectionTitle>
      </div>
      <MenuCategory iteam={offered}></MenuCategory>
      {/* desserts-section */}
      <MenuCategory
        iteam={desserts}
        title={"desserts"}
        coverImg={dessertImg}
        description="A short description of desserts"
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory
        iteam={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>

      {/* salad */}
      <MenuCategory
        iteam={salad}
        title={"salads"}
        coverImg={saladImg}
      ></MenuCategory>

      {/* soup */}
      <MenuCategory
        iteam={soup}
        title={"soups"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default OurMenu;
