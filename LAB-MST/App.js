import React, { useState } from "react";

export default function FormA() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNo: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("✅ Submitted Data:", formData);
  };

  return (
    <div>
      <h2>React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="phoneNo"
          placeholder="Enter Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
          <p>Phone No: {submittedData.phoneNo}</p>
        </div>
      )}
    </div>
  );
}
