import { MdPlace, MdPhone, MdEmail } from "react-icons/md";
import ContactInfoItem from "../components/ContactInfoItem";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <p>Get in touch</p>
        <h1>Contact</h1>
      </div>
      <div className="contact-section-wrapper">
        <div className="contact-left">
          <ContactInfoItem
            icon={<MdPhone size={"2em"} />}
            text="+5743128762244"
          />
          <ContactInfoItem
            icon={<MdEmail size={"2em"} />}
            text="cariboubikes@email.com"
          />
          <ContactInfoItem
            icon={<MdPlace size={"2em"} />}
            text="Medellin, CO"
          />
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
