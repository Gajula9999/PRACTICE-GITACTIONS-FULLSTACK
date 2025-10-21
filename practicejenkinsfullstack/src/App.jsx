import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import ViewAllUsers from "./components/ViewAllUsers";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import DisplayUser from "./components/DisplayUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Home with buttons */}
          <Route
            path="/"
            element={
              <div className="text-center">
                <h2 className="fw-bold mb-4">INSTAGRAM MANAGMENT DASHBOARD</h2>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/register" className="btn btn-primary btn-lg">ADD USER</Link>
                  <Link to="/viewall" className="btn btn-success btn-lg">DISPLAY USERS</Link>
                  <Link to="/display" className="btn btn-info btn-lg text-white">DISPLAY USER BY ID</Link>
                  <Link to="/update" className="btn btn-warning btn-lg">UPDATE</Link>
                  <Link to="/delete" className="btn btn-danger btn-lg">DELETE</Link>
                </div>
              </div>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/viewall" element={<ViewAllUsers />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
          <Route path="/display" element={<DisplayUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
