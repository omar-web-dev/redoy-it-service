import { API_URL } from "../Components/API_URL";
import { useEffect, useState } from "react";



const Users = () => {



const [users, setReviews] = useState([]);
// const [dataCount, setDataCount] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchReviews();
}, []);

const fetchReviews = async () => {
  setLoading(true);
  try {
    const response = await fetch(`${API_URL}users`);
    const data = await response.json();
    setReviews(data);
    setLoading(false);
  } catch (error) {
    console.error(error);
  }
};


if (loading) {
  return <div>Loading...</div>;
}


  return (
    <div className="bg-[#1f2937] w-full">
      <div className="bg-white min-h-screen w-full p-10 rounded-3xl rounded-e-none rounded-b-none">
        {users.length === 0 ? (
          <>
            <h4 className="text-4xl">No Have Subscriber</h4>
          </>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contract</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <>
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{user.name} </td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
