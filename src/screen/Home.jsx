import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import doctorImage from "../Image/doctor.jpg" // Replace with your image path

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {/* Welcome Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Welcome, Dr. Smith!</h1>
            <p className="text-muted">
              Your comprehensive healthcare management system for seamless doctor-patient interactions.
            </p>
            <div className="mt-4">
              <Link to="/appointments" className="btn btn-primary btn-lg me-3">
                View Appointments
              </Link>
              <Link to="/patients" className="btn btn-outline-secondary btn-lg">
                Manage Patients
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={doctorImage}
              alt="Doctor"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Upcoming Appointments Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Upcoming Appointments</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Appointment Time</th>
                  <th>Contact</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data */}
                <tr>
                  <td>John Doe</td>
                  <td>10:00 AM, 25th December</td>
                  <td>+123456789</td>
                  <td>Confirmed</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>11:30 AM, 25th December</td>
                  <td>+987654321</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-primary">
              <div className="card-body text-center">
                <h5 className="card-title">Prescriptions</h5>
                <p className="card-text text-muted">
                  Write, view, and send prescriptions efficiently.
                </p>
                <Link to="/prescriptions" className="btn btn-primary">
                  Manage Prescriptions
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-success">
              <div className="card-body text-center">
                <h5 className="card-title">Billing</h5>
                <p className="card-text text-muted">
                  Handle billing and payments effortlessly.
                </p>
                <Link to="/billing" className="btn btn-success">
                  Go to Billing
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-info">
              <div className="card-body text-center">
                <h5 className="card-title">Reports</h5>
                <p className="card-text text-muted">
                  Generate and review detailed reports.
                </p>
                <Link to="/reports" className="btn btn-info">
                  View Reports
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-warning">
              <div className="card-body text-center">
                <h5 className="card-title">Appointments Today</h5>
                <p className="card-text">3 Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-secondary">
              <div className="card-body text-center">
                <h5 className="card-title">Patients Treated</h5>
                <p className="card-text">120 Patients</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-danger">
              <div className="card-body text-center">
                <h5 className="card-title">Prescriptions Issued</h5>
                <p className="card-text">50 Prescriptions</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 EMed - All Rights Reserved</p>
          <p>
            <Link to="/about" className="text-white text-decoration-none me-3">About Us</Link>
            <Link to="/contact" className="text-white text-decoration-none me-3">Contact</Link>
            <Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
