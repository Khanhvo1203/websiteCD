import React from "react";

export default function Lienhe() {
  return (
    <div
      className="d-flex justify-content-center align-items-center mx-auto my-5"
      style={{ height: "100vh" }}
    >
      <div className="text-center mt-[30rem]">
        <h3 className="display-4 font-weight-bold">Drop Us a Line</h3>
        <p>
          Reach out to us from our contact form and we will get back to you
          shortly.
        </p>
        <div className="container">
          <div className="row gx-4">
            {/* First Name */}
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Jane"
                  required
                />
                <label htmlFor="form_name">First Name *</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter your first name.
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input
                  id="form_lastname"
                  type="text"
                  name="surname"
                  className="form-control"
                  placeholder="Doe"
                  required
                />
                <label htmlFor="form_lastname">Last Name *</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter your last name.
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <div className="form-floating mb-4">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="jane.doe@example.com"
                  required
                />
                <label htmlFor="form_email">Email *</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
            </div>

            {/* Department */}
            <div className="col-md-6">
              <div className="form-select-wrapper mb-4">
                <select
                  className="form-select"
                  id="form-select"
                  name="department"
                  required
                >
                  <option selected disabled value="">
                    Select a department
                  </option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Customer Support">Customer Support</option>
                </select>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please select a department.
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="col-12">
              <div className="form-floating mb-4">
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Your message"
                  style={{ height: "150px" }}
                  required
                  spellCheck="false"
                ></textarea>
                <label htmlFor="form_message">Message *</label>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please enter your message.
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center">
              <input
                type="submit"
                className="btn btn-primary rounded-pill btn-send mb-3"
                value="Send message"
              />
              <p className="text-muted">
                <strong>*</strong> These fields are required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
