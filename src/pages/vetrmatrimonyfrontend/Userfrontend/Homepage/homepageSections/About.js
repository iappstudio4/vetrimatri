import React from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  CustomInput,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { withTranslation, useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()

  return (
    <div
      className="container"
      style={{ marginTop: "30px", marginBottom: "50px" }}
    >
      <Row>
        <Col lg="12">
          <div className="text-center ">
            <h1 style={{ color: "#E30B5C", marginBottom: "100px" }}>
              {t("Our services")}
            </h1>

            <Row className="justify-content-center mt-">
              <Col md="8"></Col>
            </Row>
          </div>
        </Col>
        <Col xl="4 " style={{ textAlign: "center" }}>
          <Card style={{ padding: "20px", height: "280px" }}>
            <i
              className="fas fas fa-pen fa-4x"
              style={{ marginBottom: "40px" }}
            ></i>
            <h3>{t("freeregister")}</h3>
            <p>{t("freedescription")}</p>
          </Card>
        </Col>
        <Col xl="4 " style={{ textAlign: "center" }}>
          <Card style={{ padding: "20px", height: "280px" }}>
            <i
              className="fas fas fa-search
fa-4x"
              style={{ marginBottom: "40px" }}
            ></i>
            <h3>{t("searchfreetitle")}</h3>
            <p>{t("searchdescription")}</p>
          </Card>
        </Col>
        <Col xl="4 " style={{ textAlign: "center" }}>
          <Card style={{ padding: "20px", height: "280px" }}>
            <i
              className="fas fa-male fa-4x"
              style={{ marginBottom: "40px" }}
            ></i>
            <h3>{t("tous")}</h3>
            <p>{t("tousdescription")}</p>
          </Card>
        </Col>

        {/* <Col xl="12" style={{ textAlign: "center", marginTop: "100px" }}>
          <i
            className="fas fas fa-globe-americas
fa-4x"
            style={{ marginBottom: "40px" }}
          ></i>
          <h3>{t("internetservice")}</h3>
          <p>{t("internetservicedescription")}</p>
        </Col> */}
      </Row>
    </div>
  )
}

export default withTranslation()(About)
