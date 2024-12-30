import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const appointments = [
  {
    patientName: "Jane Smith",
    patientContact: "987-654-3210",
    problem: "Cough",
    doctorName: "Dr. Johnson",
    prescription: "Cough Syrup",
    appointmentTakeDate: "2024-12-21",
    appointmentDate: "2024-12-26",
    appointmentStatus: "Scheduled",
    appointmentPrice: "$120",
  },
  {
    patientName: "John Doe",
    patientContact: "123-456-7890",
    problem: "Fever",
    doctorName: "Dr. Brown",
    prescription: "Paracetamol",
    appointmentTakeDate: "2024-12-20",
    appointmentDate: "2024-12-25",
    appointmentStatus: "Completed",
    appointmentPrice: "$150",
  },

  {
    patientName: "Emily Davis",
    patientContact: "555-123-4567",
    problem: "Back Pain",
    doctorName: "Dr. Taylor",
    prescription: "Ibuprofen",
    appointmentTakeDate: "2024-12-15",
    appointmentDate: "2024-12-22",
    appointmentStatus: "Cancelled",
    appointmentPrice: "$200",
  },
  {
    patientName: "Michael Johnson",
    patientContact: "444-567-8901",
    problem: "Skin Rash",
    doctorName: "Dr. Wilson",
    prescription: "Antihistamine",
    appointmentTakeDate: "2024-12-10",
    appointmentDate: "2024-12-18",
    appointmentStatus: "Completed",
    appointmentPrice: "$90",
  },
  {
    patientName: "Sophia Brown",
    patientContact: "321-654-9870",
    problem: "Migraine",
    doctorName: "Dr. Carter",
    prescription: "Sumatriptan",
    appointmentTakeDate: "2024-12-17",
    appointmentDate: "2024-12-23",
    appointmentStatus: "Scheduled",
    appointmentPrice: "$180",
  },
  {
  patientName: "Jane Smith",
    patientContact: "987-654-3210",
    problem: "Cough",
    doctorName: "Dr. Johnson",
    prescription: "Cough Syrup",
    appointmentTakeDate: "2024-12-21",
    appointmentDate: "2024-12-26",
    appointmentStatus: "Scheduled",
    appointmentPrice: "$120",
  },
  {
    patientName: "John Doe",
    patientContact: "123-456-7890",
    problem: "Fever",
    doctorName: "Dr. Brown",
    prescription: "Paracetamol",
    appointmentTakeDate: "2024-12-20",
    appointmentDate: "2024-12-25",
    appointmentStatus: "Completed",
    appointmentPrice: "$150",
  },


 



];

const AppointmentsTable = () => {
  const [appointmentsData, setAppointmentsData] = useState(appointments);
  const navigate = useNavigate();

  const handleUpdateAppointment = (index) => {
    const appointment = appointmentsData[index];
    navigate(`/update/${index}`, { state: { appointment } });
  };

  const handleCancelAppointment = (index) => {
    setAppointmentsData((prevAppointments) =>
      prevAppointments.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Appointments</h2>
        {appointmentsData.length === 0 ? (
          <p>No appointments available.</p>
        ) : (
          <table className="table table-striped table-hover shadow rounded">
            <thead className="bg-primary text-white text-center">
              <tr>
                <th>Patient Name</th>
                <th>Contact</th>
                <th>Problem</th>
                <th>Doctor</th>
                <th>Prescription</th>
                <th>Booked Date</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr key={index} className="text-center">
                  <td>{appointment.patientName}</td>
                  <td>{appointment.patientContact}</td>
                  <td>{appointment.problem}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.prescription}</td>
                  <td>{appointment.appointmentTakeDate}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        appointment.appointmentStatus === "Scheduled"
                          ? "bg-warning"
                          : appointment.appointmentStatus === "Completed"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {appointment.appointmentStatus}
                    </span>
                  </td>
                  <td>{appointment.appointmentPrice}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateAppointment(index)}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleCancelAppointment(index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AppointmentsTable;
