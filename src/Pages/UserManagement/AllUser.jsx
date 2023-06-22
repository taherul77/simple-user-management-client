import Swal from "sweetalert2";
import useUser from "../../hooks/useUser";


const AllUser = () => {
   const {user , refetch} = useUser();
   console.log('====================================');
   console.log(user);
   console.log('====================================');
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
        fetch(
            `http://localhost:5000/api/v1/user/${user._id}`,
            {
              method: "DELETE",
            
            }
          )
            .then((res) => res.json())
            .then((data) => {
            
          if (data.success) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
            })
       
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                user?.data?.map((user , index) => (<tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="flex gap-5 px-4 py-4 text-sm whitespace-nowrap">
                          <button
                            onClick={() => handleDelete(user)}
                            className="btn-sm text-xl text-white bg-red-600 transition-colors duration-200 hover:text-black focus:outline-none"
                          >
                            Delete
                          </button>
                        </td>
                  </tr>))
            }
            
            {/* row 2 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
