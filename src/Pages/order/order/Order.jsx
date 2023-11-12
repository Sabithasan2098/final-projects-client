import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Menu from "../../Shered/Menu/Menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Components/hooks/useHooks";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((desert) => desert.category === "dessert");
  const salad = menu.filter((desert) => desert.category === "salad");
  const soup = menu.filter((desert) => desert.category === "soup");
  const pizza = menu.filter((desert) => desert.category === "pizza");
  const offered = menu.filter((desert) => desert.category === "offered");
  return (
    <div>
      <Menu
        img={orderImg}
        title={"our shop"}
        desk={"would you like try our dish?"}
      ></Menu>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
