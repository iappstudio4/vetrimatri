import React, { Fragment, useRef } from "react"
import { Row } from "reactstrap"
import { Col } from "reactstrap"
import Onlinepayment from "./Onlinepayment"

import { useState } from "react"
const Schemes = () => {
  let [plan, setplan] = useState("")
  let [amount, setamount] = useState()
  let [selected, setselect] = useState(false)
  const scollToRef = useRef()

  let handlescroll = () => {
    setplan("Plan 1")
    setamount(2000)
    setselect(true)
  }
  let handlescroll2 = () => {
    setplan("Plan 2")
    setamount(3000)
    setselect(true)
  }

  let handlescroll3 = () => {
    setplan("Plan 3")
    setamount(10000)
    setselect(true)
  }

  return (
    <Fragment>
      <Row>
        <Col
          lg="12"
          style={{
            backgroundColor: "white",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <div className="p-4 card-body">
            <div className="media">
              <div className="media-body">
                <h2 style={{ color: "#E10B5B" }}>Plan 1</h2>
              </div>
            </div>

            <div className="plan-features mt-5" style={{ textAlign: "left" }}>
              <h5 style={{ lineHeight: "30px" }}>
                <i
                  style={{ color: "#E00B5C" }}
                  className="fas fa-check  me-2"
                />
                தாங்கள் online மூலம் பயோடேட்டா , ஜாதகம் , போட்டோ முழுவதுமாக
                பார்த்து கொள்ளலாம் உங்களுக்கு பொருத்தமான வரண்களின் தொலைபேசி
                எங்களை 6 மாதத்திற்கு எடுத்து கொள்ளலாம்{" "}
              </h5>
              <h5 style={{ lineHeight: "30px" }}>
                <i
                  style={{ color: "#E00B5C" }}
                  className="fas fa-check  me-2"
                />
                Like , SMS unlimited ஆக அனுப்பி கொள்ளலாம்
              </h5>
              <div className="py-4 text-center">
                <h2>
                  Rs: 2000/ <span className="font-size-13">6 month</span>
                </h2>
              </div>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "#E30B5C", color: "white" }}
                  className="btn btn-md"
                  onClick={() => {
                    scollToRef.current.scrollIntoView()
                    handlescroll()
                  }}
                >
                  Select Plan 1{" "}
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col
          lg="12"
          style={{
            backgroundColor: "white",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          <div className="p-4 card-body">
            <div className="media">
              <div className="media-body">
                <h2 style={{ color: "#E10B5B" }}>Plan 2</h2>
              </div>
            </div>

            <div className="plan-features mt-5" style={{ textAlign: "left" }}>
              <h5>
                <i
                  style={{ color: "#E00B5C" }}
                  className="fas fa-check  me-2"
                />
                தாங்கள் online மூலம் பயோடேட்டா , ஜாதகம் , போட்டோ முழுவதுமாக
                பார்த்து கொள்ளலாம் உங்களுக்கு பொருத்தமான 100 வரண்களின் தொலைபேசி
                எங்களை 1 வருடத்திற்கு எடுத்து கொள்ளலாம்{" "}
              </h5>
              <h5 style={{ lineHeight: "30px" }}>
                <i
                  style={{ color: "#E00B5C" }}
                  className="fas fa-check  me-2"
                />
                Like , SMS unlimited ஆக அனுப்பி கொள்ளலாம்
              </h5>
            </div>
            <div className="py-4">
              <h2>
                Rs: 3000/ <span className="font-size-13">1 year</span>
              </h2>
            </div>
            <div className="text-center">
              <button
                style={{ backgroundColor: "#E30B5C", color: "white" }}
                className="btn btn-md"
                onClick={() => {
                  scollToRef.current.scrollIntoView()
                  handlescroll2()
                }}
              >
                Select Plan 2{" "}
              </button>
            </div>
          </div>
        </Col>
        <Col
          lg="12"
          style={{
            backgroundColor: "white",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          <div className="p-4 card-body">
            <div className="media">
              <div className="media-body">
                <h2 style={{ color: "#E10B5B" }}>Plan 3</h2>
              </div>
              <div className="ms-3"></div>
            </div>

            <div className="text-center">
              <div className="plan-features mt-4" style={{ textAlign: "left" }}>
                <h5 style={{ lineHeight: "30px" }}>
                  <i
                    style={{ color: "#E00B5C" }}
                    className="fas fa-check  me-2"
                  />
                  தாங்கள் online மூலம் பயோடேட்டா , ஜாதகம் , போட்டோ முழுவதுமாக
                  பார்த்து கொள்ளலாம் உங்களுக்கு பொருத்தமான 100 வரண்களின்
                  தொலைபேசி எங்களை 6 வருடத்திற்கு எடுத்து கொள்ளலாம்{" "}
                </h5>
                <h5 style={{ lineHeight: "30px" }}>
                  <i
                    style={{ color: "#E00B5C" }}
                    className="fas fa-check  me-2"
                  />
                  உங்களுக்கு பொருத்தமான வரன்கள் வாரம் ஒருமுறை போட்டோவுடன் வாட்ஸ்
                  ஆப்பிள் அனுப்பி வைக்கப்படும்
                </h5>
                <h5 style={{ lineHeight: "30px" }}>
                  <i
                    style={{ color: "#E00B5C" }}
                    className="fas fa-check  me-2"
                  />
                  எங்கள் நிறுவனத்தில் தனியாக ஒரு நபர் நியமித்து உங்களுக்கு உதவி
                  செய்வார்
                </h5>
                <h5 style={{ lineHeight: "30px" }}>
                  <i
                    style={{ color: "#E00B5C" }}
                    className="fas fa-check  me-2"
                  />
                  ஜாதகம் பொருத்தமாக இருந்தால் அவர்களே பேசி தருவார்கள்
                </h5>
              </div>
              <div className="py-4">
                <h2>
                  Rs: 10000/ <span className="font-size-13">6 month</span>
                </h2>
              </div>
              <button
                ref={scollToRef}
                style={{ backgroundColor: "#E30B5C", color: "white" }}
                className="btn btn-md"
                onClick={() => {
                  scollToRef.current.scrollIntoView()
                  handlescroll3()
                }}
              >
                Select Plan 3{" "}
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <Onlinepayment data={{ amount, plan, selected }} />
    </Fragment>
  )
}

export default Schemes
