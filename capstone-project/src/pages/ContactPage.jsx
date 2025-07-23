import '../css/pages/ContactPage.css'

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Name</h3>
          <p>bindhu</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>bindhu@recipefinder.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>1234567890</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>Bangalore</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage