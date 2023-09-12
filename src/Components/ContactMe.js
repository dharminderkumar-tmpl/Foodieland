import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data before submission
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.fname.trim()) {
      newErrors.fname = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Validate message
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
          <img src={"/Assets/contactimage.png"} alt="salad" />
        </div>

        <div>
          <h1>Contact us</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="fullName">
                <div id="firstname">
                  <label htmlFor="fname">
                    {" "}
                    <b>NAME</b>
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
                  <label htmlFor="lname">
                    {" "}
                    <b>EMAIL ADDRESS </b>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="lname"
                    required
                    placeholder="Your email address.."
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="fullName">
                <div id="firstname">
                  <label htmlFor="fname">
                    {" "}
                    <b>SUBJECT</b>
                  </label>

                  <input
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    id="fname"
                    name="subject"
                    required
                    placeholder="Enter subject.."
                  />
                </div>
                <div id="lastname">
  <label htmlFor="enquiry">
    <b>ENQUIRY TYPE</b>
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
                  <b>MESSAGES</b>
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
