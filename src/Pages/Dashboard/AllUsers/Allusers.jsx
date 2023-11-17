import { useQuery } from "@tanstack/react-query";
import useAxiosSequere from "../../../Components/hooks/useAxiosSequere";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Allusers = () => {
  const axiosSequere = useAxiosSequere();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSequere.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure to create an admin?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequere.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount === 1) {
            refetch();
            Swal.fire({
              title: "Success",
              text: `${user.name} is admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleDeleteUsers = (user) => {
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
        axiosSequere.delete(`/users/${user._id}`).then((res) => {
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
      <div className="flex justify-evenly my-10">
        <h1 className="text-5xl font-semibold">All Users</h1>
        <h1 className="text-5xl font-semibold">Total Users :{users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn  bg-orange-600
                       btn-lg"
                      >
                        <FaUsers className=" text-white text-2xl"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUsers(user)}
                      className="btn  bg-red-700
                      btn-lg"
                    >
                      <FaTrashAlt className=" text-white text-2xl"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
