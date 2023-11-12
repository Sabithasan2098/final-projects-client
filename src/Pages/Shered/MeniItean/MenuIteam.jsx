const MenuIteam = ({ iteam }) => {
  const { name, recipe, image, price } = iteam;
  return (
    <div className="flex gap-4">
      <img
        className="h-[108px] w-[118px] rounded-r-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h3 className="uppercase text-xl">{name}------------------</h3>
          <p>{price}</p>
        </div>
        <p className="pt-6">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuIteam;
