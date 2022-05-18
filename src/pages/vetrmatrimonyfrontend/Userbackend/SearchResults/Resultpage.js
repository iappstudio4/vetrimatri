import React from "react"
import Breadcrumb from "components/Common/Breadcrumb"
import Paginationcoomponent from "./Paginationcomponent"
import Image from "./Image"
import { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"

import { Col, Row, Card, CardBody, Container, Table } from "reactstrap"
import ZodiacModal from "./ZodiacModal"
import Contactnumbermodal from "./Contactnumbermodal"
import { Link } from "react-router-dom"
import SingleImage from "./Singleimage"
const Resultpage = () => {
  const [settingsMenu, setSettingsMenu] = useState(false)
  //Setting Menu

  const { t } = useTranslation()

  return (
    <div className="container-fluid">
      <Breadcrumb
        title="My account"
        breadcrumbItem={`${"Search Results  (200)"}`}
      />

      <Container
        style={{
          backgroundColor: "white",
          padding: "10px",
          marginBottom: "25px",
        }}
      >
        <Row className="h4" style={{ margin: "0px" }}>
          <Col lg="6" md="6" sm="6" xs="6">
            <h3 style={{ color: "#FFFFFF" }}>#NDF00002</h3>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6" style={{ textAlign: "right" }}>
            <h3 style={{ color: "#FFFFFF" }}>
              <i
                style={{ textAlign: "right", fontSize: "18px" }}
                className="bx bx-phone"
              ></i>
              <i
                style={{ textAlign: "right", fontSize: "18px" }}
                className="bx bx-world"
              ></i>
              <i
                style={{ textAlign: "right", fontSize: "18px" }}
                className="bx bx-image"
              ></i>
            </h3>
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col lg={6}>
            <Image />
          </Col>
          <Col lg={6}>
            <h3> </h3>
            <Row>
              <Col md="6">
                <h3
                  style={{
                    color: "#E30B5C",
                    fontWeight: "bold",
                    marginLeft: "12px",
                  }}
                >
                  D.ராகினி
                </h3>
                {/*<i
                  style={{ color: "#E30B5C" }}
                  className="bx bx-phone bx-sm"
                ></i>
                <i
                  style={{ color: "#E30B5C" }}
                  className="bx bx-world bx-sm"
                ></i>*/}
              </Col>
              <Col md="6">
                <div>
                  <h3> </h3>
                </div>
              </Col>
            </Row>
            <div
              className="table "
              style={{
                display: "flex",
                justifyContent: "center",
                overflowWrap: "anywhere",
              }}
            >
              <Table>
                <tbody>
                  <tr>
                    <td style={{ widht: "100px" }}>இனம் :</td>
                    <td>நாடார் - பெண் </td>
                  </tr>
                  <tr>
                    <td>பிறந்த தேதி :</td>
                    <td>11-02-1996 (26)</td>
                  </tr>
                  <tr>
                    <td>நட்சத்திரம்:</td>
                    <td>பூரம் பாதம் </td>
                  </tr>
                  <tr>
                    <td>கல்வி தகுதி :</td>
                    <td>MCA</td>
                  </tr>
                  <tr>
                    <td>வேலை/தொழில் :</td>
                    <td>
                      Own Business Juiceshop &amp; Fruit Shop
                      asdasdasdasdasdasdasdasdasdasd
                    </td>
                  </tr>
                  <tr>
                    <td>பணிபுரியும் இடம் :</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>சம்பளம் :</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>இருப்பிடம் :</td>
                    <td>மதுரை</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center ">
          <Col lg={6}>
            <CardBody>
              <div
                className="table "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  overflowWrap: "anywhere",
                }}
              >
                <Table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>குல தெய்வம் :</td>
                      <td>சீலைக்காரி அம்மன் </td>
                    </tr>

                    <tr>
                      <td>சொத்துக்கள்:</td>
                      <td>- </td>
                    </tr>
                    <tr>
                      <td>நட்சத்திரம்:</td>
                      <td>பூரம் பாதம் </td>
                    </tr>

                    <tr>
                      <td>எதிர்பார்ப்பு :</td>
                      <td>Any Degree,நல்லகுடும்பம்</td>
                    </tr>
                    <tr>
                      <td>உட்பிரிவு :</td>
                      <td>இந்து</td>
                    </tr>
                    <tr>
                      <td>பிறந்த நேரம் :</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>நிறம் :</td>
                      <td>சிகப்பு</td>
                    </tr>
                    <tr>
                      <td>உயரம் :</td>
                      <td>5.4</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Col>
          <Col lg={6}>
            <CardBody>
              <div
                className="table "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  overflowWrap: "anywhere",
                }}
              >
                {" "}
                <Table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>சம்பளம் :</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>தாயார் பெயர் :</td>
                      <td>D.வைகுண்டலட்சுமி</td>
                    </tr>
                    <tr>
                      <td>தாயார் வேலை :</td>
                      <td>இல்லத்தரசி</td>
                    </tr>
                    <tr>
                      <td>திருமணமானவர் :</td>
                      <td>ஆண் பெண் </td>
                    </tr>
                    <tr>
                      <td> கல்வியின் நிலை:</td>
                      <td>Post Graduate </td>
                    </tr>
                    <tr>
                      <td>ராசி:</td>
                      <td>சிம்மம் </td>
                    </tr>
                    <tr>
                      <td>லக்னம்:</td>
                      <td> கும்பம் </td>
                    </tr>
                    <tr>
                      <td>சீர் வருசை:</td>
                      <td>நேரில் </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Col>

          <Col lg={12}>
            <CardBody>
              <Row></Row>
            </CardBody>
          </Col>

          <Row>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ZodiacModal />

              <Contactnumbermodal />

              <Link to="/user/print">
                <button
                  style={{
                    margin: "2px",
                    backgroundColor: "#E30B5C",
                    color: "white",
                  }}
                  className="btn"
                >
                  {" "}
                  <i
                    className="bx bx-printer


"
                  >
                    {" "}
                  </i>
                  &nbsp; Print Details
                </button>{" "}
              </Link>
            </div>
          </Row>
        </Row>
      </Container>

      <Paginationcoomponent />
      <Row style={{ marginTop: "30px" }}>
        <Col className="col-12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="12">
                  <div className="clearfix mt-4 mt-lg-0">
                    <span style={{ color: "#337ab7", fontWeight: 600 }}>
                      அன்பான வாடிக்கையாளர்களின் கவனத்திற்கு மற்ற திருமண தகவல்
                      மையங்களில் தாங்கள் முகவரிக்கு POSTAL - தபாலில் ஜாதகத்தை
                      அனுப்பி பணம் பெற முயற்சி செய்வார்கள் அவர்களிடம்
                      ஏமாறவேண்டாம் எச்சரிக்கையுடன் இருக்கும்படி
                      கேட்டுக்கொள்கிறோம்.
                    </span>
                  </div>
                </Col>
              </Row>{" "}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Resultpage
