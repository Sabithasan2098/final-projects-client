import SectionTitle from "../../../Components/SectionTitle";
import pic from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div>
      <div className="featured-iteam  bg-fixed my-20 py-20 ">
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"cheak it out"}
        ></SectionTitle>
        <div className="md:flex py-20 px-36 justify-center items-center  ">
          <div className="">
            <img src={pic} alt="" />
          </div>
          <div className="md:ml-10 bg-slate-400 bg-opacity-50 text-white">
            <h2 className="text-xl">Aug 20, 2023</h2>
            <h2 className="uppercase text-xl">where can i get some</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              assumenda officiis impedit accusantium velit libero voluptas.
              Fugiat quidem quis molestias provident sed repellat, porro
              accusamus doloremque earum veritatis magnam aspernatur esse?
              Repellat, consequatur beatae eligendi alias sit quibusdam eos
              voluptatem saepe ipsam. Numquam itaque explicabo laborum
              distinctio unde, aspernatur libero!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
