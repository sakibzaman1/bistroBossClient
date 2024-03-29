import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import { MdOutlineDeleteSweep } from "react-icons/md";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";

const AllUsers = () => {
  const { user, admin } = useContext(AuthContext);
  const isAdmin = user?.email.toLowerCase() === admin;
  console.log(isAdmin)
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    swal({
      title: "Please Confirm!",
      text: "Are you sure?",
      icon: "warning",
      dangerMode: true,
    }).then((isConfirmed) => {
      if (isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            swal("User Has been made an Admin");
          }
        });
      } else {
        swal("Admin Not made");
      }
    });
  };

  const handleDelete = (_id) => {
    swal({
      title: "Please Confirm!",
      text: "Are you sure to delete?",
      icon: "warning",
      dangerMode: true,
    }).then((isConfirmed) => {
      if (isConfirmed) {
        axiosSecure.delete(`/users/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            swal("Delted Successfully");
          }
        });
        console.log("deleted");
      } else {
        swal("Not deleted");
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <h2 className="text-3xl">Total Users : {users.length}</h2>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-amber-600 text-white text-xl">
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} user={user}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-sm opacity-50 bg-amber-600 p-2 rounded-full text-white w-16 text-center">
                        {
                          user?.email.toLowerCase() === admin? "Admin" : "User"
                        }
                      </div>
                    </div>
                  </div>
                </td>

                <th>
                 <div>
                  {
                     <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdOutlineDeleteSweep
                      size={20}
                      color="red"
                    ></MdOutlineDeleteSweep>
                  </button>
                  }
                 </div>
                </th>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
