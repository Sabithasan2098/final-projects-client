import { useQuery } from "@tanstack/react-query";
import useAxiosSequere from "../../../Components/hooks/useAxiosSequere";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const Allusers = () => {
  const axiosSequere = useAxiosSequere();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSequere.get("/users");
      return res.data;
    },
  });

  const handleDeleteUsers = (user) => {};

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
              {users.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUsers(user)}
                      className="btn  bg-orange-600
                       btn-lg"
                    >
                      <FaUsers className=" text-white"></FaUsers>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUsers(user)}
                      className="btn  bg-red-700
                      btn-lg"
                    >
                      <FaTrashAlt className=" text-white"></FaTrashAlt>
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
