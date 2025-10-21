import { useState } from "react";
import axios from "axios";
import config from "../config";

export default function UpdateUser() {
  const [formData, setFormData] = useState({
    userId: "",
    userMobile: "",
    userAge: "",
    userGender: "",
    userBio: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${config.url}/update`, formData);

      if (response.status === 200) {
        setMessage(response.data);
        setError("");
      }
    } catch (err) {
      setMessage("");
      if (err.response) {
        setError(err.response.data || "Server error");
      } else if (err.request) {
        setError("No response from server.");
      } else {
        setError("Request setup error: " + err.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h3 className="text-center mb-4">Update Instagram User</h3>

            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">User ID</label>
                <input
                  type="text"
                  id="userId"
                  className="form-control"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  id="userMobile"
                  className="form-control"
                  value={formData.userMobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  id="userAge"
                  className="form-control"
                  value={formData.userAge}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  id="userGender"
                  className="form-select"
                  value={formData.userGender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Bio</label>
                <textarea
                  id="userBio"
                  className="form-control"
                  value={formData.userBio}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-warning w-100">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
