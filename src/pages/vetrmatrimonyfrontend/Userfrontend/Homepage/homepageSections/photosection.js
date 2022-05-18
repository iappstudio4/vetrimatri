import React from "react"
import Class from "./App.css"
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
import { withTranslation, useTranslation } from "react-i18next"

const Photos = () => {
  const { t } = useTranslation()

  return (
    <Row className="bg-white rounded">
      <Col xl="12" style={{ textAlign: "center" }}>
        <h1 className="fontcolor">Photos </h1>
        <p>{t("photosdescription")}</p>
      </Col>
      <div className="bg-white rounded"></div>
      <Col
        xl="6"
        style={{ textAlign: "center", marginTop: "100px", padding: "50px" }}
      >
        <a
          href="https://www.freepnglogos.com/pics/whatsapp-logo-png"
          title="Image from freepnglogos.com"
        >
          <img
            src="https://www.freepnglogos.com/uploads/whatsapp-png-logo-1.png"
            width="200"
            alt="whatsapp png logo"
          />
        </a>
        <h4 style={{ margin: "10px", color: "#E30B5C" }}>{t("whatsapp")}</h4>
        <p>{t("whatsappsend")}</p>
      </Col>

      <Col
        xl="6"
        style={{ textAlign: "center", marginTop: "100px", padding: "50px" }}
      >
        <div>
          <a
            href="https://www.freepnglogos.com/pics/email-logo-png"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/email-logo-png-27.png"
              width="200"
              alt="email logo png"
            />
          </a>
          <h4 style={{ margin: "10px", color: "#E30B5C" }}>{t("email")}</h4>
          <p>{t("emaildescription")}</p>
        </div>
      </Col>
    </Row>
  )
}

export default withTranslation()(Photos)
