import Banner from "../Banner/Banner";
import Services from "../Banner/Service/Services";
import Cetagory from "../Cetagory/Cetagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Cetagory></Cetagory>
      <Services></Services>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
