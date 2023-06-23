import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";
import { useEffect, useState } from "react";
import Wrapper from "../../component/Wrapper";

const AllUser = () => {
  const { user, refetch } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const current = user?.data?.find((u) => u._id === userId);
    setCurrentUser(current);
  }, [userId, user?.data]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const data = {
      name,
      phone,
      email,
    };
    fetch(`http://localhost:5000/api/v1/user/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUserId("");
          refetch();
          Swal.fire("Update!", "Your file has been updated.", "success");
          setShowModal(false);
        }
      });
  };

  const handleDelete = (user) => {
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
        fetch(`http://localhost:5000/api/v1/user/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Wrapper>
        <div className="overflow-x-auto">
          <table className="table mx-auto gap-5  table-zebra">
            {/* head */}
            <thead className="bg-blue-300 ">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user?.data?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="">
                    <button
                      onClick={() => {
                        setShowModal(true), setUserId(user._id);
                      }}
                      className="btn-sm text-xl text-white bg-blue-700  transition-colors duration-200 hover:text-white focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn-sm text-xl text-white bg-red-600 transition-colors duration-200 hover:text-white focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center p-5 rounded-t">
                    <h3 className="text-3xl text-center font-semibold">
                      Create Customer
                    </h3>
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                    >
                      ✕
                    </button>
                  </div>
                  {/*body*/}
                  <form className="p-10 pt-0" onSubmit={handleSubmit}>
                    <div className="space-y-4 my-5">
                      <input
                        placeholder="Name"
                        defaultValue={currentUser?.name}
                        name="name"
                        className="input input-bordered input-md rounded-md w-full"
                      />
                      <input
                        placeholder="email"
                        readOnly
                        disabled
                        defaultValue={currentUser?.email}
                        name="email"
                        className="input input-bordered input-md rounded-md w-full"
                      />
                      <input
                        placeholder="Phone"
                        defaultValue={currentUser?.phone}
                        name="phone"
                        className="input input-bordered input-md rounded-md w-full"
                      />
                    </div>

                    <button
                      type="submit"
                      className={
                        "w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white"
                      }
                    >
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </Wrapper>
    </div>
  );
};

export default AllUser;
