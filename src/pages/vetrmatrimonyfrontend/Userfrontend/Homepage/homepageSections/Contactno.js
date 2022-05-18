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

const Numbers = () => {
  const { t } = useTranslation()

  return (
    <div className="container">
      <Row>
        <Col lg="12">
          <Card style={{ padding: "20px" }}>
            <h3 className="fontcolor  text-center"> முதல் தளம்</h3>

            <font face="Verdana" size={3}>
              நாடார், யாதவர், அகமுடையார், கள்ளர், மறவர், கிறிஸ்தவர், ரெட்டியார்,
              முஸ்லீம், அருந்ததியர், நாயர், நாயுடு
            </font>
            <div
              className="row text-center"
              style={{
                color: "#e81478",
                fontWeight: 600,
                fontSize: "1.5em",
              }}
            >
              <div className="col-md-12 contactnumber">
                <i
                  className="fa fa-phone-square fa-lg border "
                  style={{ margin: "10px 15px" }}
                />{" "}
                73975 66259, 82203 97579, 82207 53511, 82207 53866, 82207 53832{" "}
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="12">
          <Card style={{ padding: "20px" }}>
            <h3 className="fontcolor  text-center">இரண்டாம் தளம்</h3>

            <font face="Verdana" size={3}>
              அசைவப்பிள்ளைமார், சைவப்பிள்ளை, இல்லத்து பிள்ளைமார், முதலியார், ஆதி
              திராவிடர், தேவேந்திர குல வேளாளர், கம்மவார் நாயுடு, மூப்பனார்,
              மருத்துவர், வீரசைவம், கவுண்டர்
            </font>
            <div
              className="row text-center"
              style={{
                color: "#e81478",
                fontWeight: 600,
                fontSize: "1.5em",
              }}
            >
              <div className="col-md-12 contactnumber">
                <i
                  className="fa fa-phone-square fa-lg border "
                  style={{ margin: "10px 15px" }}
                />{" "}
                73391 10735, 73971 13833, 97891 01642, 73391 67362, 96291 45339{" "}
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="12">
          <Card style={{ padding: "20px" }}>
            <h3 className="fontcolor  text-center"> மூன்றாம் தளம்</h3>

            <font face="Verdana" size={3}>
              ஆசாரியர், செட்டியார், வண்ணார், வன்னியர், செளராஷ்டிரா, நாயக்கர்,
              வேளார், உடையார், மறுமணம், மாற்றுதிறனாளி
            </font>
            <div
              className="row text-center"
              style={{
                color: "#e81478",
                fontWeight: 600,
                fontSize: "1.5em",
              }}
            >
              <div className="col-md-12 contactnumber">
                <i
                  className="fa fa-phone-square fa-lg border "
                  style={{ margin: "10px 15px" }}
                />{" "}
                73970 43396, 73970 94709, 73971 52597, 73391 07592, 96291 45176{" "}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Numbers
