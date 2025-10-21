import { useState } from "react";
import axios from "axios";
import config from "../config";

export default function DeleteInstagramUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`${config.url}/delete/${userId}`);

      if (response.status === 200) {
        setMessage(response.data);
        setError("");
        setUserId(""); 
      }
    } catch (error) {
      setMessage("");
      console.error("Error deleting user:", error);

      if (error.response) {
        setError(error.response.data || "Server error");
      } else if (error.request) {
        setError("No response from server.");
      } else {
        setError("Request error: " + error.message);
      }
    }
  };

  return (
     <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Delete Instagram User</h3>

        {message && <p className="text-success text-center fw-bold">{message}</p>}
        {error && <p className="text-danger text-center fw-bold">{error}</p>}

        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="text"
              className="form-control"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Delete
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}
