import React from "react"
const AddressMap = () => {
  return (
    <div className="iframe-container" style={{ marginBottom: "100px" }}>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.443900084458!2d78.1604941!3d9.9455233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0cf97d0c93ff8db!2sVetri%20Matrimony!5e0!3m2!1sen!2sin!4v1651732731553!5m2!1sen!2sin"
          width="100%"
          height="400px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  )
}
export default AddressMap
