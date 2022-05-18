import React, { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation"

import { Form, Card, CardBody, Col, Row, CardTitle, Label } from "reactstrap"
import gpay from "./images/gpay.png"
import gpayimg from "./images/gpay.jpg"
import phonepe from "./images/phonepe.png"
import phonepeimg from "./images/phonepe.jpg"
import sbi from "./images/sbi.png"
import icic from "./images/icici.jpg"
import axis from "./images/axis.jpg"
import tmb from "./images/tmb.jpg"
import indian from "./images/indian.jpg"
import kvb from "./images/kvb.png"
//Import Breadcrumb
import Breadcrumb from "components/Common/Breadcrumb"
import { Link } from "react-router-dom"
const FormElements = () => {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <h2
        style={{ color: "#E10B5B ", marginTop: "50px" }}
        className="text-center mb-5"
      >
        Payment options
      </h2>
      <Row
        style={{ marginTop: "50px", backgroundColor: "white", padding: "30px" }}
      >
        <Col lg={6} style={{ display: "flex" }}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={gpay} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">Google pay</div>
                <p>
                  Phone No : <b>7358 999 526</b> <br /> Name : vetri thirumana
                  thagaval myam
                </p>
                <p>
                  Phone No : <b>9600 291 156</b> <br /> Name : vetri thirumana
                  thagaval myam
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={phonepe} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">PhonePe</div>
                <p>
                  Phone No : <b>7358 999 526</b> <br /> Name : vetri thirumana
                  thagaval myam
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="text-center" style={{ backgroundColor: "white" }}>
        <Col lg="6" style={{ marginBottom: "60px" }}>
          <img
            style={{ width: "400px", height: "500px", margin: "5px" }}
            src={gpayimg}
            className="img-fluid"
          />
        </Col>
        <Col lg="6">
          <img
            style={{ width: "400px", height: "500px", margin: "5px" }}
            src={phonepeimg}
            className="img-fluid"
          />
        </Col>
      </Row>
      <h2
        style={{ color: "#E10B5B ", marginTop: "50px" }}
        className="text-center mb-5"
      >
        Bank details
      </h2>
      <Row
        style={{ marginTop: "50px", backgroundColor: "white", padding: "30px" }}
      >
        <Col lg={6} style={{ display: "flex" }}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={icic} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">ICIC Bank</div>
                <p>
                  A/c Number : 601605014462 <br /> A/c Name : vetri thirumana
                  thagaval myam
                  <br /> Branch : K.K.Nagar, Madurai
                  <br /> Branch Code : 006016
                  <br /> IFSC Code : ICIC0006016
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={sbi} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">State Bank of India</div>
                <p>
                  A/c Number : 31100244807 <br /> A/c Name : vetri thirumana
                  thagaval myam
                  <br /> Branch : Madurai main
                  <br /> Branch Code : 00869
                  <br /> IFSC Code : SBIN0000869
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} style={{ display: "flex" }}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={kvb} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">Karur Vysya Bank</div>
                <p>
                  A/c Number : 1853135000000684 <br /> A/c Name : vetri
                  thirumana thagaval myam
                  <br /> Branch : Mattuthavani, Madurai
                  <br /> Branch Code : 1853
                  <br /> IFSC Code : KVBL0001853
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={tmb} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">Tamilnad Mercantile</div>
                <p>
                  A/c Number : 45150 11111 11111 <br /> A/c Name : vetri
                  thirumana thagaval myam
                  <br /> Branch : K.K. Nagar, Madurai
                  <br /> Branch Code : 000451
                  <br /> IFSC Code : TMBL0000451
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} style={{ display: "flex" }}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={indian} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">Indian Bank</div>

                <p>
                  A/c Number : 6271766302 <br /> A/c Name : vetri thirumana
                  thagaval myam
                  <br /> Branch : Pudur, Madurai
                  <br /> Branch Code : 00P053
                  <br /> IFSC Code : IDBI000P053
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="no-gutters align-items-center row">
            <div className="col-md-4">
              <img src={axis} alt="Skote" className="img-fluid card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">Axis Bank</div>
                <p>
                  A/c Number : 917020053783124 <br /> A/c Name : vetri thirumana
                  thagaval myam
                  <br /> Branch : Madurai main
                  <br /> Branch Code : 000109
                  <br /> IFSC Code : UTIB0000109
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FormElements
