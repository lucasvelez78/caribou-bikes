function ContactInfoItem(props) {
  return (
    <div className="contact-info">
      <div className="contact-icon">{props.icon}</div>
      <div className="contact-info-text">{props.text}</div>
    </div>
  );
}

export default ContactInfoItem;
