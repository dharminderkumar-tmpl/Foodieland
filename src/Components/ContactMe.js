import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    fname: "",
    emailId: "",
    subject: "",
    message: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(
          "https://cooking-blogs.onrender.com/api/contact-us",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          console.log("Form submitted successfully!");

          setFormData({
            fname: "",
            emailId: "", // Corrected from "email"
            subject: "",
            message: "",
            enquiry: "",
          });
        } else {
          console.error("Error submitting the form.");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "Name is required";
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(
        formData.emailId
      )
    ) {
      newErrors.emailId = "Invalid email address"; // Corrected from "email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="inputForm">
        <div className="imagecontact">
          <img src={"/Assets/contactimage.webp"} alt="salad" />
        </div>

        <div className="contactmaindiv">
          <h1>Contact us</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fullName">
                <div id="firstname">
                  <label htmlFor="fname">
                    {" "}
                    <div className="samefont">NAME</div>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    name="fname"
                    required
                    placeholder="Enter your name..."
                  />
                  {errors.fname && <p className="error">{errors.fname}</p>}
                </div>
                <div id="lastname">
                  <label htmlFor="emailId">
                    {" "}
                    <div className="samefont">EMAIL ADDRESS </div>
                  </label>
                  <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    id="emailId"
                    required
                    placeholder="Your email address.."
                  />
                  {errors.emailId && <p className="error">{errors.emailId}</p>}
                </div>
              </div>
              <div className="fullName">
                <div className="subject">
                  <label htmlFor="subject">
                    {" "}
                    <div className="samefont">SUBJECT</div>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    id="subject"
                    name="subject"
                    required
                    placeholder="Enter subject.."
                  />
                </div>
                <div className="enquiry">
                  <label htmlFor="enquiry">
                    <div className="samefont">ENQUIRY TYPE</div>
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    value={formData.enquiry}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="advertising">Advertising</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                  </select>
                  {errors.enquiry && <p className="error">{errors.enquiry}</p>}
                </div>
              </div>

              <div id="textmsg">
                <label htmlFor="message">
                  {" "}
                  <div className="samefont">MESSAGES</div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="14"
                  cols="50"
                  placeholder="Enter your messages.."
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <div className="Submitbutton">
                <button type="submit">
                  <h2>Submit </h2>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
