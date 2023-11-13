import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ iteam }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {iteam.map((iteam) => (
          <FoodCard key={iteam._id} iteam={iteam}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
