import { useState } from "react";
import axios from "axios";
import config from "../config";

export default function DisplayUser() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${config.url}/display`, {
        params: { userId },
      });

      setUser(response.data);
      setMessage("User found successfully!");
      setError("");
    } catch (err) {
      setUser(null);
      setMessage("");
      if (err.response) {
        setError(err.response.data || "User not found.");
      } else if (err.request) {
        setError("No response from server.");
      } else {
        setError("Request error: " + err.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h3 className="text-center mb-4">Display Instagram User</h3>

            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSearch}>
              <div className="mb-3">
                <label className="form-label">Enter User ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-info w-100 text-white">
                Search
              </button>
            </form>

            {user && (
              <div className="mt-4">
                <h5 className="text-center">User Details</h5>
                <table className="table table-bordered mt-3">
                  <tbody>
                    <tr>
                      <th>User ID</th>
                      <td>{user.userId}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>{user.userMobile}</td>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <td>{user.userAge}</td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td>{user.userGender}</td>
                    </tr>
                    <tr>
                      <th>Bio</th>
                      <td>{user.userBio}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
