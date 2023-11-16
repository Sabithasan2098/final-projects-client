import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSequere from "../hooks/useAxiosSequere";
import useCart from "../hooks/useCart";

const FoodCard = ({ iteam }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiousSequere = useAxiosSequere();
  const { name, recipe, image, price, _id } = iteam;
  const { user } = useAuth();
  const [, refetch] = useCart();

  const cartIteam = {
    menuId: _id,
    email: user?.email,
    name,
    image,
    price,
  };

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart iteam to the database
      axiousSequere.post("/carts", cartIteam).then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food" />
          <p className="absolute right-0 mb-40 mr-8 px-2 py-1 bg-slate-900 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bg-slate-100 text-orange-300 border-orange-300 border-0 border-b-4 mt-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
