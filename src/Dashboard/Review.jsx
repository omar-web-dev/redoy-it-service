import { useEffect } from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { API_URL } from "../Components/API_URL";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [dataCount, setDataCount] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchReviews();
  }, [dataCount]);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}reviews`);
      const data = await response.json();
      setReviews(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

const handelEditProduct =(id) => {
alert(`This (id : ${id}) product Edit coming son`)
}

  const handelDeleteProduct = (id) => {
    console.log(id)
    const confirm = window.confirm('Are you sure delete this Product')
    if (confirm) {
        fetch(`${API_URL}reviews-delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    // notify()
                    console.log(data)
                    setDataCount(data)
                }
            })
    }
}

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#1f2937] w-full">
      <div className="bg-white min-h-screen w-full p-10 rounded-3xl rounded-e-none rounded-b-none">
        <div>
          {reviews.length === 0 ? (
            <>
              <h4 className="text-4xl">No Review Found</h4>
              <Link to="../../dashboard/add-review" className="btn btn-sm btn-success mt-5">
                Add Review
              </Link>
            </>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Rating</th>
                    <th>descripton</th>
                    <th>Contract</th>
                    <th>Edit</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((user, index) => (
                    <>
                      <tr key={index}>
                        <th className="w-3">{index + 1}</th>
                        <td>{user.name}</td>

                        <td className="w-14">
                          <img
                            className="rounded-full"
                            src={user.image}
                            alt=""
                          />
                        </td>
                        <td>{user.rating}</td>
                        <td className=" w-10">
                          {/* {user.textMe.length > 45
                            ? user.textMe.slice(0, 40) + "..."
                            :  */}
                          {user.textMe}
                          {/* } */}
                        </td>
                        <td>{user.contact}</td>
                        <td>
                          <button
                              onClick={()=>handelEditProduct(user._id)}
                          >
                            <FaRegEdit className="mx-auto cursor-pointer text-blue-200 w-8 h-8 bg-blue-500 p-2 rounded-full" />
                          </button>
                        </td>
                        <td>
                          <button>
                            <HiOutlineTrash
                              onClick={()=>handelDeleteProduct(user._id)}
                              className="mx-auto cursor-pointer text-red-200 w-8 h-8 bg-red-500 p-2 rounded-full"
                            />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
