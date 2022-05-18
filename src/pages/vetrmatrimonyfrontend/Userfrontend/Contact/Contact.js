import React from "react"
import { Row } from "reactstrap"
import { Col, Card } from "reactstrap"
import Helpline from "../Homepage/homepageSections/Helpline"
import Map from "./Map"
const contact = () => {
  return (
    <Row style={{ backgroundColor: "white", padding: "20px" }}>
      <Col
        lg="6"
        className="col-md-6 contact-form wow fadeInRight animated animated"
        data-wow-delay=".5s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInRight",
        }}
      >
        <h3 style={{ color: "#E10B5B" }}>Address</h3>
        <div className="col-md-12 contact-left">
          <div className="address">
            <div className=" address-grid">
              <i className="glyphicon glyphicon-map-marker" />
              <div className="address1">
                <h5>பிளாட் நம்பர் : 5, லேக் ஏரியா,</h5>
                <h5>மதுரை மீனாட்சி மிஷன் மருத்துமனை அருகில்</h5>
                <h5>மதுரை-107, தமிழ் நாடு,</h5>
                <h5>இந்தியா.</h5>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className=" address-grid ">
              <i className="glyphicon glyphicon-phone" />

              <div className="clearfix"> </div>
            </div>
            <div className=" address-grid ">
              <i className="glyphicon glyphicon-envelope" />
              <div className="address1">
                <h6></h6>
                <h5>
                  Email:
                  <a href="mailto:vetri@vetrimatrimony.com">
                    {" "}
                    vetri@vetrimatrimony.com
                  </a>
                </h5>
              </div>
              <div className="col-md-12 col-sm-12 divborder1 text-center container">
                <Card style={{ padding: "30px" }}>
                  <h4 style={{ color: "#E10B5B" }}>உதவிக்கு அழையுங்கள்</h4> :{" "}
                  <h5 className="contactnumber">
                    <h1></h1>
                    7397113833, 7397043396, 7397094709, 7397152597, 9629145176,
                    9629145339
                  </h5>
                </Card>
              </div>{" "}
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </Col>
      <Col lg="6">
        <Map />
      </Col>
    </Row>
  )
}

export default contact
