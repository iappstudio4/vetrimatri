import LanguageDropdown from "components/CommonForBoth/TopbarDropdown/LanguageDropdown"
import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  InputGroup,
  Input,
} from "reactstrap"
import { withTranslation, useTranslation } from "react-i18next"
import Breadcrumb from "components/Common/Breadcrumb"

const Homepagebanner = () => {
  const { t } = useTranslation()

  return (
    <div className="Homepage">
      <Container>
        <Row>
          <Col lg="12" style={{ marginTop: "180px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {/* <LanguageDropdown /> */}
            </div>
            <div className="container">
              {/* <Breadcrumb title="Home" breadcrumbItem="Home" /> */}
            </div>
            <div className="text-center">
              <h1 className="mt-3" style={{ color: "white" }}>
                {t("HomepageTitle")}
              </h1>
              <h3 style={{ color: "white" }}>{t("freereg")}</h3>
            </div>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Col lg={7}>
            <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.89)" }}>
              <CardBody>
                <CardTitle className="h5 mb-4">{t("freesearch")}</CardTitle>

                <Form className="row gy-2 gx-3 align-items-center">
                  <div className="col-sm-auto">
                    <label
                      className="visually-hidden"
                      htmlFor="autoSizingSelect"
                    >
                      Preference
                    </label>
                    <select defaultValue="0" className="form-select">
                      <option value="0">Age</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="col-sm-auto">
                    <label
                      className="visually-hidden"
                      htmlFor="autoSizingSelect"
                    >
                      Preference
                    </label>
                    <select defaultValue="0" className="form-select">
                      <option value="0">Search age</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="col-sm-auto">
                    <label
                      className="visually-hidden"
                      htmlFor="autoSizingSelect"
                    >
                      Preference
                    </label>
                    <select defaultValue="0" className="form-select">
                      <option value="0">Caste</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-sm-auto">
                    <label
                      className="visually-hidden"
                      htmlFor="autoSizingSelect"
                    >
                      Preference
                    </label>
                    <select defaultValue="0" className="form-select">
                      <option value="0">Equation level</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="col-sm-auto">
                    <button
                      type="submit "
                      style={{ backgroundColor: "#E30B5C", color: "white" }}
                      className="btn   w-md button"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col> */}
        </div>
      </Container>
    </div>
  )
}

export default withTranslation()(Homepagebanner)
