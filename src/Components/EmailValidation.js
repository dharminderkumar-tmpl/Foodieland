import React, { useState } from "react";

function EmailValidation({ placeholder }) {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateEmail(name, value);
  };

  const validateEmail = (name, value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // if (name === "email") {
    //   if (!value.trim()) {
    //     setErrors({
    //       ...errors,
    //       [name]: "Email is required",
    //     });
    //   }  else {
    //     setErrors({
    //       ...errors,
    //       [name]: "",
    //     });
    //   }
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.email) {
      fetch("https://cooking-blogs.onrender.com/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            setIsSuccess(true);
            console.log("Email success:", formData);

            setFormData({
              email: "",
            });
          } else {
            console.error("Form submission failed due to API error.");
          }
        })
        .catch((error) => {
          console.error("Form submission failed due to network error:", error);
        });
    } else {
      console.error("Form submission failed due to validation errors.");
    }
  };

  return (
    <div className="emailformsubmit">
      {isSuccess ? (
        <p className="success">Email successfully registered!</p>
      ) : (
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
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EmailValidation;
