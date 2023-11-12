import MenuIteam from "../../Shered/MeniItean/MenuIteam";
import Menu from "../../Shered/Menu/Menu";

const MenuCategory = ({ iteam, title, coverImg, description }) => {
  return (
    <div className="my-40">
      {title && (
        <Menu description={description} img={coverImg} title={title}></Menu>
      )}
      <div className="grid mt-16 grid-cols-2 gap-4">
        {iteam.map((iteam) => (
          <MenuIteam key={iteam._id} iteam={iteam}></MenuIteam>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
