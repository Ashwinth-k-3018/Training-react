import React, { useReducer, useState } from "react";
import "./UserReducerForm.css";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                [action.name]: action.value,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

export default function UserReducerForm() {
    const [formData, dispatch] = useReducer(reducer, initialState);

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validate = () => {
        let newErrors = {};

        if (formData.firstName === "") {
            newErrors.firstName = "First Name is required";
        }

        if (formData.lastName === "") {
            newErrors.lastName = "Last Name is required";
        }

        if (formData.email === "") {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Enter valid Email";
        }

        if (formData.mobile === "") {
            newErrors.mobile = "Mobile Number is required";
        } else if (formData.mobile.length !== 10) {
            newErrors.mobile = "Enter 10 digit Mobile Number";
        }

        if (formData.password === "") {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Minimum 8 characters";
        }

        if (formData.confirmPassword === "") {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Password does not match";
        }

        if (formData.dob === "") {
            newErrors.dob = "Date of Birth is required";
        }

        if (formData.gender === "") {
            newErrors.gender = "Select Gender";
        }

        if (formData.address === "") {
            newErrors.address = "Address is required";
        }

        if (formData.city === "") {
            newErrors.city = "City is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        dispatch({
            type: "UPDATE",
            name: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setSuccess("Registration Successful!");
        } else {
            setSuccess("");
        }
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
        setErrors({});
        setSuccess("");
    };

    return (
        <div className="container">
            {success ? (
                <div className="form success-screen">
                    <h2>{success}</h2>
                    <p className="subtitle">Your registration has been completed successfully!</p>
                    <button 
                        type="button" 
                        onClick={handleReset}
                        className="continue-btn"
                    >
                        Register Another User
                    </button>
                </div>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Registration Form</h2>
                    <p className="subtitle">Fill in your details to create an account</p>
                    <hr />

                    <div className="input-group">
                        <label>
                            First Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <span>{errors.firstName}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Last Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <span>{errors.lastName}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Email <span className="required">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span>{errors.email}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Mobile Number <span className="required">*</span>
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Enter 10 digit mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        <span>{errors.mobile}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Password <span className="required">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password (min 8 characters)"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span>{errors.password}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Confirm Password <span className="required">*</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <span>{errors.confirmPassword}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Date of Birth <span className="required">*</span>
                        </label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        <span>{errors.dob}</span>
                    </div>

                    <div className="input-group">
                        <label>
                            Gender <span className="required">*</span>
                        </label>

                        <div className="gender">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />
                                Male
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />
                                Female
                            </label>
                        </div>

                        <span>{errors.gender}</span>
                    </div>

                    <div className="input-group address-group">
                        <label>
                            Address <span className="required">*</span>
                        </label>
                        <textarea
                            name="address"
                            placeholder="Enter your full address"
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                        <span>{errors.address}</span>
                    </div>

                    <div className="input-group city-group">
                        <label>
                            City <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        <span>{errors.city}</span>
                    </div>

                    <div className="button-group">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}