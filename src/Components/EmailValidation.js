import React, { useState } from "react";

function EmailValidation({ placeholder}) {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the email field
    validateEmail(name, value);
  };

  const validateEmail = (name, value) => {
    // Regular expression for validating an email address
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (name === "email") {
      if (!value.trim()) {
        setErrors({
          ...errors,
          [name]: "",
        });
      } else if (!emailRegex.test(value)) {
        setErrors({
          ...errors,
          [name]: "",
        });
      } else {
        
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors before submitting the form
    if (!errors.email) {
      
      console.log("Form submitted:", formData);
    } else {
      
      console.error("Form submission failed due to validation errors.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border">
        <input
          type="email"
          id="email"
          className="email"
          name="email"
          placeholder={placeholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      <div className="submitButton">
                <button type='submit'>Submit</button>
              </div>
    </form>
  );
}

export default EmailValidation;
