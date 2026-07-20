// EmployeeDashboard.jsx
import React, { useState } from "react";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showProfile, setShowProfile] = useState(false);

    const employees = [
        {
            id: 1,
            name: "Ananya Rajan",
            age: 27,
            city: "Chennai",
            email: "ananyarajan@gmail.com",
            occupation: "UI/UX Designer",
        },
        {
            id: 2,
            name: "Karthik Iyer",
            age: 31,
            city: "Bengaluru",
            email: "karthikiyer@gmail.com",
            occupation: "Backend Developer",
        },
        {
            id: 3,
            name: "Priya Sharma",
            age: 25,
            city: "Hyderabad",
            email: "priyasharma@gmail.com",
            occupation: "QA Engineer",
        },
        {
            id: 4,
            name: "Rohit Verma",
            age: 34,
            city: "Pune",
            email: "rohitverma@gmail.com",
            occupation: "Project Manager",
        },
        {
            id: 5,
            name: "Meera Nair",
            age: 29,
            city: "Kochi",
            email: "meeranair@gmail.com",
            occupation: "Frontend Developer",
        },
    ];

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-left">
                    <h1 className="dashboard-title">Employee Dashboard</h1>
                    <p className="dashboard-subtitle">
                        {isLoggedIn ? "Welcome Back!" : "Please Login"}
                    </p>
                </div>

                <div className="header-right">
                    <span
                        className={
                            isLoggedIn ? "status-badge status-online" : "status-badge status-offline"
                        }
                    >
                        {isLoggedIn ? "Online" : "Offline"}
                    </span>
                    <button className="btn btn-primary" onClick={toggleLogin}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </header>

            {isLoggedIn ? (
                <section className="profile-section">
                    <button className="btn btn-secondary" onClick={toggleProfile}>
                        {showProfile ? "Hide Profile" : "Show Profile"}
                    </button>

                    {showProfile ? (
                        <div className="profile-card">
                            <h2 className="profile-name">Ashwinth K</h2>
                            <p className="profile-role">Java Full Stack Developer</p>
                            <p className="profile-detail">Location: Chennai, Tamil Nadu</p>
                            <p className="profile-detail">Department: Engineering</p>
                        </div>
                    ) : null}
                </section>
            ) : (
                <section className="login-section">
                    <p className="login-message">
                        You are currently logged out. Please login to view the employee
                        records.
                    </p>
                </section>
            )}

            {isLoggedIn ? (
                <section className="employee-list-section">
                    <h2 className="section-heading">Employee Records</h2>
                    <div className="employee-grid">
                        {employees.map((employee) => (
                            <div className="employee-card" key={employee.id}>
                                <div className="card-header">
                                    <h3 className="employee-name">{employee.name}</h3>
                                    <span className="employee-age">Age: {employee.age}</span>
                                </div>
                                <div className="card-divider"></div>
                                <p className="employee-detail">
                                    <span className="detail-label">City:</span> {employee.city}
                                </p>
                                <p className="employee-detail">
                                    <span className="detail-label">Email:</span>{" "}
                                    {employee.email}
                                </p>
                                <p className="employee-detail">
                                    <span className="detail-label">Occupation:</span>{" "}
                                    {employee.occupation}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            ) : null}
        </div>
    );
}

export default EmployeeDashboard;