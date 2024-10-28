import React from "react";
import StatisticsCards from "../../components/StatisticsCards";
import PatientsStatistics from "../../components/PatientsStatistics";
import AppointmentsList from "../../components/AppointmentList";
import BillingTable from "../../components/BillingTable";
import PatientsSummary from "../../components/PatientsSummary";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen space-y-8">
      {/* Top Section: Statistics and Billing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics Cards */}
        <div className="col-span-2 space-y-4">
          <StatisticsCards />
          <PatientsStatistics />
        </div>

        {/* Billing & Payments Card */}
        <BillingTable />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments List */}
        <AppointmentsList />

        {/* Patients Summary Card */}
        <PatientsSummary />
      </div>
    </div>
  );
};

export default AdminDashboard;
