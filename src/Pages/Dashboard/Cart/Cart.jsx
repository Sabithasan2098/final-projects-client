import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Components/hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSequere from "../../../Components/hooks/useAxiosSequere";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSequer = useAxiosSequere();

  const totalPrice = cart.reduce((tp, cp) => tp + cp.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequer.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount === 1) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly mb-10">
        <h2 className="text-3xl">Total order:{cart.length}</h2>
        <h2 className="text-3xl">Total price:${totalPrice}</h2>
        {cart.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-info">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-info">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((iteam, index) => (
              <tr key={iteam._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={iteam.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{iteam.name}</td>
                <td>${iteam.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(iteam._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
