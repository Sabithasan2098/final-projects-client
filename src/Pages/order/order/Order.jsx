import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Menu from "../../Shered/Menu/Menu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Components/hooks/useHooks";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  const initialindex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialindex);
  const [menu] = useMenu();

  const desserts = menu.filter((desert) => desert.category === "dessert");
  const salad = menu.filter((desert) => desert.category === "salad");
  const soup = menu.filter((desert) => desert.category === "soup");
  const pizza = menu.filter((desert) => desert.category === "pizza");
  const drink = menu.filter((desert) => desert.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro menu | order food</title>
      </Helmet>
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
        <TabPanel>
          <OrderTab iteam={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteam={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
