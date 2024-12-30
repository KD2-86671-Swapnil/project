import React from "react";
import { useLocation, useParams } from "react-router-dom";

const UpdateAppointmentForm = () => {
  const { state } = useLocation(); // Get state passed from navigate
  const { id } = useParams(); // Get ID from the URL
  const appointment = state?.appointment;

  if (!appointment) {
    return (
      <div className="container mt-5">
        <h2 className="text-center text-danger">Appointment not found!</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <h3>Update Appointment</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Patient Name:</label>
              <input
                type="text"
                className="form-control"
                defaultValue={appointment.patientName}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Problem Description:</label>
              <textarea
                className="form-control"
                rows="3"
                defaultValue={appointment.problem}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Appointment Date:</label>
              <input
                type="date"
                className="form-control"
                defaultValue={appointment.appointmentDate}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Prescription:</label>
              <input
                type="text"
                className="form-control"
                defaultValue={appointment.prescription}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Treatment Price:</label>
              <input
                type="text"
                className="form-control"
                defaultValue={appointment.appointmentPrice}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Appointment Status:</label>
              <select
                className="form-select"
                defaultValue={appointment.appointmentStatus}
              >
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success px-4">
                Update Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAppointmentForm;
