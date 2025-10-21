import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${config.url}/viewall`)
      .then((res) => {
        setUsers(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching users", err);
        setError("Failed to fetch users.");
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">All Instagram Users</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        {users.length === 0 ? (
          <p className="text-center">No users found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>User ID</th>
                  <th>Mobile</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Bio</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.userId}>
                    <td>{u.userId}</td>
                    <td>{u.userMobile}</td>
                    <td>{u.userAge}</td>
                    <td>{u.userGender}</td>
                    <td>{u.userBio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewAllUsers;
