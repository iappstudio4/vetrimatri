import React from "react"
import MetaTags from "react-meta-tags"
import { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  Container,
  Table,
} from "reactstrap"

const Contactnumbermodal = () => {
  const [modal_standard, setmodal_standard] = useState(false)
  const [modal_large, setmodal_large] = useState(false)
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const [modal_center, setmodal_center] = useState(false)
  const [modal_scroll, setmodal_scroll] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)
  const [modal_backdrop, setmodal_backdrop] = useState(false)

  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_large() {
    setmodal_large(!modal_large)
    removeBodyCss()
  }

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll)
    removeBodyCss()
  }

  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            tog_large()
          }}
          className="btn "
          data-toggle="modal"
          data-target=".bs-example-modal-lg"
          style={{ margin: "2px", backgroundColor: "#E30B5C", color: "white" }}
        >
          <i
            className="bx bx-phone-call
"
          >
            {" "}
          </i>
          &nbsp; Phone number
        </button>
      </div>

      <div>
        <Modal
          size="lg"
          isOpen={modal_large}
          toggle={() => {
            tog_large()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              P.வனராஜ் in Contact Details{" "}
            </h5>
            <button
              onClick={() => {
                setmodal_large(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Row>
              <Col lg={6}>
                <p>பெயர் : P.வனராஜ்</p>

                <p>பதிவு எண் : 02:52:30 </p>
                <p>தொலை பேசி எண்கள் : 9500162232 </p>
              </Col>
              <Col lg={6}>
                <div className="border" style={{ padding: "10px" }}>
                  <p> தங்கள் கணக்கின் விபரம் </p>
                  <p>ஆரம்ப தேதி 19-08-2021</p>
                  <p>முடியும் தேதி 18-08-2022</p>
                </div>
              </Col>
              <Col lg={12}>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <span style={{ fontSize: "1.5em", color: "#E10B5B" }}>
                    நீங்கள் இன்னும் <b>67</b> வரன்களின் தொலை பேசி எண்களை
                    பார்க்கலாம்.
                  </span>
                  <br />
                  <span style={{ fontSize: "1em", color: "#E10B5B" }}>
                    நீங்கள் இந்த வரன்னின் தொலை பேசி எண்களை 15-03-2022 02:52:30
                    அன்று பார்த்தூள்ளிர்கள்.
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Modal>
        <Modal
          size="sm"
          isOpen={modal_small}
          toggle={() => {
            tog_small()
          }}
        >
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="mySmallModalLabel">
              Small Modal
            </h5>
            <button
              onClick={() => {
                setmodal_small(false)
              }}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p className="mb-0">
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Contactnumbermodal
