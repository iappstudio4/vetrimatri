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

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <div style={{}}>
      <Row
        className={"welcome"}
        style={{
          backgroundColor: "white",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg="12">
          <div className="text-center">
            <h1 style={{ color: "white", marginBottom: "50px" }}>
              {t("About Vetrimatrimony ")}
            </h1>
          </div>
        </Col>
        <Col lg="8" style={{ textAlign: "center", color: "white" }}>
          <h4 style={{ color: "white", lineHeight: "35px" }}>
            வெற்றி தி௫மண தகவல் மையம் மதுரையை தலைமையிடமாக கொண்டு 2007 முதல்
            சிறப்போடு நடைபெற்றுக் கொண்டிருக்கிறது. எங்களுக்கு வேறு கிளைகள்
            எதுவும் கிடையாது. 7 லட்சம் திருமணங்களை இனிதே நிறைவேற்றிய தமிழகத்தின்
            முதன்மையான திருமண மையம்.
          </h4>
        </Col>
      </Row>
    </div>
  )
}

export default Welcome
