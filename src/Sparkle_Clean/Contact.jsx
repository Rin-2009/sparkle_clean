import "./Sparkle_Clean.css/Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact section-padding px-sm-5" id="contact">
      <div className="container">
        <div className="contact-title">
          <span className="hidden-up">Contact</span>
          <h2 className="hidden-up">Get in Touch</h2>
          <p className="hidden-up">
            Ready for a cleaner space? Book your cleaning or ask us a question.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form hidden-up">
            <div className="input-row">
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Jane Smith" />
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input type="email" placeholder="jane@example.com" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-box">
                <label>Phone Number</label>
                <input type="text" placeholder="(555) 000-0000" />
              </div>

              <div className="input-box">
                <label>Service Needed</label>

                <select>
                  <option>Select a service</option>
                  <option>Standard Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Move In Cleaning</option>
                  <option>Move Out Cleaning</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>Preferred Date</label>

              <input type="date" />
            </div>

            <div className="input-box">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Tell us about your cleaning needs..."
              ></textarea>
            </div>

            <button>Request Cleaning</button>
          </div>

          <div className="contact-info hidden-up">
            <div className="info-box">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h5>Visit Us</h5>

                <p>
                  456 Clean Street
                  <br />
                  Portland, OR 97201
                </p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h5>Call Us</h5>

                <p>(555) 867-5309</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h5>Email Us</h5>

                <p>hello@sparkleclean.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon">
                <FaClock />
              </div>

              <div>
                <h5>Office Hours</h5>

                <p>
                  Monday - Friday &nbsp;&nbsp;&nbsp; 7:00 AM - 7:00 PM
                  <br />
                  Saturday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  8:00 AM - 5:00 PM
                  <br />
                  Sunday
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  10:00 AM - 4:00 PM
                </p>
              </div>
            </div>

            <div className="map-box hidden-up">
              <FaMapMarkerAlt className="map-icon" />

              <p>Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
