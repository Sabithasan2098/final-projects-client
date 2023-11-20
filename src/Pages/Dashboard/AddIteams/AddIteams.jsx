import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Components/hooks/useAxiosPublic";
import useAxiosSequere from "../../../Components/hooks/useAxiosSequere";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddIteams = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSequere = useAxiosSequere();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: data.price,
      };
      const menuRes = await axiosSequere.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.acknowledged) {
        // get a popUp to complete
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} item is added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an iteam"}
        subHeading={"what's new"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            required
            placeholder="Recipe name"
            className="input input-bordered w-full "
          />
        </div>
        <div className=" flex gap-6 mt-2">
          {/* recipe  */}
          <div className="flex-1">
            <label className="label">
              <span className="label-text">Cetagory*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              required
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Cetagory
              </option>
              <option value="salad">Salad</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Dessert</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
            </select>
          </div>
          {/* price */}
          <div className="flex-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                required
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Recipe details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            required
            className="textarea textarea-bordered h-24"
            placeholder="Recipe details"
          ></textarea>
        </div>
        <input
          type="file"
          {...register("image", { required: true })}
          required
          className="file-input w-full max-w-xs mt-8"
        />
        <br />
        <button className="btn text-white mt-8 bg-gradient-to-r from-[#835D23] to-[#B58130]">
          Add Iteam <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddIteams;
