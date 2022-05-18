import React from "react"
import Breadcrumb from "components/Common/Breadcrumb"
import Paginationcoomponent from "./Paginationcomponent"
import { useState } from "react"
import { withTranslation, useTranslation } from "react-i18next"

import { Col, Row, Card, CardBody, Container, Table } from "reactstrap"
import { Link } from "react-router-dom"
import SingleImage from "./Singleimage"
import Helpline from "../Homepage/homepageSections/Helpline"
const Resultpage = () => {
  const [settingsMenu, setSettingsMenu] = useState(false)
  //Setting Menu

  const { t } = useTranslation()

  return (
    <div>
      {/* <Breadcrumb
        title="My account"
        breadcrumbItem={`${"Search Results  - 200"}`}
      /> */}

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
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col lg={6} className="text-center">
            <img
              style={{ width: "300px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
            />
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
                    <td>Own Business Juiceshop &amp; Fruit Shop</td>
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
                  </tr>{" "}
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Resultpage
