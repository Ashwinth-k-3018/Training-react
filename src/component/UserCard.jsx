import React from "react";

export default function Child({name,age,city,mobile,email,occupation,address,}) {
  return (
    <div className="card">
      <h2>{name}</h2>

      <div className="info-row">
        <span className="label">Age</span>
        <span className="colon">:</span>
        <span>{age}</span>
      </div>

      <div className="info-row">
        <span className="label">City</span>
        <span className="colon">:</span>
        <span>{city}</span>
      </div>

      <div className="info-row">
        <span className="label">Mobile</span>
        <span className="colon">:</span>
        <span>{mobile}</span>
      </div>

      <div className="info-row">
        <span className="label">Email</span>
        <span className="colon">:</span>
        <span>{email}</span>
      </div>

      <div className="info-row">
        <span className="label">Occupation</span>
        <span className="colon">:</span>
        <span>{occupation}</span>
      </div>

      <div className="info-row">
        <span className="label">Address</span>
        <span className="colon">:</span>
        <span>{address}</span>
      </div>
    </div>
  );
}