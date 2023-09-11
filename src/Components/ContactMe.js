import React from 'react'

const ContactMe = () => {
  return (
    <>
      <div className="inputForm">
        <div className='imagecontact'>
        <img src={"/Assets/contactimage.png"} alt="salad" />
        </div>

        <div>
        <h1>Contact us</h1>
        <div className="form">
          <form>
            <div className="fullName">
              <div id="firstname">
                <label htmlFor="fname">
                  {" "}
                  <b>NAME</b>
                </label>

                <input type="text" id="fname" name="fname" placeholder='Enter your name...'/>
              </div>
              <div id="lastname">
                <label htmlFor="lname">
                  {" "}
                  <b>EMAIL ADDRESS </b>
                </label>

                <input type="email" id="lname" name="fname" placeholder='Your email address..' />
              </div>
            </div>
            <div className="fullName">
              <div id="firstname">
                <label htmlFor="fname">
                  {" "}
                  <b>SUBJECT</b>
                </label>

                <input type="text" id="fname" name="fname"  placeholder='Enter subject..'/>
              </div>
              <div id="lastname">
                <label htmlFor="lname">
                  {" "}
                  <b>ENQUIRY TYPE </b>
                </label>

                <input type="text" id="lname" name="fname" />
              </div>
            </div>
            
            <div id="textmsg">
              <label htmlFor="message"> <b>MESSAGES</b></label>

              <input type="text" id="message" name="message" placeholder='Enter your messages..' />
            </div>
          </form>
          <div className="Sendbutton">
          <button>
            <h2>Submit </h2>
          </button>
        </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default ContactMe