import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <form action="">
        <div className="form-data">
          <div className="form-header">
            <h2>Write Your Message Here</h2>
          </div>
          <div className="form-body">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Your Message Here" />
          </div>
          <button type="button">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
