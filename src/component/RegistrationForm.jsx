import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const newErrors = {};

        // First Name
        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First Name is required";
        } else if (formData.firstName.length < 3) {
            newErrors.firstName = "Minimum 3 characters required";
        }

        // Last Name
        if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last Name is required";
        } else if (formData.lastName.length < 1) {
            newErrors.lastName = "Minimum 1 characters required";
        }

        // Email
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email";
        }

        // Mobile
        if (formData.mobile.trim() === "") {
            newErrors.mobile = "Mobile Number is required";
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10 digit mobile number";
        }

        // Password
        if (formData.password === "") {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Minimum 8 characters required";
        }

        // Confirm Password
        if (formData.confirmPassword === "") {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Date of Birth
        if (formData.dob === "") {
            newErrors.dob = "Date of Birth is required";
        }

        // Gender
        if (formData.gender === "") {
            newErrors.gender = "Select Gender";
        }

        // Address
        if (formData.address.trim() === "") {
            newErrors.address = "Address is required";
        } else if (formData.address.length < 40) {
            newErrors.address = "Minimum 30 characters required";
        }

        // City
        if (formData.city.trim() === "") {
            newErrors.city = "City is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            setSuccessMessage("Registration Successful!");
            setIsSubmitted(true);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                mobile: "",
                password: "",
                confirmPassword: "",
                dob: "",
                gender: "",
                address: "",
                city: ""
            });

            setErrors({});

        } else {

            setSuccessMessage("");

        }


    };

    return (

        <div className="container">

            <div className="form-card">

                <h1>Registration Form</h1>

                {!isSubmitted && (
                    <p className="subtitle">
                        Complete the details below
                    </p>
                )}

                {
                    isSubmitted ? (

                        <div className="success-container">

                            <div className="success-message">
                                ✅ Registration Completed Successfully!
                            </div>

                            <button
                                type="button"
                                className="submit-btn"
                                onClick={() => {

                                    setIsSubmitted(false);

                                    setFormData({
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        mobile: "",
                                        password: "",
                                        confirmPassword: "",
                                        dob: "",
                                        gender: "",
                                        address: "",
                                        city: ""
                                    });

                                    setErrors({});

                                }}
                            >
                                Submit Another Form
                            </button>

                        </div>

                    ) : (

                        <form onSubmit={handleSubmit}>

                            <div className="grid">

                                <div className="input-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter your first name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.firstName}</small>
                                </div>

                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter your last name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.lastName}</small>
                                </div>

                                <div className="input-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.email}</small>
                                </div>

                                <div className="input-group">
                                    <label>Mobile Number</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        placeholder="Enter your mobile number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.mobile}</small>
                                </div>

                                <div className="input-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.password}</small>
                                </div>

                                <div className="input-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.confirmPassword}</small>
                                </div>

                                <div className="input-group">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                    />
                                    <small>{errors.dob}</small>
                                </div>

                                <div className="input-group">
                                    <label>Gender</label>

                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>

                                    <small>{errors.gender}</small>

                                </div>

                                <div className="input-group full-width">
                                    <label>Address</label>

                                    <textarea
                                        rows="4"
                                        name="address"
                                        placeholder="Enter your address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />

                                    <small>{errors.address}</small>

                                </div>

                                <div className="input-group full-width">
                                    <label>City</label>

                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter your city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />

                                    <small>{errors.city}</small>

                                </div>

                            </div>

                            <button type="submit">
                                Register
                            </button>

                        </form>
                    )
                }

            </div>

        </div>

    );

}